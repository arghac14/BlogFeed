const initState={
    projects: [
        {id: '1', 'title':'a', 'content':'blah'},
        {id: '2', 'title':'b', 'content':'blah'},
        {id: '3', 'title':'c', 'content':'blah'},
    ] 
}

const projectReducer=(state=initState,action)=>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error',action.err)
            return state;
        default:
                return state;
        }
    
    
}
export default projectReducer