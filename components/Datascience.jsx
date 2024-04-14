import React from 'react';
import Card from './Card';

const Datascience = ({courses}) => {
    const DS = courses.filter((course) => course.title === "Data Science");
    return (
    <div className="container">
      <div className="row">
        {DS.map((course, index) => (
          <div className="col-md-4" key={index}>
            <Card course={course} />
          </div>
        ))}
      </div>
    </div>
    );
};

export default Datascience;