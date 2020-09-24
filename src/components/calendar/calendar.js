import React from 'react';
import {useDispatch, useSelector } from "react-redux";
import { setMonth } from '../../redux/actions/calendar-actions';
import './calendar.scss';
import Week from "./week/week";

const Calendar = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const {year, month, dayNames, monthNames} = state;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let firstDayNumber = new Date(year, month, 1).getDay();

    const nextMonth =()=>{
        if(month>=11) {
            return
        }
        dispatch(setMonth(1));
    };

    const prevMonth =()=>{
        if(month<=1) {
            return
        }
        dispatch(setMonth(-1));
    };

    console.log(state.daysWithComments);
    const createWeek = ()=>{

        const mappingEl = [];
        let weekCounter = 0;
        let week = Math.ceil(daysInMonth / 7);

        if (firstDayNumber === 0) {
            firstDayNumber = 7;
        }

        if ((firstDayNumber > 6 && daysInMonth >= 30) || (firstDayNumber > 3 && month === 1)) {
            week++;
        }

        while (week !== weekCounter) {
            mappingEl.push(<Week
                key={Math.random()}
                weekCounter={weekCounter}
                daysInMonth={daysInMonth}
                firstDayNumber={firstDayNumber}
            />
           );
            weekCounter++;
        }
        return mappingEl.map(component => component);
    };

    return (
        <div className="calendar">
            <div className="calendar-content">

                <div className="calendar-header">
                    <div
                        className="prev"
                        onClick={prevMonth}
                    > {'<'}

                    </div>

                            {`${monthNames[month].toLocaleUpperCase()} ${year}`}
                    <div
                        className="next"
                        onClick={nextMonth}
                    >
                        {'>'}
                    </div>
                </div>

                <table className={"calendar-board"}>
                    <tbody>
                    {createWeek()}
                    <tr>
                        {dayNames.map((dayName, index) => <th key={index}>{dayName.slice(0, 3)}</th>)}
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Calendar;
