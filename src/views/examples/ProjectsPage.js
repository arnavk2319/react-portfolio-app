import React from 'react';
import Resume from "assets/img/Arnav_Kaushal_2025_ML.pdf";

function ProjectsPage(){
    const [artActiveInfoBar, setArtActiveInfoBar] = React.useState(false);
    const [artActiveMenuBar, setArtActiveMenuBar] = React.useState(false);
    const [artLinkAllCurrent, setArtLinkAllCurrent] = React.useState(true);
    const [artLinkMobileCurrent, setArtLinkMobileCurrent] = React.useState(false);
    const [artLinkWebCurrent, setArtLinkWebCurrent] = React.useState(false);
    const [artLinkMLCurrent, setArtLinkMLCurrent] = React.useState(false);


    function changeDOMElementForML(){

        hideWebItems();
        hideMobileItems();
        if(window.innerWidth < 1280){
            document.getElementById("loanDefPred").style.top = '0px';
            document.getElementById("loanDefPred").style.left = '0px';
            document.getElementById("loanDefPred").style.display = 'block';                     
        }

        else{
            document.getElementById("loanDefPred").style.position = 'absolute';
            document.getElementById("loanDefPred").style.top = '0px';
            document.getElementById("loanDefPred").style.left = '0px';
            document.getElementById("loanDefPred").transition = '0.55s ease-in-out';
            document.getElementById("loanDefPred").style.display = 'block';
        }
    };

    function hideMobileItems() {
        document.getElementById("lbmMobile").style.display = 'none';
        document.getElementById("mapFinderMobile").style.display = 'none';
        document.getElementById("covidMobile").style.display = 'none';
        document.getElementById("shopsMobile").style.display = 'none';
        document.getElementById("mealsMobile").style.display = 'none';
    }

    function hideWebItems() {
        document.getElementById("forkifyWeb").style.display = 'none';
        document.getElementById("dabShopWeb").style.display = 'none';
        document.getElementById("ppeProtectWeb").style.display = 'none';
        document.getElementById("equoWeb").style.display = 'none';
        document.getElementById("kovaWeb").style.display = 'none';
    }

    function hideMLItems() {
        document.getElementById("loanDefPred").style.display = 'none';
    }

    function changeDOMElementForMobile(){

        hideWebItems();
        hideMLItems();
        if(window.innerWidth < 1280){
            document.getElementById("lbmMobile").style.top = '0px';
            document.getElementById("lbmMobile").style.left = '0px';
            document.getElementById("lbmMobile").style.display = 'block';                     

            document.getElementById("mapFinderMobile").style.top = '356.828px';
            document.getElementById("mapFinderMobile").style.left = '0px';
            document.getElementById("mapFinderMobile").style.display = 'block'; 

            document.getElementById("covidMobile").style.top = '713.656px';
            document.getElementById("covidMobile").style.left = '0px';
            document.getElementById("covidMobile").style.display = 'block';

            document.getElementById("shopsMobile").style.top = '1070.48px';
            document.getElementById("shopsMobile").style.left = '0px';
            document.getElementById("shopsMobile").style.display = 'block';  

            document.getElementById("mealsMobile").style.top = '1427.312px';
            document.getElementById("mealsMobile").style.left = '0px';
            document.getElementById("mealsMobile").style.display = 'block';  
        }

        else{
            document.getElementById("lbmMobile").style.position = 'absolute';
            document.getElementById("lbmMobile").style.top = '0px';
            document.getElementById("lbmMobile").style.left = '0px';
            document.getElementById("lbmMobile").transition = '0.55s ease-in-out';
            document.getElementById("lbmMobile").style.display = 'block';

            document.getElementById("mapFinderMobile").style.position = 'absolute';
            document.getElementById("mapFinderMobile").style.top = '0px';
            document.getElementById("mapFinderMobile").style.left = '520px';
            document.getElementById("mapFinderMobile").style.transition = '0.55s ease-in-out';
            document.getElementById("mapFinderMobile").style.display = 'block';

            document.getElementById("covidMobile").style.position = 'absolute';
            document.getElementById("covidMobile").style.top = '356.828px';
            document.getElementById("covidMobile").style.left = '0px';
            document.getElementById("covidMobile").style.transition = '0.55s ease-in-out';
            document.getElementById("covidMobile").style.display = 'block';

            document.getElementById("shopsMobile").style.position = 'absolute';
            document.getElementById("shopsMobile").style.top = '356.828px';
            document.getElementById("shopsMobile").style.left = '520px';
            document.getElementById("shopsMobile").style.transition = '0.55s ease-in-out';
            document.getElementById("shopsMobile").style.display = 'block';

            document.getElementById("mealsMobile").style.position = 'absolute';
            document.getElementById("mealsMobile").style.top = '713px';
            document.getElementById("mealsMobile").style.left = '0px';
            document.getElementById("mealsMobile").style.transition = '0.55s ease-in-out';
            document.getElementById("mealsMobile").style.display = 'block';
        }
    };


    function changeDOMElementForWeb(){

        hideMobileItems();
        hideMLItems();
        if(window.innerWidth < 1280){
            document.getElementById("forkifyWeb").style.top = '0px';
            document.getElementById("forkifyWeb").style.left = '0px';
            document.getElementById("forkifyWeb").style.display = 'block';                                  

            document.getElementById("dabShopWeb").style.top = '356.828px';
            document.getElementById("dabShopWeb").style.left = '0px';
            document.getElementById("dabShopWeb").style.display = 'block';  

            document.getElementById("ppeProtectWeb").style.top = '713.656px';
            document.getElementById("ppeProtectWeb").style.left = '0px';
            document.getElementById("ppeProtectWeb").style.display = 'block';  

            document.getElementById("equoWeb").style.top = '1070.48px';
            document.getElementById("equoWeb").style.left = '0px';
            document.getElementById("equoWeb").style.display = 'block'; 

            document.getElementById("kovaWeb").style.top = '1427.312px';
            document.getElementById("kovaWeb").style.left = '0px';
            document.getElementById("kovaWeb").style.display = 'block';  
        }


        else{
            document.getElementById("forkifyWeb").style.position = 'absolute';
            document.getElementById("forkifyWeb").style.top = '0px';
            document.getElementById("forkifyWeb").style.left = '0px';
            document.getElementById("forkifyWeb").style.transition = '0.55s ease-in-out';
            document.getElementById("forkifyWeb").style.display = 'block';

            document.getElementById("dabShopWeb").style.position = 'absolute';
            document.getElementById("dabShopWeb").style.top = '0px';
            document.getElementById("dabShopWeb").style.left = '520px';
            document.getElementById("dabShopWeb").style.transition = '0.55s ease-in-out';
            document.getElementById("dabShopWeb").style.display = 'block';

            document.getElementById("ppeProtectWeb").style.position = 'absolute';
            document.getElementById("ppeProtectWeb").style.top = '356.828px';
            document.getElementById("ppeProtectWeb").style.left = '0px';
            document.getElementById("ppeProtectWeb").style.transition = '0.55s ease-in-out';
            document.getElementById("ppeProtectWeb").style.display = 'block';

            document.getElementById("equoWeb").style.position = 'absolute';
            document.getElementById("equoWeb").style.top = '356.828px';
            document.getElementById("equoWeb").style.left = '520px';
            document.getElementById("equoWeb").style.transition = '0.55s ease-in-out';
            document.getElementById("equoWeb").style.display = 'block';

            document.getElementById("kovaWeb").style.position = 'absolute';
            document.getElementById("kovaWeb").style.top = '713px';
            document.getElementById("kovaWeb").style.left = '0px';
            document.getElementById("kovaWeb").style.transition = '0.55s ease-in-out';
            document.getElementById("kovaWeb").style.display = 'block';
        }

    };  


    function changeDOMElementForAll(){

        if(window.innerWidth < 1280){
            document.getElementById("lbmMobile").style.top = '0px';
            document.getElementById("lbmMobile").style.left = '0px';
            document.getElementById("lbmMobile").style.display = 'block';

            document.getElementById("forkifyWeb").style.top = '356.828px';
            document.getElementById("forkifyWeb").style.left = '0px';
            document.getElementById("forkifyWeb").style.display = 'block';

            document.getElementById("mapFinderMobile").style.top = '713.656px';
            document.getElementById("mapFinderMobile").style.left = '0px';
            document.getElementById("mapFinderMobile").style.display = 'block';

            document.getElementById("dabShopWeb").style.top = '1070.48px';
            document.getElementById("dabShopWeb").style.left = '0px';
            document.getElementById("dabShopWeb").style.display = 'block';
            
            document.getElementById("covidMobile").style.top = '1427.312px';
            document.getElementById("covidMobile").style.left = '0px';
            document.getElementById("covidMobile").style.display = 'block';

            document.getElementById("ppeProtectWeb").style.top = '1784.136px';
            document.getElementById("ppeProtectWeb").style.left = '0px';
            document.getElementById("ppeProtectWeb").style.display = 'block';

            document.getElementById("shopsMobile").style.top = '2140.964px';
            document.getElementById("shopsMobile").style.left = '0px';
            document.getElementById("shopsMobile").style.display = 'block';

            document.getElementById("equoWeb").style.top = '2497.792px';
            document.getElementById("equoWeb").style.left = '0px';
            document.getElementById("equoWeb").style.display = 'block';

            document.getElementById("mealsMobile").style.top = '2854.62px';
            document.getElementById("mealsMobile").style.left = '0px';
            document.getElementById("mealsMobile").style.display = 'block';

            document.getElementById("kovaWeb").style.top = '3211.448px';
            document.getElementById("kovaWeb").style.left = '0px';
            document.getElementById("kovaWeb").style.display = 'block';

            document.getElementById("loanDefPred").style.top = '3568.28px';
            document.getElementById("loanDefPred").style.left = '0px';
            document.getElementById("loanDefPred").style.display = 'block';
        }

        else{
            document.getElementById("lbmMobile").style.position = 'absolute';
            document.getElementById("lbmMobile").style.top = '0px';
            document.getElementById("lbmMobile").style.left = '0px';
            document.getElementById("lbmMobile").style.transition = '0.55s ease-in-out';
            document.getElementById("lbmMobile").style.display = 'block';

            document.getElementById("forkifyWeb").style.position = 'absolute';
            document.getElementById("forkifyWeb").style.top = '0px';
            document.getElementById("forkifyWeb").style.left = '520px';
            document.getElementById("forkifyWeb").style.transition = '0.55s ease-in-out';
            document.getElementById("forkifyWeb").style.display = 'block';

            document.getElementById("mapFinderMobile").style.position = 'absolute';
            document.getElementById("mapFinderMobile").style.top = '356.828px';
            document.getElementById("mapFinderMobile").style.left = '0px';
            document.getElementById("mapFinderMobile").style.transition = '0.55s ease-in-out';
            document.getElementById("mapFinderMobile").style.display = 'block';

            document.getElementById("dabShopWeb").style.position = 'absolute';
            document.getElementById("dabShopWeb").style.top = '356.828px';
            document.getElementById("dabShopWeb").style.left = '520px';
            document.getElementById("dabShopWeb").style.transition = '0.55s ease-in-out';
            document.getElementById("dabShopWeb").style.display = 'block';

            document.getElementById("covidMobile").style.position = 'absolute';
            document.getElementById("covidMobile").style.top = '713.656px';
            document.getElementById("covidMobile").style.left = '0px';
            document.getElementById("covidMobile").style.transition = '0.55s ease-in-out';
            document.getElementById("covidMobile").style.display = 'block';

            document.getElementById("ppeProtectWeb").style.position = 'absolute';
            document.getElementById("ppeProtectWeb").style.top = '713.656px';
            document.getElementById("ppeProtectWeb").style.left = '520px';
            document.getElementById("ppeProtectWeb").style.transition = '0.55s ease-in-out';
            document.getElementById("ppeProtectWeb").style.display = 'block';

            document.getElementById("shopsMobile").style.position = 'absolute';
            document.getElementById("shopsMobile").style.top = '1070.48px';
            document.getElementById("shopsMobile").style.left = '0px';
            document.getElementById("shopsMobile").style.transition = '0.55s ease-in-out';
            document.getElementById("shopsMobile").style.display = 'block';

            document.getElementById("equoWeb").style.position = 'absolute';
            document.getElementById("equoWeb").style.top = '1070.48px';
            document.getElementById("equoWeb").style.left = '520px';
            document.getElementById("equoWeb").style.transition = '0.55s ease-in-out';
            document.getElementById("equoWeb").style.display = 'block';

            document.getElementById("mealsMobile").style.position = 'absolute';
            document.getElementById("mealsMobile").style.top = '1427.308px';
            document.getElementById("mealsMobile").style.left = '0px';
            document.getElementById("mealsMobile").style.transition = '0.55s ease-in-out';
            document.getElementById("mealsMobile").style.display = 'block';

            document.getElementById("kovaWeb").style.position = 'absolute';
            document.getElementById("kovaWeb").style.top = '1427.308px';
            document.getElementById("kovaWeb").style.left = '520px';
            document.getElementById("kovaWeb").style.transition = '0.55s ease-in-out';
            document.getElementById("kovaWeb").style.display = 'block';

            document.getElementById("loanDefPred").style.position = 'absolute';
            document.getElementById("loanDefPred").style.top = '1427.308px';
            document.getElementById("loanDefPred").style.left = '0px';
            document.getElementById("loanDefPred").style.transition = '0.55s ease-in-out';
            document.getElementById("loanDefPred").style.display = 'block';
        }

    };  

    React.useEffect(() => {
        function handleResize() {
          if(window.innerWidth < 1280){
            document.getElementById("lbmMobile").style.top = '0px';
            document.getElementById("lbmMobile").style.left = '0px';

            document.getElementById("forkifyWeb").style.top = '356.828px';
            document.getElementById("forkifyWeb").style.left = '0px';

            document.getElementById("mapFinderMobile").style.top = '713.656px';
            document.getElementById("mapFinderMobile").style.left = '0px';

            document.getElementById("dabShopWeb").style.top = '1070.48px';
            document.getElementById("dabShopWeb").style.left = '0px';
            
            document.getElementById("covidMobile").style.top = '1427.312px';
            document.getElementById("covidMobile").style.left = '0px';

            document.getElementById("ppeProtectWeb").style.top = '1784.136px';
            document.getElementById("ppeProtectWeb").style.left = '0px';

            document.getElementById("shopsMobile").style.top = '2140.964px';
            document.getElementById("shopsMobile").style.left = '0px';

            document.getElementById("equoWeb").style.top = '2497.792px';
            document.getElementById("equoWeb").style.left = '0px';

            document.getElementById("mealsMobile").style.top = '2854.62px';
            document.getElementById("mealsMobile").style.left = '0px';

            document.getElementById("kovaWeb").style.top = '3211.448px';
            document.getElementById("kovaWeb").style.left = '0px';
        }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
})
    

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
                                                         
                                                         <a id={'linkAll'} href="#" data-filter="*" className={artLinkAllCurrent ? "art-link art-current" : "art-link"}  onClick={() => {setArtLinkWebCurrent(false);
                                                        setArtLinkAllCurrent(true); setArtLinkMobileCurrent(false); setArtLinkMLCurrent(false); changeDOMElementForAll();}}>All Categories</a>
                                                         
                                                         <a id="linkWeb" href="#" data-filter=".webTemplates" className={artLinkWebCurrent ? "art-link art-current" : "art-link"} onClick={() => {setArtLinkWebCurrent(true);
                                                        setArtLinkAllCurrent(false); setArtLinkMobileCurrent(false); setArtLinkMLCurrent(false);  changeDOMElementForWeb();}}>Web</a>
                                                          
                                                         <a id="linkMobile" href="#" data-filter=".logos" className={artLinkMobileCurrent ? "art-link art-current" : "art-link"} onClick={() => {setArtLinkWebCurrent(false);
                                                        setArtLinkAllCurrent(false); setArtLinkMobileCurrent(true); setArtLinkMLCurrent(false);  changeDOMElementForMobile();}}>Mobile</a>

                                                        <a id="linkWeb" href="#" data-filter=".webTemplates" className={artLinkMLCurrent ? "art-link art-current" : "art-link"} onClick={() => {setArtLinkWebCurrent(false);
                                                        setArtLinkAllCurrent(false); setArtLinkMobileCurrent(false); setArtLinkMLCurrent(true); changeDOMElementForML();}}>ML & Data Science</a>
                                                          
                                                    </div>
                                                    
                                                </div>

                                                <div className="art-grid art-grid-2-col art-gallery" style={{position: 'relative', height: '1784.136px'}}>

                                                   <div id="lbmMobile" className={`art-grid-item ${artLinkMobileCurrent ? "lbm-item-mobile" : "lbm-item-all"}`} style={{position: 'absolute', top: '0px', left: '0px'}}>
                                                         
                                                        <a data-fancybox="gallery" href="https://play.google.com/store/apps/details?id=com.single.arnavkaushal.book_client_app" className="art-a art-portfolio-item-frame art-horizontal">
                                                             
                                                            <img src={require('assets/img/lbm-all.png')} alt="item"></img>
                                                             
                                                            <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                                                        </a>
                                                      
                                                         
                                                        <div className="art-item-description">
                                                             
                                                            <h5 className="mb-15">Literature, Books and Movies (LBM)</h5>
                                                            <div className="mb-15">Native Android app that uses theMovieDB API to display movies and books data.</div>
                                                             
                                                            <a href="https://play.google.com/store/apps/details?id=com.single.arnavkaushal.book_client_app" className="art-link art-color-link art-w-chevron">Read more</a>
                                                        </div>
                                                         
                                                    </div> 


                                                    <div id="forkifyWeb" className={`art-grid-item ${artLinkWebCurrent ? "forkify-item-web" : "forkify-item-all"}`} style={{position: 'absolute', top: '0px', left: '520px'}}>
                                                         
                                                        <a data-fancybox="gallery" href="https://arnavk2319.github.io/Forkify-Recipe-App/" className="art-a art-portfolio-item-frame art-horizontal">
                                                             
                                                            <img src={require('assets/img/forkify-all.png')} alt="item"></img>
                                                             
                                                            <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                                                        </a>
                                                      
                                                         
                                                        <div className="art-item-description">
                                                             
                                                            <h5 className="mb-15">Forkify Recipes</h5>
                                                            <div className="mb-15">A Food recipe web app utilizing node modules, webpack and babel employing RESTful web services to render data from the forkify food recipe API</div>
                                                             
                                                            <a href="https://arnavk2319.github.io/Forkify-Recipe-App/" className="art-link art-color-link art-w-chevron">Read more</a>
                                                        </div>                                                         

                                                    </div> 


                                                    <div id="mapFinderMobile" className={`art-grid-item ${artLinkMobileCurrent ? "mapfinder-item-mobile" : "mapfinder-item-all"}`} style={{position: 'absolute', top: '356.828px', left: '0px'}}>
                                                         
                                                        <a data-fancybox="gallery" href="https://play.google.com/store/apps/details?id=com.arnav.akapplications.mapfinder" className="art-a art-portfolio-item-frame art-horizontal">
                                                             
                                                            <img src={require('assets/img/mapfinder-all.png')} alt="item"></img>
                                                             
                                                            <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                                                        </a>
                                                      
                                                         
                                                        <div className="art-item-description">
                                                             
                                                            <h5 className="mb-15">Location Finder</h5>
                                                            <div className="mb-15">Native Android Map App whcih uses GCP's Directions API, Places API AND Maps SDK</div>
                                                             
                                                            <a href="https://play.google.com/store/apps/details?id=com.arnav.akapplications.mapfinder" className="art-link art-color-link art-w-chevron">Read more</a>
                                                        </div>
                                                         
                                                    </div>


                                                    <div id="dabShopWeb" className={`art-grid-item ${artLinkWebCurrent ? "dab-item-web" : "dab-item-all"}`} style={{position: 'absolute', top: '356.828px', left: '520px'}}>
                                                         
                                                        <a data-fancybox="gallery" href="https://shop.dialabottle.ca/dial-a-bottle" className="art-a art-portfolio-item-frame art-horizontal">
                                                             
                                                            <img src={require('assets/img/dab.png')} alt="item"></img>
                                                             
                                                            <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                                                        </a>
                                                      
                                                         
                                                        <div className="art-item-description">
                                                             
                                                            <h5 className="mb-15">DAB E-commerce Shop</h5>
                                                            <div className="mb-15">An E-commerce website that allows users to buy different kind of alcohol products in minutes, from a variety of products from beer, spirits, wine, coolers and liquor products. </div>
                                                             
                                                            <a href="https://shop.dialabottle.ca/dial-a-bottle" className="art-link art-color-link art-w-chevron">Read more</a>
                                                        </div>
                                                         
                                                    </div> 



                                                    <div id="covidMobile" className={`art-grid-item ${artLinkMobileCurrent ? "covid-item-mobile" : "covid-item-all"}`} style={{position: 'absolute', top: '713.656px', left: '0px'}}>
                                                         
                                                        <a data-fancybox="gallery" href="https://github.com/arnavk2319/Flutter-Covid-19-App" className="art-a art-portfolio-item-frame art-horizontal">
                                                             
                                                            <img src={require('assets/img/coviupdate-all.png')} alt="item"></img>
                                                             
                                                            <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                                                        </a>
                                                      
                                                         
                                                        <div className="art-item-description">
                                                             
                                                            <h5 className="mb-15">CoviUpdate</h5>
                                                            <div className="mb-15">A Covid-19 Flutter app that informs the user on different aspects of the pandemic, from news, different types of case counts to the vaccines available.</div>
                                                             
                                                            <a href="https://github.com/arnavk2319/Flutter-Covid-19-App" className="art-link art-color-link art-w-chevron">Read more</a>
                                                        </div>
                                                         
                                                    </div>


                                                    <div id="ppeProtectWeb" className={`art-grid-item ${artLinkWebCurrent ? "ppe-item-web" : "ppe-item-all"}`} style={{position: 'absolute', top: '713.656px', left: '520px'}}>
                                                         
                                                        <a data-fancybox="gallery" href="https://www.ppeprotect.ca/" className="art-a art-portfolio-item-frame art-horizontal">
                                                             
                                                            <img src={require('assets/img/ppeprotect.png')} alt="item"></img>
                                                             
                                                            <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                                                        </a>
                                                      
                                                         
                                                        <div className="art-item-description">
                                                             
                                                            <h5 className="mb-15">PPE Protect</h5>
                                                            <div className="mb-15">An E-commerce Shopify website that allows a user to purchase a variety of PPE products to help protect against the global Covid-19 pandemic.</div>
                                                             
                                                            <a href="https://www.ppeprotect.ca/" className="art-link art-color-link art-w-chevron">Read more</a>
                                                        </div>
                                                         
                                                    </div>  



                                                    <div id="shopsMobile" className={`art-grid-item ${artLinkMobileCurrent ? "shops-item-mobile" : "shops-item-all"}`} style={{position: 'absolute', top: '1070.48px', left: '0px'}}>
                                                         
                                                         <a data-fancybox="gallery" href="https://github.com/arnavk2319/Shop-App-Flutter" className="art-a art-portfolio-item-frame art-horizontal">
                                                              
                                                             <img src={require('assets/img/shop.png')} alt="item"></img>
                                                              
                                                             <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                                                         </a>
                                                       
                                                          
                                                         <div className="art-item-description">
                                                              
                                                             <h5 className="mb-15">Generic Shop</h5>
                                                             <div className="mb-15">A shop mobile app made using Google's SDK Flutter and RESTful APIs to render data using CRUD ops</div>
                                                              
                                                             <a href="https://github.com/arnavk2319/Shop-App-Flutter" className="art-link art-color-link art-w-chevron">Read more</a>
                                                         </div>
                                                          
                                                    </div>



                                                    <div id="equoWeb" className={`art-grid-item ${artLinkWebCurrent ? "equo-item-web" : "equo-item-all"}`} style={{position: 'absolute', top: '1070.48px', left: '520px'}}>
                                                         
                                                         <a data-fancybox="gallery" href="https://equoshift.com/" className="art-a art-portfolio-item-frame art-horizontal">
                                                              
                                                             <img src={require('assets/img/equo-all.png')} alt="item"></img>
                                                              
                                                             <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                                                         </a>
                                                       
                                                          
                                                         <div className="art-item-description">
                                                              
                                                             <h5 className="mb-15">Equo</h5>
                                                             <div className="mb-15">A brochure website that invites entrepreneurs to join a global venture and get updated about informed investment choices, all suited to each entreprenuer's different profile</div>
                                                              
                                                             <a href="https://equoshift.com/" className="art-link art-color-link art-w-chevron">Read more</a>
                                                         </div>
                                                          
                                                    </div>


                                                    <div id="mealsMobile" className={`art-grid-item ${artLinkMobileCurrent ? "meals-item-mobile" : "meals-item-all"}`} style={{position: 'absolute', top: '1427.308px', left: '0px'}}>
                                                         
                                                         <a data-fancybox="gallery" href="https://github.com/arnavk2319/Meals-Flutter-App" className="art-a art-portfolio-item-frame art-horizontal">
                                                              
                                                             <img src={require('assets/img/meal-planner.png')} alt="item"></img>
                                                              
                                                             <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                                                         </a>
                                                       
                                                          
                                                         <div className="art-item-description">
                                                              
                                                             <h5 className="mb-15">Meal Planner</h5>
                                                             <div className="mb-15">A Flutter app that utilizes RESTful APIs and CRUD ops to allow the user to monitor their diets in terms of segregating their food portions into calories, nutrients and portion sizes</div>
                                                              
                                                             <a href="https://github.com/arnavk2319/Meals-Flutter-App" className="art-link art-color-link art-w-chevron">Read more</a>
                                                         </div>
                                                          
                                                    </div>



                                                    <div id="kovaWeb" className={`art-grid-item ${artLinkWebCurrent ? "kova-item-web" : "kova-item-all"}`} style={{position: 'absolute', top: '1427.308px', left: '520px'}}>
                                                         
                                                         <a data-fancybox="gallery" href="https://kovasocialbeauty.com/" className="art-a art-portfolio-item-frame art-horizontal">
                                                              
                                                             <img src={require('assets/img/kova-all.png')} alt="item"></img>
                                                              
                                                             <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                                                         </a>
                                                       
                                                          
                                                         <div className="art-item-description">
                                                              
                                                             <h5 className="mb-15">Kova Social and Beauty</h5>
                                                             <div className="mb-15">A business website that invites and allows users to try beauty products and processes</div>
                                                              
                                                             <a href="https://kovasocialbeauty.com/" className="art-link art-color-link art-w-chevron">Read more</a>
                                                         </div>
                                                          
                                                    </div>

                                                    <div id="loanDefPred" className={`art-grid-item ${artLinkWebCurrent ? "loan-pred-ml" : "loan-pred-all"}`} style={{position: 'absolute', top: '1427.308px', left: '520px'}}>
                                                         
                                                         <a data-fancybox="gallery" href="https://www.kaggle.com/code/arnavkaushal/loan-default-prediction-logisticr-and-randomf/" className="art-a art-portfolio-item-frame art-horizontal">
                                                              
                                                             <img src={require('assets/img/loan-default-pred.png')} alt="item"></img>
                                                              
                                                             <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                                                         </a>
                                                       
                                                          
                                                         <div className="art-item-description">
                                                              
                                                             <h5 className="mb-15">Loan Default Prediction - LogisticR and RandomF</h5>
                                                             <div className="mb-15">A data model that is trained on binary classification using Random Forests and Logistic Regression to predict a loan default</div>
                                                              
                                                             <a href="https://www.kaggle.com/code/arnavkaushal/loan-default-prediction-logisticr-and-randomf/" className="art-link art-color-link art-w-chevron">Read more</a>
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
                                    <a href="/projects-page">Portfolio</a>
                                    <a href="/portfolio-page">Home</a>
                                    <a href="/certifications-page">Certifications</a>
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