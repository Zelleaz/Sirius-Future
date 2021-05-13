import * as React from 'react';
import {ISettingCardProps} from "../types/UI";
import SettingTitle from "./SettingTitle";
import SettingLabelList from "./SettingLabel/SettingLabelList";
import Range from "./Range/Range";
import Card from "../layouts/Card";

const SettingCard:
    React.FC<ISettingCardProps> = ({min, max, step, title, creator, flexBasis, value}) => {

    return (
        <Card flexBasis={flexBasis}>
            <SettingTitle text={title} />
            <SettingLabelList step={step} min={min} max={max} />
            <Range creator={creator} value={value} min={min} max={max} step={step} />
        </Card>
    );
};

export default SettingCard;