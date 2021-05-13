import * as React from 'react';
import styled from "styled-components";
import Flex from "./Flex";

const StyledSettingCard = styled.div<{flexBasis: number}>`
  margin-bottom: 45px;
  padding: 32px 42px 20px;
  background-color: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 48.2498px;
  flex-basis: ${(props) => props.flexBasis}%;
`

const Card: React.FC<{flexBasis: number}> = ({children, flexBasis}) => {
    return (
        <StyledSettingCard flexBasis={flexBasis}>
            <Flex width='100%' justify={'center'} align={'center'} direction={'column'}>
                {children}
            </Flex>
        </StyledSettingCard>
    );
};

export default Card;