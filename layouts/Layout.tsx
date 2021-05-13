import * as React from 'react';
import Head from "next/head";
import {ILayoutProps} from "../types/UI";
import styled from "styled-components";
import Logo from "../components/Logo";

const Wrapper = styled.main<{isGame?: boolean}>`
  min-height: 100vh;
  width: 100%;
  overflow: ${props => props.isGame ? 'hidden' : ''};
`

const Layout: React.FC<ILayoutProps> = ({children, title, isGame = false}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Wrapper isGame={isGame}>
                <Logo />
                {children}
            </Wrapper>
        </>
    );
};

export default Layout;