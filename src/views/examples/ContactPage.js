import React from 'react';
import Resume from "assets/img/Arnav_Kaushal_2025_ML.pdf";
import DetailsCard from './DetailsCard';

function ContactPage(){
    const [artActiveInfoBar, setArtActiveInfoBar] = React.useState(false);
    const [artActiveMenuBar, setArtActiveMenuBar] = React.useState(false);

    const contactDetails = [
      { label: "Email", value: "arnav.kaushal800@gmail.com", link: "mailto:arnav.kaushal800@gmail.com" },
      { label: "Personal", value: "+1 8732883330", link: "tel:+18732883330" },
      { label: "Skype", value: "live:arnavkaushal", link: "skype:live:arnavkaushal?chat" }
    ];

    const locationDetails = [
      { label: "Country", value: "Canada" },
      { label: "City", value: " Toronto" },
      { label: "Province", value: "Ontario" }
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
                                    
                                    <div className="scroll-content" style={{transform: 'translate3d(0px, 0px, 0px'}}>

                                        {/*Container fluid section -- 1*/}
                                        <div className="container-fluid">
        
                                            <div className="row p-60-0 p-lg-30-0 p-md-15-0">

                                                <div className="col-lg-12">
                                                    
                                                    <div className="art-section-title">

                                                        <div className="art-title-frame">
                                                            
                                                            <h4>Contact information</h4>

                                                        </div>
                                                   
                                                    </div>

                                                </div>    

                                                <div className="col-lg-6 mb-4 mb-md-0">
                                                         
                                                   <DetailsCard details={contactDetails} />
                                                         
                                                </div>
                                                     
                                                     
                                                <div className="col-lg-6 mt-3 mt-md-0">
                                                    <DetailsCard details={locationDetails} />
                                                         
                                                </div>


                                                <div className="col-lg-12 mt-4">

                                                     
                                                    <div className="art-section-title">
                                                     
                                                        <div className="art-title-frame">
                                                            
                                                            <h4>Get In Touch</h4>
                                                        </div>
                                                     
                                                    </div>
                                                     

                                                     
                                                    <div className="art-a art-card">
                                                     
                                                        <form id="form" className="art-contact-form" action="https://formspree.io/f/mwpqaojj" method="POST">
                                                            
                                                            <div className="art-form-field">
                                                            
                                                                <input id="name" name="name" className="art-input" type="text" placeholder="Name" required></input>
                                                                
                                                                <label for="name"><i className="fas fa-user"></i></label>

                                                            </div>
                                                            
                                                            
                                                            <div className="art-form-field">
                                                            
                                                                <input id="email" name="email" className="art-input" type="email" placeholder="Email" required></input>
                                                                
                                                                <label for="email"><i className="fas fa-at"></i></label>

                                                            </div>
                                                            
                                                            
                                                            <div className="art-form-field">
                                                            
                                                                <textarea id="message" name="message" className="art-input" placeholder="Message" required></textarea>
                                                                
                                                                <label for="message"><i className="far fa-envelope"></i></label>

                                                            </div>
                                                            
                                                            
                                                            <div className="art-submit-frame">

                                                                <button className="art-btn art-btn-md art-submit" type="submit"><span>Send message</span></button>
                                                                
                                                            </div>
                                                        </form>                                                    

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
                                    <a href="/contact-page">Contact</a>
                                    <a href="/history-page">History</a>
                                    <a href="/certifications-page">Certifications</a>
                                    <a href="/portfolio-page">Home</a>
                                    <a href="/projects-page">Portfolio</a>                                  
                                    
                                </div>

                                <div className="art-scroll-frame">

                                    <nav id="swupMenu">
                                        <ul className="main-menu">
                                            <li id="home-nav" className="menu-item"><a href="/portfolio">Home</a></li>
                                            
                                            <li id="portfolio-nav" className="menu-item"><a href="/projects" onClick="handleClick">Portfolio</a></li>

                                            <li className="menu-item"><a href="/certifications">Certifications</a></li>
                                                                                        
                                            <li id="history-nav" className="menu-item"><a href="/history">History</a></li>
                                            
                                            <li id="contact-nav" className="menu-item"><a href="/contact-me">Contact</a></li>
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


export default ContactPage;