import React from "react";


// Aussie
import MENU from "../../images/Aussie/menu.png";
import SOLO from "../../images/Aussie/soloGame.png";
import MULTI from "../../images/Aussie/multiplayer.png";
// Time Recorder
import EDIT from "../../images/Time/editSubjects.png";
import RECORD from "../../images/Time/recordTimes.png";
import TOTAL from "../../images/Time/totalTimes.png";

import "./projects.css"
import ProjectTemplate from "./ProjectTemplate";

const project1Challenges = [
  "Finding a way to implement a Data Base/server side in a Angular app (The project now uses MongoDB with a Express server)",
  "Taking into account multiple cases, when it came to editing a session"
];
const project2Challenges = [
  "First time using a JS framework and using another one on top",
  "Some logic/general testing in the code with swithcing users"
];
const project3Challenges = [];
function Projects() {
    return (
      <div class="projects">

        <ProjectTemplate
          title="Aussie Sport Knowledge"
          gitHub="https://github.com/SethSharp/Aussie-Sport-Knowledge"
          duration="1 Trimester: With some updates being implemented"
          tech="Angular, Ionic, JS/TS, LocalStorage"
          about="
            This was our project which utilised Ionic with Angular. It is a
            recreation of one of my mobile apps I made back in school.
            Currently, a MongoDB/Express Server is being implemented to
            deploy without using Ionics limited local storage."
          challenges={project2Challenges}
          img1={MENU}
          img2={SOLO}
          img3={MULTI}
          class="project-img vertical"
        />

        <ProjectTemplate
          title="Time Recorder"
          gitHub="https://github.com/SethSharp/TimeRecorder"
          duration="4th - 12th March 2022"
          tech="EJS Layouts, JS, MongoDB, NodeJS, Express"
          about="
            This was our project which utilised Ionic with Angular. It is a
            recreation of one of my mobile apps I made back in school.
            Currently, a MongoDB/Express Server is being implemented to
            deploy without using Ionics limited local storage."
          challenges={project3Challenges}
          img1={EDIT}
          img2={RECORD}
          img3={TOTAL}
          class="project-img vertical"
        />
      </div>
    );
}

export default Projects