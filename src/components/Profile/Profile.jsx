import "./Profile.css";
import profile from "../../assets/profile.jpg";

export default function Profile() {
  return (
    <div className="profile">
      <img src={profile} alt="" />

      <h1>
        <span>I'm Au Duong,</span> Front-end Developer from HCM City.
      </h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit officiis nesciunt ducimus quae deleniti corrupti fuga eveniet saepe quas nostrum.</p>

      <div className="profile-action">
        <div className="profile-connect">Connect with me</div>
        <div className="profile-resume">My resume</div>
      </div>
    </div>
  );
}
