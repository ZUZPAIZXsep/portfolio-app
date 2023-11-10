import React from 'react';

function ResumeButton() {
  const handleOpenResume = () => {

    window.open('/resume.pdf', '_blank');
  };

  return (
    <button onClick={handleOpenResume} className="btn btn-success">
      View Resume
    </button>
  );
}

export default ResumeButton;
