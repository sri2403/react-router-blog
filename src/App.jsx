import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Fullstack from '../components/Fullstack';
import Datascience from '../components/Datascience';
import Cybersecurity from '../components/Cybersecurity';
import Career from '../components/Career';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";

const App = () => {
  const courses=[
    {
      img:"https://source.unsplash.com/random/250x250/?computer?1",
      title:"Full Stack Development",
      description:"This course covers Python programming from basics to advanced topics, including data structures, algorithms, object-oriented programming, and web development with Flask or Django. It also includes frontend development with HTML, CSS, and JavaScript to create full-stack web applications using Python for backend logic.",
      duration: '3 Months'
    },

    {
      img:"https://source.unsplash.com/random/250x250/?computer?2",
      title:"Full Stack Development",
      description:"This comprehensive course covers both frontend and backend web development using HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, and more. It includes hands-on projects and exercises to reinforce learning and build practical skills in full-stack development.",
      duration:"3 Months"
    },

    {
      img:"https://source.unsplash.com/random/250x250/?computer?9",
      title:"Full Stack Development",
      description:"The Full Stack Development course equips participants with the skills needed for both front-end and back-end web development. Covering HTML, CSS, JavaScript for the front end, and server-side programming languages, databases, and deployment for the back end, this course prepares students to create fully functional web applications.",
      duration:"2 Months"
    },

    {
      img:"https://source.unsplash.com/random/250x250/?computer?10",
      title:"Full Stack Development",
      description:"Explore the complete web development process in our Full Stack Development course. From crafting dynamic user interfaces with HTML, CSS, and JavaScript to building robust back-end systems with server-side programming languages like Python or Node.js, this course covers it all. ",
      duration:"6 Months"
    },

    {
      img:"https://source.unsplash.com/random/250x250/?computer?3",
      title:"Cyber Security",
      description:"This course teaches ethical hacking techniques, penetration testing methodologies, and cybersecurity best practices. It covers topics such as reconnaissance, scanning, enumeration, system hacking, and malware threats. CEH certification is highly regarded in the cybersecurity industry and is ideal for those interested in offensive security roles.",
      duration:"5 Months"
    },

    {
      img:"https://source.unsplash.com/random/250x250/?computer?11",
      title:"Cyber Security",
      description:"Dive into the world of cybersecurity with our comprehensive course. Learn to protect systems, networks, and data from cyber threats through hands-on training and real-world simulations. Explore topics such as cryptography, network security, ethical hacking, and risk management. ",
      duration:"5 Months"
    },

    {
      img:"https://source.unsplash.com/random/250x250/?computer?12",
      title:"Cyber Security",
      description:"Gain the skills needed to identify vulnerabilities, mitigate risks, and respond to cyber incidents effectively. Whether you're new to cybersecurity or looking to advance your career, this course equips you with the knowledge and tools to succeed in this critical field.",
      duration:"2 Months"
    },

    {
      img:"https://source.unsplash.com/random/250x250/?computer?4",
      title:"Cyber Security",
      description:"this course provides a broad understanding of cybersecurity concepts, including network security, cryptography, identity management, and risk management. It covers foundational principles and prepares students for entry-level cybersecurity roles. CompTIA Security+ certification is recognized globally and is suitable for individuals pursuing careers in cybersecurity.",
      duration:"5 Months"    
    },

    {
      img:"https://source.unsplash.com/random/250x250/?computer?5",
      title:"Data Science",
      description:"This program covers data science fundamentals, machine learning, big data analytics, and more, culminating in a capstone project. Upon completion, learners earn a MicroMasters credential.",
      duration:"6 Months" 
    },

    {
      img:"https://source.unsplash.com/random/250x250/?computer?6",
      title:"Data Science",
      description:"This course provides a beginner-friendly introduction to data science concepts, covering topics such as data manipulation, data visualization, statistical analysis, and machine learning. It is suitable for individuals with little to no prior experience in data science and aims to make data science accessible to everyone.",
      duration:"3 Months"
    },

    {
      img:"https://source.unsplash.com/random/250x250/?computer?13",
      title:"Data Science",
      description:"Unlock the power of data with our Data Science course. Dive into the fundamentals of statistics, machine learning, and programming as you learn to analyze and interpret complex datasets. From data wrangling and visualization to predictive modeling and algorithm development, this course covers the entire data science pipeline. ",
      duration:"3 Months"
    },

    {
      img:"https://source.unsplash.com/random/250x250/?computer?14",
      title:"Data Science",
      description:"Gain practical experience through hands-on projects and real-world case studies, and develop the skills needed to extract valuable insights and make data-driven decisions. Whether you're a beginner or seasoned professional, this course empowers you to thrive in the dynamic field of data science.",
      duration:"3 Months"
    },

    {
      img:"https://source.unsplash.com/random/250x250/?computer?7",
      title:"Career Development",
      description:"Embark on a journey to kickstart your tech career with Guvi's comprehensive course. Whether you're a fresh graduate or looking to switch careers, this course provides essential guidance and resources to navigate the ever-changing tech industry landscape. Learn the latest industry trends, identify your strengths and interests, and develop the skills and strategies needed to succeed in your chosen career path.",
      duration:"4 Months"
    },

    {
      img:"https://source.unsplash.com/random/250x250/?computer?8",
      title:"Career Development",
      description:"Unlock your potential and accelerate your career with Guvi's Career Accelerator course. Designed for aspiring professionals and career changers, this course provides a comprehensive toolkit to master essential skills for success in the workplace. Learn effective communication, teamwork, problem-solving, time management, and adaptability skills to thrive in any professional environment. ",
      duration:"4 Months"
    },

    {
      img:"https://source.unsplash.com/random/250x250/?computer?15",
      title:"Career Development",
      description:"Navigate your career path with confidence in our Career Development course. Explore essential skills such as resume writing, interviewing techniques, networking strategies, and personal branding. Learn to identify your strengths, set achievable goals, and cultivate a professional presence both online and offline. ",
      duration:"4 Months"
    },

    {
      img:"https://source.unsplash.com/random/250x250/?computer?16",
      title:"Career Development",
      description:"Unlock your professional potential with our Career Development course. Gain insights into career planning, goal setting, and effective communication in the workplace. Explore strategies for job search success, including leveraging online platforms and building professional networks. Develop skills in self-assessment, time management, and adaptability to thrive in today's ever-evolving work environment.",
      duration:"4 Months"
    }
  ]
  return (
    <div className='container-fluid'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home courses={courses}/>} />
        <Route path='FSD' element={<Fullstack courses={courses}/>}/>
        <Route path='DS' element={<Datascience courses={courses}/>}/>
        <Route path='CS' element={<Cybersecurity courses={courses}/>}/>
        <Route path='Career' element={<Career courses={courses}/>}/>
      </Routes>
    </div>
  );
};

export default App;