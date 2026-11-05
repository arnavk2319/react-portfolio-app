import React from 'react';
import { PageLayout } from "components/PageLayout";
import DetailsCard from './DetailsCard';

function ContactPage(){


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
        <PageLayout title="Contact | Arnav Kaushal" currentHref="/contact-me" currentLabel="Contact">
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

                                            <label htmlFor="name"><i className="fas fa-user"></i></label>

                                        </div>

                                        <div className="art-form-field">

                                            <input id="email" name="email" className="art-input" type="email" placeholder="Email" required></input>

                                            <label htmlFor="email"><i className="fas fa-at"></i></label>

                                        </div>

                                        <div className="art-form-field">

                                            <textarea id="message" name="message" className="art-input" placeholder="Message" required></textarea>

                                            <label htmlFor="message"><i className="far fa-envelope"></i></label>

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

        </PageLayout>
    );
}

export default ContactPage;
