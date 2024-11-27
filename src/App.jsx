import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import MyWorks from "./components/MyWorks/MyWorks";
import Contact from "./components/Contact/Contact";
import ContactMe from "./components/ContactMe/ContactMe";

export default function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <MyWorks />
      <Contact />
      <ContactMe />
    </div>
  );
}
