// components/Footer.js
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <>
    <svg className="header-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <defs>
        <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#ff7e5f" />
            <stop offset="100%" stopColor="#381c4e" />
        </linearGradient>
    </defs>
    <path fill="url(#gradient)" fillOpacity="1" d="M0,224L30,218.7C60,213,120,203,180,176C240,149,300,107,360,85.3C420,64,480,64,540,85.3C600,107,660,149,720,160C780,171,840,149,900,128C960,107,1020,85,1080,74.7C1140,64,1200,64,1260,74.7C1320,85,1380,107,1410,117.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
</svg>
    <footer className={styles.footer}>
          &copy; 2024 Emiliano Buthay. All rights reserved.
        </footer>
    </>
  );
};

export default Footer;
