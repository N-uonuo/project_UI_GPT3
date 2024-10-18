import React from 'react';
import './Brand.css';
import {google, slack, atlassian, dropbox, shopify} from './imports';

const Brand = () => {
    return (
        <div className="gpt3__brand section__padding ">
            <div className="icon">
                <a href="https://www.google.com" target="_blank" rel="noreferrer"><img src={google} alt="Google"/></a>
            </div>
            <div className="icon">
                <img src={slack} alt="Slack"/>
            </div>
            <div className="icon">
                <img src={atlassian} alt="Atlassian"/>
            </div>
            <div className="icon">
                <img src={dropbox} alt="Dropbox"/>
            </div>
            <div className="icon">
                <img src={shopify} alt="Shopify"/>
            </div>
        </div>
    );
};

export default Brand;