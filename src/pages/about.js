import DetailsExpander from "../components/DetailsExpander";
import styles from "../styles/about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.pageContent}>
      <h1 className={styles.title}>About Me</h1>

      <DetailsExpander
        title="Early Life"
        body="I was born and raised in Spanish Fork, Utah, by two awesome parents. I have 8 siblings, 1 sister-in-law, and a niece. I've always looked up to my older brother, who introduced me to computers and programming. He taught me how to make my first HTML website. Whenever I asked him for help, he would say 'Look it up' or 'Google it,' which was frustrating at the time. Looking back, I appreciate how this taught me the valuable skill of research and problem-solving. Now, whenever I don’t know how to do something, I know exactly how to figure it out."
      />
      <DetailsExpander
        title="Education"
        body="I attended high school for two years before deciding to graduate early by taking the GED. I felt I wasn’t learning much in school, so I took the GED two weeks after my junior year and scored near-perfect marks on each section. After that, I began focusing on personal coding projects that taught me the skills I use in my career today."
      />
      <DetailsExpander
        title="Career"
        body="My career began as a sales representative, but I quickly realized that it wasn’t my true passion. I started creating small-scale analytics for the sales department, which caught the attention of the Director of Business Intelligence. Impressed by my work, he invited me to join the BI team, and I eagerly accepted. While working on the BI team, I had the opportunity to support the development team during a particularly busy period. My contributions were well-received, and the Director of Development was impressed by the speed and quality of my code. He later asked if I would like to join the development team full-time; a role that aligned perfectly with my career goals. Each of these transitions was a testament to the recognition my work received, and I am grateful for the opportunities to step into new challenges and grow professionally."
      />
      <DetailsExpander
        title="Personal Interests"
        body="I love playing spikeball and pickleball, coding personal projects, learning how things in the world work, building computers, playing video games, and spending time with my girlfriend, friends, and family."
      />
    </div>
  );
};

export default AboutPage;
