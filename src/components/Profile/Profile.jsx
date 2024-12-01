import "./Profile.css";
import profile from "../../assets/profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Profile() {
  return (
    <div id="home" className="profile">
      <img src={profile} />

      <h1>
        <span>I&apos;m Au Duong,</span> Front-end Developer from HCM City.
      </h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit officiis nesciunt ducimus quae deleniti corrupti fuga eveniet saepe quas nostrum.</p>

      <div className="profile-action">
        <div className="profile-connect">
          <AnchorLink className="anchor-link" href="#contact" offset={50}>
            Connect with me
          </AnchorLink>
        </div>
        <div className="profile-resume">My resume</div>
      </div>
    </div>
  );
}
