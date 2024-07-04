import styles from './HeroStyles.module.css';
import heroImg from '../../assets/profile.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import youtube from '../../assets/youtube.svg';
import youtubelight from '../../assets/youtube-light.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const youtubeIcon = theme === 'light' ? youtube : youtubelight;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Udith
          <br />
          Sandaruwan
        </h1>
        <h2>Backend Developer</h2>
        <span>
          <a href="https://github.com/udithsandaruwan2" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/udithsandaruwan/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://www.youtube.com/@UdithSandaruwan" target="_blank">
            <img src={youtubeIcon} alt="Youtube icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern Django web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
