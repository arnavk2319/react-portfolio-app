import React from 'react';
import Resume from "assets/img/Arnav_Kaushal_2025_ML.pdf";

function HistoryPage(){
    const [artActiveInfoBar, setArtActiveInfoBar] = React.useState(false);
    const [artActiveMenuBar, setArtActiveMenuBar] = React.useState(false); 

    return(
        <>
            {/* <ExamplesNavbar /> */}
            <div className="art-app">

                <div className="art-mobile-top-bar">

                </div>

                <div className="art-app-wrapper">
                    <div className="art-app-container">
                        <div className={artActiveInfoBar ? "art-info-bar art-active" : "art-info-bar"}>
                            <div className="art-info-bar-frame">

                                <div className="art-info-bar-header">
                                    <a className="art-info-bar-btn" onClick={() => artActiveInfoBar ? setArtActiveInfoBar(false) :  setArtActiveInfoBar(true)} href="#." >
                                        <i className="fa fa-ellipsis-v"></i>
                                    </a>
                                </div>

                                <div className="art-header">
                                    <div className="art-avatar">
                                        <div data-fancybox="avatar" style={{ backgroundImage: "url(" + require("assets/img/default-avatar.png") + ")",}} href="#." className="art-avatar-curtain">
                                            <img style={{ backgroundImage: "url(" + require("assets/img/default-avatar.png") + ")",}} alt="" />
                                        </div>
                                    </div>

                                    <h5 className="art-name mb-10">
                                        <a href="assets/img/default-avatar.png">Arnav Kaushal</a>
                                    </h5>

                                    <div className="art-sm-text">
                                        Full Stack Software Engineer
                                        <br></br>
                                        MERN / MEAN / VJSS
                                    </div>
                                </div>
                                
                                <div id="scrollbar2" className="art-scroll-frame-profile-sidebar"  tabIndex="-1" style={{outline: 'none', display: 'block', position: 'relative'}}>
                                
                                    <div className="art-table p-60-0">
                                        <ul>
                                            <li>
                                                <h6>Residence:</h6><span>Canada</span>
                                            </li>
                                            
                                            <li>
                                                <h6>City:</h6><span>Toronto</span>
                                            </li>
                                            
                                            <li>
                                                <h6>Age:</h6><span>29</span>
                                            </li>
                                        </ul>
                                    </div>
                               
                               
                                    <div className="art-ls-divider"></div>

                                  
                                    <div className="art-lang-skills p-30-0">                                  
                                        <div className="art-lang-skills-item">
                                            <div id="circleprog1" className="art-cirkle-progress">
                                            <svg viewBox="0 0 100 100" style={{display: 'block', width: '100%'}}>
                                                <path d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93" stroke="#eee" strokeWidth="7" fillOpacity="0">
                                                </path>
                                                <path d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93" stroke="#555" strokeWidth="7" fillOpacity="0">
                                                </path>
                                            </svg>

                                            <div className="progressbar-text" style={{position: 'relative', left: '50%', top: '-32px', padding: '0px', margin: '0px', color: '#ffffff'}}>100</div>
                                            </div>
                                            
                                            <h6 style={{marginTop: '-20px'}}>English</h6>
                                        </div>

                                        <div className="art-lang-skills-item">
                                            <div id="circleprog2" className="art-cirkle-progress">
                                            <svg viewBox="0 0 100 100" style={{display: 'block', width: '100%'}}>
                                                <path d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93" stroke="#eee" strokeWidth="7" fillOpacity="0">
                                                </path>
                                                <path d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93" stroke="#555" strokeWidth="7" fillOpacity="0">
                                                </path>
                                            </svg>

                                            <div className="progressbar-text" style={{position: 'relative', left: '50%', top: '-32px', padding: '0px', margin: '0px', color: '#ffffff'}}>100</div>
                                            </div>
                                            
                                            <h6 style={{marginTop: '-20px'}}>Hindi</h6>
                                        </div>
                                                            
                                    </div>

                                    <div className="art-ls-divider2"></div>

                                    <div className="art-hard-skills p-30-15">
                 
                                        <div className="art-hard-skills-item">
                                            <div className="art-skill-heading">  
                                                <h6>Python, FastAPI, pytest</h6>
                                            </div>
                                            
                                            <div className="art-line-progress">
                                                
                                                <div id="lineprog1" style={{position: 'relative'}}>
                                                    <svg viewBox="0 0 100 1.72" preserveAspectRatio="none" style={{width: '90%', height: '100%', backgroundColor: '#b3003b'}} >                                                   
                                                    </svg>
                                                                            
                                                    <div className="progressbar-text" style={{position: 'absolute', left: '50%', top: '50%', padding: '0px', margin: '0px', transform: 'translate(-50%, -50%)', color: 'rgba(85, 85, 85)'}}>90 %
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                        

                                        
                                        <div className="art-hard-skills-item">
                                            <div className="art-skill-heading">
                                                
                                                <h6>TypeScript, Javascript (ES6)</h6>
                                            </div>
                                            
                                            <div className="art-line-progress">
                                                
                                            <div id="lineprog2" style={{position: 'relative'}}>
                                                <svg viewBox="0 0 100 1.72" preserveAspectRatio="none" style={{width: '80%', height: '100%', backgroundColor: '#b3003b'}} >                                                   
                                                </svg>
                                                    
                                                    <div className="progressbar-text" style={{position: 'absolute', left: '50%', top: '50%', padding: '0px', margin: '0px', transform: 'translate(-50%, -50%)', color: 'rgba(85, 85, 85)'}}>80 %
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                        

                                        
                                        <div className="art-hard-skills-item">
                                            <div className="art-skill-heading">
                                                
                                                <h6>Machine Learning, Data Science</h6>
                                            </div>
                                            
                                            <div className="art-line-progress">
                                                
                                            <div id="lineprog3" style={{position: 'relative'}}>
                                            <svg viewBox="0 0 100 1.72" preserveAspectRatio="none" style={{width: '75%', height: '100%', backgroundColor: '#b3003b'}} >                                                   
                                            </svg>
                                                    
                                                    <div className="progressbar-text" style={{position: 'absolute', left: '50%', top: '50%', padding: '0px', margin: '0px', transform: 'translate(-50%, -50%)', color: 'rgba(85, 85, 85)'}}>75 %
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                        

                                        
                                        <div className="art-hard-skills-item">
                                            <div className="art-skill-heading">
                                                
                                                <h6>Data Structures and Algorithms</h6>
                                            </div>
                                            
                                            <div className="art-line-progress">
                                                
                                            <div id="lineprog4" style={{position: 'relative'}}>
                                            <svg viewBox="0 0 100 1.72" preserveAspectRatio="none" style={{width: '70%', height: '100%', backgroundColor: '#b3003b'}} >                                                   
                                            </svg>
                                                    
                                                    <div className="progressbar-text" style={{position: 'absolute', left: '50%', top: '50%', padding: '0px', margin: '0px', transform: 'translate(-50%, -50%)', color: 'rgba(85, 85, 85)'}}>70 %
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                        

                                        
                                        <div className="art-hard-skills-item">
                                            <div className="art-skill-heading">
                                                
                                                <h6>Java, Spring Boot, Spring MVC</h6>
                                            </div>
                                            
                                            <div className="art-line-progress">
                                                
                                            <div id="lineprog5" style={{position: 'relative'}}>
                                            <svg viewBox="0 0 100 1.72" preserveAspectRatio="none" style={{width: '90%', height: '100%', backgroundColor: '#b3003b'}} >                                                   
                                            </svg>
                                                    
                                                    <div className="progressbar-text" style={{position: 'absolute', left: '50%', top: '50%', padding: '0px', margin: '0px', transform: 'translate(-50%, -50%)', color: 'rgba(85, 85, 85)'}}>90 %
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>

                                        <div className="art-hard-skills-item">
                                            <div className="art-skill-heading">
                                                
                                                <h6>Vue 2+, Angular 20+, React.js, Node.js</h6>
                                            </div>
                                            
                                            <div className="art-line-progress">
                                                
                                            <div id="lineprog5" style={{position: 'relative'}}>
                                                    <svg viewBox="0 0 100 1.72" preserveAspectRatio="none" style={{width: '80%', height: '100%', backgroundColor: '#b3003b'}} >                                                   
                                                    </svg>
                                                    
                                                    <div className="progressbar-text" style={{position: 'absolute', left: '50%', top: '50%', padding: '0px', margin: '0px', transform: 'translate(-50%, -50%)', color: 'rgba(85, 85, 85)'}}>80 %
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>

                                        <div className="art-hard-skills-item">
                                            <div className="art-skill-heading">
                                                
                                                <h6>SQL, NoSQL, ORM, ODM</h6>
                                            </div>
                                            
                                            <div className="art-line-progress">
                                                
                                            <div id="lineprog5" style={{position: 'relative'}}>
                                                    <svg viewBox="0 0 100 1.72" preserveAspectRatio="none" style={{width: '80%', height: '100%', backgroundColor: '#b3003b'}} >                                                   
                                                    </svg>
                                                    
                                                    <div className="progressbar-text" style={{position: 'absolute', left: '50%', top: '50%', padding: '0px', margin: '0px', transform: 'translate(-50%, -50%)', color: 'rgba(85, 85, 85)'}}>90 %
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                                                        
                                    
                                    <div className="art-ls-divider3"></div>
                                
                                    <ul className="art-knowledge-list p-15-0">

                                        <li>Bootstrap, Materialize, Sass, Less</li>
                                        
                                        <li>Jest, Jasmine Testing</li>
                                        
                                        <li>Gulp, Webpack, Grunt</li>
                                        
                                        <li>Git, GitLab CI/CD</li>

                                        <li>Data Engineering, Analysis & Modeling</li>

                                        <li>Machine Learning, MLOps & AI Engineering</li>
                                    </ul>

                                    <div className="art-ls-divider4"></div>

                                    <div className="art-links-frame p-15-15">

                                        <a href={Resume} target="_blank" rel="noopener noreferrer"  className="art-link" download>Download cv <i className="fas fa-download"></i></a>

                                    </div>
                                
                                </div>


                                <div className="art-ls-social">
                
                                    <a href="https://www.linkedin.com/in/arnav-k-7359b3170/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                                        
                                    <a href="#." target="_blank"><i className="fa fa-globe"></i></a>
                                        
                                    <a href="https://github.com/arnavk2319?tab=repositories" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                        
                                    <a href="mailto:arnav.kaushal800@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope"></i></a>
                                </div>

                            </div>

                        </div>









                        {/*This is the Central Main section from here on*/}
                        {/*--*/}
                        {/*00*/}

                        
                        <div className={ artActiveMenuBar ? "art-content art-active" : "art-content"}>

                            <div className="art-curtain"></div>

                            <div className="art-top-bg" style={{backgroundImage: 'url(https://elanta.app/nazar/arter-demo/img/bg.jpg)'}}>
           
                                <div className="art-top-bg-overlay"></div>
          
                            </div>

                            <div className="transition-fade" id="swup">
                                <div id="scrollbar" tabIndex="-1" className="art-scroll-frame" style={{outline: 'none'}}>
                                    
                                    <div className="scroll-content" style={{transform: 'translate3d(0px, 0px, 0px'}}>

                                        {/*Container fluid section -- 1*/}
                                        <div className="container-fluid">
        
                                            <div className="row p-60-0 p-lg-30-0 p-md-15-0">

                                                <div className="col-lg-6">

                                                    <div className="art-section-title">
                                                        
                                                        <div className="art-title-frame">
                                                           
                                                            <h4>Education</h4>

                                                        </div>
                                                        
                                                    </div>

                                                    <div className="art-timeline art-gallery">

                                                        <div className="art-timeline-item">
                                                            <div className="art-timeline-mark-light"></div>
                                                            <div className="art-timeline-mark"></div>

                                                            <div className="art-a art-timeline-content">
                                                                <div className="art-card-header">
                                                                    <div className="art-left-side">
                                                                        <h5>Carleton University</h5>
                                                                        <div className="art-el-suptitle mb-15">Master of Engineering (M. Eng)</div>
                                                                    </div>
                                                                    <div className="art-right-side">
                                                                        <span className="art-date">Sept 2018 - Jan 2020</span>
                                                                        {/* <span className="art-date">Sept 2018 - Jan 2020</span> */}
                                                                    </div>
                                                                </div>

                                                                <p style={{color: '#ffffff', fontSize: '12px'}}>Ottawa, Canada</p>

                                                                <p>Dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
                                                            </div>
                                                        </div>



                                                        <div className="art-timeline-item">
                                                            <div className="art-timeline-mark-light"></div>
                                                            <div className="art-timeline-mark"></div>

                                                            <div className="art-a art-timeline-content">
                                                                <div className="art-card-header">
                                                                    <div className="art-left-side">
                                                                        <h5>SRM IST</h5>
                                                                        <div className="art-el-suptitle mb-15">Bachelor of Technology (B. Tech)</div>
                                                                    </div>
                                                                    <div className="art-right-side">
                                                                        <span className="art-date">Sept 2014 - May 2018</span>
                                                                    </div>
                                                                </div>

                                                                <p style={{color: '#ffffff', fontSize: '12px'}}>Chennai, India</p>

                                                                <p>Dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>



                                                <div className="col-lg-6">

                                                    <div className="art-section-title">

                                                        <div className="art-title-frame">

                                                            <h4>Work History</h4>

                                                        </div>

                                                    </div>

                                                    <div className="art-timeline">

                                                        <div className="art-timeline-item">

                                                            <div className="art-timeline-mark-light"></div>
                                                            <div className="art-timeline-mark"></div>

                                                            <div className="art-a art-timeline-content">
                                                                <div className="art-card-header">
                                                                    <div className="art-left-side">
                                                                        <h5>SS&C Technologies</h5>
                                                                        <div className="art-el-suptitle mb-15">Software Engineer</div>
                                                                    </div>
                                                                    <div className="art-right-side">
                                                                        <span className="art-date">May 2022 - Present</span>
                                                                    </div>
                                                                </div>

                                                                <p style={{color: '#ffffff', fontSize: '12px'}}>Toronto, Canada</p>

                                                                <p>Developed and maintained responsive, enterprise-grade web applicaPons using Angular 18+, TypeScript, HTML5, SCSS, and Vue 2/Nuxt, Python enhancing user interacLon and reducing page load Pme by ~35%. </p>

                                                                <p>Engineered 5+ criLcal business modules (e.g., Payroll, Loans and Withdrawals, Statements and Transactions, Client Reporting, Tenant
                                                                Management) within a mulP-tenant SaaS fintech pla[orm, contribuLng to its adopLon by major clients and over $100M+ in processed transacLons.</p>

                                                                <p>Implemented and consumed RESTful APIs using Spring MVC, Spring Boot (ReacPve), Java, Postman, CURL, and handled complex SQL operaPons to opLmize data flow and backend performance</p>
                                                            </div>

                                                        </div>

                                                        <div className="art-timeline-item">

                                                            <div className="art-timeline-mark-light"></div>
                                                            <div className="art-timeline-mark"></div>

                                                            <div className="art-a art-timeline-content">
                                                                <div className="art-card-header">
                                                                    <div className="art-left-side">
                                                                        <h5>The AppLabb</h5>
                                                                        <div className="art-el-suptitle mb-15">Front-end Developer (Mobile and Web)</div>
                                                                    </div>
                                                                    <div className="art-right-side">
                                                                        <span className="art-date">Jan 2020 - May 2022</span>
                                                                    </div>
                                                                </div>

                                                                <p style={{color: '#ffffff', fontSize: '12px'}}>Toronto, Canada</p>

                                                                <p>Responsible for analysis, creation, implementation, maintenance and updating websites, mobile applications,
                                                                    landing pages using native technologies like Android, Native Web (JavaScript, jQuery, AJAX, HTML, CSS) and hybrid
                                                                    technologies like Flutter, AngularJS, implementing CRUD operations with integration of RESTful Web services.</p>
                                                            </div>

                                                        </div>


                                                        <div className="art-timeline-item">

                                                            <div className="art-timeline-mark-light"></div>
                                                            <div className="art-timeline-mark"></div>

                                                            <div className="art-a art-timeline-content">
                                                                <div className="art-card-header">
                                                                    <div className="art-left-side">
                                                                        <h5>The AppLabb</h5>
                                                                        <div className="art-el-suptitle mb-15">Developer Intern (Mobile & Web)</div>
                                                                    </div>
                                                                    <div className="art-right-side">
                                                                        <span className="art-date">May 2019 - August 2019</span>
                                                                    </div>
                                                                </div>

                                                                <p style={{color: '#ffffff', fontSize: '12px'}}>Toronto, Canada</p>

                                                                <p>Contribute to group meetings and provide status update on development tasks. Coordinating with the project management team.
                                                                    Doing usability testing and fixing bugs in existing websites, mobile applications. Exploring the documentation of new platforms, tools, SDKs for integration with mobile and web applications.</p>
                                                            </div>

                                                        </div>


                                                        <div className="art-timeline-item">

                                                            <div className="art-timeline-mark-light"></div>
                                                            <div className="art-timeline-mark"></div>

                                                            <div className="art-a art-timeline-content">
                                                                <div className="art-card-header">
                                                                    <div className="art-left-side">
                                                                        <h5>Velmenni</h5>
                                                                        <div className="art-el-suptitle mb-15">Mobile Developer Intern</div>
                                                                    </div>
                                                                    <div className="art-right-side">
                                                                        <span className="art-date">June 2017 - July 2017</span>
                                                                    </div>
                                                                </div>

                                                                <p style={{color: '#ffffff', fontSize: '12px'}}>New Delhi, India</p>

                                                                <p>Created a native Android Application, GraphView custom view and Camera API.
                                                                Performed debug and performance analysis of code and systems.
                                                                    Testing the application under various configurations.</p>
                                                            </div>

                                                        </div>


                                                        <div className="art-timeline-item">

                                                            <div className="art-timeline-mark-light"></div>
                                                            <div className="art-timeline-mark"></div>

                                                            <div className="art-a art-timeline-content">
                                                                <div className="art-card-header">
                                                                    <div className="art-left-side">
                                                                        <h5>Flex</h5>
                                                                        <div className="art-el-suptitle mb-15">Intern</div>
                                                                    </div>
                                                                    <div className="art-right-side">
                                                                        <span className="art-date">Dec 2016 - Jan 2017</span>
                                                                    </div>
                                                                </div>

                                                                <p style={{color: '#ffffff', fontSize: '12px'}}>Chennai, India</p>

                                                                <p>Implementing SQL queries on SQL Server Management Studio for data manipulation and optimization.
                                                                    Using the results of the queries to visualize the data using Tableau and integrating data visualization techniques to render live data.</p>
                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>



                                        {/*Container fluid section -- 2*/}
                                        <div className="container-fluid">

                                            <footer>
                                                <div>© 2025 Arnav Kaushal</div>
                                            </footer>

                                        </div>

            
                                    </div>
                                    
                                </div>   
                            </div>

                        </div>







                        {/*This is the Right Menu bar section from here on*/}
                        {/*--*/}
                        {/*00*/}

                        
                        <div className={artActiveMenuBar ? "art-menu-bar art-active" : "art-menu-bar"}>

                            <div className="art-menu-bar-frame">

                                <div className="art-menu-bar-header">
                
                                    <a className={artActiveMenuBar ? "art-menu-bar-btn art-active" : "art-menu-bar-btn"} href="#." onClick={() => artActiveMenuBar ? setArtActiveMenuBar(false) : setArtActiveMenuBar(true)}>                           
                                    &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<i className="fas fa-bars"></i>                                   
                                    </a>
                                    
                                </div>

                                <div className="art-current-page">
                                    <a href="/history-page">History</a>
                                    <a href="/portfolio-page">Home</a>
                                    <a href="/certifications-page">Certifications</a>
                                    <a href="/projects-page">Portfolio</a>                                  
                                    <a href="/contact-page">Contact</a>
                                </div>

                                <div className="art-scroll-frame">

                                    <nav id="swupMenu">                  
                                        <ul className="main-menu">
                                            <li className="menu-item"><a href="/portfolio">Home</a></li>
                                            
                                            <li className="menu-item"><a href="/projects">Portfolio</a></li>

                                            <li className="menu-item"><a href="/certifications">Certifications</a></li>
                                                                                        
                                            <li className="menu-item"><a href="/history">History</a></li>
                                            
                                            <li className="menu-item"><a href="/contact-me">Contact</a></li>
                                        </ul>                                           
                                    </nav> 

                                    <ul className="art-language-change">
                                        <li className="art-active-lang"><a href="#.">EN</a></li>
                                    </ul>

                                </div>

                            </div>

                        </div>






                    </div>

                </div>
            
            </div>
        </>
            
    );
}


export default HistoryPage;