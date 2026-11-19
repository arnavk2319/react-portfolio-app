import React from "react";

// Stricter than the browser's built-in type="email" check, which accepts "a@b".
// Needs a local part, an "@", and a domain with at least one dot and a 2+ letter ending.
const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)*\.[A-Za-z]{2,}$/;

export const validateEmail = (value) => {
    const v = value.trim();
    if (!v) return "Please enter your email address.";
    if (!EMAIL_RE.test(v) || v.includes("..")) return "Please enter a valid email address, like name@example.com.";
    return "";
};

const validators = {
    name: (v) => (v.trim() ? "" : "Please enter your name."),
    email: validateEmail,
    message: (v) => (v.trim() ? "" : "Please enter a message."),
};

/**
 * The contact form's validation, shared by the classic and Twilight Contact pages so they behave
 * identically: messages show on blur and while editing a field with an error, submit is blocked
 * (and the first bad field focused) when anything is invalid, and the Send button stays disabled
 * while any field shows an error. Otherwise the form posts as before.
 */
export const useContactForm = () => {
    const [errors, setErrors] = React.useState({});
    const setError = (field, message) => setErrors((prev) => ({ ...prev, [field]: message }));

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        const next = {};
        Object.keys(validators).forEach((f) => {
            next[f] = validators[f](form.elements[f].value);
        });
        setErrors(next);
        if (Object.values(next).some(Boolean)) {
            e.preventDefault();
            const first = Object.keys(next).find((f) => next[f]);
            form.elements[first].focus();
        }
    };

    const hasErrors = Object.values(errors).some(Boolean);

    const fieldProps = (f) => ({
        onBlur: (e) => setError(f, validators[f](e.target.value)),
        onChange: (e) => errors[f] && setError(f, validators[f](e.target.value)),
        "aria-invalid": errors[f] ? "true" : "false",
        "aria-describedby": errors[f] ? f + "-error" : undefined,
    });

    return { errors, hasErrors, handleSubmit, fieldProps };
};
