import React from "react";
import { useState } from "react";
import "../../styles/aboutMeStyle.scss";

function AboutMe() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <div id="AboutMe">
        <h3 className="title">
          EMPLOYMENT STATUS: CURRENTLY SEEKING EMPLOYMENT OR INTERNSHIP
        </h3>
        <h4 className="smallTitle">SHORT AND SWEET</h4>
        <p>
          So, to start this off, my name is Nicholas Harding I am thirty years
          old and live in Christchurch New Zealand. I recently began my coding
          journey in 2020 and started to learn various coding languages and
          practices from Whitecliffe college.
        </p>
        <p>
          During my time there I was able to complete two diplomas and currently
          enrolled into the bachelor of information technology in software
          development, during this time I have spent countless hours in extra
          study learning more languages and skills through learning mediums such
          as udemy and instructive youtube videos, as coding is a passion that I
          am driven to grow and develop myself further in.
        </p>
        <p>
          In my coding experience I have taken a real shine to game development,
          full stack development and mobile development, these are three areas
          that I have explored so far during my time of study and are areas that
          I enjoy the most because I do enjoy all types of programming that I
          have done so far.
        </p>

        <button type="button" onClick={toggle} className="collapsible title">
          WANT TO KNOW MORE OF MY STORY?
        </button>
        {open && (
          <div className="colapseContent">
            <p>
              You may be wondering what I was doing prior to 2020 and work I may
              have been involved in, well to put simply I have been a wide range
              of careers since 2010 varying from different forms of labouring
              jobs, different security jobs such a site protection and
              hospitality security, my last job was in construction as a steel
              fixer which came to an end when I injured my knee.
            </p>
            <p>
              After the injury I ended up requiring some surgery and committed
              to rebuilding my knee with lots of physio, once cleared and after
              some time I decided to go skiing and ended up epically wiping out
              and bending my knee in every other direction that it was supposed
              to go (I know ouch! eww!) which kind of ended my journey in the
              world of a physically demanding work i.e., steel fixing, so I was
              left with a broken leg for some time and had to figure out what I
              can do to make myself a career in something I’d enjoy doing, be
              able to provide for my family, and finally something that would
              stimulate me mentally. Which after evaluating the choices, I had
              was an easy one to figure out as I had always wanted to get into
              coding.
            </p>
            <p>
              Some obstacles I had to over comer was that I had a big problem of
              imposter syndrome at the start of my learning journey and being
              nearly thirty at the time I decided to do this was a big hurdle
              for me to overcome as most of my peers would be fresh out of
              school. I didn’t let this deter me and pushed through knowing that
              my only challenge was me, once I overcame this and learnt that I
              can do this, I developed a real drive in bettering my knowledge in
              a variety of different coding languages and life skills that I can
              offer to employers, fellow developers, and clients that will be an
              asset to them.
            </p>
            <p>
              What keeps me going and pushing is that I really do love learning
              this stuff and I just can’t get enough, sure there are other
              factors to this drive like expecting my first child in august has
              had a big impact in this but in short, it’s easy to learn
              something you enjoy doing. I hope this wee blurb hasn’t bored you
              too much but felt anyone who wants to know me and check me out
              that these are some things you should know and want you to know,
              so thank you if you took time to read this.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default AboutMe;
