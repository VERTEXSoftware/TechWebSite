import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Home extends Component {
    render(){
        return (
    <header className="header">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/blog">Blog</Link>
    </header>
        )
    }

}