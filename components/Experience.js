import experiences from '../data/experiences.json';
import styles from '../styles/Experience.module.css'

const Experience = () => {
    
    const renderExperienceList = () => experiences.map(e => {
        return (
            <>
                <div>
                    <div className={styles.top}><span className={styles.company}>{ e.company }</span>, { e.location } -- <span className={styles.title}>{ e.title }</span></div>
                    <div className={styles.date}>{ e.date }</div>
                    <ul className={styles.descriptions}>
                        {
                            e.descriptions.map(desc => <li>{ desc }</li>)
                        }
                    </ul>
                </div>

                <hr />
            </>
        );
    });

    return (
        <section id="experience">
            <div className="flexContainer">
                <h1 className="title">Experience</h1>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="card">
                    { renderExperienceList() }
                </div>
            </div>
        </section>
    );
};

export default Experience;