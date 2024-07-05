// components/Header.js
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header = ({ initialName, name, handle }) => {
  return (
    <>
    <header className={styles.header}>
      <div className={styles.avatarContainer}>
        <div className={styles.avatar}>
          <Image src="" alt="User Avatar" width={40} height={40} />
          <div className={styles.avatarFallback}>{initialName}</div>
        </div>
        <div className={styles.userInfo}>
          <div className={styles.userName}>{name}</div>
          <div className={styles.userHandle}>{handle}</div>
        </div>
      </div>
    </header>
    <svg className="header-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <defs>
                <linearGradient id="gradient" gradientTransform="rotate(90)">
                    <stop offset="0%" stopColor="#381c4e" />
                    <stop offset="100%" stopColor="#ff7e5f" />
                </linearGradient>
            </defs>
            <path fill="url(#gradient)" fillOpacity="1" d="M0,320L30,293.3C60,267,120,213,180,176C240,139,300,107,360,106.7C420,107,480,149,540,165.3C600,181,660,171,720,144C780,117,840,75,900,74.7C960,75,1020,117,1080,128C1140,139,1200,117,1260,112C1320,107,1380,149,1410,176L1440,203.3V0H1410C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0H0Z"></path>
        </svg>
    </>
  );
};

export default Header;
