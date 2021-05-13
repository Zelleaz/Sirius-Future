import * as React from 'react';
import Image from "next/image";
import {IGameStepProps} from "../types/UI";
import Flex from "../layouts/Flex";
import Word from "./Word";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../hooks/redux";
import {finishGame, setIndexCreator, setMarginCreator} from "../redux/reducer/game/gameActionCreators";
import {useRouter} from "next/router";
import {formFinishCreator} from "../redux/reducer/form/formActionCreators";
import {sliceString} from "../helpers/gameHelpers";


const GameStep: React.FC<IGameStepProps> = ({time, word}) => {
    const dispatch = useDispatch()
    const {currentIndex, spacingIncr, wordsValue, margin} = useAppSelector(state => state.game)
    const router = useRouter()

    const {second, first} = sliceString(word)

    const finish = () => {
        setTimeout(() => {
            dispatch(finishGame())
            dispatch(formFinishCreator())
            dispatch(setIndexCreator(0))
            router.push('/final')
        }, 1000)
    }

    useEffect(() => {
        if (wordsValue === 1) {
            setTimeout(() => {
                finish()
            }, time * 1000)
        } else if (wordsValue !== currentIndex) {
            setTimeout(() => {
                dispatch(setIndexCreator(currentIndex + 1))
                dispatch(setMarginCreator(margin + spacingIncr))
            }, time * 1000)
        } else {
            finish()
        }
    }, [margin])

    return (
        <Flex minHeight='100vh' width='100%' direction='row' justify='center' align='center'>
            <Word type='right' margin={margin} text={first} />
            <Image src='/separator.svg' width='88' height='38'/>
            <Word type={'left'} margin={margin} text={second} />
        </Flex>
    );
};

export default GameStep;