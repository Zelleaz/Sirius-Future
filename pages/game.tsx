import * as React from 'react';
import Layout from "../layouts/Layout";
import {useAppSelector} from "../hooks/redux";
import {useEffect} from "react";
import {useRouter} from "next/router";
import GameStep from "../components/GameStep";


const Game: React.FC = () => {
    const {isGameFinished, currentIndex, words} = useAppSelector(state => state.game)
    const {speed} = useAppSelector(state => state.form)
    const router = useRouter()

    useEffect(() => {
        if (isGameFinished) {
            router.push('/')
        }
    }, [])

    return (
        <>
            {
                !isGameFinished ?
                    <Layout isGame={true} title='Игра началась! | Sirius Future'>
                        <GameStep word={words[currentIndex]} time={speed} />
                    </Layout>
                    : null
            }
        </>
    );
};

export default Game;