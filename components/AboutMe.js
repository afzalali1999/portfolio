import styles from '../styles/AboutMe.module.css';

const AboutMe = () => {
    return (
        <section id="aboutMe">
            <div className="flexContainer"><h2 class="title">About me</h2></div>

            <div className={styles.gridContainer}>
                <div><img src="/myface.png" className={styles.myFace} /></div>
                <div>
                    Hey there! My name is Afzal Ali and I am a Web and Mobile Computing 
                    B.S Major at the Rochester Institute of Technology. Since high school,
                    I have always had a keen interest in software and how one can leverage 
                    such a powerful tool to change the world. From making computer games, to
                    full stack web applications, and mobile applications as a hobby, I am excited 
                    to share my skills with the world.
                </div>
            </div>
        </section>
    );
};

export default AboutMe;