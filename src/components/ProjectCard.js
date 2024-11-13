import styles from '../styles/ProjectCard.module.css'

const ProjectCard = ({projectTitle,thumbnailSrc,projectDesciption,buttonText,buttonUrl}) => {
  const handleButtonClick = () => {
    window.open(buttonUrl,'_blank');
  }

  return (
    <>
      <div className={styles.projectCard}>
        <div className={styles.titleContainer}>
          <h2>{projectTitle}</h2>
        </div>
        <div className={styles.thumbnailContainer}>
          <img src={thumbnailSrc} alt='Project Thumbnail'/>
        </div>
        <div className={styles.descriptionContainer}>
          <p>{projectDesciption}</p>
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={handleButtonClick}>{buttonText}</button>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;