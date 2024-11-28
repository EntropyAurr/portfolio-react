import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";

export default function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          {/* <img src={profile} alt="" /> */}
          <div className="about-para">
            <p>I am a self-taught Front-end Developer with...</p>
            <p>My passsion in Front-end development is...</p>
          </div>
        </div>

        <div className="about-right">
          <div className="about-skills">
            <div className="skill">
              <p>HTML & CSS</p>
              <div>
                <hr style={{ width: "100%" }} />
              </div>
            </div>

            <div className="skill">
              <p>JavaScript</p>
              <div>
                <hr style={{ width: "70%" }} />
              </div>
            </div>

            <div className="skill">
              <p>SCSS</p>
              <div>
                <hr style={{ width: "80%" }} />
              </div>
            </div>

            <div className="skill">
              <p>Tailwind CSS</p>
              <div>
                <hr style={{ width: "70%" }} />
              </div>
            </div>

            <div className="skill">
              <p> Bootstrap</p>
              <div>
                <hr style={{ width: "70%" }} />
              </div>
            </div>

            <div className="skill">
              <p>ReactJS</p>
              <div>
                <hr style={{ width: "60%" }} />
              </div>
            </div>

            <div className="skill">
              <p>TypeScript</p>
              <div>
                <hr style={{ width: "60%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
