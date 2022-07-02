export const adduser=(user)=>{
    return async(dispatch)=>{
        return await dispatch({type:'LOGIN-USER',payload:user})
    }
}
export const clearuser=()=>{
    return async(dispatch)=>{
        return await dispatch({type:'CLEARE-USER'})
    }
}