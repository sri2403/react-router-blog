import React from 'react';
import Card from './Card'; // Import the Card component

const Home = ({ courses }) => {
  return (
    <div className="container">
      <div className="row">
        {courses.map((course, index) => (
          <div className="col-md-4" key={index}>
            <Card course={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
