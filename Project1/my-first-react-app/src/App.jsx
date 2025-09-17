import React, { useState } from "react";
import "./App.css";
import myAvatar from "./assets/me.jpg";

// Profile Card Component
function ProfileCard() {
  return (
    <article className="profile-card">
      <img src={myAvatar} alt="Sadie" className="avatar" />
      <div>
        <h3>/.Sadie/</h3>
        <p>Aspiring full-stack developer & full-time cat lover.</p>
      </div>
    </article>
  );
}

// Fun Facts Component
function FunFacts() {
  const facts = [
    "Cats have the largest eyes relative to their head size of any mammal.",
    "Cats can jump up to six times their length.",
    "Cats have whiskers on the backs of their front legs, as well."
  ];

  const [index, setIndex] = useState(0);

  const nextFact = () => setIndex((prev) => (prev + 1) % facts.length);

  return (
    <section className="component-section">
      <h2>Fun Cat Facts</h2>
      <p>{facts[index]}</p>
      <button className="win97-btn" onClick={nextFact}>
        Next Fact ➡️
      </button>
    </section>
  );
}

// Visitor Counter Component
function VisitorCounter() {
  const [count, setCount] = useState(1);

  return (
    <section className="component-section">
      <h2>Visitor Counter</h2>
      <p>
        This page has been visited <code>{count}</code> times.
      </p>
      <button className="win97-btn" onClick={() => setCount(count + 1)}>
        +1 Visitor
      </button>
    </section>
  );
}

// Main App Component
export default function App() {
  return (
    <div className="win97-window">
      <header>
        <h1>React Page — Windows 97 Edition</h1>
        <div className="win97-buttons">
          <button className="win97-btn">_</button>
          <button className="win97-btn">□</button>
          <button className="win97-btn">X</button>
        </div>
      </header>

      <nav className="win97-menubar">
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Help</span>
      </nav>

      <main className="win97-content">
        <section>
          <h2>Hello World!</h2>
          <p>Check out this page for fun cat facts, visitor info, and my profile!</p>
          <ProfileCard />
          <FunFacts />
          <VisitorCounter />
        </section>
      </main>
    </div>
  );
}
