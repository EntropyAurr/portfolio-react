import "./MyWorks.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

export default function MyWorks() {
  return (
    <div id="myworks" className="myworks">
      <div className="myworks-title">
        <h1>My latest works</h1>
        <img src={theme_pattern} />
      </div>

      <div className="myworks-container">
        {mywork_data.map((work, index) => {
          return (
            <a href={work.w_link} target="blank" key={index}>
              <img src={work.w_img} />
            </a>
          );
        })}
      </div>

      <div className="myworks-showmore">
        <p>Show More</p>
        <img src={arrow_icon} />
      </div>
    </div>
  );
}
