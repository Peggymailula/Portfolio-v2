import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import marketplace from "../../assets/video-to-gif-converter.gif"
import lunarTour from "../../assets/LunarTour-ezgif.com-video-to-gif-converter.gif"
import valourVoice from "../../assets/ValourVoice-ezgif.com-video-to-gif-converter.gif"
import ScrollAnimation from "react-animate-on-scroll";



export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
  <div className="project">
    <header>
      <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <title>Folder</title>
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
      </svg>

    </header>
    <div className="body">
      <h3>Logistics Management</h3>
      <p>
        As a Full Stack Engineer at Tripplo, I developed a majority of the features in our Web App. This high-performance web application streamlines workflow for logistics operators, providing real-time tracking, efficient route planning, and intuitive reporting tools.
      </p>
      {/* <div className="screenshot-container"> */}
        <img src={marketplace} className="project-screenshot" alt="Project Screenshot" />
      {/* </div> */}
    </div>
    <footer>
      <ul className="tech-list">
        <li>React</li>
        <li>Node.js</li>
        <li>GraphQL</li>
        <li>AWS</li>
        <li>Typescript</li>
        <li>Tailwind CSS</li>
      </ul>
    </footer>
  </div>
</ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://gitlab.com/Peggy_Mailula/lunar-tour-client" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
              </div>
            </header>
            <div className="body">
              <h3>Luna Tour App</h3>
              <p>
                Developed an applications for astronauts to book vacations to different Lunar Destinations.
              </p>
              <img src={lunarTour} className="project-screenshot" alt="Lunar Tour" />
            </div>
            <footer>
              <ul className="tech-list">
                <li>GraphQL</li>
                <li>React</li>
                <li>ANTD</li>
                <li>Tailwind CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Peggymailula/Valor-voice-app" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Valour Voice</h3>
              <p>
                Developed a web application at a hack-a-thon for women to report GBV in their communities and support groups while remaining anonymous
              </p>
              <img src={valourVoice} className="project-screenshot" alt="Lunar Tour" />
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Firebase</li>
                <li>Tailwind CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>



      </div>
    </Container>
  );
}