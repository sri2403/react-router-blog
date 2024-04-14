import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
            <nav className="navbar navbar-expand-lg ">
                <ul className='navbar list-inline mx-auto mb-2 mb-lg-0 p-4'>
                    <li className="mx-5 list-inline-item"><Link to="/"><h5>ALL</h5></Link></li>
                    <li className="mx-5 list-inline-item"><Link to="FSD"><h5>FULL STACK DEVELOPMENT</h5></Link></li>
                    <li className="mx-5 list-inline-item"><Link to="DS"><h5>DATA SCIENCE</h5></Link></li>
                    <li className="mx-5 list-inline-item"><Link to="CS"><h5>CYBER SECURITY</h5></Link></li>
                    <li className="mx-5 list-inline-item"><Link to="Career"><h5>CAREER</h5></Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;