// components/HeaderLayout.js
import Image from 'next/image';
import styles from '../styles/Header.module.css';
import imagen1 from '../public/images.jpg'

const HeaderLayout = () => {
  return (
    <div className={styles.HeaderLayout}>
      <h1 className={styles.heading}>Security And Sistems</h1>
    </div>
  );
};

export default HeaderLayout;