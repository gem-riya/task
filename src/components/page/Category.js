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
                    <li><Link to={`${match.path}/women`}>Women</Link></li>
                    <li><Link to={`${match.path}/kids`}>Kids</Link></li>
                    <li><Link to={`${match.path}/homedecor`}>HomeDecor</Link></li>
                </nav>
                <Outlet />
            </ul>

            {/* <Routes>
            <Route path= {`${match.path}/men`} element={<Mens/>} />
        </Routes>  */}
        </>
    );
}

export default Category;

//  function men(){
//     return(
//         <>

//              <p>hi</p>
//              <nav>
//              <Link to="s">S</Link>
//              </nav>
//              <Outlet/>
//         </>
//      );
//     }



