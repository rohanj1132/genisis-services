import React from 'react';
import PageTitle from '../components/PageTitle';

const AboutPage = () => (
    <div>
        <PageTitle title='About Us' />
        <div className='container'>
            <blockquote className='blockquote font-italic'>
                Genisis Services is India's driving full-benefit cooking and occasions organization with an across the country arrangement
                and a committed group having expertise in all parts of the movement. We are a group of specialists with an abundance of learning
                and ability to give our clients remarkable administration and exceptional experience.
            </blockquote>
            <p>
                We offer the best tasting sustenance and a lot of it. Under the rudder of our Executive Chef, our culinary group begins with the freshest fixings, utilizing precisely tried and taste endorsed formulas. Using one of a kind asset, like our custom-assembled versatile kitchens, we can convey simply arranged menus to any setting.
            </p>
            <p>
                With an enthusiasm for sorting out occasions in our DNA, we are pleased with our broad learning, our scope of administrations, our very much prepared and spurred group, the chose occasion experts and the cutting-edge specialty of providing food and occasion administration benefit.
            </p>
            <div>
                <h3>Values</h3>
                <ul>
                    <li>Excellent Customer Service Skills</li>
                    <li>Excellent Service Delivery</li>
                    <li>Excellent F&B Knowledge</li>
                    <li>Excellent, Balanced Food</li>
                    <li>Excellent Motivated Personnel Teams</li>
                    <li>Excellent Long Term Client Partnership & Trust </li>
                </ul>
            </div>
        </div>
    </div>
)

export default AboutPage