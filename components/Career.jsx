import React from 'react';
import Card from './Card';

const Career = ({courses}) => {
    const Career = courses.filter((course) => course.title === "Career Development");
    return (
    <div className="container">
      <div className="row">
        {Career.map((course, index) => (
          <div className="col-md-4" key={index}>
            <Card course={course} />
          </div>
        ))}
      </div>
    </div>
    );
};

export default Career;