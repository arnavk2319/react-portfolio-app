import React from "react";
import { TwilightLayout } from "components/TwilightLayout";
import { useContactForm } from "components/useContactForm";
import { CONTACT_DETAILS, LOCATION_DETAILS, FORM_ACTION } from "data/contact";

const Details = ({ title, rows }) => (
    <div className="tw-card tw-details">
        <h2 className="tw-disp">{title}</h2>
        <dl>
            {rows.map(({ label, value, link }) => (
                <div key={label}>
                    <dt>{label}</dt>
                    <dd>{link ? <a href={link}>{value}</a> : value}</dd>
                </div>
            ))}
        </dl>
    </div>
);

// The Twilight Contact page. Same details, same Formspree form and the same validation as the
// classic page (the validation is the shared useContactForm hook).
export default function TwilightContact() {
    const { errors, hasErrors, handleSubmit, fieldProps } = useContactForm();

    const field = (name) => ({
        id: name,
        name,
        required: true,
        ...fieldProps(name),
        className: errors[name] ? "tw-input tw-input-invalid" : "tw-input",
    });
    const FieldError = ({ name }) =>
        errors[name] ? <div id={name + "-error"} className="tw-field-error" role="alert">{errors[name]}</div> : null;

    const hero = (
        <section className="tw-phero">
            <div className="tw-mono tw-hero-kicker">{"// contact"}</div>
            <h1 className="tw-disp tw-ptitle">Let's talk.</h1>
            <p className="tw-hero-lede">Tell me what you are building and where it needs to go. The form goes straight to my inbox.</p>
        </section>
    );

    return (
        <TwilightLayout title="Contact | Arnav Kaushal" currentHref="/contact-me" hero={hero}>
            <div className="tw-contact">
                <div className="tw-contact-side">
                    <Details title="Contact information" rows={CONTACT_DETAILS} />
                    <Details title="Location" rows={LOCATION_DETAILS} />
                </div>

                <form id="form" className="tw-card tw-form" action={FORM_ACTION} method="POST" noValidate onSubmit={handleSubmit}>
                    <h2 className="tw-disp">Get In Touch</h2>

                    <div className="tw-fieldrow">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Name" {...field("name")} />
                        <FieldError name="name" />
                    </div>

                    <div className="tw-fieldrow">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Email" autoComplete="email" {...field("email")} />
                        <FieldError name="email" />
                    </div>

                    <div className="tw-fieldrow">
                        <label htmlFor="message">Message</label>
                        <textarea rows="6" placeholder="Message" {...field("message")}></textarea>
                        <FieldError name="message" />
                    </div>

                    <button className="tw-btn tw-btn-sun tw-send" type="submit" disabled={hasErrors} aria-disabled={hasErrors}>Send message</button>
                </form>
            </div>
        </TwilightLayout>
    );
}
