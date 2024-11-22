import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import MyWorks from "./components/MyWorks/MyWorks";

export default function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <MyWorks />
    </div>
  );
}
