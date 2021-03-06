import React from "react";

function Header() {
  return (
    <div class="header">
      <div class="banner">
        <h2>
          <a class="link-header" href="/">
            This is ME
          </a>
        </h2>
      </div>
      <div class="links">
        <h2>
          <a class="link-header" href="/">
            Home
          </a>
        </h2>
        <h2>
          <a class="link-header" href="/Projects">
            Projects
          </a>
        </h2>
        <h2>
          <a class="link-header" href="/Links">
            Links/Contact
          </a>
        </h2>
      </div>
    </div>
  );
}

export default Header;
