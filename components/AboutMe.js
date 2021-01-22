import styles from '../styles/AboutMe.module.css';

const AboutMe = () => {
    return (
        <section id="aboutMe">
            <div className="flexContainer"><h2 class="title">About me</h2></div>

            <div className={styles.gridContainer}>
                <div><img src="/myface.png" className={styles.myFace} /></div>
                <div>
                    <p>
                        Hey there! My name is Afzal Ali and I am a Web and Mobile Computing 
                        B.S Major at the Rochester Institute of Technology. Since high school,
                        I have always had a keen interest in software and how one can leverage 
                        such a powerful tool to impact the world. From making computer games, to
                        full stack web applications, and mobile applications as a hobby, I am excited 
                        to share my skills with the world.
                    </p>
                    <p className={styles.disclaimer}>
                        This website is powered using react.js and next.js technologies. 
                        The coding and design of this website is soley mine and is fully 
                        mobile responsive. To view the code of this website, refer to my {' '}
                        <a 
                            href="https://github.com/afzalali1999/portfolio" 
                            target="_blank"
                            className={styles.githubLink}
                        >
                            github
                        </a>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;