import styles from '../styles/EducationCard.module.css';

const EducationCard = () => {
    return (
        <div className="card">
            <div className={styles.school}>Rochester Institute of Technology <span>(2017 - present)</span></div>
            <div className={styles.degree}>Bachelor of Science in Web and Mobile Computing</div>

            <div className={styles.graduation}>Projected graduation date: Spring 2022</div>
            
            <div className={styles.courseLabel}>Courses taken:</div>
            <ul>
                <li>Computer Science I</li>
                <li>Software Engineering Design Principles and Patterns</li>
                <li>Web & Mobile I</li>
                <li>Web & Mobile II</li>
                <li>Foundations Of Mobile Design</li>
                <li>Designing The User Experience</li>
                <li>Computational Problem Solving Info Domain I</li>
                <li>Computational Problem Solving Info Domain II</li>
                <li>Computational Problem Solving Info Domain III</li>
                <li>Project-Based Calculus I</li>
                <li>Project-Based Calculus II</li>
                <li>Discrete Math for Computing</li>
                <li>NMD Digital Survey I</li>
                <li>Intro To Database And Data Modeling</li>
                <li>Database Connectivity And Access</li>
                <li>Network Essentials For Developers</li>
                <li>Client Programming</li>
            </ul>
        </div>
    );
};

export default EducationCard;