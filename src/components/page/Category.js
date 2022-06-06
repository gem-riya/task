import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom';

const Category = (match, location, history) => {
    // console.log(props);
    return (
        <>
            <h1 style={{ backgroundColor: "pink" }}>CATEGORY</h1>
            <ul >
                <nav>
                    <li ><Link to='mens'>Men</Link></li>
                    <li><Link to='women'>Women</Link></li>
                    <li><Link to='kids'>Kids</Link></li>
                    <li><Link to={`${match.path}/homedecor`}>HomeDecor</Link></li>
                </nav>
                 <Outlet />
                
            </ul>

        </>
    );
}

export default Category;





