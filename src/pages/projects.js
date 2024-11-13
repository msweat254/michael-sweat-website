import styles from '../styles/projects.module.css'
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>My Projects</h1>
      </div>
      <div className={styles.projectsGridContainer}>
        <ProjectCard 
          projectTitle={'Lead Return Automater'}
          projectDesciption={'This python script takes in a dataframe of leads to return, and then for each one it uses Selenium to go to the designated webpage and return each lead.'}
          buttonText={'View Code'}
          thumbnailSrc={'static/images/lead-return-thumbnail.png'}
          buttonUrl={'https://github.com/msweat254/Portfolio/blob/267a787c4edf44b33cd8c251d833b61d35fd9f86/lead-return-scrapper.py'}
        />
        <ProjectCard 
          projectTitle={'Lead Return Automater'}
          projectDesciption={'This python script takes in a dataframe of leads to return, and then for each one it uses Selenium to go to the designated webpage and return each lead.'}
          buttonText={'View Code'}
          buttonUrl={'www.github.com/msweat254/lead-return-scrapper.git'}
        />
        <ProjectCard 
          projectTitle={'Lead Return Automater'}
          projectDesciption={'This python script takes in a dataframe of leads to return, and then for each one it uses Selenium to go to the designated webpage and return each lead.'}
          buttonText={'View Code'}
          buttonUrl={'www.github.com/msweat254/lead-return-scrapper.git'}
        />
        <ProjectCard 
          projectTitle={'Lead Return Automater'}
          projectDesciption={'This python script takes in a dataframe of leads to return, and then for each one it uses Selenium to go to the designated webpage and return each lead.'}
          buttonText={'View Code'}
          buttonUrl={'www.github.com/msweat254/lead-return-scrapper.git'}
        />
        <ProjectCard 
          projectTitle={'Lead Return Automater'}
          projectDesciption={'This python script takes in a dataframe of leads to return, and then for each one it uses Selenium to go to the designated webpage and return each lead.'}
          buttonText={'View Code'}
          buttonUrl={'www.github.com/msweat254/lead-return-scrapper.git'}
        />
        <ProjectCard 
          projectTitle={'Lead Return Automater'}
          projectDesciption={'This python script takes in a dataframe of leads to return, and then for each one it uses Selenium to go to the designated webpage and return each lead.'}
          buttonText={'View Code'}
          buttonUrl={'www.github.com/msweat254/lead-return-scrapper.git'}
        />
      </div>
    </div>
  );
}

export default ProjectsPage;