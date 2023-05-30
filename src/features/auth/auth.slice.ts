import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {errorUtils} from "../../common/utils/error-utils.ts";
import {authApi, ForgotEmailDataType, LoginAuthType, ProfileType, RegisterAuthType} from './auth.api.ts';
import {appActions} from "../../app/app.slice.ts";


const slice = createSlice({
    name: 'auth',
    initialState: {
        profile: null as ProfileType | null,
        isMailSent: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (action.payload?.profile) {
                state.profile = action.payload.profile;
            }
        })
            .addCase(forgot.fulfilled, (state, action)=>{
                state.isMailSent = action.payload.isMailSent
            })
        ;
    },
});


const registerUser = createAsyncThunk(
    'auth/register',
    async (data: RegisterAuthType, {dispatch,rejectWithValue}) => {
        dispatch(appActions.setStatus("loading"));
        try {
            const response = await authApi.register(data);
            dispatch(appActions.setStatus("succeeded"))
            return {...response.data, info:"You have successfully registered"}
        } catch (e) {
            const error = errorUtils(e)
            dispatch(appActions.setError(error))
            dispatch(appActions.setStatus('failed'))
            return rejectWithValue(error)
        }
    }
);

const loginUser = createAsyncThunk(
    "auth/login",
    async (data: LoginAuthType, {dispatch, rejectWithValue}) => {
        dispatch(appActions.setStatus("loading"));
        try {
            const response = await authApi.login(data)
            dispatch(appActions.setStatus("succeeded"))
            return {profile: response.data};
        } catch (e) {
            const error = errorUtils(e)
            dispatch(appActions.setError(error))
            dispatch(appActions.setStatus("failed"))
            return rejectWithValue(error)
        }
    }
)
const forgot = createAsyncThunk(
    "auth/forgot",
    async(data:ForgotEmailDataType, {dispatch,rejectWithValue})=>{
        dispatch(appActions.setStatus("loading"))
        try {
            const response = await authApi.forgot(data)
            dispatch(appActions.setStatus("succeeded"))
            return {...response.data, isMailSent: true}
        } catch (e){
            const error = errorUtils(e)
            dispatch(appActions.setError(error))
            dispatch(appActions.setStatus("failed"))
            return rejectWithValue(error)
        }
    }
)

export const authReducer = slice.reducer;
export const authThunks = {registerUser, loginUser, forgot};