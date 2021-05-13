import * as React from 'react';
import Card from "../layouts/Card";
import SettingTitle from "./SettingTitle";
import SpeedInput from "./SpeedInput";
import Flex from "../layouts/Flex";
import ControlButton from "./ControlButton";
import {useDispatch} from "react-redux";
import {ISpeedSettingCardProps} from "../types/UI";

const SpeedSettingCard:
    React.FC<ISpeedSettingCardProps> = ({flexBasis, value, creator}) => {
    const dispatch = useDispatch()

    const validateSetSpeed = (value: number) => {
        if (value > 0 && value <= 5) {
            dispatch(creator(value))
        }
    }

    return (
        <Card flexBasis={flexBasis}>
            <SettingTitle>
                <Flex direction='row' align='center' justify='center'>
                    Скорость

                    <SpeedInput value={value} />
                    сек.
                </Flex>
            </SettingTitle>

            <Flex align='center' justify='center' direction='row'>
                <ControlButton onClick={() => validateSetSpeed(value - 1)} isDecr={true} margin='0 15px' />
                <ControlButton isDecr={false} onClick={() => validateSetSpeed( value + 1)} />
            </Flex>
        </Card>
    );
};

export default SpeedSettingCard;