import * as React from 'react';
import Flex from "../layouts/Flex";
import Layout from "../layouts/Layout";
import MainTitle from "../components/MainTitle";
import SettingCard from "../components/SettingCard";
import CardsWrapper from "../layouts/CardsWrapper";
import SpeedSettingCard from "../components/SpeedSettingCard";
import FlexBasisElem from "../layouts/FlexBasisElem";
import Button from "../components/Button";
import {useAppSelector} from "../hooks/redux";
import {
    spacingIncrCreator, speedCreator,
    startSpacingCreator,
    wordsLengthCreator,
    wordsValueCreator
} from "../redux/reducer/form/formActionCreators";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {initWordsCreator, startGameCreator} from "../redux/reducer/game/gameActionCreators";
import {useEffect} from "react";
import {filterByWordsLength, randomSort} from "../helpers/gameHelpers";
import {db} from "../helpers/db";

const Home: React.FC = () => {
    const {spacingIncr, wordsSpacing, wordsLength, wordsValue, speed} = useAppSelector(state => state.form)
    const {isGameFinished} = useAppSelector(state => state.game)
    const router = useRouter()
    const dispatch = useDispatch()

    const start = () => {
        dispatch(startGameCreator({speed, spacingIncr, wordsSpacing, wordsLength, wordsValue}))
        const random = randomSort(db)

        let filtered = filterByWordsLength(random, wordsLength)

        if (filtered.length < wordsValue) {
            filtered = [...filtered, ...random.filter(word => word.length !== wordsLength)]
        }

        dispatch(initWordsCreator(filtered))
        router.push('/game')
    }

    useEffect(() => {
        if (!isGameFinished) {
            router.push('/game')
        }
    }, [])

    return (
      <>
          {
              isGameFinished ?
                  <Layout title='Тренажёр Поле зрения'>
                      <Flex width='90%' margin='0 auto' minHeight={'100vh'} align='center' justify='center' direction='column'>
                          <MainTitle>Тренажёр "Поле зрения"</MainTitle>
                          <CardsWrapper width='100%'>
                              <SettingCard value={wordsValue}
                                           creator={wordsValueCreator}
                                           flexBasis={40} title={'Сколько слов'} min={1} max={10} step={1} defaultValue={7} />
                              <SettingCard value={wordsSpacing}
                                           creator={startSpacingCreator}
                                           flexBasis={40} title={'Стартовое расстояние'}
                                           min={5} max={40} step={5} defaultValue={25} />
                              <SettingCard value={wordsLength}
                                           creator={wordsLengthCreator}
                                           flexBasis={40} title={'Сколько букв в словах'}
                                           min={3} max={12} step={1} defaultValue={7} />
                              <SettingCard value={spacingIncr}
                                           creator={spacingIncrCreator}
                                           flexBasis={40} title={'Увеличение расстояния'}
                                           min={5} max={40} step={5} defaultValue={15} />
                              <SpeedSettingCard creator={speedCreator} value={speed} flexBasis={40} />
                              <FlexBasisElem flexBasis={40}>
                                  <Button onClick={() => start()}>
                                      Старт
                                  </Button>
                              </FlexBasisElem>
                          </CardsWrapper>
                      </Flex>
                  </Layout> : null
          }
      </>
  )
};

export default Home;
