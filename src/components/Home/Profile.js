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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse venenatis finibus felis eu convallis. Nullam nisi
                nibh, mollis non commodo vitae, luctus vitae leo. Nam aliquet
                facilisis dignissim. Nullam vel vestibulum nulla. Nunc vel leo
                lacus. Nunc fringilla vulputate nibh,
              </p>
            </div>

            <div class="home-btns">
              <button type="button" class="btn btn-outline-light">
                Projects
              </button>{" "}
              <button type="button" class="btn btn-outline-light">
                Links
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse venenatis finibus felis eu convallis. Nullam nisi
                nibh, mollis non commodo vitae, luctus vitae leo. Nam aliquet
                facilisis dignissim. Nullam vel vestibulum nulla. Nunc vel leo
                lacus. Nunc fringilla vulputate nibh,
              </p>
            </div>
          </div>
          <div class="overview-section-2">
            <div class="overview-par">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse venenatis finibus felis eu convallis. Nullam nisi
                nibh, mollis non commodo vitae, luctus vitae leo. Nam aliquet
                facilisis dignissim. Nullam vel vestibulum nulla. Nunc vel leo
                lacus. Nunc fringilla vulputate nibh,
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