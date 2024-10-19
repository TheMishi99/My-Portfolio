import { useEffect, useState } from "react";
import { Project } from "../typings/my-types";
import BrandsIcons from "../utils/BrandsIcons";

function MyProjects() {
  const [projects, setProjects] = useState<Array<Project>>([]);
  useEffect(() => {
    setProjects([
      {
        id: 1,
        title: "Test Mercado Pago App",
        image: "/projectsScreenshots/TestMercadoPagoApp.png",
        description:
          "At this project I implemented the Mercado Pago SDK to test the payments",
        stack: [
          "ExpressJS",
          "MongoDB",
          "NodeJS",
          "ReactJS",
          "TypeScript",
          "TailwindCSS",
        ],
        repositoryLink: "https://github.com/TheMishi99/test-mercado-pago-app",
        deployLink: "https://test-mercado-pago-app.vercel.app/",
      },
      {
        id: 2,
        title: "Astro Spotify Clon",
        image: "/projectsScreenshots/AstroSpotifyClon.png",
        description: "This app tries to simulate the official Spotify Web App",
        stack: ["Astro", "NodeJS", "ReactJS", "TypeScript", "TailwindCSS"],
        repositoryLink: "https://github.com/TheMishi99/AstroSpotifyClon",
        deployLink: "https://astro-spotify-clon-roan.vercel.app/",
      },
      {
        id: 3,
        title: "React HTML Games",
        image: "/projectsScreenshots/ReactHTMLGames.png",
        description:
          "This app uses React but mostly HTML. It is designed to let you play some basic videogames",
        stack: [
          "NodeJS",
          "ReactJS",
          "TypeScript",
          "TailwindCSS",
        ],
        repositoryLink: "https://github.com/TheMishi99/ReactHtmlGames",
        deployLink: "https://react-html-games.vercel.app/",
      },
    ]);
  }, []);
  return (
    <div
      id="my-projects"
      className="w-full flex flex-col justify-center items-center p-2 gap-2"
    >
      <h2 className="flex justify-center items-center text-3xl border-b-2 border-cyan-400 hover:border-cyan-600 transition-all duration-300">
        <a href="#my-projects">My Projects</a>
      </h2>
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-2">
        {projects.map((project) => {
          return (
            <li
              key={project.id + project.title}
              className="flex flex-col justify-between items-center p-2 gap-2 border border-cyan-400 bg-cyan-500 bg-opacity-20 rounded-xl"
            >
              <div
                id="project-img"
                className="w-full flex justify-center items-center"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-xl"
                />
              </div>
              <div
                id="project-info"
                className="w-full flex flex-col justify-center items-center p-2 gap-2"
              >
                <p className="w-full text-center text-xl">{project.title}</p>
                <p className="w-full text-lg">{project.description}</p>
                <p className="w-full text-lg">Stack:</p>
                <ul id="project-stack" className="w-full flex p-2 gap-2">
                  {project.stack.map((tech, index) => {
                    return (
                      <li
                        key={index + tech}
                        className="flex-1 flex justify-center items-center text-center"
                      >
                        {BrandsIcons[tech]}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div
                id="project-links"
                className="w-full flex-wrap flex justify-center items-center p-2 gap-2"
              >
                <a
                  href={project.repositoryLink}
                  target="_blank"
                  className="w-full xl:w-[48%] flex justify-center items-center bg-black p-2 rounded-xl hover:bg-zinc-900 border-2 border-cyan-400"
                >
                  <i className="fa fa-github text-2x1" aria-hidden="true"></i>{" "}
                  &nbsp;Github Repository
                </a>
                <a
                  href={project.deployLink}
                  target="_blank"
                  className="w-full xl:w-[48%] flex justify-center items-center bg-cyan-600 p-2 rounded-xl hover:bg-cyan-400 border-2 border-cyan-400"
                >
                  <i className="fa fa-link" aria-hidden="true"></i>
                  &nbsp;Deployment Link
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MyProjects;
