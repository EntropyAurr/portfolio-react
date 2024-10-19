import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile from "../../assets/profile.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile} alt="" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>I am a self-taught Front-end Developer with...</p>
            <p>My passsion in Front-end development is...</p>
          </div>

          <div className="about-skills">
            <div className="skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>

            <div className="skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>

            <div className="skill">
              <p>SCSS</p>
              <hr style={{ width: "80%" }} />
            </div>

            <div className="skill">
              <p>Tailwind CSS</p>
              <hr style={{ width: "80%" }} />
            </div>

            <div className="skill">
              <p> Bootstrap</p>
              <hr style={{ width: "80%" }} />
            </div>

            <div className="skill">
              <p>React</p>
              <hr style={{ width: "60%" }} />
            </div>

            <div className="skill">
              <p>TypeScript</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
