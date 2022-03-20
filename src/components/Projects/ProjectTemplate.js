import React from "react";

import GIT from "../../images/GIT.png";

class ProjectTemplate extends React.Component {
    render() {
        return (
        <div class="project">
            <div class="project-content">
            <h2 class="project-title">
                {this.props.title} {" "}
                <a href={this.props.gitHub}>
                    <img class="project-github" src={GIT} alt="GitHub" />
                </a>
            </h2>
            <div class="project-overview">
                <h3 class="section-sub-title"> Duration:</h3>
                <p> {this.props.duration} </p>
                <h3 class="section-sub-title"> Technologies:</h3>
                <p> {this.props.tech} </p>
                <h3 class="section-sub-title"> About </h3>
                <p class="about-project">{this.props.about}</p>
                <br />
                <h2 class="section-subtitle">Main challenges: </h2>
                <p>
                <ul class="project-challenges">
                    {this.props.challenges.map((chal) => {
                        return (<li> {chal} </li>)
                    })}
                </ul>
                </p>
            </div>
            </div>

            <div class="project-imgs">
            <img class={this.props.class} src={this.props.img1} alt="Session-Creation" />
            <img class={this.props.class} src={this.props.img2} alt="Session" />
            <img class={this.props.class} src={this.props.img3} alt="To-do-list" />
            </div>
        </div>
        );
    }
}
export default ProjectTemplate;