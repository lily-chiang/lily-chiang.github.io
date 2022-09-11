import Link from '../Link';

/**
<Media title="Bot Developer, TODO Bot Feb 2022" url="https://www.youtube.com/embed/H8_qjpHhZNg"/>
<Media title="Backend Developer, Pantry Optimization Sept 2021" url="https://www.youtube.com/embed/C_WYSermX9w"/>
<Media title="Game Developer, Advance of the Avian Aug 2020-Jan 2021" url="https://play.unity.com/webgl/54ae3c73-c13d-41b9-b554-47024fe29d80?screenshot=false&embedType=embed"/>
*/          
            
export default function Projects() {
    return (
        <div>
        <div className="BodyDark">
            <h1>
                Projects
            </h1>
            <p><b>Web Developer, Portfolio Site, Jul 2022-Sept 2022</b>
                <li>Created portfolio site using React framework and Bootstrap library</li></p>
            
            <p><b><Link caption="Bot Developer, TODO Bot" url="https://www.youtube.com/embed/H8_qjpHhZNg"/>, Feb 2022</b>
                <li>Implemented chatbot interface using Python nltk library, including detection for add, remove, search, get, and list requests</li></p>
            
            <p><b><Link caption="Backend Developer, Pantry Optimization" url="https://www.youtube.com/embed/C_WYSermX9w"/>, Sept 2021</b>
                <li>Coded Python object classes, created test cases, and debugged sorting logic</li></p>
            
            <p><b>Frontend Designer and Project Manager, Web-Based App Sep 2020-Jan 2022</b>
                <li>Created UI of Political Candidate Matcher app for Microsoft ImagineCup (2022) using Figma, React, Bootstrap, HTML, CSS, JS</li></p>
            
            <p><b>CAD Leader, Aesthetic Wind Turbine Jan 2021-May 2021</b>
                <li>Designed visually pleasing wind turbine for engineering project using Solidworks, CFD techniques, MATLAB, Excel</li></p>
            
            <p><b><Link caption="Game Developer, Advance of the Avian" url="https://play.unity.com/webgl/54ae3c73-c13d-41b9-b554-47024fe29d80?screenshot=false&embedType=embed"/>, Aug 2020-Jan 2021</b>
                <li>Blender 3D model, rig, and texture of terrain and characters; programmed in Unity using C#</li></p>
        </div>
        </div>
    );
}