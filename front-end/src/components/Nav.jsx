import React from "react";

import { Link,useNavigate} from 'react-router-dom'

const Nav = () =>{
    const navigate = useNavigate();

    return(
        <ul className='nav-ul'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to ="/add " >Add Product</Link></li>
        <li><Link to ="/update ">Update Product</Link></li>
        <li><Link to ="/profile">profile</Link></li>
        <li><Link to = "/Login">Login</Link></li>
        <li><Link to ="/about">About</Link></li>
        </ul>
    )
}

export default Nav