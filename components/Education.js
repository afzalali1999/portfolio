import EducationCard from './EducationCard';

const Education = () => {
    return (
        <section id="education">
            <div className="flexContainer">
                <h1 className="title">Education</h1>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}><EducationCard /></div>
        </section>
    );
};

export default Education;