import React from "react";
import "./About.css";
import { teamData } from "../../constants";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <h1 className="about-title">{teamData.description.title}</h1>
      </div>

      <div className="about-container">
        {/* Team main image */}
        <div className="div1 team-hero">
          {/* <img src={teamData.teamImage} alt="Team" className="team-photo" /> */}
          <div className="overlay">
            <p>{teamData.description.text}</p>
          </div>
        </div>

        {/* Members */}
        {teamData.members.map((member, index) => (
          <div key={member.id} className={`div${index + 2} member-card`}>
            <img src={member.img} alt={member.name} />
            <div className="overlay">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
