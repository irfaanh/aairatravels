import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const WhatsAppIcon = () => {
  const phoneNumber = "917902606303";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        zIndex: 1000,
        cursor: "pointer",
      }}
    >
      <FaWhatsapp size={30} color="#fff" />
    </a>
  );
};

export default WhatsAppIcon;
