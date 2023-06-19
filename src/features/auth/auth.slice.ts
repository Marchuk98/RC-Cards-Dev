import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {appActions} from "../../app/app.slice.ts";
import {
    authApi,
    ForgotEmailDataType,
    LoginAuthType,
    NewPasswordDataType,
    ProfileType,
    RegisterAuthType
} from './auth.api.ts';


const slice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: null as boolean | null,
        email: null as string | null,
        profile: null as ProfileType | null,
        isMailSent: false,
        isNewPasswordSet: false
    },
    reducers: {
        setEmail: (state, action:PayloadAction<{email: string}>)=>{
            state.email = action.payload.email
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (action.payload?.profile) {
                state.profile = action.payload.profile;
                state.isLoggedIn = true
            }
        })
            .addCase(forgot.fulfilled, (state, action) => {
                state.isMailSent = action.payload.isMailSent
            })
            .addCase(logout.fulfilled, state => {
                state.isLoggedIn = false
            })
            .addCase(authMe.fulfilled,state => {
                state.isLoggedIn = true
            })
            .addCase(authMe.rejected,state => {
                state.isLoggedIn = false
            })
            .addCase(newPassword.fulfilled,(state, action) => {
                state.isNewPasswordSet = action.payload.isNewPasswordSet
            })
        ;
    },
});

export const authMe = createAsyncThunk(
    "auth/me",
    async (_, {dispatch, rejectWithValue}) => {
        try {
            const response = await authApi.me()
            return {profile: response.data, isInitialized: true}
        } catch (e) {
            return rejectWithValue({error: e})
        }
        finally {
            dispatch(appActions.setIsInitialized({isInitialized: true}))
        }
    }
)

export const logout = createAsyncThunk('auth/logout',
    async (_, {rejectWithValue}) => {
        try {
            const response = await authApi.logout();
            return {info: response.data.info}
        } catch (e) {
            return rejectWithValue({error: e})
        }
    })

const registerUser = createAsyncThunk(
    'auth/register',
    async (data: RegisterAuthType, {rejectWithValue}) => {
        try {
            const response = await authApi.register(data);
            return {...response.data, info: "You have successfully registered"}
        } catch (e) {
            return rejectWithValue({error: e})
        }
    }
);

export const loginUser = createAsyncThunk(
    "auth/login",
    async (data: LoginAuthType, {rejectWithValue}) => {
        try {
            const response = await authApi.login(data)
            return {profile: response.data};
        } catch (e) {
            return rejectWithValue({error: e})
        }
    }
)
const forgot = createAsyncThunk(
    "auth/forgot",
    async (data: ForgotEmailDataType, {dispatch, rejectWithValue}) => {
        try {
            const response = await authApi.forgot(data)
            dispatch(appActions.setStatus("succeeded"))
            return {...response.data, isMailSent: true}
        } catch (e) {
            return rejectWithValue({error: e})
        }
    }
)
const newPassword = createAsyncThunk(
    "auth/newPassword",
    async (data: NewPasswordDataType, {rejectWithValue}) => {
        try {
            const response = await authApi.setNewPassword(data)
            return {...response.data, isNewPasswordSet: true}
        } catch (e) {
            return rejectWithValue({error: e})
        }
    }
)

export const authActions = slice.actions
export const authReducer = slice.reducer;
export const authThunks = {registerUser, loginUser, forgot, logout, authMe, newPassword};