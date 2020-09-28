export const setYear = (number) => {
    return {
        type: "SET_YEAR",
        payload: number
    }
};

export const setMonth = (number) => {
    return {
        type: "SET_MONTH",
        payload: number
    }
};

export const setMainPage = (string)=> {
    return {
        type: "SET_MAIN_PAGE",
        payload: string
    }
} ;

export const setModal = (boolean) => {
    return {
        type: "SET_MODAL",
        payload: boolean
    }
};

export const setSelectedDay = (day)=>{
    return {
        type: 'SET_SELECTED_DAY',
        payload: day
    }
};

export const saveDay = (day) => {
    return {
        type: "SAVE_DAY",
        payload: day
    }
};


