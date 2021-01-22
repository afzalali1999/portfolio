import ProjectDetail from './ProjectDetail';

import data from '../data/projects.json';

const ProjectList = () => {
    const projects = data.map(project => (
        <ProjectDetail project={project} />
    ));

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            { projects }
        </div>
    );
};

export default ProjectList;