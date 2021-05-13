import * as React from 'react';
import Flex from "./Flex";

const CardsWrapper: React.FC<{width?: string}> = ({children, width = ''}) => {
    return (
        <Flex width={width} margin='35px 0 0 0' direction='row' align='center' justify='space-around'>
            {children}
        </Flex>
    );
};

export default CardsWrapper;