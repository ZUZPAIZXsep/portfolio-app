import React from 'react';

function SkillsList() {
  const skills = ['HTML', 'CSS', 'JavaScript' ,'JAVA', 'Python','SQL','React','nodeJS'];

  return (
    <div>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsList;
