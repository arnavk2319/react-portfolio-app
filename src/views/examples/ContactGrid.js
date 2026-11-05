import React from "react";
import { FaDatabase, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const buttons = [
  { icon: <FaDatabase size={20} />, label: "Kaggle", link: "https://www.kaggle.com/arnavkaushal/code" },
  { icon: <FaGithub size={20} />, label: "GitHub", link: "https://github.com/arnavk2319?tab=repositories" },
  { icon: <FaLinkedin size={20} />, label: "LinkedIn", link: "https://www.linkedin.com/in/arnav-k-7359b3170/" },
  { icon: <FaEnvelope size={20} />, label: "Email", link: "mailto:arnav.kaushal800@gmail.com" },
];

export const ContactGrid = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        gap: "15px",
        padding: "30px",
        marginBottom: "30px",
        width: "100%",           // full width container
        maxWidth: "500px",       // max width so it doesn’t stretch too much
        backgroundColor: "var(--bg-grid)",
        borderRadius: "12px",
        boxSizing: "border-box",
      }}
    >
      {buttons.map(({ icon, label, link }, index) => (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "16px",
            borderRadius: "12px",
            backgroundColor: "var(--bg-tile)",
            color: "var(--ink)",
            textDecoration: "none",
            cursor: "pointer",
            boxShadow: "0 2px 6px var(--shadow-30)",
            transition: "background-color 0.3s ease",
            fontSize: "14px",
            fontWeight: "500",
            userSelect: "none",
            width: "100%",
            boxSizing: "border-box",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--bg-tile-hover)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--bg-tile-rest)")}
        >
          {icon}
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
};

export default ContactGrid;
