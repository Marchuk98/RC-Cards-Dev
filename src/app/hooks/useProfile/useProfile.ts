import {useAppSelector} from "../../hooks.ts";
import {getProfile} from "../../selectors/selectors.ts";


export const useProfile = () => {
    return useAppSelector(getProfile)
}