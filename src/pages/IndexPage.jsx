import React from "react";
import WorkComponentCard from "../components/WorkComponent/WorkComponentCard";
import AboutMe from "../components/AboutMe/AboutMe";
import Navbar from "../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Avatar from "../components/Avatar/Avatar";
import ContactForm from "../components/ContactForm/ContactForm";

const IndexPage = () => {
  // const vars
  const path = "../../images/";
  // States
  const [workData, setWorkData] = useState([]);

  // use effects
  // check data exists and assign it to the state value
  useEffect(() => {
    const controller = new AbortController();
    var data = require("../data/projectWork.json");
    if (data) {
      try {
        setWorkData(data);
      } catch (error) {
        console.log("Error Occured, Outputting Error:");
        console.log(error);
      }
    }
    return () => {
      controller.abort();
    };
  }, []);

  // add animation classname to body after doc is loaded
  window.onload = function () {
    document.body.className += "animationPlay";
  };

  return (
    <>
      <div id="Home"></div>
      <Navbar />
      <div className="page">
        <section className="avatarSection">
          <Avatar imgURL={path + "avatar.jpeg"} />
        </section>
        <section className="aboutSection">
          <h1>About Me</h1>
          <AboutMe />
        </section>
        <section id="Work">
          <h1>Previous Work</h1>
          {workData?.map((work, index) => (
            <WorkComponentCard
              key={index}
              title={work.title}
              image={path + work.image}
              imageAlt={work.imageAlt}
              gitLink={work.gitLink}
              gitHubLinkTitle={work.gitHubLinkTitle}
              description={work.description}
            />
          ))}
        </section>
        <section id="contactSection">
          <h1>Contact Me</h1>
          <ContactForm />
        </section>
      </div>
    </>
  );
};

export default IndexPage;
