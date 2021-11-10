import React from "react";

const Resume = () => {
  return (
    <div>
      <h1>Andrew Kerr</h1>
      <h2>Education</h2>
      <h3>Nassau Community College</h3>
      <ul>
        <li>Associate in Applied Science</li>
        <div style={{ fontSize: "0.75em" }}>Information Technology</div>
        <li>Class of 2021</li>
        <li>GPA: 4.0</li>
      </ul>
      <h2>Work History</h2>
      <h3>King Kullen - Cart Attendant</h3>
      <ul>
        <li>
          Collected shopping carts from parking lot and bring them back up to
          front of the store, making sure there was an adequate amount.
        </li>
        <li>Take care of bottle redemption room</li>
        <li>Take out garbage</li>
        <li>Etc...</li>
      </ul>
      <h2>Skills</h2>
      <ul>
        <li>HTML 5</li>
        <li>CSS 3</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>AJAX (APIs)</li>
        <li>Bootstrap</li>
        <li>React</li>
      </ul>
    </div>
  );
};

export default Resume;
