import * as React from 'react';
import styled from "styled-components";

const StyledSettingTitle = styled.h3`
  font-size: 48px;
  color: ${({theme}) => theme.colors.purple};
  margin-bottom: 14px;
`

const SettingTitle: React.FC<{text?: string}> = ({text, children}) => {
  return (
      <StyledSettingTitle>
          {text ? text : children}
      </StyledSettingTitle>
  );
};

export default SettingTitle;