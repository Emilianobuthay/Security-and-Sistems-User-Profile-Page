
import styles from "../styles/Main.module.css";
import About from '../components/About';
import Interests from '../components/Interests';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';
import Previews from "../components/Previews";

export default function Home() {
  return (
    <>
    <Header initialName={'LF'} name={'Laura Fernández'} handle={'@LauFernández'} />
    <Previews nametitle={'Laura Fernandez'} ubicatioon={'Argentina'} yearupdate={'2024'} ubicationdata={'Originario de un lugar lleno de tradiciones arraigadas y paisajes impresionantes. Mi tierra natal es conocida por su rica historia cultural y su diversidad natural.'} profesiondata={'Mi día a día implica enfrentar desafíos que me permiten crecer y contribuir en mi campo. Es un camino que valoro por su constante innovación y aprendizaje.'} />
    <div className={styles.container}>
      <div style={{height: '10vh'}}></div>
      <About description={'Gerente de Proyectos Senior en TechSolutions Inc. Con más de 10 años de experiencia en la gestión de proyectos tecnológicos, Laura lidera con una combinación de experiencia técnica y habilidades de liderazgo excepcionales. Su enfoque estratégico y su capacidad para motivar equipos garantizan que nuestros proyectos no solo se entreguen a tiempo, sino que también superen las expectativas de nuestros clientes. Laura es apasionada por el desarrollo de soluciones innovadoras y la creación de un ambiente de trabajo colaborativo y eficiente.'} />
      <div style={{height: '20vh'}}></div>
      <Interests interests={["Hiking", "Reading", "Photography", "Cooking", "Travel", "Music"]}/>
      <div style={{height: '30vh'}}></div>
      <ContactForm />
    </div>
    </>
  );
}
