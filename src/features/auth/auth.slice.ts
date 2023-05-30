import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {errorUtils} from "../../common/utils/error-utils.ts";
import {authApi, LoginAuthType, ProfileType} from './auth.api.ts';


const slice = createSlice({
    name: 'auth',
    initialState: {
        profile: null as ProfileType | null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (action.payload?.profile) {
                state.profile = action.payload.profile;
            }
        });
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

export const authReducer = slice.reducer;
export const authThunks = {registerUser, loginUser};