import {useAppSelector} from "../../app/hooks.ts";
import {CardSkeleton} from "../../common/components/card-skeleton/CardSkeleton.tsx";
import {NavigateToBack} from "../../common/components/NavigateToBack/NavigateToBack.tsx";
import {Title} from "../../common/components/Title/Title.tsx";
import {packCardPacksName, packStatus} from "../cards/components/cards/cardSelectors.ts";
import {useFetchPack} from "../cards/hooks/use-fetch-pack.ts";
import {LearnCard} from "./components/LearnCard/LearnCard.tsx";
import {useRandomCard} from "./hooks/useRandomCard.ts";
import {learnPageStatus} from "./learnSelectors.ts";

export const Learn = () => {
    useFetchPack()

    useRandomCard()


    const packName = useAppSelector(packCardPacksName)

    const status = useAppSelector(packStatus)

    const learnStatus = useAppSelector(learnPageStatus)

    return (
        <>
            <NavigateToBack/>
            <Title sx={{ marginBottom: 2.3 }} isLoading={status === 'loading'} align={'center'}>
                {packName}
            </Title>
            {status === 'loading' || learnStatus === 'loading' ? <CardSkeleton /> : <LearnCard />}
        </>
    )
}