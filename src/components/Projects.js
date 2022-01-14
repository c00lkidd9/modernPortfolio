import { Zoom, Fade } from "react-reveal";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="line"></div>
      <div className="title">
        <div>
          <Zoom>
            <h2>Some Things I’ve Built</h2>
          </Zoom>
        </div>
      </div>

      <div className="project-container">
        <Fade left>
          <div className="project">
            <div className="project-image"></div>
            <div className="project-info">
              <h2>CRUD App</h2>
              <h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </h4>
              <div className="pr-link">
                <a href="#" className="project-btn">
                  Visit website
                </a>
              </div>
              <div>
                <span>Technologies: ReactJs, AWS </span>
              </div>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="project">
            <div className="project-image" style={{background: url('https://i.ibb.co/D7pzgVg/Capture.png')}}></div>
            <div className="project-info">
              <h2>Website for a Cafe</h2>
              <h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </h4>
              <div className="pr-link">
                <a href="https://heuristic-shockley-51c9e6.netlify.com/?fbclid=IwAR27fJaLPPBydNz4diTof-R0BBMH9_JpVLkxoE7xE2iqppOIJRnWvsxitWY" className="project-btn">
                  Visit website
                </a>
              </div>
              <div>
                <span>Technologies: ReactNative, Firebase </span>
              </div>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="project">
            <div className="project-image"></div>
            <div className="project-info">
              <h2>Chat App</h2>
              <h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </h4>
              <div className="pr-link">
                <a href="#" className="project-btn">
                  Visit website
                </a>
              </div>
              <div>
                <span>Technologies: ReactNative, Firebase </span>
              </div>
            </div>
          </div>
        </Fade>

      </div>
    </div>
  );
};
export default Projects;
