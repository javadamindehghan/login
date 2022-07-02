export const loginreducer=(state={},action)=>{
    switch (action.type) {
        case 'LOGIN-USER':
            return {...action.payload}
        case 'CLEARE-USER':
                return {}
        default:
             return state
    }
}
