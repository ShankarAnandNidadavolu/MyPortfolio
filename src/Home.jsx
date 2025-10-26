import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Home.css";
import bgImage from "./assets/passportphoto1.jpg";
import { ReactComponent as Downarrow } from "./assets/downsym.svg";
import proj1img from "./assets/proj1img.png";
import proj2img from "./assets/proj2img.png";
import figmalogo from "./assets/figmalogot1.png";
import cloudinary from "./assets/cloudinarylogot.png";
import prlogo from "./assets/prlogot.png";
import firebaselogo from "./assets/firebaselogot1.png";
import javalogo from "./assets/javalogot1.png";

import SkillRing from "./SkillRing";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaEnvelope, FaPaperPlane, FaCommentDots } from "react-icons/fa";

export default function Home({ skills }) {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="home" class="firstbg">
      <nav className="navbar">
        <div className="nav-links">
          <span className="navitems" onClick={() => scrollToSection("home")}>
            About
          </span>
          <span
            className="navitems-projects"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </span>
          <span className="navitems" onClick={() => scrollToSection("contact")}>
            Contact
          </span>
        </div>
        <h2
          className="resume desktop-resume"
          onClick={() => navigate("/resume")}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          MyResume
          <FaArrowUpRightFromSquare
            style={{ fontSize: "0.8em", color: "#2196f3" }}
          />
        </h2>
      </nav>

      <div class="infodiv">
        <div class="left">
          <div class="lefttop">
            <h1 class="details">Shankar Nidadavolu</h1>
            <p class="detailspara">
              I’m an adaptable developer who loves exploring Android, IoT,
              cloud, and web technologies — building meaningful and real-world
              digital experiences.
            </p>
          </div>

          <div class="leftbottom">
            <h4 class="detailspara">
              <b style={{ color: "#2196f3" }}>SKILL'S THAT I'M GOOD AT</b>
            </h4>

            <div class="carousel">
              <div class="carousel-track">
                <img className="item" src={figmalogo}></img>
                <img className="item" src={cloudinary}></img>
                <img className="item" src={prlogo}></img>
                <img className="item" src={firebaselogo}></img>
                <img className="item" src={javalogo}></img>
              </div>
              <div aria-hidden class="carousel-track">
                <img className="item" src={figmalogo}></img>
                <img className="item" src={cloudinary}></img>
                <img className="item" src={prlogo}></img>
                <img className="item" src={firebaselogo}></img>
                <img className="item" src={javalogo}></img>
              </div>

              <div aria-hidden class="carousel-track">
                <img className="item" src={figmalogo}></img>
                <img className="item" src={cloudinary}></img>
                <img className="item" src={prlogo}></img>
                <img className="item" src={firebaselogo}></img>
                <img className="item" src={javalogo}></img>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="rightchild">
            <img className="img" src={bgImage} alt="Example" />
          </div>
        </div>
      </div>

      <div id="projects" class="projdiv">
        <h2 class="projtext">Projects</h2>
        <Downarrow class="dwarrow" />
        <div class="projdisp">
          <div data-aos="fade-down" class="proj1">
            <div class="proj1matter">
              <h2 class="proj1heading">
                Social Media Application (Android Studio)
              </h2>
              <p class="proj1para">
                MyInsta is an Android app built using Java and Firebase. It
                enables users to sign up, upload photos, chat in real-time, and
                receive instant notifications. Designed with a clean, intuitive
                UI and seamless backend integration for a smooth social
                experience.
              </p>
              <h3>Key Features:</h3>
              <ul>
                <li>Secure Firebase Authentication</li>
                <li>Photo upload via Cloudinary</li>
                <li>Real-time 1-on-1 chat</li>
                <li>Push notifications</li>
                <li>Editable user profiles</li>
              </ul>
            </div>
            <div class="proj1photo">
              <img class="proj1photoimg" src={proj1img} />
            </div>
          </div>
          <div data-aos="fade-down" class="proj2">
            <div class="proj2photo">
              <img class="proj2photoimg" src={proj2img} />
            </div>
            <div class="proj2matter">
              <h2 class="proj2heading">Portfolio Website (ReactJS)</h2>
              <p class="proj2para">
                This is the very website you’re viewing — a personal portfolio
                built using ReactJS to showcase my projects, skills, and
                experience. It features a clean, minimal design, smooth
                animations, and a fully responsive layout. The site is crafted
                with modern web practices for speed, clarity, and user
                engagement.
              </p>
              <h3>Key Features:</h3>
              <ul>
                <li>Built with ReactJS and modern CSS (Flexbox & Grid)</li>
                <li>Fully responsive design for all devices</li>
                <li>Smooth animations and transitions for better UX</li>
                <li>Modular and reusable component architecture</li>
                <li>Deployed and optimized for fast load times</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="edudetails">
        <div class="edu-internships">
          <div class="edu">
            <h2 style={{ marginTop: "0" }}>Education:</h2>
            <div class="aditya">
              <h3 style={{ margin: "0%" }}>
                <span style={{ color: "#2196F3" }}>B.Tech </span>
                <span>in Electronic and Communication Engineering</span>
              </h3>
              <p style={{ color: "#777777", margin: "0%" }}>
                ● Aditya College Of Engineering And Technology, Surampalem.
              </p>
              <p
                style={{
                  color: "#777777",
                  marginBottom: "2%",
                  marginTop: "0%",
                }}
              >
                ● 4th Year | CGPA: 6.76 | Graduation: 2026
              </p>
            </div>
            <div class="intermediate">
              <h3 style={{ margin: "0%" }}>
                <span style={{ color: "#2196F3" }}>Intermediate </span>
                <span>in MPC</span>
              </h3>
              <p style={{ color: "#777777", margin: "0%" }}>
                ● Sri Chaitanya Junior College, Rajahmundry.
              </p>
              <p
                style={{
                  color: "#777777",
                  marginBottom: "2%",
                  marginTop: "0%",
                }}
              >
                ● percentage: 80% | 2019 - 2021
              </p>
            </div>
            <div class="school">
              <h3 style={{ margin: "0%" }}>
                <span style={{ color: "#2196F3" }}>SSC </span>
              </h3>
              <p style={{ color: "#777777", margin: "0%" }}>
                ● Sri Chaitanya Techno School,Rajahmundry.
              </p>
              <p
                style={{
                  color: "#777777",
                  marginBottom: "2%",
                  marginTop: "0%",
                }}
              >
                ● CGPA: 9.0 | 2019
              </p>
            </div>
          </div>
          <hr class="btw-edu-skill"></hr>
          <div class="internships">
            <h2 style={{ marginTop: "0%" }}>Internships:</h2>
            <h3 class="internship-margin">
              APSSDC Internship – Android Application Development (May 2025 –
              July 2025)
            </h3>
            <p style={{ color: "#777777", margin: "0%" }}>
              ● Completed a two-month hands-on internship in Android app
              development.
            </p>
            <p style={{ color: "#777777", margin: "0%" }}>
              ● Gained practical experience in Java-based Android programming,
              Firebase integration, and UI/UX design.
            </p>
            <p style={{ color: "#777777", marginBottom: "5%" }}>
              ● Strengthened skills in building scalable, real-time mobile
              applications.
            </p>
          </div>
        </div>
        <hr
          style={{ margin: "0%", borderColor: "#565656ff", marginTop: "2%" }}
        ></hr>
        <div className="skills-container">
          <h2 className="skills-heading">Skills</h2>
          <div className="skills-grid">
            {skills.map((s, i) => (
              <SkillRing key={i} skill={s.skill} level={s.level} />
            ))}
          </div>
        </div>
      </div>

      <div id="contact" class="contact">
        <h2 style={{ textAlign: "center" }}>Get in Touch <FaCommentDots style={{ fontSize: "1em", color: "#2196f3" }} /></h2>
        <div class="contactcontainer">
          <div
            class="c-github"
            onClick={() =>
              window.open("https://github.com/ShankarAnandNidadavolu", "_blank")
            }
          >
            <h3 style={{ margin: " 10px 0 " }}>Github</h3>
          </div>
          <div
            class="c-linkedin"
            onClick={() =>
              window.open("https://www.linkedin.com/in/shankar-anand-nidadavolu-34120b361/", "_blank")
            }
          >
            <h3 style={{ margin: " 10px 0 " }}>Linkedin</h3>
          </div>
          <div
            class="c-phone"
            onClick={() => (window.location.href = "tel:+917842222606")}
          >
            <h3 style={{ margin: " 10px 0 " }}>Phone</h3>
          </div>
          <div
            class="c-email"
            onClick={() => {
              const email = "shankaranand7777@gmail.com";
              const subject = encodeURIComponent("Portfolio Inquiry");
              const body = encodeURIComponent(
                "Hi Shankar, I visited your portfolio and would like to connect."
              );
              const mailtoURL = `mailto:${email}?subject=${subject}&body=${body}`;
              const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

              const isDesktop = !/Android|iPhone|iPad|iPod/i.test(
                navigator.userAgent
              );

              if (isDesktop) {
                try {
                  window.location.href = mailtoURL;
                  setTimeout(() => {
                    window.open(gmailURL, "_blank");
                  }, 1000);
                } catch {
                  window.open(gmailURL, "_blank");
                }
              } else {
                window.location.href = mailtoURL;
              }
            }}
          >
            <h3 style={{ margin: " 10px 0 " }}>Mail</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
