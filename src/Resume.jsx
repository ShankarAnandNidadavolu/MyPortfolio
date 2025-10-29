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
      <div style={{ display: "flex" }}>
        <button
          onClick={() => (window.location.href = "/")}
          style={{
            margin: "3vh 1vw",
            marginRight: "1vw",
            color: "#fff",
            background: "#2196f3",
            border: "none",
            padding: ".6vh 1vw",
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
            margin: "3vh 1vw",
            color: "#2196f3",
            textDecoration: "none",
            fontWeight: "600",
            border: "1px solid #2196f3",
            padding: ".6vh 2vw",
            borderRadius: "8px",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#2196f3")}
          onMouseLeave={(e) => (e.target.style.background = "transparent")}
        >
          Download Resume
        </a>
      </div>
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
    </div>
  );
}
