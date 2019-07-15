export const createProject=(project)=>{
    return(dispatch, getState,{getFirebase,getFirestore})=>{
        //async call to database
        const firestore=getFirestore()
        firestore.collection('projects').add({
            ... project,
            firstname: 'Argha',
            lastname: 'C',
            authorId: 123,
            createdAt : new Date()
        }).then(()=>{
            dispatch({type:'CREATE_PROJECT', project})
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR', err})
        })


        
    }
}