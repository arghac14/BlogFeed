const initState={
    projects: [
        {id: '1', 'title':'a', 'content':'blah'},
        {id: '2', 'title':'b', 'content':'blah'},
        {id: '3', 'title':'c', 'content':'blah'},
    ]
}

const projectReducer=(state=initState,action)=>{
    return state;
}
export default projectReducer