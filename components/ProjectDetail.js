import Link from 'next/link';
import styles from '../styles/ProjectDetail.module.css';

const ProjectDetail = ({ project }) => {
    const descriptions = project.descriptions.map(desc => <li>{ desc }</li>)

    const tools = project.tools.map(tool => tool + ", ")

    const renderGithubButtons = () => {
        if (project.githubClient) {
            return (
                <React.Fragment>
                    <a href={project.githubClient} target="_blank" className={styles.githubButton}>View code on github (client)</a>
                    <a href={project.githubServer} target="_blank" className={styles.githubButton}>View code on github (server)</a>
                </React.Fragment>
            );
        }

        return <a href={project.github} target="_blank" className={styles.githubButton}>View code on github</a>;
    }

    return (
        <div className={styles.cardContainer}>
            <img className={styles.img} src={project.src} />

            <div className={styles.body}>
                <div className={styles.name}>{ project.name }</div>
                <div className={styles.description}><ul>{ descriptions }</ul></div>
                <div className={styles.tools}><span>Tools used:</span> { tools }</div>
                <div className={styles.buttons}>
                    <a 
                        href={project.website} 
                        target="_blank" 
                        className={styles.websiteButton}
                    >
                        Go to website
                    </a>
                    
                    { renderGithubButtons() }
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;