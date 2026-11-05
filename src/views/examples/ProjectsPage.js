import React from 'react';
import { PageLayout } from "components/PageLayout";

function ProjectsPage(){

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

            document.getElementById("supervised-learning-comparison").style.top = '356.828px';
            document.getElementById("supervised-learning-comparison").style.left = '0px';
            document.getElementById("supervised-learning-comparison").style.display = 'block'; 

            document.getElementById("unsupervised-learning-comparison").style.top = '713.656px';
            document.getElementById("unsupervised-learning-comparison").style.left = '0px';
            document.getElementById("unsupervised-learning-comparison").style.display = 'block';

            document.getElementById("insurance-prediction-comparison").style.top = '1070.48px';
            document.getElementById("insurance-prediction-comparison").style.left = '0px';
            document.getElementById("insurance-prediction-comparison").style.display = 'block';  

            document.getElementById("cali-housing-comparison").style.top = '1427.312px';
            document.getElementById("cali-housing-comparison").style.left = '0px';
            document.getElementById("cali-housing-comparison").style.display = 'block';  
        }

        else{
            document.getElementById("loanDefPred").style.position = 'absolute';
            document.getElementById("loanDefPred").style.top = '0px';
            document.getElementById("loanDefPred").style.left = '0px';
            document.getElementById("loanDefPred").transition = '0.55s ease-in-out';
            document.getElementById("loanDefPred").style.display = 'block';

            document.getElementById("supervised-learning-comparison").style.position = 'absolute';
            document.getElementById("supervised-learning-comparison").style.top = '0px';
            document.getElementById("supervised-learning-comparison").style.left = '520px';
            document.getElementById("supervised-learning-comparison").style.transition = '0.55s ease-in-out';
            document.getElementById("supervised-learning-comparison").style.display = 'block';

            document.getElementById("unsupervised-learning-comparison").style.position = 'absolute';
            document.getElementById("unsupervised-learning-comparison").style.top = '356.828px';
            document.getElementById("unsupervised-learning-comparison").style.left = '0px';
            document.getElementById("unsupervised-learning-comparison").style.transition = '0.55s ease-in-out';
            document.getElementById("unsupervised-learning-comparison").style.display = 'block';

            document.getElementById("insurance-prediction-comparison").style.position = 'absolute';
            document.getElementById("insurance-prediction-comparison").style.top = '356.828px';
            document.getElementById("insurance-prediction-comparison").style.left = '520px';
            document.getElementById("insurance-prediction-comparison").style.transition = '0.55s ease-in-out';
            document.getElementById("insurance-prediction-comparison").style.display = 'block';

            document.getElementById("cali-housing-comparison").style.position = 'absolute';
            document.getElementById("cali-housing-comparison").style.top = '713px';
            document.getElementById("cali-housing-comparison").style.left = '0px';
            document.getElementById("cali-housing-comparison").style.transition = '0.55s ease-in-out';
            document.getElementById("cali-housing-comparison").style.display = 'block';
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
        document.getElementById("supervised-learning-comparison").style.display = 'none';
        document.getElementById("unsupervised-learning-comparison").style.display = 'none';
        document.getElementById("insurance-prediction-comparison").style.display = 'none';
        document.getElementById("cali-housing-comparison").style.display = 'none';
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
        <PageLayout title="Portfolio | Arnav Kaushal" currentHref="/projects" currentLabel="Portfolio">
                    {/*Container fluid section -- 1*/}
                    <div className="container-fluid-projects">

                        <div className="row p-60-0 p-lg-30-0 p-md-15-0">

                            <div className="col-lg-12">

                                <div className="art-filter mb-30" style={{padding: '20px'}}>

                                     <a id={'linkAll'} href="#." data-filter="*" className={artLinkAllCurrent ? "art-link art-current" : "art-link"}  onClick={() => {setArtLinkWebCurrent(false);
                                    setArtLinkAllCurrent(true); setArtLinkMobileCurrent(false); setArtLinkMLCurrent(false); changeDOMElementForAll();}}>All Categories</a>

                                     <a id="linkWeb" href="#." data-filter=".webTemplates" className={artLinkWebCurrent ? "art-link art-current" : "art-link"} onClick={() => {setArtLinkWebCurrent(true);
                                    setArtLinkAllCurrent(false); setArtLinkMobileCurrent(false); setArtLinkMLCurrent(false);  changeDOMElementForWeb();}}>Web</a>

                                     <a id="linkMobile" href="#." data-filter=".logos" className={artLinkMobileCurrent ? "art-link art-current" : "art-link"} onClick={() => {setArtLinkWebCurrent(false);
                                    setArtLinkAllCurrent(false); setArtLinkMobileCurrent(true); setArtLinkMLCurrent(false);  changeDOMElementForMobile();}}>Mobile</a>

                                    <a id="linkML" href="#." data-filter=".webTemplates" className={artLinkMLCurrent ? "art-link art-current" : "art-link"} onClick={() => {setArtLinkWebCurrent(false);
                                    setArtLinkAllCurrent(false); setArtLinkMobileCurrent(false); setArtLinkMLCurrent(true); changeDOMElementForML();}}>ML & Data Science</a>

                                </div>

                            </div>

                            <div className="art-grid art-grid-2-col art-gallery" style={{position: 'relative', height: '1784.136px'}}>

                               <div id="lbmMobile" className={`art-grid-item ${artLinkMobileCurrent ? "lbm-item-mobile" : "lbm-item-all"}`} style={{position: 'absolute', top: '0px', left: '0px'}}>

                                    <a data-fancybox="gallery" href="https://play.google.com/store/apps/details?id=com.single.arnavkaushal.book_client_app" className="art-a art-portfolio-item-frame art-horizontal">

                                        <img src={require('assets/img/lbm-all.webp')} alt="item" loading="lazy"></img>

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

                                        <img src={require('assets/img/forkify-all.webp')} alt="item" loading="lazy"></img>

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

                                        <img src={require('assets/img/mapfinder-all.webp')} alt="item" loading="lazy"></img>

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

                                        <img src={require('assets/img/dab.webp')} alt="item" loading="lazy"></img>

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

                                        <img src={require('assets/img/coviupdate-all.webp')} alt="item" loading="lazy"></img>

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

                                        <img src={require('assets/img/ppeprotect.webp')} alt="item" loading="lazy"></img>

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

                                         <img src={require('assets/img/shop.webp')} alt="item" loading="lazy"></img>

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

                                         <img src={require('assets/img/equo-all.webp')} alt="item" loading="lazy"></img>

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

                                         <img src={require('assets/img/meal-planner.webp')} alt="item" loading="lazy"></img>

                                         <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                                     </a>

                                     <div className="art-item-description">

                                         <h5 className="mb-15">Meal Planner</h5>
                                         <div className="mb-15">A Flutter app that utilizes RESTful APIs and CRUD ops to allow the user to monitor their diets in terms of segregating their food portions into calories, nutrients and portion sizes</div>

                                         <a href="https://github.com/arnavk2319/Meals-Flutter-App" className="art-link art-color-link art-w-chevron">Read more</a>
                                     </div>

                                </div>

                                <div id="kovaWeb" className={`art-grid-item ${artLinkWebCurrent ? "kova-item-web" : "kova-item-all"}`} style={{position: 'absolute', top: '1070.48px', left: '520px'}}>

                                     <a data-fancybox="gallery" href="https://kovasocialbeauty.com/" className="art-a art-portfolio-item-frame art-horizontal">

                                         <img src={require('assets/img/kova-all.webp')} alt="item" loading="lazy"></img>

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

                                         <img src={require('assets/img/loan-default-pred.webp')} alt="item" loading="lazy"></img>

                                         <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                                     </a>

                                     <div className="art-item-description">

                                         <h5 className="mb-15">Loan Default Prediction - LogisticR and RandomF</h5>
                                         <div className="mb-15">A data model that is trained on binary classification using Random Forests and Logistic Regression to predict a loan default</div>

                                         <a href="https://www.kaggle.com/code/arnavkaushal/loan-default-prediction-logisticr-and-randomf/" className="art-link art-color-link art-w-chevron">Read more</a>
                                     </div>

                                </div>

                                <div id="supervised-learning-comparison" className={`art-grid-item ${artLinkWebCurrent ? "sup-learn-ml" : "sup-learn-all"}`} style={{position: 'absolute', top: '1070.48px', left: '520px'}}>

                                    <a data-fancybox="gallery" href="https://www.kaggle.com/code/arnavkaushal/supervised-learning-algorithms-comparison" className="art-a art-portfolio-item-frame art-horizontal">

                                        <img src={require('assets/img/super-learn.webp')} alt="item" loading="lazy"></img>

                                        <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                                    </a>

                                    <div className="art-item-description">

                                        <h5 className="mb-15">Supervised learning algorithms - Comparison</h5>
                                        <div className="mb-15">A comparison of supervised learning algorithms; K-Nearest neightbours(KNN), Support Vector Machines(SVM), Decision Trees,  etc</div>

                                        <a href="https://www.kaggle.com/code/arnavkaushal/supervised-learning-algorithms-comparison" className="art-link art-color-link art-w-chevron">Read more</a>
                                    </div>

                                </div>

                            <div id="unsupervised-learning-comparison" className={`art-grid-item ${artLinkWebCurrent ? "unsup-learn-ml" : "unsup-learn-all"}`} style={{position: 'absolute', top: '1427.308px', left: '520px'}}>

                                <a data-fancybox="gallery" href="https://www.kaggle.com/code/arnavkaushal/unsupervised-learning-comparison" className="art-a art-portfolio-item-frame art-horizontal">

                                    <img src={require('assets/img/unsuper-learn.webp')} alt="item" loading="lazy"></img>

                                    <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                                </a>

                                <div className="art-item-description">

                                    <h5 className="mb-15">Unsupervised learning algorithms - Comparison</h5>
                                    <div className="mb-15">A comparison of unsupervised learning algorithms; K-Means, Gaussian Mixture Models(GMM), Mean Shift Clustering, DSBScan etc</div>

                                    <a href="https://www.kaggle.com/code/arnavkaushal/unsupervised-learning-comparison" className="art-link art-color-link art-w-chevron">Read more</a>
                                </div>

                            </div>

                            <div id="insurance-prediction-comparison" className={`art-grid-item ${artLinkWebCurrent ? "insurance-pred-ml" : "insurance-pred -all"}`} style={{position: 'absolute', top: '1070.48px', left: '520px'}}>

                                <a data-fancybox="gallery" href="https://www.kaggle.com/code/arnavkaushal/insurance-claim-prediction-logisticr-and-randfor" className="art-a art-portfolio-item-frame art-horizontal">

                                    <img src={require('assets/img/insurance-pred-img.webp')} alt="item" loading="lazy"></img>

                                    <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                                </a>

                                <div className="art-item-description">

                                    <h5 className="mb-15">Insurance Claim Precition - LogisticR and RandomFor</h5>
                                    <div className="mb-15">A data model that is trained on binary classification using Random Forests and Logistic Regression to predict an insurance claim</div>

                                    <a href="https://www.kaggle.com/code/arnavkaushal/insurance-claim-prediction-logisticr-and-randfor" className="art-link art-color-link art-w-chevron">Read more</a>
                                </div>

                            </div>

                            <div id="cali-housing-comparison" className={`art-grid-item ${artLinkWebCurrent ? "insurance-pred-ml" : "insurance-pred -all"}`} style={{position: 'absolute', top: '1427.308px', left: '520px'}}>

                                <a data-fancybox="gallery" href="https://www.kaggle.com/code/arnavkaushal/california-housing-eda-linear-ridge-lasso" className="art-a art-portfolio-item-frame art-horizontal">

                                    <img src={require('assets/img/cali-housing-img.webp')} alt="item" loading="lazy"></img>

                                    <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                                </a>

                                <div className="art-item-description">

                                    <h5 className="mb-15">California Housing Dataset - EDA, Linear, Ridge, Lasso Regression</h5>
                                    <div className="mb-15">A data model that is trained on different kinds of regression like linear, polynomial, ridge, lasso etc and compare each model performance</div>

                                    <a href="https://www.kaggle.com/code/arnavkaushal/california-housing-eda-linear-ridge-lasso" className="art-link art-color-link art-w-chevron">Read more</a>
                                </div>

                            </div>
                        </div>

                        </div>

                    </div>

                    {/*Container fluid section -- 2*/}

        </PageLayout>
    );
}

export default ProjectsPage;
