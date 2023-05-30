import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {errorUtils} from "../../common/utils/error-utils.ts";
import {authApi, ForgotEmailDataType, LoginAuthType, ProfileType} from './auth.api.ts';


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
    async (data: { email: string, password: string }, {rejectWithValue}) => {
        try {
            const response = await authApi.register(data);
            return {...response.data, info:"You have successfully registered"}
        } catch (e) {
            const error = errorUtils(e)
            return rejectWithValue(error)
        }
    }
);

const loginUser = createAsyncThunk(
    "auth/login",
    async (data: LoginAuthType) => {
        try {
            const response = await authApi.login(data)
            return {profile: response.data};
        } catch (error) {
            console.log(error)
        }
    }
)
const forgot = createAsyncThunk(
    "auth/forgot",
    async(data:ForgotEmailDataType, {rejectWithValue})=>{
        try {
            const response = await authApi.forgot(data)
            return {...response.data, isMailSent: true}
        } catch (e){
            const error = errorUtils(e)
            return rejectWithValue(error)
        }
    }
)

export const authReducer = slice.reducer;
export const authThunks = {registerUser, loginUser, forgot};