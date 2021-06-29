import React from "react";
import BrickGame from '../BrickGame.png';
import ScientificCalc from '../ScientificCalc.PNG';
import Port from '../port.PNG';
import "../css/Projects.css";

class Projects extends React.Component{
    render(){
        return(
            <>
            <h1 className="projectsHead">PROJECTS</h1>
            
            {/* <div class="ui card">
                <div className="image">
                    <img src={ BrickGame} />
                </div>
                <div className="content">
                            <a className="header">Brick Breaker</a>
                            
                            <div className="description">
                                A simple Brick Breaker game that i created to get my feet wet
                                    with Javascript game development.
                                    It was a satisfying learning experience.     
                            </div>

                            <div className="extra">
                                TECHNOLOGIES :   
                                <div className="tech">Javascript</div> <div className="tech">p5*js</div>
                            </div>
                            <br/>
                            <div className="giticon">
                            <a href="https://drishti24.github.io/Brick-Breaker/" className="">
                                    <i aria-hidden="true" className="huge github icon"></i>
                                </a>
                            </div>        
                    </div>
            </div>

            <div class="ui card">
                <div className="image">
                    <img src={ Port} />
                </div>
                <div className="content">
                            <a className="header">Brick Breaker</a>
                            <div className="meta">
                                <span>Description</span>
                            </div>
                            <div className="description">
                                A simple Brick Breaker game that i created to get my feet wet
                                    with Javascript game development.
                                    It was a satisfying learning experience. 
                                
                            </div>
                            <div className="extra">
                                Additional Details
                            </div>
                </div>
            </div>

            <div class="ui card">
                <div className="image">
                    <img src={ScientificCalc} />
                </div>
                <div className="content">
                            <a className="header">Scientific Calculator</a>
                            
                            <div className="description">
                                
                            </div>
                            <br/>
                            <div className="extra">
                                TECHNOLOGIES :   
                                <div className="tech">REACT</div> <div className="tech">JAVASCRIPT</div>
                                <div className="tech">NODE.JS</div> <div className="tech">MONGODB</div>
                            </div>
                            <br/>
                            <div className="giticon">
                            <a href="https://drishti24.github.io/Brick-Breaker/" className="">
                                    <i aria-hidden="true" className="huge github icon"></i>
                                </a>
                            </div>        
                    </div>
            </div>

            
             */}

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src={ BrickGame} alt="First slide"/>
                    <div className="content">
                            <a className="header">Brick Breaker</a>
                            
                            <div className="description">
                                A simple Brick Breaker game that i created to get my feet wet
                                    with Javascript game development.
                                    It was a satisfying learning experience.     
                            </div>

                            <div className="extra">
                                TECHNOLOGIES :   
                                <div className="tech">Javascript</div> <div className="tech">p5*js</div>
                            </div>
                            <br/>
                            <div className="giticon">
                            <a href="https://drishti24.github.io/Brick-Breaker/" className="">
                                    <i aria-hidden="true" className="huge github icon"></i>
                                </a>
                            </div>        
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={ScientificCalc} alt="Second slide"/>
                    <div className="content">
                            <a className="header">Scientific Calculator</a>
                            
                            <div className="description">
                            This scientific calculator can perform various operations like square root, factorial, power, MOD, sin, tan, cos and many more.
                            </div>
                            
                            <div className="extra">
                                TECHNOLOGIES :   
                                <div className="tech">HTML</div> <div className="tech">CSS</div>
                                <div className="tech">JAVASCRIPT</div>
                            </div>
                            <br/>
                            <div className="giticon">
                            <a href="https://drishti24.github.io/Scientific-Calculator/" className="">
                                    <i aria-hidden="true" className="huge github icon"></i>
                                </a>
                            </div>        
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={Port} alt="Third slide"/>
                    <div className="content">
                            <a className="header">Portfolio</a>
                            
                            <div className="description">
                                A portfolio to showcase my skills and projects. It helped me in brushing my skills of Frontend and Backend.
                            </div>
                            <div className="extra">
                                TECHNOLOGIES :   
                                <div className="tech">REACT</div> <div className="tech">JAVASCRIPT</div>
                                <div className="tech">NODE.JS</div> <div className="tech">MONGODB</div>
                            </div>
                            <br/>
                            <div className="giticon">
                            <a href="https://drishti24.github.io/Brick-Breaker/" className="">
                                    <i aria-hidden="true" className="huge github icon"></i>
                                </a>
                            </div>        
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>

        </>
        )

    }
}



export default Projects;