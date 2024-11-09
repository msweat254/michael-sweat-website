import Card from "../components/Card";
import styles from "../styles/index.module.css"; // Import the CSS module

const HomePage = () => {
  const cardProps = {
    about: {
      url: '/about',
      title: 'About',
      body: 'Discover the journey that shaped who I am today—from my earliest interests in technology to the experiences that molded my skills. Learn about my passions, my goals, and what drives me to keep exploring new frontiers in development and design. Dive into my story and see how I approach challenges and growth.',
    },
    projects: {
      url: '/projects',
      title: 'Projects',
      body: 'Take a closer look at the projects I’ve brought to life! From small experiments to full-scale applications, each project represents a unique learning experience. See how I tackle real-world problems, the technologies I use, and the creativity that goes into each design. Click to see the work that fuels my passion.',
    },
    resume: {
      url: '/resume',
      title: 'Resume',
      body: 'Want to see my professional journey at a glance? My resume showcases my skills, experience, and achievements that span across different roles and industries. Discover the path that’s led me to where I am today and how each step has prepared me for the next. Click to explore my qualifications and professional milestones.',
    },
  };

  return (
    <div className={styles.pageContent}>
      <div className={styles.portraitContainer}>
        <img className={styles.portrait} alt="Portrait of Myself" src="/portrait.png" />
      </div>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Hello, my name is Michael!</h1>
        <h3 className={styles.titleDescriptor}>Come see what I can do!</h3>
      </div>
      <div className={styles.cardGridContainer}>
        <Card 
          title={cardProps.about.title}
          body={cardProps.about.body}
          urlEndpoint={cardProps.about.url}
        />
        <Card 
          title={cardProps.projects.title}
          body={cardProps.projects.body}
          urlEndpoint={cardProps.projects.url}
        />
        <Card 
          title={cardProps.resume.title}
          body={cardProps.resume.body}
          urlEndpoint={cardProps.resume.url}
        />
      </div>
    </div>
  );   
}

export default HomePage;
