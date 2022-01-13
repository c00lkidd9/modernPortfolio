import myPic from "../img/s.jpg";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import Button from "./Button";
import { Bounce } from "react-reveal";
const Home = (props) => {
  const { showList } = props;
  console.log(showList);
  return (
    <div className="banner">
      <div className="banner-info">
        <div>
          <h1>
            <div className="c1">
              <div className="type">
                <span className="hello-text"> Hello,</span>{" "}
              </div>
            </div>
            <div className="c2">
              <div className="type1">
                <br />I am Sohail Amini.
              </div>
            </div>
            <div className="c3">
              <div className="type2">I build things for web.</div>
            </div>
          </h1>
        </div>
        <div>
          <div className="link">
            <a href="#">
              <span>About me</span>
            </a>
          </div>
        </div>
      </div>

      <div className="social-network">
        <div>
          <a href="#">
            <FaFacebook className="social-icon" />
          </a>
        </div>
        <div>
          <a href="#">
            <FaLinkedinIn className="social-icon" />
          </a>
        </div>
        <div>
          <a href="#">
            <BsGithub className="social-icon" />
          </a>
        </div>
        <div>
          <a href="#">
            <FaTwitter className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
