
export const UI_NAV_TOGGLE  = (data) => {
    // no data - simply toggle
    return {
        type: "UI_NAV_TOGGLE"
    }
}
export const UI_NAV_CLOSE  = (data) => {
    // no data - simply toggle
    return {
        type: "UI_NAV",
        data: {
            nav:{opened:false}
        }
    }
}
export const UI_MESSAGE  = (data) => {
    // if has title, then its a new message
    // if null, false, undefined, or simply missing the property - close message
    if (!data.title) {
        data = {};
    }
    return {
        type: "UI_MESSAGE",
        data: data
    }
}