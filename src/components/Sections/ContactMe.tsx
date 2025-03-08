import { EmailIcon } from "../../utils/BrandsIcons";

function ContactMe() {
  return (
    <div id="contact-me" className="w-full flex flex-col justify-center items-center p-2 gap-2">
      <h2 className="flex justify-center items-center text-3xl border-b-2 border-cyan-400 hover:border-cyan-600 transition-all duration-300">
        <a href="#contact-me">Contact Me</a>
      </h2>
      <div className="w-full flex justify-center items-center">
        <a
          href="mailto:matiasgd99@gmail.com"
          className="flex justify-center items-center gap-2 text-cyan-400 hover:text-cyan-600 transition-all duration-300"
        >
          <EmailIcon />
          <span>matiasgd99@gmail.com</span>
        </a>
      </div>
    </div>
  );
}

export default ContactMe;
