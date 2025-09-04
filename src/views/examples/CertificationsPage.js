import React from 'react';
import { useEffect } from 'react';
import Resume from "assets/img/Arnav_Kaushal_2025_ML.pdf";
import CredlyBadges from './CredlyBadges';

function ProjectsPage(){
    useEffect(() => {
        document.title = "Certifications";
    }, []);

    const [artActiveInfoBar, setArtActiveInfoBar] = React.useState(false);
    const [artActiveMenuBar, setArtActiveMenuBar] = React.useState(false);

    const credlyBadges = [
        {
        title: 'Vue.js Essentials',
        image: 'https://images.credly.com/images/f03ae314-65bc-44f3-8fcd-3dda6fd9ddd4/c783df0b-00ad-4d44-b30a-7f8dab695565.png',
        link: 'https://www.credly.com/badges/962c8074-f478-4be3-992a-7fab0c4e6f2a'
      }, {
        title: 'Angular 18+',
        image: 'https://images.credly.com/size/680x680/images/89bde5df-b0e3-40dc-825e-f350f25ce7d2/9264989c-a675-4991-914a-d4d61a7b782f.png',
        link: 'https://www.credly.com/badges/e7edf591-2e45-4c73-919a-17f9848b8b95'
      },
        {
        title: 'TypeScript Essentials',
        image: 'https://images.credly.com/size/680x680/images/91982e17-e239-4e95-888a-7e1f473b1ca2/59e735e3-1556-4e93-82da-e8dda5f0a57f.png',
        link: 'https://www.credly.com/badges/12fb6411-f471-4770-a74e-be6f149e09ec'
      },
      {
        title: 'FastAPI REST Mastery',
        image: 'https://images.credly.com/images/0da575c8-001b-475f-b9f7-157f6e942ae0/7ed24965-1223-49fd-86b1-8d8cb6bab5a0.png',
        link: 'https://www.credly.com/badges/9af29f22-c8bf-468e-85c1-238b1a616e2b'
      },
       {
        title: 'Reactive Spring',
        image: 'https://images.credly.com/size/680x680/images/88706d14-6dea-403f-a927-a95d043cfae8/1206a736-3eb4-429a-943d-2e491c64c0be.png',
        link: 'https://www.credly.com/badges/be50a73d-94a0-4bd0-b0c8-412a529688ed'
      },  {
        title: 'NodeJS - The Complete Guide',
        image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-ab5835fa-3591-4ef7-83e8-73688e5bb928.jpg?v=1642507259000',
        link: 'https://www.udemy.com/certificate/UC-ab5835fa-3591-4ef7-83e8-73688e5bb928/'
      },
      {
        title: 'Spring & Spring Boot Fund.',
        image: 'https://images.credly.com/size/680x680/images/d0644db7-b33a-4338-9b0c-e397feb666e1/0dd025bd-a8d0-4b46-a6ff-01b752881dbb.png',
        link: 'https://www.credly.com/badges/a846d16f-6b85-4446-9d02-e40507cd6737'
      },
      {
        title: 'IBM Introduction to Machine Learning - Specialization',
        image: 'https://images.credly.com/size/680x680/images/0d184873-3dd0-49fc-bb84-8734f9061a07/IBM_Intro_to_Machine_Learning_-_Coursera_Specialization.png',
        link: 'https://www.credly.com/badges/18366399-4003-414d-a647-3b5e4ccd3f23'
      }, {
        title: 'Unsupervised Machine Learning',
        image: 'https://images.credly.com/size/680x680/images/3c8bc106-3635-45d0-ab5a-736adb87595e/image.png',
        link: 'https://www.credly.com/badges/05cfb12c-8251-46ac-9c0f-bedf7428b20c'
      },
     {
        title: 'Supervised Machine Learning: Classification',
        image: 'https://images.credly.com/size/680x680/images/19878499-c3d3-4e67-8b97-8ec273187ccd/image.png',
        link: 'https://www.credly.com/badges/2e6ed830-46c4-419a-a2f6-1b5a64095a63'
      },
      {
        title: 'Supervised Machine Learning: Regression',
        image: 'https://images.credly.com/size/680x680/images/5ce4d440-596a-4598-a106-358e64c05e5e/image.png',
        link: 'https://www.credly.com/badges/c5af26e2-864f-4bd1-bb6a-332b0d62b2d5'
      }, {
        title: 'Databases and SQL for Data Science',
        image: 'https://images.credly.com/size/680x680/images/f2573aac-d21c-483d-acda-afaa366b4f51/image.png',
        link: 'https://www.credly.com/badges/8d43351f-9e1a-406b-9e9f-f37530b4aff9'
      },
      {
        title: 'Machine Learning Foundations',
        image: 'https://images.credly.com/size/680x680/images/a636f6a1-bacf-4819-9239-5d9907e85708/f5d7b910-6d3b-40f6-a879-1d3a945a2045.png',
        link: 'https://www.credly.com/badges/5ce779de-10e9-47c4-bfc5-3b0f6b7b9cc3'
      }
    ];

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
                                    
                                    <div className="scroll-content" style={{transform: 'translate3d(0px, 0px, 0px)'}}>

                                        {/*Container fluid section -- 1*/}
                                        <div className="container-fluid-projects">
        
                                            <div className="row p-60-0 p-lg-30-0 p-md-15-0">

                                                <div className="col-lg-12">
                                                  
                                                    <div className="art-filter mb-30" style={{padding: '20px'}}>
                                                         
                                                         <a id={'linkAll'} href="#" data-filter="*" className="art-link art-current">My Credentials</a>
                                                          
                                                    </div>
                                                    
                                                </div>

                                                {/*Container fluid section -- 4*/}
                                                <div className="container-fluid mt-5">
        
                                                    <div className="row px-3">
                                                        <CredlyBadges badges={credlyBadges} />
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
                                    <a href="/projects-page">Portfolio</a>
                                    <a href="/portfolio-page">Home</a>
                                    <a href="/certifictions-page">Certifications</a>
                                    <a href="/history-page">History</a>
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


export default ProjectsPage;