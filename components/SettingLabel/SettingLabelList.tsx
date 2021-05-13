import * as React from 'react';
import Flex from "../../layouts/Flex";
import SettingLabelItem from "./SettingLabelItem";

const SettingLabelList: React.FC<{min: number, max: number, step: number}> = ({min, max, step}) => {
    const result = []

    for (let i = min; i <= max; i += step) {
        result.push(i)
    }


    return (
        <Flex width={'100%'} align='center' justify='space-between' direction='row'>
            {result.map(num => <SettingLabelItem value={num} key={num} />)}
        </Flex>
    );
};

export default SettingLabelList;