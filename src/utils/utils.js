const utils = {
    checkDays,
    getTargetDay
};

function getTargetDay(props) {
    const {dayIndex, daysState, month} = props,
        targetDay = daysState.filter((day) => (day['month'] === month) && (day['id'] === dayIndex));
    return targetDay[0];
}

function checkDays(daysInMonth, indexDayInTable, weekCounter, firstDayNumber) {
    if (indexDayInTable > daysInMonth + firstDayNumber - 1) {
        return null;
    }
    if (weekCounter === 0 && indexDayInTable === firstDayNumber) {
        return indexDayInTable - firstDayNumber + 1;
    }

    if (weekCounter === 0 && indexDayInTable > firstDayNumber) {
        return indexDayInTable - firstDayNumber + 1;
    }
    if (weekCounter !== 0) {
        indexDayInTable++;
        return indexDayInTable - firstDayNumber;
    }
}

export default utils;