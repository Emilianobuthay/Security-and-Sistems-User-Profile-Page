import React from 'react';
import styles from '../styles/UserProfile.module.css';
import TextScroll from './TextScrool';

const Previews = ({ nametitle, ubicatioon, yearupdate, ubicationdata, profesiondata }) => {
  return (
    <section className={styles.previews}>
      <div className={styles.preview}>
        <div className={styles.previewImg}>
        <TextScroll name={nametitle} secundname={nametitle} />
          <div
            className={styles.previewImgInner}
            style={{ backgroundImage: `url(https://culturafotografica.es/wp-content/uploads/2017/03/SAR1137-1920px.jpg)` }}
          ></div>
        </div>
        <div className={styles.previewInfo}>
          <span className={styles.previewColumnTitleMain}>{ubicatioon}</span>
          <span className={styles.previewYear}>{yearupdate}</span>
          <div className={styles.previewDetails}>
            <div className={styles.previewColumn}>
              <div className={styles.svgBackground}>
                <svg
                  id="sw-js-blob-svg"
                  viewBox="0 0 200 100"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  style={{ width: '150%', height: '100%', position: 'absolute', top: 0, left: '-25%' }}
                >
                  <defs>
                    <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                      <stop id="stop1" stopColor="rgba(152, 55, 248, 1)" offset="0%"></stop>
                      <stop id="stop2" stopColor="rgba(217, 141, 14, 1)" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#sw-gradient)"
                    d="M11.6,-19.8C14.8,-18.3,17,-14.7,23.2,-11C29.3,-7.4,39.3,-3.7,39.8,0.3C40.2,4.2,31.1,8.4,25.4,13C19.8,17.5,17.8,22.3,14.1,27.9C10.5,33.6,5.2,40,-1.3,42.3C-7.9,44.6,-15.9,42.9,-19.4,37.2C-22.9,31.5,-22,21.9,-22.3,15C-22.6,8.1,-24,4.1,-24.1,-0.1C-24.2,-4.2,-23,-8.4,-20.3,-11.1C-17.6,-13.7,-13.5,-14.9,-9.8,-16.2C-6.2,-17.4,-3.1,-18.7,0.6,-19.7C4.2,-20.6,8.4,-21.2,11.6,-19.8Z"
                    width="100%"
                    height="100%"
                    transform="translate(50 50)"
                    strokeWidth="0"
                    style={{ transition: 'all 0.3s ease 0s' }}
                  ></path>
                </svg>
              </div>
              <h3 className={styles.previewColumnTitle}>Ubicacion</h3>
              <p>{ubicationdata}</p>
            </div>
            <div className={styles.previewColumn}>
              <div className={styles.svgBackground}>
                <svg id="sw-js-blob-svg" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <defs>
                    <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                      <stop id="stop1" stopColor="rgba(152, 55, 248, 1)" offset="0%"></stop>
                      <stop id="stop2" stopColor="rgba(217, 141, 14, 1)" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#sw-gradient)"
                    d="M24.9,-19.8C29,-14.7,26.8,-4.5,23,2.5C19.2,9.4,13.7,13.3,8.6,14.4C3.5,15.5,-1.2,13.8,-9,12.5C-16.9,11.1,-27.9,10,-30.7,4.9C-33.5,-0.1,-28.2,-9.2,-21.7,-14.8C-15.2,-20.5,-7.6,-22.9,1.4,-24C10.4,-25.1,20.8,-25,24.9,-19.8Z"
                    transform="translate(50 50)"
                    strokeWidth="0"
                    style={{ transition: 'all 0.3s ease 0s' }}
                  ></path>
                </svg>
              </div>
              <h3 className={styles.previewColumnTitle}>Profesion</h3>
              <p>{profesiondata}</p>
            </div>
          </div>
        </div>
        <button className={styles.previewBack}>
          <svg width="100px" height="18px" viewBox="0 0 50 9">
            <path vectorEffect="non-scaling-stroke" d="m0 4.5 5-3m-5 3 5 3m45-3h-77"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Previews;
