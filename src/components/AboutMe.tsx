function AboutMe() {
  return (
    <div
      id="about-me"
      className="w-full flex flex-col justify-center items-center"
    >
      <h2 className="w-full flex justify-center items-center text-3xl">
        About Me
      </h2>
      <div
        id="my-info"
        className="w-full max-w-[400px] flex-col flex justify-center items-center"
      >
        <p className="w-full">My Name is Matias</p>
      </div>
    </div>
  );
}

export default AboutMe;
