import styles from "../styles/projects.module.css";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>My Projects</h1>
      </div>
      <div className={styles.projectsGridContainer}>
        <ProjectCard
          projectTitle={"Lead Return Automater"}
          projectDesciption={
            "This python script takes in a dataframe of leads to return, and then for each one it uses Selenium to go to the designated webpage and return each lead."
          }
          buttonText={"View Code"}
          thumbnailSrc={"static/images/lead-return-thumbnail.png"}
          buttonUrl={
            "https://github.com/msweat254/Portfolio/blob/267a787c4edf44b33cd8c251d833b61d35fd9f86/lead-return-scrapper.py"
          }
        />
        <ProjectCard
          projectTitle={"React Sidebar Package"}
          projectDesciption={
            "This is a simple react component that you can install with npm and quickly get up and running. It is actually derived from the custom sidebar I made for this site!"
          }
          buttonText={"View Code"}
          thumbnailSrc={"static/images/simple-sidebar-thumbnail.png"}
          buttonUrl={"https://github.com/msweat254/simple-sidebar.git"}
        />
        <ProjectCard
          projectTitle={"Calendar Events Editor"}
          projectDesciption={
            "This is a calendar editor I made using React. It allows you to view appointments on that day and then get route information for each person."
          }
          thumbnailSrc={"static/images/calendar-thumbnail.png"}
          buttonText={"View Demo"}
          buttonUrl={"https://demos.michael-sweat.com/calendar-demo"}
        />
        <ProjectCard
          projectTitle={"Roomie Chores"}
          projectDesciption={
            "This app allows roomates to create recurring chores and invite other people to their house. I made this app using the Expo workflow with React Native."
          }
          buttonText={"Visit Site"}
          buttonUrl={"https://roomiechores.com"}
        />
        <ProjectCard
          projectTitle={"Portfolio Website"}
          projectDesciption={
            "That is this site! I built this using React for the front end and Next.js for the backend. This was a really fun project with lots of unique challenges."
          }
          buttonText={"View Code"}
          thumbnailSrc={"static/images/portfolio-thumbnail.png"}
          buttonUrl={"https://github.com/msweat254/michael-sweat-website.git"}
        />
        <ProjectCard
          projectTitle={"Bets and Kate Toffee"}
          projectDesciption={
            "This is a website I made for a client's toffee business. I made this using React for the front end and Next.js for the backend. I used the same sidebar component that I used in this site, as you can see it is very easy to reuse."
          }
          buttonText={"Visit Site"}
          thumbnailSrc={"static/images/toffee-thumbnail.png"}
          buttonUrl={"https://betsandkatetoffee.com"}
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
