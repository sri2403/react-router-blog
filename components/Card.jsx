import React from 'react';

const Card = ({course}) => {
    return (
        <div className='card p-4 mt-5' style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
            <img src={course.img}/>
            <h2 className='mt-2'>{course.title}</h2><hr></hr>
            <p>{course.description}</p>
            <div className='one mt-auto p-3 text-center '>
                <h5 className="mt-auto">Duration: {course.duration}</h5>  
            </div>
        </div>
    ); 
};

export default Card;