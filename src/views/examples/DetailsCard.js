import React from "react";

export const DetailsCard = ({ details }) => {
  return (
    <div
      style={{
        backgroundColor: "#2a2a38",
        padding: "20px",
        borderRadius: "8px",
        maxWidth: "500px",
        margin: "auto",
      }}
    >
      {details.map(({ label, value, link }, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            marginBottom: "12px",
          }}
        >
          <div
            style={{
              flex: "0 0 100px",
              fontWeight: "600",
              color: "white",
            }}
          >
            {label}:
          </div>
          <a
            href={link}
            style={{
              flex: "1",
              color: "#b0b0b0",
              textDecoration: "none",
              wordBreak: "break-word"
            }}
          >
            {value}
          </a>
        </div>
      ))}
    </div>
  );
};

export default DetailsCard;
