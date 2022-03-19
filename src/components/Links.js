import React from "react";
import GIT from "../images/GIT.png";
import LN from "../images/LN.png";
import LE from "../images/LC.png";
function Links() {
    return (
      <div>
        <h1> Links </h1>
        <div class="link-imgs">
            <a href="https://github.com/SethSharp">
                <img class="link-img" src={GIT} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/seth-sharp-213bb3211/">
                <img class="link-img" src={LN} alt="LinkedIn" />
            </a>
            <a href="https://leetcode.com/SethSharp/">
                <img class="link-img" src={LE} alt="LeetCode" />
            </a>
        </div>
        <h2> GitHub link to site: Heroku seems not use some of the CSS </h2>
      </div>
    );
}

export default Links