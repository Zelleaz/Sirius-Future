import * as React from 'react';
import Layout from "../layouts/Layout";
import {useEffect} from "react";
import {useRouter} from "next/router";
import Image from "next/image";
import MainTitle from "../components/MainTitle";
import Flex from "../layouts/Flex";

const Final: React.FC = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 10000)
    }, [])

    return (
        <Layout title='Отличная работа! | Sirius Future'>
            <Flex minHeight='100vh' direction='column' justify='center' align='center'>
                <Image src='/result.png' width='464' height='532' />
                <MainTitle>Отличная работа!</MainTitle>
            </Flex>
        </Layout>
    );
};

export default Final;