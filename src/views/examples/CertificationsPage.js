import React from 'react';
import { credlyBadges } from "data/credentials";
import { PageLayout } from "components/PageLayout";
import CredlyBadges from './CredlyBadges';

function CertificationsPage(){


        return(
        <PageLayout title="Certifications | Arnav Kaushal" currentHref="/certifications" currentLabel="Certifications">
                    {/*Container fluid section -- 1*/}
                    <div className="container-fluid-projects">

                        <div className="row p-60-0 p-lg-30-0 p-md-15-0">

                            <div className="col-lg-12">

                                <div className="art-filter mb-30" style={{padding: '20px'}}>

                                     <a id={'linkAll'} href="#." data-filter="*" className="art-link art-current">My Credentials</a>

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

        </PageLayout>
    );
}

export default CertificationsPage;
