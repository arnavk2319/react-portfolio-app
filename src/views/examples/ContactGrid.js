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
        backgroundColor: "#31313f",
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
            backgroundColor: "#24242F",
            color: "white",
            textDecoration: "none",
            cursor: "pointer",
            boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
            transition: "background-color 0.3s ease",
            fontSize: "14px",
            fontWeight: "500",
            userSelect: "none",
            width: "100%",
            boxSizing: "border-box",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4a4a6a")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#3a3a52")}
        >
          {icon}
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
};

export default ContactGrid;
