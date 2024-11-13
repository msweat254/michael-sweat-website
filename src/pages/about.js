import DetailsExpander from '../components/DetailsExpander';
import styles from '../styles/about.module.css';

const AboutPage = () => {
  return (
    <div className={styles.pageContent}>
      <h1 className={styles.title}>About Me</h1>

      <DetailsExpander 
        title="Early Life" 
        body="Born and raised in a small town, I developed a curiosity for technology and creativity at a young age. I spent countless hours tinkering with gadgets and exploring new ways to solve problems, which set the foundation for my career."
      />

      <DetailsExpander 
        title="Education" 
        body="I pursued my education in Computer Science, where I honed my skills in software development, data analysis, and learned the foundations of coding and design. My education journey instilled in me a passion for continual learning and growth."
      />

      <DetailsExpander 
        title="Career" 
        body="Starting my career as a software developer, I worked on diverse projects ranging from web development to data analysis. Each role expanded my skill set, leading me to become a versatile developer. I am constantly seeking new challenges and ways to innovate."
      />

      <DetailsExpander 
        title="Personal Interests" 
        body="Outside of work, I enjoy hiking, photography, and exploring new technologies. These activities keep me inspired and motivated, bringing a fresh perspective to my work in tech."
      />
    </div>
  );
}

export default AboutPage;
