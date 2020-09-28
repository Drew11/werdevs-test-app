const now = new Date();

const initialState = {
    dayNames: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ],
    monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    daysWithComments: [],
    year: now.getFullYear(),
    month: now.getMonth(),
    today: now.getDate(),
    modal: false,
    selectedDay : null,
    page: "home"
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_YEAR':
            return {...state, year: state.year + action.payload};
        case 'SET_MONTH':
            return {...state, month: state.month + action.payload};
        case 'SET_MODAL':
            return {...state, modal: action.payload};
        case 'SET_SELECTED_DAY':
            return {...state, selectedDay: action.payload};
        case 'SAVE_DAY':
            return {...state, daysWithComments: [...state.daysWithComments, action.payload]};
        case 'SET_MAIN_PAGE':
            return {...state, page: action.payload};
        default:
            return state;
    }
};
