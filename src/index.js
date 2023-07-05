import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "Javascript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3800",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="123.jpg" alt="EAMMON KIPROTICH" />;
}

function Intro() {
  return (
    <div>
      <h1>Eammon Kiprotich</h1>
      <p>
        I'm a Bsc computer science student at dedan kimathi who is passionate
        about software engineering as it entails finding solutions for problems
        using technology. I am currently well versed with HTML and CSS and
        Javascript and I'm also learning REACT Library.
      </p>
    </div>
  );
}

function SkillList() {
  const skillList = skills;

  return (
    <div className="skill-list">
      {skillList.map((skill) => (
        <Skill skillList={skill} />
      ))}
    </div>
  );
}

function Skill({ skillList }) {
  return (
    <div className="skill" style={{ background: skillList.color }}>
      <span>{skillList.skill}</span>
      <span>
        {skillList.level === "beginner" && "👶"}
        {skillList.level === "advanced" && "💪"}
        {skillList.level === "intermediate" && "👍"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
