import React from 'react';
import './App.scss';

import educationData from './data/education';
import experienceData from './data/experience';

import Experience from './components/experience'
import Education from './components/education'

// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/css/boostrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {




    return (
        <div className="App container-fluid">
            <div className='bg-image-container'>
                <img src='./images/bg.jpg' alt={'Background'}/>
            </div>

            <div className='jumbotron text-center position-relative'>
                <img src='./images/amit-kumar.jpg' className={'rounded-circle photo img-fluid shadow-lg'}
                     alt={'Amit Kumar'}/>
                <h2 className='text-primary'>Amit Kumar</h2>
                <h4 className='text-secondary'>Full Stack Software Professional</h4>
                <h5 className='text-secondary'>React | Java | AWS</h5>

            </div>

            <br/>

            <div className="card text-secondary detail-section div-center shadow">
                <div className="card-body text-left">
                    <h4 className="card-title text-primary">About</h4>
                    {/*<hr/>*/}
                    <div>
                        <p>Software professional with 5.5 years of experience in full-stack system design and software
                            development across Banking and Advertising domains at Amazon, Morgan Stanley and Adobe.</p>

                        <ul>
                            <li>Proficient in server-side technologies like Java-Spring Ecosystem, Object Oriented
                                Design.</li>
                            <li>Proficient in Angular/React web development ecosystem.</li>
                            <li>Hands-on experience in AWS, Relational and NoSQL Databases.</li>
                            <li>Expert at data structure and algorithms, clean system design.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <br/>
            <br/>

            <div className="card text-secondary detail-section div-center shadow">
                <div className="card-body text-left">
                    <h4 className="card-title text-primary">Experience</h4>
                    <hr/>
                    <Experience experience={experienceData[0]}>
                        <div className='pt-3'>Working for Amazon advertisement design services platform. Our application is a full
                            stack application which provides raw assets and final creative spec exchange,
                            feedback and approval workflows between advertisers and amazon creative designers.
                            It is a full stack application using Java, React, Redux, AWS.
                            I am contributing to all tiers of development.
                        </div>
                    </Experience>



                    <Experience experience={experienceData[1]}>
                        <div className='pt-3'>
                            <ul className='list-unstyled'>
                                <li>Design architecture and development of Settlement instruction renovation program, which is a repository for creating, maintaining and settlement instructions. Settlement instructions are used for trade enrichment, settlement and confirmation.</li>
                                <li>Defining the UI application architecture, selecting appropriate framework, dev environment setup, hiring and leading UI team during the implementation process.</li>
                                <li>Contributed to Real estate investment tracking application of Morgan Stanley.
                                </li>
                                <li>Designed and developed a very well appreciated Google Map integrated web application for Morgan Stanley Real Estate Investments (Similar to 99acres)</li>
                            </ul>
                        </div>
                    </Experience>

                    <Experience experience={experienceData[2]}>
                        <div className='pt-3'>
                            <ul className='list-unstyled'>
                                <li>Automated the mechanism to add peer review comments on violation of Adobe code policy against new perforce check- ins through the implementation of wrapper over code collaborator API</li>
                                <li>Developed and deployed a Bugbot using Perl for collecting unallocated bugs for a particular project and reporting to management</li>
                            </ul>
                        </div>
                    </Experience>
                </div>
            </div>

            <br/>
            <br/>
            
            <div className="card text-secondary detail-section div-center shadow">
                <div className="card-body text-left">
                    <h4 className="card-title text-primary">Education</h4>
                    <hr/>
                    <Education education={educationData[0]}>
                        <div>Rewarded with Best innovation prize in Annual National technical festival (technex '07)
                            for presentation of Digital Economy concept with working model.
                        </div>
                    </Education>
                    <Education education={educationData[1]}>
                        <div>
                            Attended Courses on Artificial Intelligence, Cryptography, Distributed systems,
                            Software engineering best practices.
                            Also grabbed excellent grip on data structures, algorithms and Core Java.
                        </div>
                    </Education>

                </div>
            </div>

            <br/>
            <br/>

            <footer className='card-footer'>
                <div>

                </div>
            </footer>
        </div>
    );
}

export default App;
