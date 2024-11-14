import Headers from "./components/headers";
import Profile from "./components/profile";
import Client from "./components/client";
import About from "./components/about";
import Service from "./components/service";
import Collab from "./components/collab";
import Footer from "./components/footer";
import Project from "./components/project";

export default function Home() {
  return (
    <>
    <Headers />
    <Profile />
    <Client />
    <About />
    <Service />
    <Collab />
    <Project />
    <Footer />
    </>
  );
}
