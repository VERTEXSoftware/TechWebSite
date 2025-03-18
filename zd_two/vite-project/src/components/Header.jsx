import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Home extends Component {
    render(){
        return (
    <header className="fixed top-0 left-0 right-0 w-full h-[5%] bg-red-800 text-white ">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/blog">Blog</Link>
    </header>
        )
    }

}