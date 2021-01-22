import styles from '../styles/DesignProjects.module.css';
import designs from '../data/designs.json';

const DesignProjects = () => {

    const renderDesignList = () => designs.map(({ title, description, src, linkTo }) => {
        return (
            <div className={styles.cardContainer}>
                <a href={linkTo} target="_blank">
                <img className={styles.img} src={src} />
                
                <div className={styles.body}>
                    <div className={styles.title}>{ title }</div>
                    <div className={styles.description}>{ description }</div>
                </div>
                </a>
            </div>
        )
    });

    return (
        <section id="designProjects">
            <div className="flexContainer"><h2 class="title">Design Projects</h2></div>

            <div className={styles.container}>
                <div>
                    { renderDesignList() }
                </div>
            </div>
        </section>
    );
};

export default DesignProjects;