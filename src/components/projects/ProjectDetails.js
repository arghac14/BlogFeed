import React  from 'react';

const ProjectDetails=(props)=>{
    const id=props.match.params.id;
    return(        
        <div className="container">
        <br></br><br></br>
            <div className="card z-depth-4">
                <div className="card-content">
                    <span className="card-title black-text"><b>Title {id}</b></span>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by </div>
                    <div>Date</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;