// components/About.js
import styles from '../styles/About.module.css';
import { Holtwood_One_SC } from "next/font/google";
import LineCursor from './LineCursor';

const Rubik = Holtwood_One_SC({ subsets: ["latin"],
  weight: '400', });


const About = ({description}) => {
  return (
    <div className={styles.container}>
      <div>
      
        <h1 className={styles.heading}>Sobre Mi</h1>
        <LineCursor/>
        
        <p className={styles.paragraph}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default About;
