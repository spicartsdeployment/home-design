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

            <div className="company-members">
              <h3>Managing Partners</h3>

              <div className="members-box">
                <div className="left-member">
                  <h3>Ar. Adarsh Pidugu</h3>
                  <p>B.arch, GITAM University</p>
                </div>
                <div className="right-member">
                  <h3>Ar. Rahul Kumar Reddyrajula</h3>
                  <p>B.arch, GITAM University</p>

                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Members */}


        {/* {teamData?.members?.length > 0 ? (
          teamData.members.map((member, index) => (
            <div key={member.id} className={`div${index + 2} member-card`}>
              <img src={member.img} alt={member.name} />
              <div className="overlay">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No members found</p>
        )} */}


        {/* {teamData.members.map((member, index) => (
          <div key={member.id} className={`div${index + 2} member-card`}>
            <img src={member.img} alt={member.name} />
            <div className="overlay">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))} */}


        {/* <div className="team-container">
          <div className="image-box">
            <img src="" alt="" />
            <h3 className="member-name"></h3>
            <p className="designation"></p>
          </div>

          <div className="image-box">
            <img src="" alt="" />
            <h3 className="member-name"></h3>
            <p className="designation"></p>
          </div>

          <div className="image-box">
            <img src="" alt="" />
            <h3 className="member-name"></h3>
            <p className="designation"></p>
          </div>
        </div> */}


      </div>
    </section>
  );
};

export default About;
