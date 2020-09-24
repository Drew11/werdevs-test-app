import React from 'react';
import {useSelector } from "react-redux";
import Day from './day/day';

const Week = (props) => {
    const state = useSelector(state => state);

    const {
        weekCounter,
        daysInMonth,
        firstDayNumber
    } = props;

    const days = state.dayNames.map((dayName, index) => {
        return <Day indexDayInTable={(index + 1) + (weekCounter * 7)}
                    key={(index + 1) + (weekCounter * 7)}
                    weekCounter={weekCounter}
                    daysInMonth={daysInMonth}
                    firstDayNumber={firstDayNumber}
        />
    });

    return (
        <tr>
            {days}
        </tr>
    );
};

export default Week;