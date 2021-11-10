import React from "react";
import { Link, Switch, Route } from "react-router-dom";

const Projects = ({ match }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to={match.url + "/magazine_project"}>Magazine Project</Link>
        </li>
        <li>
          <Link to={match.url + "/api_project"}>GIPHY API Project</Link>
        </li>
      </ul>
      <Switch>
        <Route
          exact
          path={match.url}
          render={() => <div>Pick a project to view!</div>}
        />
        <Route path={match.url + "/magazine_project"} component={Magazine} />
        <Route path={match.url + "/api_project"} component={Giphy} />
      </Switch>
    </div>
  );
};

const Magazine = () => {
  return (
    <p>
      <img
        style={{ width: "500px" }}
        src="/React Router and Redux/Module 1 Lab/src/img/giphy.PNG"
        alt="Magazine Project"
      />
    </p>
  );
};

const Giphy = () => {
  return (
    <p>
      <img
        style={{ width: "500px" }}
        src="src/img/giphy.png"
        alt="GIPHY API Project"
      />
    </p>
  );
};

export default Projects;
