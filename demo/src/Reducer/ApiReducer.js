let InitialApi = {
    user: []
}

const Api = (state = InitialApi, action) => {
    switch (action.type) {
        case 'viewuser':
            return {
                ...state,
                user : action.payload
            }
        case 'adduser':
            return {
                ...state,
                user : action.payload
            }

        

        default:
            return state;
    }
}

export default Api