import React from 'react'
import { Link,   Route, useMatch } from 'react-router-dom';
import Cat from './components/page/Cat';

const Category = () => {
    const {url, path} = useMatch();

    
    return (
        <>
            <h1 style={{ backgroundColor: "pink" }}>CATEGORY</h1>
            
            
                <Route path={path}>
                
        
            <ul >
                <nav>
                    <li ><Link to={`${url}/121`}>Men</Link></li>
                     <li><Link to={`${url}/123`}>Women</Link></li>
                    <li><Link to={`${url}/122`}>Kids</Link></li> 
                    
                </nav>
                
                
            </ul>
            </Route>
            <Route path={`${path}/:id`} element={<Cat />} />
        </>
    );
}

export default Category;





