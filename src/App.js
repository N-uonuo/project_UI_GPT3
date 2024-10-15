import React from 'react';
import {Brand, CTA, Feature, Navbar} from "./components";
import {Blog, Footer, Header, Possibility, WhatGPT3} from "./containers";
import './App.css';

const APP = () => {
    return (
        <div className="APP">
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
            </div>
            <Brand/>
            <WhatGPT3/>
            <Feature/>
            <Possibility/>
            <CTA/>
            <Blog/>
            <Footer/>
        </div>
    );
};

export default APP;