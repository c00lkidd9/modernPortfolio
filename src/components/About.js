import myPic from "../img/so.jpg";
import { Zoom, Bounce, LightSpeed } from "react-reveal";
import { FaHtml5, FaCss3, FaGitSquare, FaFirebase } from "react-icons/fa";
import { SiJavascript, SiReact, SiSass } from "react-icons/si";
import { IoLogoNpm } from "react-icons/io";
import { DiFirebase } from "react-icons/di";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="title">
        <div>
          <Zoom>
            <h2>ABOUT ME</h2>
          </Zoom>
        </div>
      </div>

      <div className="about-container">
        <div className="about-left">
          <div>
            <Bounce left>
              <img src={myPic} className="my-pic" />
            </Bounce>
            <div className="bio">
              <p>
                Creative and self-starting Front-End Developer with 5 years
                experience building stable eCommerce websites and apps in
                fast-paced, collaborative environments. Highly skilled in
                HTML/CSS/JavaScript/JQuery and working knowledge of Photoshop.
                Well-versed in Scrum and Agile.
              </p>
              <div className="about-link">
                <a href="#" className="btn btn-hire">
                  Hire me
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="inner-right">
            <h2>Skills</h2>
            <div className="skills-collection">
              <Bounce>
                <div>
                  <FaHtml5 style={{ color: "#E96228" }} />
                  <span>HTML5</span>
                </div>

                <div>
                  <FaCss3 style={{ color: "#28A4D8" }} />
                  <span>CSS3</span>
                </div>
                <div>
                  <SiJavascript style={{ color: "#EFD81D" }} />
                  <span>Javascript</span>
                </div>
              </Bounce>
              <Bounce>
                <div>
                  <SiReact style={{ color: "#61DAFB" }} />
                  <span>ReactJS</span>
                </div>
              </Bounce>

              <Bounce>
                <div>
                  <SiSass style={{ color: "#C76494" }} />
                  <span>Sass</span>
                </div>
              </Bounce>
              <Bounce>
                <div>
                  <FaGitSquare style={{ color: "#E84D31" }} />
                  <span>Git</span>
                </div>
              </Bounce>
              <Bounce delay={200}>
                <div>
                  <IoLogoNpm style={{ color: "#CE2C2B" }} />
                  <span>Npm</span>
                </div>
              </Bounce>
              <Bounce delay={200}>
                <div>
                  <DiFirebase color="blue" />
                  <span>Firebase</span>
                </div>
              </Bounce>
              <Bounce delay={200}>
                <div>
                  <DiFirebase color="blue" />
                  <span>AWS</span>
                </div>
              </Bounce>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
