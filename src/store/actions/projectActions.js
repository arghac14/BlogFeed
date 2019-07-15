export const createProject=(project)=>{
    return(dispatch, getState,{getFirebase,getFirestore})=>{
        //async call to database
        dispatch({type:'CREATE_PROJECT', project})
    }
}