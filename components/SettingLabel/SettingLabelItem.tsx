import * as React from 'react';
import styled from "styled-components";

const StyledSettingValue = styled.span`
  font-size: 38px;
  font-weight: 600;
`

const SettingValue: React.FC<{value: number}> = ({value}) => {
    return (
        <StyledSettingValue>
            {value}
        </StyledSettingValue>
    );
};

export default SettingValue;