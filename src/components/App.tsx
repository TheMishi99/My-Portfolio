import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import MyProjects from "./MyProjects";
import { ArrowUpIcon } from "../utils/BrandsIcons";

function App() {
  return (
    <div
      id="app"
      className="w-full flex flex-col justify-center items-center p-2 gap-2 bg-[url('/galaxy-background-5.png')] bg-cover"
    >
      <Header />
      <div
        id="main"
        className="w-full flex flex-col justify-center items-center p-2 gap-2"
      >
        <AboutMe />
        <MyProjects />
        <ContactMe />
      </div>
      <Footer />
      <button className="fixed bottom-2 right-2 bg-cyan-400 p-2 rounded-full">
        <a href="#header" className="flex justify-center items-center">
          <ArrowUpIcon height={25} width={25} />
        </a>
      </button>
    </div>
  );
}

export default App;
