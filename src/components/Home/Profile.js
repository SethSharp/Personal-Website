import React from "react";
import Person from "../../images/me.jpg";
import fourWheelDrive from "../../images/carBeach.jpg";
import maheno from "../../images/maheno.jpg";
function Profile() {
    return (
      <div>
        <div class="profile-container">
          <div class="profile-background"></div>
          <div class="intro">
            <div class="intro-title">
              <h1>
                Hello, I'm <b>Seth Sharp</b>{" "}
              </h1>
            </div>

            <div class="intro-text">
              <p>
                Hey, I’m Seth, I am a final year Computer Science student at
                Griffith University. I love creating projects and the challenge
                of learning new technologies. As much as I love coding away in
                my room at night and pulling my hair out when something does not
                work, I also enjoy camping and hitting the 4WD tracks with my
                mates and enjoying the outdoors.
              </p>
            </div>

            <div class="home-btns">
              <button type="button" class="btn btn-outline-light">
                <a class="home-link" href="/projects">
                  Projects
                </a>
              </button>{" "}
              <button
                type="button"
                class="btn btn-outline-light"
                href="/projects"
              >
                <a class="home-link" href="/links">
                  Links
                </a>
              </button>{" "}
            </div>
          </div>
          <div class="profile">
            <img id="profile-pic" src={Person} alt="CPP" />
          </div>
        </div>

        <div class="overview-container">
          <div class="overview-section-1">
            <div class="overview-img">
              <img src={fourWheelDrive} alt="s" />
            </div>
            <div class="overview-par">
              <p>
                
              </p>
            </div>
          </div>
          <div class="overview-section-2">
            <div class="overview-par">
              <p>
                Throughout my time at University I have worked 
              </p>
            </div>
            <div class="overview-img">
              <img src={maheno} alt="s" />
            </div>
          </div>
          <br />
        </div>
      </div>
    );
}

export default Profile;