import React from 'react';
import { PageLayout } from "components/PageLayout";
import CredlyBadges from './CredlyBadges';

function CertificationsPage(){


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
