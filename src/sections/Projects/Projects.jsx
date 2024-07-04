import styles from './ProjectsStyles.module.css';
import visionoptical from '../../assets/visionoptical.png';
import mooverly from '../../assets/mooverly.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={visionoptical}
          link="https://visionoptical.shop"
          h3="Vision Optical"
          p="Sheduling System"
        />
        <ProjectCard
          src={mooverly}
          link="https://mooverly-a7aec9783356.herokuapp.com"
          h3="Mooverly Console"
          p="An admin pannel"
        />
        {/* <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
