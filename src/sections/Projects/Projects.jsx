import styles from './ProjectsStyles.module.css';
import visionoptical from '../../assets/visionoptical.png';
import mooverly from '../../assets/mooverly.png';
import animearc from '../../assets/animearc.jpg';
import millionpasses from '../../assets/millionpasses.png';
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
          link="https://github.com/udithsandaruwan2/mooverly-1"
          h3="Mooverly Console"
          p="An admin pannel"
        />
        <ProjectCard
          src={animearc}
          link="https://github.com/udithsandaruwan2/animearc"
          h3="AnimeArc"
          p="Anime Website"
        />
        <ProjectCard
          src={millionpasses}
          link="#"
          h3="Miilion Pases"
          p="Event Ticketing System"
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
