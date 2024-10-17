import React from 'react';
const SkillsPage = () => {
    const skills = [
        'Java',
        'Python',
        'PHP',
        'JavaScript',
        'React',
        'CSS',
        'HTML',
        'Bootstrap',
        'Git'
    ];

    return (
        <div>
            <h2 className="text-center">My Skills</h2>
            <ul className="list-group">
                {skills.map((skill, index) => (
                    <li key={index} className="list-group-item">
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillsPage;