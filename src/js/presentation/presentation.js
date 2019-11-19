import React, { useContext, useState } from 'react';
import { UserContext } from '../../UserContext';
import styles from './presentation.module.css';

import geek from '../../img/presentation/4geeks.png';
import bootstrap from '../../img/presentation/bootstrap.png';
import js from '../../img/presentation/js.png';
import python from '../../img/presentation/python.png';
import react from '../../img/presentation/react.png';
import demo from '../../img/presentation/demo.png';
import marcelo from '../../img/presentation/marcelo.jpg';
import alejandro from '../../img/presentation/alejandro.jpg';
import paolo from '../../img/presentation/paolo.png';
import hernan from '../../img/presentation/hernan.jpeg';
import colby from '../../img/presentation/colby.jpeg';
import bridget from '../../img/presentation/bridget.jpeg';
import daniela from '../../img/presentation/daniela.jpeg';
import iphone from '../../img/presentation/iphone.png';
import washer from '../../img/presentation/w2.png';
import nocoin from '../../img/presentation/nocoin.png';
import nocard from '../../img/presentation/nocard.png';
import angry from '../../img/presentation/angry.png';
import guyPhone from '../../img/presentation/guyPhone.png';
import idea from '../../img/presentation/idea.png';

import tortuga from '../../img/presentation/tortuga.gif';

import angryComputer from '../../img/presentation/angryComputer.png';
import happyCoder from '../../img/presentation/happyCoder.png';
import school from '../../img/presentation/school.png';

import google from '../../img/presentation/google.jpg';
import html from '../../img/presentation/html.png';
import paypal from '../../img/presentation/paypal.png';
import raspberry from '../../img/presentation/raspberry.png';
import flask from '../../img/presentation/flask.png';
import mysql from '../../img/presentation/mysql.png';

const Presentation = () => {

    const {windowHeight} = useContext(UserContext);
    const [goTurtle, setGoTurtle] = useState('d-none');

    return (
        <section className={styles.section}>
            <div id="one" className={styles.firstPage} style={{height: windowHeight}}>
                <div className={styles.headerPage1}>
                    <div className={styles.icon4geeks}>
                        <img src={geek} width="100px" alt="mm"/>
                    </div>
                    <h1><i className={["fas fa-info align-top", styles.i].join(' ')}></i>Wash Smart Laundromat</h1>
                    <br/><br/>
                    <h2 className="text-right p-5">
                        Victor F. Mori And Samir Benzada
                    </h2>
                </div>
                <h2 className="text-center pt-4">Laundry services web application</h2>
                <br/>
                <div className={styles.bouttons}>
                    <a href="#two" className={["scroll mr-3", styles.buttonStyle].join(' ')}>next</a>
                </div>
            </div>
            <div id="two" className='pt-5' style={{height: windowHeight}}>
                <div className={styles.header}>
                    <h1 className={styles.title}>VICTOR'S STORY</h1>
                </div>
                <div className={["container mt-5",styles.listNumber].join(' ')}>
                    <b>Victor F. Mori.</b>  From Peru 🇵🇪
                    <br/>
                    <br/>
                    <i class="fas fa-quote-left mr-2"></i>
                    Before I started the 4Geeks Academy program, I was an Analyst/Program for an iSeries environment, using the programming languages as RPG-IV and Free-Format. I decided to update my programming skills with the new technologies and 4Geeks Academy was a good decision.  Because, right now I can use HTML, CSS, javaScript and React.js as Frontend and Phyton/Flask and MySql as Backend, to build web applications.  
                    <i class="fas fa-quote-right ml-2"></i>
                </div>
                <br/>
                <div className={styles.bouttons}>
                    <a href="#one" className={["scroll mr-3", styles.buttonStyle].join(' ')}>previous</a>
                    <a href="#three" className={["scroll mr-3", styles.buttonStyle].join(' ')}>next</a>
                </div>
            </div>
            <div id="three" className='pt-5' style={{height: windowHeight}}>
                <div className={styles.header}>
                    <h1 className={styles.title}>SAMIR'S STORY</h1>
                </div>
                <div className={["container mt-5",styles.listExperience].join(' ')}>
                    <b>Samir Benzada. </b> From France 🇫🇷
                    <br/>
                    <br/>
                    <i class="fas fa-quote-left mr-2"></i>
                    I've been learning how to code by myself for 4 years, mostly HTML, CSS and PHP. I've been struggling a lot trying to make a dynamic website, so I started to look for a coding school in Miami and I found the Best One 4Geeks Academy. And thanks to the program they offer, the Income Sharing Agreement, I could enrol right away and Pay once I get a Job.
                    <i class="fas fa-quote-right ml-2"></i>
                </div>
                <br/>
                <div className={styles.bouttons}>
                    <a href="#two" className={["scroll mr-3", styles.buttonStyle].join(' ')}>previous</a>
                    <a href="#four" className={["scroll mr-3", styles.buttonStyle].join(' ')}>next</a>
                </div>
            </div>

            <div id="four" className='pt-5' style={{height: windowHeight}}>
                <div className={styles.header}>
                    <h1 className={styles.title}>WHAT IS &nbsp; <i className={["fas fa-info align-top", styles.i].join(' ')}></i>Wash</h1>
                </div>
                <h1 className="text-center mt-2">Make Your Laundry Easier, Smarter and Efficient.</h1>
                <div className="row mt-2">
                    <div className="col text-right">
                        <img src={iphone} width="45%" alt="iphone"/>
                    </div>

                    <div className="col text-left">
                        <img src={washer} width="35%" alt="iphone"/>
                    </div>
                </div>
                <br/>
                <div className={styles.bouttons}>
                    <a href="#three" className={["scroll mr-3", styles.buttonStyle].join(' ')}>previous</a>
                    <a href="#five" className={["scroll mr-3", styles.buttonStyle].join(' ')}>next</a>
                </div>
            </div>

            <div id="five" className='pt-5' style={{height: windowHeight}}>
            <div className={styles.header}>
                    <h1 className={styles.title}>HOW &nbsp; <i className={["fas fa-info align-top", styles.i].join(' ')}></i>Wash WORKS</h1>
                </div>
                <h1 className="text-center mt-2">Website/Application Helps you forget the complexity and hustle of using Coins and Cards.</h1>
                <div className="row mt-2 text-center">
                    <div className="col">
                        <img src={nocoin} width="45%" alt="iphone"/>
                    </div>
                    <div className="col">
                        <img src={nocard} width="55%" alt="iphone"/>
                    </div>
                    <div className="col">
                        <img src={iphone} width="55%" alt="iphone"/>
                    </div>
                </div>
                <br/>
                <div className={styles.bouttons}>
                    <a href="#four" className={["scroll mr-3", styles.buttonStyle].join(' ')}>previous</a>
                    <a href="#six" className={["scroll mr-3", styles.buttonStyle].join(' ')}>next</a>
                </div>
            </div>

            <div id="six" className='pt-5' style={{height: windowHeight}}>
                <div className={styles.header}>
                    <h1 className={styles.title}>WHY &nbsp; <i className={["fas fa-info align-top", styles.i].join(' ')}></i>Wash?</h1>
                </div>
                <h1 className="text-center mt-2">When you forgot your wallet and or your card to pay, you still can use your phone!</h1>
                <div className="row mt-2 text-center">
                    <div className="col">
                        <img src={angry} width="45%" alt="iphone"/>
                    </div>
                    <div className="col">
                        <img src={idea} width="45%" alt="iphone"/>
                    </div>
                    <div className="col">
                        <img src={guyPhone} width="105%" alt="iphone"/>
                    </div>
                </div>
                <br/>
                <div className={styles.bouttons}>
                    <a href="#five" className={["scroll mr-3", styles.buttonStyle].join(' ')}>previous</a>
                    <a href="#seven" className={["scroll mr-3", styles.buttonStyle].join(' ')}>next</a>
                </div>
            </div>

            <div id="seven" className='pt-5' style={{height: windowHeight}}>
                <div className={styles.header}>
                    <h1 className={styles.title}>BEHIND THE PROJECT</h1>
                </div>
                <h1 className="text-center mt-2">OUR STORY...</h1>
                <div className="row mt-2 text-center">
                    <div className="col">
                        <img src={angryComputer} width="55%" alt="iphone"/>
                        <br/>
                        <h3>Before 4Geeks</h3>
                    </div>
                    <div className="col">
                        <img src={school} width="55%" alt="iphone"/>
                        <br/>
                        <h3>4Geeks Academy</h3>
                    </div>
                    <div className="col">
                        <img src={happyCoder} width="55%" alt="iphone"/>
                        <br/>
                        <h3>After 4Geeks</h3>
                    </div>
                </div>
                <br/>
                <div className={styles.bouttons}>
                    <a href="#six" className={["scroll mr-3", styles.buttonStyle].join(' ')}>previous</a>
                    <a href="#height" className={["scroll mr-3", styles.buttonStyle].join(' ')}>next</a>
                </div>
            </div>

            <div id="height" className='pt-5' style={{height: windowHeight}}>
                <div className={styles.header}>
                    <h1 className={styles.title}>HOW WAS IT BUILT</h1>
                </div>
                <div className="m-3 text-center">
                    <img className="m-2" src={html} alt="html" width="100px" />
                    <img className="m-2" src={bootstrap} alt="bootstrap" width="100px" />
                    <img className="m-2" src={js} alt="js" width="100px" />
                    <img className="m-2" src={react} alt="react" width="100px" />
                    <img className="m-2" src={python} alt="python" width="100px" />
                    <img className="m-2" src={flask} alt="flask" width="100px" />
                    <img className="m-2" src={mysql} alt="mysql" width="100px" />
                    <img className="m-2" src={raspberry} alt="raspberry" width="100px" />
                    <img className="m-2" src={paypal} alt="paypal" width="100px" />
                    <img className="m-2" src={google} alt="google" width="100px" />
                </div>
                <div className="container">
                    <ul className={["mt-5",styles.listExperience].join(' ')}>
                        <li>
                            We are using HTML, CSS, Bootstrap,javaScript, React.js, Phyton3, Flask, MySql Database and Raspberry Pi.
                        </li>
                        <li>
                            We choose to use as Third Party, Google Maps, PayPal payment method.
                        </li>
                    </ul>
                </div>
                <br/>
                <div className={styles.bouttons}>
                    <a href="#seven" className={["scroll mr-3", styles.buttonStyle].join(' ')}>previous</a>
                    <a href="#nine" className={["scroll mr-3", styles.buttonStyle].join(' ')}>next</a>
                </div>
            </div>

            <div id="nine" className='pt-5' style={{height: windowHeight}}>
                <div className={styles.header}>
                    <h1 className={styles.title}>DEMO TIME</h1>
                </div>
                <div className="container mt-2">
                    <img src={demo} alt="demo" width="100%" height="100%" />
                </div>
                <br/>
                <div className={styles.bouttons}>
                    <a href="/" className={["scroll mr-3", styles.buttonStyle].join(' ')} style={{color:"black"}}>DEMO</a>
                    <a href="#height" className={["scroll mr-3", styles.buttonStyle].join(' ')}>previous</a>
                    <a href="#ten" className={["scroll mr-3", styles.buttonStyle].join(' ')}>next</a>
                </div>
            </div>

            <div id="ten" className='pt-5' style={{height: windowHeight}}>
                <div className={styles.header}>
                    <h1 className={styles.title}>THANK YOU</h1>
                </div>
                <div className="container">
                    <ul className={["mt-5",styles.listExperience].join(' ')}>
                        <h2>A Big Thank you to 4Geeks Academy <img src={geek} width="100px" alt="mm"/></h2>
                        <li>
                            Marcelo and  Alejandro.
                        </li>
                        <li>
                            Colby, Paolo and Hernán.
                        </li>
                        <li>
                            Daniela and  Bridget.
                        </li>
                    </ul>
                    <div className={[styles.tortuga, goTurtle].join(' ')}>
                        <img className="m-2" src={bridget} width="100px" alt="bridget"/>
                        <img className="m-2" src={daniela} width="100px" alt="daniela"/> 
                        <img className="m-2" src={hernan} width="100px" alt="hernan"/>
                        <img className="m-2" src={paolo} width="100px" alt="paolo"/>
                        <img className="m-2" src={colby} width="100px" alt="colby"/>
                        <img className="m-2" src={alejandro} width="110px" alt="alejandro"/>
                        <img className="m-2" src={marcelo} width="120px" alt="marcelo"/>
                        <img src={tortuga} width="150px" alt="tortuga" />
                    </div>
                </div>
                <br/>
                <div className={styles.bouttons}>
                    <a href="#nine" className={["scroll mr-3", styles.buttonStyle].join(' ')}>previous</a>
                    <button onClick={() => setGoTurtle('')} className={["scroll mr-3", styles.buttonStyle].join(' ')}>Thank You</button>
                </div>
            </div>
                
            
        </section>
    );
};

export default Presentation;