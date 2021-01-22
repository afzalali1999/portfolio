import Head from 'next/head'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import DesignProjects from '../components/DesignProjects';

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Afzal Ali | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Header />
      
      <AboutMe />

      <Education />

      <Experience />
      
      <Projects />

      <DesignProjects />

      <main>
        
      </main>
    </div>
  )
}
