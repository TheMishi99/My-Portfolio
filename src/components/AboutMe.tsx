import profilePicture from "/ProfilePicture.jpg";

function AboutMe() {
  return (
    <div
      id="about-me"
      className="flex flex-col justify-center items-center p-2 gap-2 backdrop-blur-lg rounded-xl"
    >
      <h2 className="flex justify-center items-center text-3xl border-b-2 border-cyan-400 hover:border-cyan-600 transition-all duration-300">
        <a href="#about-me">About Me</a>
      </h2>
      <div
        id="my-info"
        className="w-full max-w-[700px] flex-row flex justify-center items-center p-2 gap-2"
      >
        <div id="img" className="w-[30%] flex justify-center items-center">
          <img
            src={profilePicture}
            alt="Matias Sayago Profile Picture"
            className="rounded-full"
          />
        </div>
        <div
          id="info"
          className="w-[70%] flex flex-col justify-center items-center gap-2"
        >
          <p className="w-full">
            My Name is <span className="font-bold text-cyan-400">Matias Demian Sayago</span>
          </p>
          <p className="w-full">
            I'm a 2 years experienced <span className="font-bold text-cyan-400">Full Stack Web Developer</span> with a passion for creating efficient,
            scalable, and user-friendly web applications.
          </p>
          <p className="w-full">
            My Main Stack is MERN (<span className="font-bold text-cyan-400">MongoDB, Express, React, Node.js</span>)
          </p>
          <p className="w-full">
            I'm also familiarized with <span className="font-bold text-cyan-400">NextJS</span>, the React Framework.
          </p>
          <p className="w-full">
            I'm always looking for new challenges and opportunities to learn
            and grow as a developer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
