import React from "react";

export default function Resume() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <iframe
        src="/resume.pdf"
        title="My Resume"
        style={{
          width: "90%",
          height: "90%",
          border: "none",
          borderRadius: "12px",
        }}
      ></iframe>
      <div style={{display:"flex"}}>
        <button
          onClick={() => (window.location.href = "/")}
          style={{
            marginTop: "15px",
            marginRight: "10px",
            color: "#fff",
            background: "#2196f3",
            border: "none",
            padding: "8px 18px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          ← Back to Portfolio
        </button>

        <a
          href="/resume.pdf"
          download="Shankar_Nidadavolu_Resume.pdf"
          style={{
            marginTop: "15px",
            color: "#2196f3",
            textDecoration: "none",
            fontWeight: "600",
            border: "1px solid #2196f3",
            padding: "8px 20px",
            borderRadius: "8px",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#2196f3")}
          onMouseLeave={(e) => (e.target.style.background = "transparent")}
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
