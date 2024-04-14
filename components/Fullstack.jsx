import React from 'react';
import Card from './Card';

const Fullstack = ({courses}) => {
    const FSD = courses.filter((course) => course.title === "Full Stack Development");
    return (
    <div className="container">
      <div className="row">
        {FSD.map((course, index) => (
          <div className="col-md-4" key={index}>
            <Card course={course} />
          </div>
        ))}
      </div>
    </div>
    );
};

export default Fullstack;