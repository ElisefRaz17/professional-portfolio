import ProjectCards from "../components/ProjectCards";
import image1 from "./../assets/todoapp.png";
import image2 from "./../assets/icanbeher.png";
import image3 from "./../assets/weathertracker.png";
import image4 from "./../assets/DarkLight.png";
import image5 from "./../assets/ManualUpload6.png";
import image6 from "./../assets/TipApp.png";
import image7 from "./../assets/HuddleLandingPage.png";
interface Url {
  id: number;
  name: string;
  url: string;
  previewImg: string;
  description: string;
}

const Project = () => {
  const urls: Url[] = [
    {
      id: 0,
      name: "Todo List App",
      url: "https://github.com/ElisefRaz17/todolist",
      previewImg: image1,
      description:
        "A TodoList App built with MERN tech stack and user authentication",
    },
    {
      id: 1,
      name: "I Can Be Her App",
      url: "https://nextjs-boilerplate-iujp22gej-elises-projects-7f81aa22.vercel.app/",
      previewImg: image2,
      description:
        "Find recommended women in tech that are inspired by your current role",
    },
    {
      id: 2,
      name: "Weather App",
      url: "https://weather-favorite-tracking-app-elisefrazier1.replit.app/",
      previewImg: image3,
      description: "Get wind speeds of asynchronously via weather app API",
    },
    {
      id: 3,
      name: "Light/Dark Mode",
      url: "https://dynamic-mui-grid-layout-elisefrazier1.replit.app/",
      previewImg: image4,
      description:
        "A sample MVP version of the light/dark mode integration I did for a document based application",
    },
    {
      id: 4,
      name: "Manual Document Upload",
      url: "https://react-dropzone-mvp.replit.app/",
      previewImg: image5,
      description: "A small MVP version of a Manual Document Upload Feature",
    },
    {
      id: 5,
      name: "Angular Tip Calculator",
      url: "https://tip-calculator-app.replit.app/",
      previewImg: image6,
      description: "A Angular Tip Calculator",
    },
    {
      id: 6,
      name: "Angular Huddle Landing Page",
      url: "https://huddle-landing-page.replit.app",
      previewImg: image7,
      description: "A Angular Huddle Landing Page",
    },
  ];
  return (
    <section
      className="bg-primary text-cyan-700 px-5 py-32 pl-5 flex flex-row items-baseline not-lg:flex-wrap not-xl:flex-wrap not-2xl:flex-wrap"
      id="project"
    >
      <div className="about-info mb-5 p-6">
        <h2 className="text-4xl font-bold mb-5">Projects</h2>

        <p className="pb-5">
          Below are some of the projects I have worked on. I have experience in
          Frontend Development, Data Engineering and Full Stack Development.
        </p>
      </div>
      {/* <div className="container grid mx-auto md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5">Projects</h2>

          <p className="pb-5">
            Below are some of the projects I have worked on. I have experience
            in Frontend Development, Data Engineering and Full Stack
            Development.
          </p>
        </div>

        <div className="about-img"></div>
      </div> */}

      <div className="projects container flex flex-row flex-wrap gap-10 justify-center">
        <ProjectCards urls={urls} />
      </div>
    </section>
  );
};

export default Project;
