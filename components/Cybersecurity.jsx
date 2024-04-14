import React from 'react';
import Card from './Card';

const Cybersecurity = ({courses}) => {
    const CS = courses.filter((course) => course.title === "Cyber Security");
    return (
    <div className="container">
      <div className="row">
        {CS.map((course, index) => (
          <div className="col-md-4" key={index}>
            <Card course={course} />
          </div>
        ))}
      </div>
    </div>
    );
};

export default Cybersecurity;