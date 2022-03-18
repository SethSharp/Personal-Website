import React from "react";

// Scheduling app
import Session from "../../images/Schedule/weeklySchedule.png";
import ToDoList from "../../images/Schedule/todolist.png";
import CreateSession from "../../images/Schedule/sessionCreation.png";
import GIT from "../../images/GIT.png";
// Aussie Knowledge
import MENU from "../../images/Aussie/menu.png";
import SOLO from "../../images/Aussie/soloGame.png";
import MULTI from "../../images/Aussie/multiplayer.png";
// Personal website...


// Online store
import STORE from "../../images/Store/Store.png";
import HOME from "../../images/Store/Home.png";

import "./projects.css"

function Projects() {
    return (
      <div class="projects">
        <div class="project">
          <div class="project-content">
            <h2 class="project-title">
              Scheduling App{" "}
              <a href="https://github.com/SethSharp/schedulingApp">
                <img class="project-github" src={GIT} alt="GitHub" />
              </a>
            </h2>
            <div class="project-overview">
              <h3 class="section-sub-title"> Duration:</h3>
              <p>15th June 2021 - End: 15th July 2021</p>
              <h3 class="section-sub-title"> Technologies:</h3>
              <p> Angular, JS/TS, NodeJs/ExpressJS, MongoDB </p>
              <h3 class="section-sub-title"> About </h3>
              <p class="about-project">
                The Scheduling App, like many projects had issues and
                challenges. But also a lot of learning experiences, being the
                first major project completed outside of University. It
                originally started when I wanted to organise my day, but
                couldn't be stuffed downloading a app, or using some calendar
                app. It just wasn't efficient. I wanted something that would
                suit my style, something that would make scheudling easy to sort
                multiple days.
              </p>
              <br />
              <h2 class="section-subtitle">Main challenges: </h2>
              <p>
                <ul class="project-challenges">
                  <li>
                    {" "}
                    Finding a way to implement a Data Base/server side in a
                    Angular app (The project now uses MongoDB with a Express
                    server)
                  </li>
                  <li>
                    {" "}
                    Taking into account multiple cases, when it came to editing
                    a session{" "}
                  </li>
                </ul>
              </p>
            </div>
          </div>

          <div class="project-imgs">
            <img
              class="project-img"
              src={CreateSession}
              alt="Session-Creation"
            />
            <img class="project-img" src={Session} alt="Session" />
            <img class="project-img" src={ToDoList} alt="To-do-list" />
          </div>
        </div>

        <div class="project">
          <div class="project-content">
            <h2 class="project-title">
              Aussie Sport Knowledge{" "}
              <a href="https://github.com/SethSharp/Aussie-Sport-Knowledge">
                <img class="project-github" src={GIT} alt="GitHub" />
              </a>
            </h2>
            <div class="project-overview">
              <h3 class="section-sub-title"> Duration:</h3>
              <p> 1 Trimester: With some updates being implemented </p>
              <h3 class="section-sub-title"> Technologies:</h3>
              <p> Angular, Ionic, JS/TS, LocalStorage </p>
              <h3 class="section-sub-title"> About </h3>
              <p class="about-project">
                This was our project which utilised Ionic with Angular. It is a
                recreation of one of my mobile apps I made back in school.
                Currently, a MongoDB/Express Server is being implemented to
                deploy without using Ionics limited local storage.
              </p>
              <br />
              <h2 class="section-subtitle">Main challenges: </h2>
              <p>
                <ul class="project-challenges">
                  <li>
                    {" "}
                    First time using a JS framework and using another one on top
                  </li>
                  <li>
                    {" "}
                    Some logic/general testing in the code with swithcing users{" "}
                  </li>
                </ul>
              </p>
            </div>
          </div>

          <div class="project-imgs">
            <img class="project-img" src={MENU} alt="Main Menu" />
            <img class="project-img" src={SOLO} alt="Solo Game" />
            <img class="project-img" src={MULTI} alt="Multiplayer Menu" />
          </div>
        </div>

        <div class="project">
          <div class="project-content">
            <h2 class="project-title">
              Online Store
              <a href="https://github.com/SethSharp/flowerize-it">
                <img class="project-github" src={GIT} alt="GitHub" />
              </a>
            </h2>
            <div class="project-overview">
              <h3 class="section-sub-title"> Duration:</h3>
              <p> 6th September 2021 - End: Still in progress</p>
              <h3 class="section-sub-title"> Technologies:</h3>
              <p> Angular, JS/TS, NodeJs/ExpressJS </p>
              <h3 class="section-sub-title"> About </h3>
              <p class="about-project">
                This project was originally being developed for a client for
                their local Flower Business. After learning how expensive a
                DataBase would be to keep running, it wasn't realistic to spend
                x amount for a local business. However, this project was going
                to implement a new technology, a SQL DB. This project is still
                in the works, but will help me to better understand SQL and
                learn how to implement it in a Full Stack Application, the same
                as a MongoDB setup.
              </p>
              <br />
              <h2 class="section-subtitle">Main challenges: </h2>
              <p>
                <ul>
                  <li>SQL implementation</li>
                </ul>
              </p>
            </div>
          </div>

          <div class="project-imgs">
            <img class="project-img" src={STORE} alt="Store page" />
            <img class="project-img" src={HOME} alt="Home page" />
          </div>
        </div>
      </div>
    );
}

export default Projects