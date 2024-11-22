import "./MyWorks.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";

export default function MyWorks() {
  return (
    <div className="myworks">
      <div className="myworks-title">
        <h1>My latest works</h1>
        <img src={theme_pattern} />
      </div>

      <div className="myworks-container"></div>
    </div>
  );
}
