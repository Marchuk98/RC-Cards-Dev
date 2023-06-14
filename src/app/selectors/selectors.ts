import {RootState} from "../store.ts";

const getProfile = (state:RootState) => state.profileReducer.profile

export {
    getProfile
}