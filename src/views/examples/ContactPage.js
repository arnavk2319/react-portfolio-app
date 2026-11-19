import React from 'react';
import { PageLayout } from "components/PageLayout";
import DetailsCard from './DetailsCard';
import { useContactForm } from "components/useContactForm";
import { CONTACT_DETAILS, LOCATION_DETAILS, FORM_ACTION } from "data/contact";

export { validateEmail } from "components/useContactForm";

function ContactPage(){

    const { errors, hasErrors, handleSubmit, fieldProps: baseFieldProps } = useContactForm();

    const fieldProps = (f) => ({
        ...baseFieldProps(f),
        className: errors[f] ? "art-input art-input-invalid" : "art-input",
    });

    const FieldError = ({ field }) =>
        errors[field] ? <div id={field + "-error"} className="art-field-error" role="alert">{errors[field]}</div> : null;

    const contactDetails = CONTACT_DETAILS;
    const locationDetails = LOCATION_DETAILS;

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

                                    <form id="form" className="art-contact-form" action={FORM_ACTION} method="POST" noValidate onSubmit={handleSubmit}>

                                        <div className="art-form-field">

                                            <input id="name" name="name" type="text" placeholder="Name" required {...fieldProps("name")}></input>

                                            <label htmlFor="name"><i className="fas fa-user"></i></label>

                                            <FieldError field="name" />

                                        </div>

                                        <div className="art-form-field">

                                            <input id="email" name="email" type="email" placeholder="Email" required autoComplete="email" {...fieldProps("email")}></input>

                                            <label htmlFor="email"><i className="fas fa-at"></i></label>

                                            <FieldError field="email" />

                                        </div>

                                        <div className="art-form-field">

                                            <textarea id="message" name="message" placeholder="Message" required {...fieldProps("message")}></textarea>

                                            <label htmlFor="message"><i className="far fa-envelope"></i></label>

                                            <FieldError field="message" />

                                        </div>

                                        <div className="art-submit-frame">

                                            <button className="art-btn art-btn-md art-submit" type="submit" disabled={hasErrors} aria-disabled={hasErrors}><span>Send message</span></button>

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
