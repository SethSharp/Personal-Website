import React from "react";
import fourWheelDrive from "../../images/carBeach.jpg";

import "./home.css";

function Overview() {
  return (
    <div class="overview-container">
      <div class="overview-section-1">
        <div class="overview-img">
          <img src={fourWheelDrive} alt="s" />
        </div>
        <div class="overview-par intro">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            venenatis finibus felis eu convallis. Nullam nisi nibh, mollis non
            commodo vitae, luctus vitae leo. Nam aliquet facilisis dignissim.
            Nullam vel vestibulum nulla. Nunc vel leo lacus. Nunc fringilla
            vulputate nibh,
          </p>
        </div>
      </div>
      <div class="overview-section-1">
        <div class="overview-par intro">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            venenatis finibus felis eu convallis. Nullam nisi nibh, mollis non
            commodo vitae, luctus vitae leo. Nam aliquet facilisis dignissim.
            Nullam vel vestibulum nulla. Nunc vel leo lacus. Nunc fringilla
            vulputate nibh,
          </p>
        </div>
        <div class="overview-img">
          <img src={fourWheelDrive} alt="s" />
        </div>
      </div>
      <br />
    </div>
  );
}
export default Overview;