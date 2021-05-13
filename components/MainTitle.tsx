import * as React from 'react';
import styled from "styled-components";

const StyledMainTitle = styled.h1`
  font-size: 64px;
  color: ${({theme}) => theme.colors.blue};
`

const MainTitle:React.FC = ({children}) => {
    return (
        <StyledMainTitle>
            {children}
        </StyledMainTitle>
    );
};

export default MainTitle;