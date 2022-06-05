import React from 'react'
import { Link, Route,Routes } from 'react-router-dom';

const Category=  (match,location,history) => {
    // console.log(props);
  return (
    <>
      <h1 style={{backgroundColor: "pink"}}>CATEGORY</h1>
      <ul >
          <li ><Link to={`${match.path}/men`}>Men</Link></li>
          <li><Link to={`${match.path}/women`}>Women</Link></li>
          <li><Link to={`${match.path}/kids`}>Kids</Link></li> 
          <li><Link to={`${match.path}/homedecor`}>HomeDecor</Link></li>
      </ul>
    
        <Routes>
            <Route path= {`${match.path}/men`} element={<Mens/>} />
        </Routes> 
    </>
  );
}

export default Category;

 function Mens(){
    return(
        <>

             <p>hi</p>
        </>
     );
 }
 


