import * as React from 'react';
import Image from "next/image";
import Link from 'next/link';
import styled from "styled-components";

const Logotype = styled.div`
  width: 340px;
  height: 134px;
  position: absolute;
  top: 20px;
  right: 20px;
`

const Logo: React.FC = () => {
    return (
        <Logotype>
            <Link href='/'>
                <a>
                    <Image alt='Sirius Future' src='/logo.png' width='300' height='120'/>
                </a>
            </Link>
        </Logotype>
    );
};

export default Logo;