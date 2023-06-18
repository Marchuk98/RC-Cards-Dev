import {FilterPanels} from "../FilterPanels/FilterPanels.tsx";
import {PackTable} from '../packTable/PackTable.tsx';
import {Panels} from "../panels/Panels.tsx";
import {UseFetchPacks} from "../../hooks/useFetchPacks.ts";
import {Modals} from "../modals/Modals.tsx";


export const Packs = () => {


    UseFetchPacks()

    return (
        <div>
            <FilterPanels/>
            <PackTable/>
            <Panels/>
            <Modals/>
        </div>
    )
};