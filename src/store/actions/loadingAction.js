
export const SHOW_LOADER = 'LOADING::SHOW_LOADER'
export const HIDE_LOADER = 'LOADING::HIDE_LOADER'


export const showLoader = () => {
    return {
        type: SHOW_LOADER,
    }
}

export const hideLoader = () => {
    return {
        type: HIDE_LOADER,
    }
}
