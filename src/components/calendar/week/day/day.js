import React from 'react';
import utils from '../../../../utils/utils';
import {useDispatch, useSelector } from "react-redux";
import {setModal, setSelectedDay} from '../../../../redux/actions/calendar-actions';

const Day = (props) => {

   const today = useSelector(state => state.today);
   const month = useSelector(state => state.month);
   const year = useSelector(state => state.year);
   const dispatch = useDispatch();

   const {
        indexDayInTable,
        weekCounter,
        daysInMonth,
        firstDayNumber
    } = props;

    let numberDay = utils.checkDays(daysInMonth, indexDayInTable, weekCounter, firstDayNumber );

    if(numberDay && numberDay.toLocaleString().length<2){
        numberDay = `0${numberDay}`;
    }
    const openModal = ()=>{
        if(indexDayInTable-numberDay > daysInMonth){
            return
        }
        if(indexDayInTable < firstDayNumber){
            return
        }
        dispatch(setModal(true));
        dispatch(setSelectedDay(new Date(year, month, numberDay)));
    };

    const todayStyle = numberDay === today && month === new Date().getMonth() ? 'today': null;

    return (
        <td id={Math.random()}
            key={indexDayInTable}
            className={todayStyle}
            onClick={openModal}
         >
            {numberDay}
         </td>
    )
};

export default Day;