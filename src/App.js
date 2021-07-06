import React from "react";

const Footer = () => (
  <footer>
    <p>This is the footer</p>
  </footer>
);

const techs = ["HTML", "CSS", "JavaScript"];

const Main = () => (
  <main>
    <h1>Welcome to 30 days of React</h1>
    <h2>Getting started with react</h2>
    <h3>JavaScript Library</h3>
    <h4>Joseph X</h4>
    <p>July 6th</p>
    <p>Prerequisite to get started react.js</p>
    <ul>
      {techs.map((tech) => (
        <li key={tech}>{tech}</li>
      ))}
    </ul>
  </main>
);

const App = () => {
  return (
    <header>
      <Main />
      <Footer />
    </header>
  );
};

export default App;
