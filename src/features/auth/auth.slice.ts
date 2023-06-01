import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {errorUtils} from "../../common/utils/error-utils.ts";
import {authApi, ForgotEmailDataType, LoginAuthType, ProfileType, RegisterAuthType} from './auth.api.ts';
import {appActions} from "../../app/app.slice.ts";


const slice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: null as boolean | null,
        email: null as string | null,
        profile: null as ProfileType | null,
        isMailSent: false
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
        ;
    },
});


// саночку для тебя написал Алексий
export const authMe = createAsyncThunk(
    "auth/me",
    async (_, {rejectWithValue}) => {
        try {
            const response = await authApi.me()
            return response.data
        } catch (e) {
            const error = errorUtils(e)
            return rejectWithValue(error)
        }
    }
)

export const logout = createAsyncThunk('auth/logout',
    async (_, {dispatch, rejectWithValue}) => {
        dispatch(appActions.setStatus("loading"))
        try {
            const response = await authApi.logout();
            dispatch(appActions.setStatus("succeeded"))
            return {info: response.data.info}
        } catch (e) {
            const error = errorUtils(e)
            dispatch(appActions.setError({error}))
            dispatch(appActions.setStatus('failed'))
            return rejectWithValue(error)
        }
    })

const registerUser = createAsyncThunk(
    'auth/register',
    async (data: RegisterAuthType, {dispatch, rejectWithValue}) => {
        dispatch(appActions.setStatus("loading"));
        try {
            const response = await authApi.register(data);
            dispatch(appActions.setStatus("succeeded"))
            return {...response.data, info: "You have successfully registered"}
        } catch (e) {
            const error = errorUtils(e)
            dispatch(appActions.setError({error}))
            dispatch(appActions.setStatus('failed'))
            return rejectWithValue(error)
        }
    }
);

export const loginUser = createAsyncThunk(
    "auth/login",
    async (data: LoginAuthType, {dispatch, rejectWithValue}) => {
        dispatch(appActions.setStatus("loading"));
        try {
            const response = await authApi.login(data)
            dispatch(appActions.setStatus("succeeded"))
            return {profile: response.data};
        } catch (e) {
            const error = errorUtils(e)
            dispatch(appActions.setError({error}))
            dispatch(appActions.setStatus("failed"))
            return rejectWithValue(error)
        }
    }
)
const forgot = createAsyncThunk(
    "auth/forgot",
    async (data: ForgotEmailDataType, {dispatch, rejectWithValue}) => {
        dispatch(appActions.setStatus("loading"))
        try {
            const response = await authApi.forgot(data)
            dispatch(appActions.setStatus("succeeded"))
            return {...response.data, isMailSent: true}
        } catch (e) {
            const error = errorUtils(e)
            dispatch(appActions.setError({error}))
            dispatch(appActions.setStatus("failed"))
            return rejectWithValue(error)
        }
    }
)

export const authActions = slice.actions
export const authReducer = slice.reducer;
export const authThunks = {registerUser, loginUser, forgot, logout, authMe};