import React from "react";
import myimage from '../MyImage.jpeg';
import "../css/AboutMe.css";

class AboutMe extends React.Component{
    render(){
        return(
            <div className="aboutMeBg">
                <h1 className="aboutMeHead">ABOUT ME</h1>
                <img className="ui medium left floated image" src={myimage} alt="Drishti Arora"/>
                <p className="aboutMeText">Hello, I am <span>DRISHTI ARORA</span>, 
                currently pursuing BTech in Artificial Intelligence from JIET Institute of Design and Technology.
                A passionate, diligent person who wants to learn continuously.
                I'm interested in Full Stack Development and Problem Solving.</p>
            </div>
        )
    }
}


export default AboutMe;