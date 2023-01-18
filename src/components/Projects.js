import React from "react";
const Projects = (props) => {
    
    return (
        <section id="my_projects" ref={props.reference}>
            <div className="project">
            {
                props.images.map((image, index) => {
                    return (
                        <div key={`project_container_${index}`} className={`project__container project-${index}`}>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={image[0]}/>
                                </div>
                                <div className="flip-card-back">
                                    <form action={image[1]}>
                                        <button className="project__btn project__btn-1">
                                                Web
                                        </button>
                                    </form>
                                    {
                                        image[2] !== ''
                                        ?
                                        <form action={image[2]}>
                                            <button className="project__btn project__btn-2">
                                                Repositorio
                                            </button>
                                        </form>  
                                        : null
                                    }
                                </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            </div>
        </section>
    );
}
export default Projects;