"use client";

import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";



import {
  Search,
  Globe,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Venus,
  Network,
  ChevronUp,
  Menu,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function FinalUniversityClone() {
  const pathname = usePathname();

useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showPrograms, setShowPrograms] = useState(false);
const router = useRouter();
  const news = [
  {
    tag: "SSC",
    title: "SSC CGL 2026 Recruitment Notification Released",
    desc: "Staff Selection Commission announced vacancies for multiple Group B and Group C posts across central government departments.",
    date: "20 May, 2026",
    applyLink: "https://your-apply-link.com",
  },
  {
    tag: "UPSC",
    title: "UPSC Civil Services 2026 Applications Open",
    desc: "Union Public Service Commission invites applications for IAS, IPS, IFS, and other prestigious civil services positions.",
    date: "15 May, 2026",
    applyLink: "https://your-apply-link.com",
  },
  {
    tag: "RAILWAY",
    title: "Railway Recruitment Board Announces New Vacancies",
    desc: "RRB released recruitment notification for technical and non-technical posts in multiple railway zones across India.",
    date: "10 May, 2026",
    applyLink: "https://your-apply-link.com",
  },
  {
    tag: "BANKING",
    title: "IBPS PO and Clerk Recruitment 2026 Started",
    desc: "Institute of Banking Personnel Selection begins online applications for Probationary Officer and Clerk positions.",
    date: "08 May, 2026",
    applyLink: "https://your-apply-link.com",
  },
];


const auNews = [
  {
    image: "/news1.jpg",
    title:
      "India Launches New AI Mission to Boost Innovation and Startups",
    desc:
      "The Government of India announced major investments in artificial intelligence, focusing on startups, research, and digital infrastructure to strengthen the country’s tech ecosystem.",
  },
  {
    image: "/news2.jpg",
    title:
      "ISRO Successfully Tests Next-Generation Reusable Launch Vehicle",
    desc:
      "ISRO achieved another milestone with the successful testing of its reusable launch vehicle technology, aiming to reduce future space mission costs significantly.",
  },
  {
    image: "/news3.jpg",
    title:
      "India Records Rapid Growth in Renewable Energy Capacity in 2026",
    desc:
      "India continues expanding its solar and wind energy projects as part of its clean energy goals, making significant progress toward sustainable development targets.",
  },
];

  return (
    <div className="page">
      {/* HEADER */}
      <header className="header">
        <div className="topBar" />

        <div className="navContainer">
          <div className="logo">GIRESH ACADEMY YOUR FUTURE</div>

       <nav className="menu">
        {mobileOpen && (
  <div className="mobileDropdown">
    <a href="#postgraduate">Current Affairs</a>
    <a href="#postgraduate">Research</a>
    <a href="#postgraduate">Collaboration</a>
    <a href="#">About GA</a>
  </div>
)}
  <div className="menuItem">
    <button
      className="menuButton"
      onClick={() => setShowPrograms(!showPrograms)}
    >
      Programmes
    </button>

    {showPrograms && (
      <div className="megaMenu">
        <div className="megaColumn">
          <h3>SSC EXAMINATION</h3>

         <a
          href="#postgraduate"
          onClick={() => setShowPrograms(false)}
>
           Syllabus
         </a>
          <a href="#postgraduate" onClick={() => setShowPrograms(false)}>
            Notes & Lectures
          </a>
          <a href="#postgraduate" onClick={() => setShowPrograms(false)}>
            Test Series
          </a>
          <a href="#postgraduate" onClick={() => setShowPrograms(false)}>
            Revision
          </a>
        </div>

        <div className="megaColumn">
          <h3>UPSC EXAMINATION</h3>

          <a href="#postgraduate" onClick={() => setShowPrograms(false)}>
            Syllabus
          </a>
          <a href="#postgraduate" onClick={() => setShowPrograms(false)}>
            Notes & Lectures
          </a>
          <a href="#postgraduate" onClick={() => setShowPrograms(false)}>
            Test Series
          </a>
          <a href="#postgraduate" onClick={() => setShowPrograms(false)}>
           Revision
          </a>
        </div>

        <div className="megaColumn">
          <h3>UPPSC EXAMINATION</h3>

          <a href="#postgraduate" onClick={() => setShowPrograms(false)}>
            Syllabus
          </a>
          <a href="#postgraduate" onClick={() => setShowPrograms(false)}>
            Notes & Lectures
          </a>
          <a href="#postgraduate" onClick={() => setShowPrograms(false)}>
            Test Series
          </a>
          <a href="#postgraduate" onClick={() => setShowPrograms(false)}>
            Revision
          </a>
        </div>
      </div>
    )}
  </div>

  {/* <a>Current Affairs</a> */}
<button
  className="menuButton"
  onClick={() => {
    setShowPrograms(false);
    document.getElementById("rankings")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
>
  Current Affairs
</button>
<button
  className="menuButton"
>
 Research
</button>
<button
  className="menuButton"
>
 Collaboration
</button>
<button
  className="menuButton"
>
 About GA
</button>
  {/* <a>Collaboration</a>
  <a>About GA</a> */}
</nav>

          <button
  className="mobileMenu"
  onClick={() => setMobileOpen(!mobileOpen)}
>
  <Menu size={26} />
</button>
        </div>

        <div className="subHeader">
          <div className="headerIcons">
            <Search size={24} strokeWidth={1.8} />
            <Globe size={24} strokeWidth={1.8} />
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <video
  className="heroVideo"
  autoPlay
  muted
  loop
  playsInline
>
  <source src="/hero-video.mp4" type="video/mp4" />
</video>

        <div className="heroOverlay" />

        <div className="heroContent">
          <h1>
            YOUR PURPOSE.
            <br />
            <span>ENDLESS OPPORTUNITIES.</span>
          </h1>

          <div className="gradientLine" />

          <p>Start your journey at GA in India.</p>

          <button className="heroBtn"
            onClick={() => {
    setShowPrograms(false);
    document.getElementById("postgraduate")?.scrollIntoView({
      behavior: "smooth",
    });
  }}>
            Join Us
          </button>
        </div>
      </section>
   {/* FEATURE CARDS */}
<section id="postgraduate" className="cardsSection">
  <div className="cardsGrid threeCards">
        {/* UPSC */}
    <div className="infoCard">
      <div className="cardTop">
        <h2>UPSC Programmes</h2>

        <div className="cardCircle">
          <ArrowRight size={22} />
        </div>
      </div>

      <div className="cardImageWrap">
  <Image
    src="/upsc_.jpg"
    alt="UPSC"
    fill
    className="cardImage"
  />
</div>

      <p>
        Build your UPSC preparation journey with expert mentorship,
        current affairs, test series, and complete study material.
      </p>

      <a href="#postgraduate" className="readMore">
        Read more
        <ArrowRight size={16} />
      </a>
    </div>
        {/* SSC */}
    <div className="infoCard">
      <div className="cardTop">
        <h2>SSC Programmes</h2>

         <div
  className="cardCircle"
  onClick={() => router.push("/Questions")}
  style={{ cursor: "pointer" }}
>
  <ArrowRight size={22} />
</div>
      </div>

            <div className="cardImageWrap">
  <Image
    src="/ssc_.jpg"
    alt="SSC"
    fill
    className="cardImage"
  />
</div>

      <p>
        Comprehensive SSC preparation including syllabus coverage,
        live classes, practice tests, and revision sessions.
      </p>

        <a  className="readMore" onClick={() => router.push("/Questions")}>
        Read more
        <ArrowRight size={16} />
      </a>
    </div>

    {/* UPPSC */}
    <div className="infoCard">
      <div className="cardTop">
        <h2>UPPSC Programmes</h2>

      <div className="cardCircle">
          <ArrowRight size={22} />
        </div>
      </div>

            <div className="cardImageWrap">
  <Image
    src="/uppsc_.jpg"
    alt="UPPSC"
    fill
    className="cardImage"
  />
</div>

      <p>
        Prepare for UPPSC examinations with structured courses,
        notes, mock tests, revision material, and expert guidance.
      </p>

       <a href="#postgraduate" className="readMore">
        
        Read more
        <ArrowRight size={16} />
      </a>
    </div>

  </div>
</section>

    
{/* RANKINGS */}
<section id="rankings" className="rankings">
  <div className="rankingGrid">
    
    <div className="rankingCard">
  <div className="number">#111</div>

  <div>
    <h3>Global Hunger Index Ranking</h3>

    <p>Global Hunger Index Report 2025</p>
  </div>
</div>

    <div className="rankingCard">
      <div className="number">#3</div>

      <div>
        <h3>Largest Startup Ecosystem Globally</h3>

        <p>Global Startup Ecosystem Index 2026</p>
      </div>
    </div>

    <div className="rankingCard">
      <div className="number">#5</div>

      <div>
        <h3>World’s Largest Economy by GDP</h3>

        <p>International Monetary Fund 2026</p>
      </div>
    </div>

    <div className="rankingCard">
      <div className="number">#2</div>

      <div>
        <h3>Largest Internet User Base in the World</h3>

        <p>Global Digital Report 2026</p>
      </div>
    </div>

  </div>
</section>
      
{/* AU NEWS */}
      <section className="auNewsSection">
        <div className="auNewsGrid">
          {auNews.map((item, index) => (
            <div className="auNewsCard" key={index}>
             <div className="auNewsImageWrap">
  <Image
    src={item.image}
    alt="News"
    fill
    className="auNewsImage"
  />
</div>

              <div className="auNewsBody">
                <div className="leftLine" />

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                <span>
                  READ MORE
                  <ArrowRight size={18} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    

      {/* BELONG SECTION */}
      <section className="belongSection">
        <div className="belongGrid">
          <div className="belongLeft">
            <h2>
              YOU
              <br />
              BELONG
              <br />
              <span>AT GA</span>
            </h2>

            <div className="smallGradient" />
          </div>

        <div className="belongCenter">
  <video
    className="coverVideo"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/belong-video.mp4" type="video/mp4" />
  </video>
</div>

          <div className="belongRight">
            <h3>Pursue Your Purpose</h3>

            <p>
              We are here to help you soar. As you navigate your journey,
              explore the amazing opportunities GA  have to
              offer.
            </p>

            <button>Experience GA</button>
          </div>
        </div>
<div className="bottomGallery">
  <div className="galleryItem large">
    <Image
      src="/campus-map.jpg"
      alt="Campus"
      fill
      className="galleryImage"
    />

    <div className="galleryOverlay">
      <h3>The Wonder of Mangroves</h3>
    </div>
  </div>

  <div className="galleryColumn">
    <div className="galleryItem">
      <Image
        src="/dance.jpg"
        alt="Dance"
        fill
        className="galleryImage"
      />

      <div className="galleryOverlay">
        <h3>The volcanic eruption at Geldingadalir, Fagradalsfjall.</h3>
      </div>
    </div>

    <div className="galleryItem">
      <Image
        src="/eagle.jpg"
        alt="Eagle"
        fill
        className="galleryImage"
      />

      <div className="galleryOverlay">
        <h3>Innovation & Vision</h3>
      </div>
    </div>
  </div>
</div>
      </section>
  {/* NEWS */}
<section className="newsSection">
  <button className="sliderBtn left">
    <ChevronLeft size={46} />
  </button>

  <button className="sliderBtn right">
    <ChevronRight size={46} />
  </button>

  <div className="newsGrid">
    {news.map((item, index) => (
      <div className="newsCard" key={index}>
        <span className="tag">{item.tag}</span>

        <h3>{item.title}</h3>

        <p>{item.desc}</p>

      <div className="newsBottom">
  <span className="date">{item.date}</span>

  <a
    href={item.applyLink}
    target="_blank"
    rel="noopener noreferrer"
    className="applyText"
  >
    Apply Now
    <ArrowRight size={18} />
  </a>
</div>
      </div>
    ))}
  </div>

  <div className="dots">
    <span className="dot active" />
    <span className="dot" />
    <span className="dot" />
    <span className="dot" />
  </div>
</section>

 {/* AI SECTION */}
<section className="aiSection">
  <div className="aiGrid">
    <Image
      src="/ai.jpg"
      alt="Tungurahua Volcano UNESCO Global Geopark"
      width={650}
      height={350}
      className="aiImage"
    />

    <div className="aiContent">
      <span className="aiTag">UNESCO GLOBAL GEOPARK</span>

      <div className="line" />

      <h2>Tungurahua Volcano UNESCO Global Geopark</h2>

      <p>
        Learn about geothermal processes, volcanic gases, and
        thermo-medicinal waters at Puela Hot Springs, a geosite
        combining therapeutic benefits with geological education
        and scenic surroundings.
      </p>

    </div>
  </div>
</section>

      
      {/* STATS */}
      <section className="stats">
        <div className="statsGrid">
          <div className="stat">
            <GraduationCap size={120} strokeWidth={1.5} />

            <h2>2941</h2>

            <p>Number of students</p>
          </div>

          <div className="stat">
            <Venus size={120} strokeWidth={1.5} />

            <h2>41%</h2>

            <p>Female students</p>
          </div>

          <div className="stat">
            <Network size={120} strokeWidth={1.5} />

            <h2>102</h2>

            <p>Research projects</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>
          FIND YOUR GA OPPORTUNITY.
          <span> CHALLENGE ACCEPTED.</span>
        </h2>

        <div className="ctaButtons">
          <button>Apply</button>
          <button>Request Info</button>
          <button>Visit</button>
        </div>
      </section>

      
     {/* FEATURE / CEO SECTION */}
<section className="featureSection">
  <div className="featureCard modernFeature">

    {/* LEFT IMAGE */}
    <div className="ceoImageWrap">
      <Image
        src="/giresh.jpg"
        alt="Giresh Chaturvedi"
        fill
        className="ceoImage"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="featureContent modernContent">

      <span className="ceoTag">Fopost & CEO</span>

      <h2>GIRESH CHATURVEDI</h2>

      {/* YOUTUBE VIDEO */}
      <div className="youtubeWrap">
        <iframe
          width="50%"
          height="375"
         src="https://www.youtube.com/embed/Nl3Dha1pUBA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

    </div>
  </div>
</section>

      
      {/* MISSION */}
      <section className="mission">
        <div className="missionBox">
          <div className="missionContent">
            <h2>GA'S MISSION</h2>

            <p>
              GA is the driving force in digital development through leading
              teaching, research, and innovation.
            </p>
          </div>

          <div className="shapes">
            <div className="shapeOne" />
            <div className="shapeTwo" />
          </div>
        </div>
      </section>

    

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footerLogo">
           GIRESH ACADEMY YOUR FUTURE
          </div>

          <div className="footerGrid">
            <div>
              <h3>Contact</h3>

              <p>Giresh Academy Your Future</p>
              <p>Denmark</p>
            </div>

            <div>
              <h3>Explore</h3>

              <p>News</p>
              <p>Vacancies</p>
              <p>Events</p>
            </div>

            <div>
              <h3>Useful links</h3>

              <p>GA Library</p>
              <p>GA Student</p>
              <p>GA Alumni</p>
            </div>

            <div>
              <h3>Web</h3>

              <p>Accessibility</p>
              <p>Privacy</p>
              <p>Contact</p>
            </div>
          </div>
        </div>

        <button
  className="scrollTop"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
          <ChevronUp size={22} />
        </button>
      </footer>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
html {
  scroll-behavior: smooth;
}
        html,
        body {
          overflow-x: hidden;
          font-family: Arial, Helvetica, sans-serif;
          background: #f7f7f7;
        }
          .mobileDropdown {
  display: none;
}

@media (max-width: 1200px) {
  .mobileDropdown {
    display: flex;
    flex-direction: column;
    gap: 18px;
    background: white;
    padding: 20px;
    border-bottom: 1px solid #ddd;
  }

  .mobileDropdown a {
    text-decoration: none;
    color: #65255f;
    font-size: 18px;
    font-weight: 600;
  }
}
        .menuItem {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

/* FULL WIDTH MEGA MENU */
.megaMenu {
  position: fixed;
  top: 95px;
  left: 10px;
  width: 98.7%;
  background: white;

  padding: 50px 80px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 60px;

  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);

  border-top: 5px solid #65255f;

  z-index: 999;

  animation: fadeMenu 0.25s ease;
}
  .menuButton {
  border: none;
  background: transparent;
  color: #65255f;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
}

/* CONTENT WIDTH CONTROL */
.megaMenu::before {
  content: "";
  position: absolute;
  inset: 0;
  background: white;
  z-index: -1;
}

.megaColumn {
  max-width: 420px;
}

.megaColumn h3 {
  color: #65255f;
  font-size: 28px;
  margin-bottom: 24px;
  font-weight: 700;
}

.megaColumn a {
  display: block;
  font-size: 18px;
  margin-bottom: 18px;
  transition: all 0.25s ease;
  color: #222;
  line-height: 1.5;
}

.megaColumn a:hover {
  color: #65255f;
  transform: translateX(8px);
}

@keyframes fadeMenu {
  from {
    opacity: 0;
    transform: translateY(15px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
  .cardImageWrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  border-radius: 6px;
  margin-bottom: 18px;
}

.cardImage {
  object-fit: cover;
}

/* RESPONSIVE */
@media (max-width: 1200px) {
  .megaMenu {
    position: static;
    width: 100%;
    grid-template-columns: 1fr;
    padding: 30px;
    gap: 30px;
  }

  .megaColumn {
    max-width: 100%;
  }
}
 


        .page {
          width: 100%;
          overflow-x: hidden;
          background: #f7f7f7;
          color: #111;
        }

        .container {
          width: 100%;
          max-width: 1380px;
          margin: auto;
        }

        .topBar {
          height: 7px;
          background: #65255f;
        }

        .header {
          background: white;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .navContainer {
          height: 88px;
          max-width: 1450px;
          margin: auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #ddd;
        }

        .logo {
          background: black;
          color: white;
          padding: 11px 18px;
          font-size: 18px;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        .menu {
  display: flex;
  align-items: center;
  gap: 44px;
  color: #65255f;
  font-size: 17px;
  font-weight: 600;
}

       .menu a,
.megaColumn a {
  cursor: pointer;
  transition: 0.2s;
  text-decoration: none;
  color: inherit;
}
        .menu a:hover {
          opacity: 0.7;
        }

        .mobileMenu {
          display: none;
          border: none;
          background: transparent;
        }

        .subHeader {
          height: 54px;
          border-bottom: 2px solid #65255f;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 0 60px;
        }

        .headerIcons {
          display: flex;
          gap: 18px;
          color: #65255f;
        }

        .hero {
          position: relative;
          width: 100%;
          height: 90vh;
          min-height: 700px;
        }

      .heroVideo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

        .heroOverlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          z-index: 1;
        }

        .heroContent {
          position: absolute;
          z-index: 2;
          left: 8%;
          top: 40%;
          transform: translateY(-50%);
          color: white;
          max-width: 950px;
        }

        .heroContent h1 {
          font-size: 86px;
          line-height: 0.95;
          font-weight: 800;
        }

        .heroContent h1 span {
          font-weight: 300;
        }

        .gradientLine {
          width: 520px;
          height: 8px;
          margin: 28px 0;
          background: linear-gradient(to right, #ff0055, #6236ff);
        }

        .heroContent p {
          font-size: 30px;
          font-weight: 700;
          margin-bottom: 32px;
        }

        .heroBtn {
          background: linear-gradient(to right, #ff0055, #6236ff);
          border: none;
          color: white;
          padding: 18px 44px;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
        }

       

       /* =========================
   FEATURE CARDS SECTION
========================= */

.cardsSection {
  padding: 70px 40px;
  background: #f7f7f7;
}

.cardsGrid.threeCards {
  max-width: 1400px;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 28px;
  align-items: stretch;
}

/* CARD */
.infoCard {
  background: white;
  border: 1px solid #d7c2d1;

  padding: 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: 0.3s ease;

  border-radius: 8px;
}


/* TOP */
.cardTop {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  gap: 14px;
  margin-bottom: 18px;
}

/* TITLE */
.infoCard h2 {
  font-size: 30px;
  line-height: 1.2;
  font-weight: 700;
   color: #061a56;
}

/* ICON */
.cardCircle {
  min-width: 48px;
  height: 48px;

  border: 2px solid black;
  border-radius: 999px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;
}

/* IMAGE */
.cardImage {
  width: 100%;
  height: 220px;

  object-fit: cover;

  border-radius: 6px;

  margin-bottom: 18px;
}

/* DESCRIPTION */
.infoCard p {
  font-size: 17px;
  line-height: 1.7;
  color: #061a56;

  flex-grow: 1;
}

/* BUTTON */
.readMore {
  margin-top: 22px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 8px;

  font-size: 16px;
  font-weight: 700;

  text-decoration: none;
  color: #65255f;

  transition: 0.25s ease;
}

.readMore:hover {
  transform: translateX(5px);
}

/* =========================
   TABLET
========================= */

@media (max-width: 992px) {
  .cardsGrid.threeCards {
    grid-template-columns: repeat(2, 1fr);
  }

  .infoCard h2 {
    font-size: 26px;
  }

  .cardImage {
    height: 200px;
  }
}

/* =========================
   MOBILE
========================= */

@media (max-width: 768px) {
  .cardsSection {
    padding: 50px 16px;
  }

  .cardsGrid.threeCards {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .infoCard {
    padding: 18px;
  }

  .infoCard h2 {
    font-size: 24px;
  }

  .cardImage {
    height: 190px;
  }

  .infoCard p {
    font-size: 15px;
    line-height: 1.6;
  }

  .readMore {
    font-size: 15px;
  }
}

/* =========================
   SMALL MOBILE
========================= */

@media (max-width: 480px) {
  .infoCard h2 {
    font-size: 21px;
  }

  .cardImage {
    height: 170px;
  }

  .cardCircle {
    min-width: 42px;
    height: 42px;
  }
}
        .rankings {
          padding: 70px 30px;
          background: #ececec;
        }

        .rankingGrid {
          max-width: 1500px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 60px;
        }

        .rankingCard {
  display: flex;
  align-items: center;
  gap: 34px;
}

/* FIXED WIDTH FOR ALL NUMBERS */
.number {
  width: 220px; /* enough space for 3 digits */
  
  font-size: 110px;
  color: #6236ff;
  font-weight: 800;

  flex-shrink: 0;

  display: flex;
  justify-content: flex-start;
}

/* TEXT SIDE */
.rankingCard h3 {
  font-size: 28px;
  margin-bottom: 10px;
  font-weight: 400;
  line-height: 1.3;
}

.rankingCard p {
  font-size: 18px;
  font-style: italic;
}

@media (max-width: 768px) {
  .rankingCard {
    align-items: flex-start;
    gap: 18px;
  }

  .number {
    width: 120px;
    font-size: 68px;
  }
}
        /* =========================
   JOB UPDATES SECTION
========================= */

.newsSection {
  background: #f4f6f9;
  padding: 90px 40px;
  position: relative;
}

.newsGrid {
  max-width: 1450px;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 28px;
}

/* CARD */

.newsCard {
  background: white;

  border-radius: 16px;

  padding: 28px;

  display: flex;
  flex-direction: column;

  min-height: 360px;

  border: 1px solid #e4e7ec;

  transition: all 0.3s ease;

  position: relative;

  overflow: hidden;
}

/* TOP BORDER EFFECT */

.newsCard::before {
  content: "";

  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 5px;

  background: linear-gradient(to right, #ff0055, #6236ff);
}

/* HOVER */

// .newsCard:hover {
//   transform: translateY(-8px);

//   box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
// }

/* TAG */

.newsCard .tag {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  width: fit-content;

  background: #f1ebff;

  color: #65255f;

  font-size: 13px;

  font-weight: 800;

  letter-spacing: 0.5px;

  padding: 8px 14px;

  border-radius: 999px;

  margin-bottom: 20px;

  border: none;
}

/* TITLE */

.newsCard h3 {
  font-size: 26px;

  line-height: 1.35;

  font-weight: 700;

  color: #111827;

  margin-bottom: 18px;
}

/* DESCRIPTION */

.newsCard p {
  font-size: 16px;

  line-height: 1.7;

  color: #4b5563;

  flex-grow: 1;
}

/* BOTTOM */

.newsBottom {
  margin-top: 28px;

  padding-top: 20px;

  border-top: 1px solid #e5e7eb;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 16px;
}

/* DATE */

.date {
  font-size: 14px;

  font-weight: 600;

  color: #6b7280;
}

/* APPLY BUTTON */

.applyText {
  display: inline-flex;

  align-items: center;

  gap: 8px;

  text-decoration: none;

   background: linear-gradient(to right, #ff0055, #6236ff);

  color: white;

  padding: 8px 14px;

  border-radius: 10px;

  font-size: 14px;

  font-weight: 700;

  transition: all 0.25s ease;
}

.applyText:hover {
  background: #4d1c49;

  transform: translateY(-2px);

  gap: 12px;
}

/* SLIDER BUTTONS */

.sliderBtn {
  position: absolute;

  top: 50%;

  transform: translateY(-50%);

  width: 56px;
  height: 56px;

  border-radius: 999px;

  border: none;

  background: white;

  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);

  display: flex;

  align-items: center;
  justify-content: center;

  color: #65255f;

  cursor: pointer;

  transition: 0.25s ease;

  z-index: 20;
}

.sliderBtn:hover {
  transform: translateY(-50%) scale(1.08);
}

.left {
  left: 14px;
}

.right {
  right: 14px;
}

/* DOTS */

.dots {
  display: flex;

  justify-content: center;

  gap: 10px;

  margin-top: 42px;
}

.dot {
  width: 12px;
  height: 12px;

  border-radius: 999px;

  background: #cfcfcf;

  transition: 0.25s ease;
}

.dot.active {
  width: 34px;

  background: #65255f;
}

/* =========================
   TABLET
========================= */

@media (max-width: 1200px) {
  .newsGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* =========================
   MOBILE
========================= */

@media (max-width: 768px) {
  .newsSection {
    padding: 60px 16px;
  }

  .newsGrid {
    grid-template-columns: 1fr;

    gap: 22px;
  }

  .newsCard {
    padding: 22px;

    min-height: auto;
  }

  .newsCard h3 {
    font-size: 22px;
  }

  .newsCard p {
    font-size: 15px;
  }

  .newsBottom {
    flex-direction: column;

    align-items: flex-start;
  }

  .applyText {
    width: 100%;

    justify-content: center;
  }

  .sliderBtn {
    display: none;
  }
}
       .belongSection {
  background: #efefef;
  padding: 0 20px 50px;
}

.belongGrid {
  max-width: 1500px;
  margin: auto;

  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;

  align-items: stretch;
  gap: 0;
}

/* LEFT */
.belongLeft {
  background: #ececec;
  padding: 80px 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.belongLeft h2 {
  font-size: 92px;
  line-height: 0.9;
  font-weight: 800;
}

.belongLeft span {
  font-size: 110px;
}

.smallGradient {
  width: 320px;
  height: 8px;
  background: linear-gradient(to right, #ff0055, #6236ff);
  margin-top: 24px;
}

/* CENTER VIDEO */
.belongCenter {
  position: relative;
  min-height: 650px;
  overflow: hidden;
}

.coverVideo {
  width: 100%;
  height: 100%;
  object-fit: cover;

  display: block;
}

/* RIGHT */
.belongRight {
  background: #e7e7e7;
  padding: 80px 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.belongRight h3 {
  font-size: 52px;
  color: #061a56;
  margin-bottom: 24px;
}

.belongRight p {
  font-size: 24px;
  line-height: 1.7;
  margin-bottom: 32px;
  color: #061a56;
}

.belongRight button {
  background: linear-gradient(to right, #ff0055, #6236ff);
  border: none;
  color: white;
  padding: 18px 48px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
}

/* BOTTOM IMAGES */
/* =========================
   MODERN IMAGE GALLERY
========================= */

.bottomGallery {
  max-width: 1500px;
  margin: 24px auto 0;

  display: grid;
  grid-template-columns: 1.4fr 1fr;

  gap: 20px;
}

/* RIGHT COLUMN */
.galleryColumn {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
}

/* IMAGE CARD */
.galleryItem {
  position: relative;
  overflow: hidden;
  border-radius: 18px;

  min-height: 260px;

  background: #ddd;

  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
}

/* LARGE LEFT IMAGE */
.galleryItem.large {
  min-height: 540px;
}

/* IMAGE */
.galleryImage {
  object-fit: cover;

  transition: transform 0.6s ease;
}

/* HOVER */
.galleryItem:hover .galleryImage {
  transform: scale(1.08);
}

/* OVERLAY */
.galleryOverlay {
  position: absolute;
  inset: 0;

  background: linear-gradient(
    to top,
    rgba(0,0,0,0.65),
    rgba(0,0,0,0.1)
  );

  display: flex;
  align-items: flex-end;

  padding: 28px;
}

/* TEXT */
.galleryOverlay h3 {
  color: white;

  font-size: 30px;
  font-weight: 700;

  line-height: 1.2;
}

/* =========================
   TABLET
========================= */

@media (max-width: 992px) {
  .bottomGallery {
    grid-template-columns: 1fr;
  }

  .galleryItem.large {
    min-height: 420px;
  }

  .galleryColumn {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
}

/* =========================
   MOBILE
========================= */

@media (max-width: 768px) {
  .galleryColumn {
    grid-template-columns: 1fr;
  }

  .galleryItem,
  .galleryItem.large {
    min-height: 260px;
  }

  .galleryOverlay h3 {
    font-size: 22px;
  }
}

/* =========================
   TABLET
========================= */
@media (max-width: 1200px) {
  .belongGrid {
    grid-template-columns: 1fr;
  }

  .belongCenter {
    min-height: 500px;
  }

  .bottomImages {
    grid-template-columns: 1fr;
  }
}

/* =========================
   MOBILE
========================= */
@media (max-width: 768px) {
  .belongSection {
    padding: 0 16px 40px;
  }

  .belongLeft,
  .belongRight {
    padding: 40px 24px;
  }

  .belongLeft h2 {
    font-size: 48px;
  }

  .belongLeft span {
    font-size: 56px;
  }

  .smallGradient {
    width: 180px;
  }

  .belongCenter {
    min-height: 320px;
  }

  .belongRight h3 {
    font-size: 32px;
  }

  .belongRight p {
    font-size: 17px;
    line-height: 1.6;
  }

  .belongRight button {
    width: 100%;
    padding: 16px;
    font-size: 16px;
  }

  .bottomImages {
    gap: 14px;
  }

  .bottomImage {
    height: 220px;
  }
}

      /* =========================
   AI SECTION
========================= */

.aiSection {
  padding: 80px 40px;
  background: white;
}

.aiGrid {
  max-width: 1380px;
  margin: auto;

  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 60px;
  align-items: center;
}

/* IMAGE */

.aiImage {
  width: 100%;
  height: 520px;

  object-fit: cover;

  border-radius: 18px;
}

/* CONTENT */

.aiContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.aiTag {
  font-size: 16px;
  font-weight: 800;

  color: #65255f;

  letter-spacing: 1px;
}

.line {
  width: 80px;
  height: 4px;

  background: linear-gradient(to right, #ff0055, #6236ff);

  margin: 14px 0 28px;

  border-radius: 999px;
}

.aiContent h2 {
  font-size: 58px;
  line-height: 1.1;

  margin-bottom: 26px;

  font-weight: 700;

  color: #061a56;
}

.aiContent p {
  font-size: 21px;
  line-height: 1.9;

  color: #374151;

  max-width: 95%;
}

/* =========================
   TABLET VIEW
========================= */

@media (max-width: 992px) {
  .aiSection {
    padding: 60px 24px;
  }

  .aiGrid {
    grid-template-columns: 1fr;

    gap: 40px;
  }

  .aiImage {
    height: 420px;
  }

  .aiContent h2 {
    font-size: 42px;
  }

  .aiContent p {
    font-size: 18px;
    max-width: 100%;
  }
}

/* =========================
   MOBILE VIEW
========================= */

@media (max-width: 768px) {

  .aiSection {
    padding: 40px 12px;
    overflow: hidden;
  }

  .aiGrid {
    display: flex;
    flex-direction: column;
    gap: 22px;
    width: 100%;
  }

  .aiImage {
    width: 100%;
    height: auto;
    max-height: 240px;
    object-fit: cover;
    border-radius: 12px;
    display: block;
  }

  .aiContent {
    width: 100%;
    padding: 0;
  }

  .aiTag {
    font-size: 12px;
    letter-spacing: 1px;
    line-height: 1.5;
  }

  .line {
    width: 52px;
    height: 3px;
    margin: 10px 0 18px;
  }

  .aiContent h2 {
    font-size: 22px;
    line-height: 1.35;
    margin-bottom: 14px;

    /* IMPORTANT */
    word-break: break-word;
  }

  .aiContent p {
    font-size: 15px;
    line-height: 1.7;
    max-width: 100%;

    /* IMPORTANT */
    word-break: break-word;
  }
}
        
        .singleButton {
          display: flex;
          justify-content: center;
          margin-top: 74px;
        }

        .eagleWrap {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          overflow: hidden;
        }

        .eagleImage {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transform: scale(1.18);
        }

        .stats {
          background: #f5f5f5;
          padding: 80px 40px;
        }

        .statsGrid {
          max-width: 1380px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .stat {
          text-align: center;
          color: #65255f;
        }

        .stat h2 {
          font-size: 92px;
          margin: 20px 0 8px;
          font-weight: 400;
        }

        .stat p {
          font-size: 28px;
          font-weight: 700;
        }

        .cta {
          background: #061a56;
          color: white;
          text-align: center;
          padding: 90px 24px;
        }

        .cta h2 {
          font-size: 64px;
          font-weight: 300;
        }

        .cta h2 span {
          font-weight: 800;
        }

        .ctaButtons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 40px;
          margin-top: 60px;
        }

        .ctaButtons button {
          width: 260px;
          height: 80px;
          border: 4px solid white;
          background: transparent;
          color: white;
          font-size: 26px;
          font-weight: 700;
          cursor: pointer;
        }

     

       
/* =========================================
   CEO FEATURE SECTION
========================================= */

.featureSection {
  padding: 50px 20px;
  background: #f4f5f7;
}

.modernFeature {
  max-width: 1380px;
  margin: auto;

  background: white;

  border-radius: 28px;

  overflow: hidden;

  display: grid;
  grid-template-columns: 420px 1fr;

  align-items: center;

  box-shadow: 0 18px 50px rgba(0,0,0,0.08);
}

/* IMAGE SIDE */

.ceoImageWrap {
  position: relative;
  height: 100%;
  min-height: 480px;
  overflow: hidden;
}

.ceoImage {
  object-fit: cover;
  object-position: top;
}

/* CONTENT SIDE */

.modernContent {
  padding: 55px 60px;
}

.ceoTag {
  display: inline-flex;
  align-items: center;

  background: linear-gradient(to right, #ff0055, #6236ff);

  color: white;

  padding: 10px 20px;

  border-radius: 999px;

  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1px;

  margin-bottom: 10px;
}

.modernContent h2 {
  font-size: 54px;
  line-height: 1.05;
  font-weight: 800;

  color: #061a56;

  margin-bottom: 10px;
}

.modernContent p {
  font-size: 18px;
  line-height: 1.9;

  color: #4b5563;

  margin-bottom: 18px;

  max-width: 90%;
}

/* YOUTUBE */

.youtubeWrap {


  border-radius: 18px;

  overflow: hidden;

  box-shadow: 0 10px 25px rgba(0,0,0,0.12);

  max-width: 720px;
}

.youtubeWrap iframe {
  width: 100%;
  height: 380px;
  display: block;
  border: none;
}

/* =========================================
   LARGE SCREEN
========================================= */

@media (min-width: 1600px) {

  .modernFeature {
    grid-template-columns: 500px 1fr;
  }

  .modernContent h2 {
    font-size: 64px;
  }

  .modernContent p {
    font-size: 20px;
  }
}

/* =========================================
   TABLET
========================================= */

@media (max-width: 1100px) {

  .modernFeature {
    grid-template-columns: 1fr;
  }

  .ceoImageWrap {
    min-height: 420px;
  }

  .modernContent {
    padding: 40px;
  }

  .modernContent h2 {
    font-size: 42px;
  }

  .modernContent p {
    max-width: 100%;
  }

  .youtubeWrap iframe {
    height: 280px;
  }
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 768px) {

  .featureSection {
    padding: 50px 16px;
  }

  .modernFeature {
    border-radius: 18px;
  }

  .ceoImageWrap {
    min-height: 150px;
  }

  .modernContent {
    padding: 28px 22px;
  }

  .ceoTag {
    font-size: 12px;
    padding: 8px 16px;
  }

  .modernContent h2 {
    font-size: 30px;
    line-height: 1.15;
  }

  .modernContent p {
    font-size: 15px;
    line-height: 1.8;
  }

  .youtubeWrap {
    margin-top: 2px;
    border-radius: 14px;
  }

  .youtubeWrap iframe {
    height: 200px;
  }
}

        .auNewsSection {
          padding: 0 30px 50px;
          background: #efefef;
        }

        .auNewsGrid {
          max-width: 1500px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .auNewsCard {
          background: #e8e8e8;
        }

        .auNewsCard {
  background: #e8e8e8;
  border-radius: 12px;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  height: 100%;
}

/* IMAGE CONTAINER */
.auNewsImageWrap {
  position: relative;
  width: 100%;

  /* responsive height */
  aspect-ratio: 16 / 10;

  overflow: hidden;
}

/* IMAGE */
.auNewsImage {
  object-fit: cover;

  transition: transform 0.4s ease;
}

/* OPTIONAL HOVER EFFECT */
.auNewsCard:hover .auNewsImage {
  transform: scale(1.05);
}

        .auNewsBody {
          position: relative;
          padding: 30px 36px 36px 46px;
        }

        .leftLine {
          position: absolute;
          left: 16px;
          top: 32px;
          width: 5px;
          height: 220px;
          background: linear-gradient(to bottom, #ff0055, #6236ff);
        }

        .auNewsBody h3 {
          font-size: 28px;
          line-height: 1.4;
          color: #0055a5;
          margin-bottom: 24px;
        }

        .auNewsBody p {
          font-size: 20px;
          line-height: 1.7;
          margin-bottom: 28px;
        }

        .auNewsBody span {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #0055a5;
          font-weight: 700;
        }

        .mission {
          padding: 90px 40px;
          background: white;
        }

        .missionBox {
          max-width: 1380px;
          margin: auto;
          border: 8px solid #15786d;
          padding: 50px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
        }

        .missionContent {
          flex: 1;
        }

        .missionContent h2 {
          color: #15786d;
          font-size: 72px;
          margin-bottom: 24px;
        }

        .missionContent p {
          color: #15786d;
          font-size: 34px;
          line-height: 1.5;
          font-style: italic;
          font-weight: 700;
        }

        .shapes {
          width: 360px;
          height: 260px;
          position: relative;
        }

        .shapeOne,
        .shapeTwo {
          position: absolute;
          width: 210px;
          height: 140px;
          border-radius: 80px;
          border: 22px solid;
          transform: rotate(35deg);
        }

        .shapeOne {
          border-color: #ecd95d;
          right: 90px;
          top: 10px;
        }

        .shapeTwo {
          border-color: #9bd0bb;
          right: 0;
          top: 80px;
        }

       


        .footer {
          background: #65255f;
          color: white;
          padding: 70px 40px;
          position: relative;
        }

        .footerLogo {
          display: inline-block;
          background: black;
          padding: 14px 20px;
          margin-bottom: 50px;
          font-size: 22px;
        }

        .footerGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 50px;
        }

        .footerGrid h3 {
          font-size: 28px;
          margin-bottom: 18px;
        }

        .footerGrid p {
          font-size: 17px;
          line-height: 1.8;
        }

        .scrollTop {
          position: fixed;
          right: 22px;
          bottom: 22px;
          width: 52px;
          height: 52px;
          border: none;
          background: #15786d;
          color: white;
          cursor: pointer;
        }

        /* =========================================
        LARGE TABLETS
        ========================================= */
@media (max-width: 1200px) {
  .menu {
    display: none;
  }

  .mobileMenu {
    display: block;
    cursor: pointer;
  }

 .cardsGrid,
.threeCards,
  .newsGrid,
  .aiGrid,
  .eventsGrid,
  .statsGrid,
  .footerGrid,
  .searchGrid,
  .rankingGrid,
  .auNewsGrid,
  .bottomImages,
  .exploreGrid,
  .belongGrid {
    grid-template-columns: 1fr;
  }

  .quickWrapper {
    flex-direction: column;
    align-items: flex-start;
  }

  .divider {
    display: none;
  }

  .missionBox {
    flex-direction: column;
    text-align: center;
  }

  .heroContent h1 {
    font-size: 58px;
  }

  .cta h2 {
    font-size: 46px;
  }

  .megaMenu {
    position: static;
    width: 100%;
    grid-template-columns: 1fr;
    padding: 30px;
    gap: 30px;
  }
}

/* =========================================
   MOBILE VIEW
========================================= */
@media (max-width: 768px) {

  /* GENERAL */
  section {
    overflow: hidden;
  }

  .navContainer,
  .subHeader,
  .cardsSection,
  .newsSection,
  .aiSection,
  .events,
  .mission,
  .footer,
  .searchSection,
  .rankings,
  .cta,
  .featureSection {
    padding-left: 16px;
    padding-right: 16px;
  }

  /* HEADER */
  .navContainer {
    height: 72px;
    padding: 0 16px;
  }

  .logo {
    font-size: 12px;
    padding: 8px 12px;
    max-width: 220px;
    line-height: 1.4;
  }

  .subHeader {
    height: 48px;
    padding: 0 16px;
  }

  /* HERO */
  .hero {
    height: 88vh;
    min-height: 620px;
  }

  .heroContent {
    left: 20px;
    right: 20px;
    top: 52%;
  }

  .heroContent h1 {
    font-size: 38px;
    line-height: 1.05;
  }

  .heroContent p {
    font-size: 20px;
    line-height: 1.5;
  }

  .gradientLine {
    width: 180px;
    margin: 22px 0;
  }

  .heroBtn {
    width: 100%;
    padding: 16px;
    font-size: 16px;
  }

  /* QUICK LINKS */
  .quickWrapper {
    padding: 24px 18px;
    gap: 22px;
  }

  .quickItem {
    width: 100%;
    justify-content: space-between;
    font-size: 16px;
  }

  /* SEARCH */
  .leftSearch {
    padding: 26px 20px;
  }

  .leftSearch h2 {
    font-size: 28px;
  }

  .searchBox input {
    font-size: 24px;
  }

  .browseButtons {
    flex-direction: column;
  }

  .browseButtons button {
    width: 100%;
    font-size: 18px;
  }

  .schoolItem {
    font-size: 18px;
    padding: 18px;
  }

  /* CARDS */
  .cardsSection {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .infoCard {
    padding: 22px;
  }

  .infoCard h2 {
    font-size: 34px;
  }

  .cardImage {
    height: 220px;
  }

  .infoCard p {
    font-size: 18px;
  }

  /* RANKINGS */
  .rankingGrid {
    gap: 40px;
  }

  .rankingCard {
    align-items: flex-start;
  }

  .number {
    font-size: 68px;
    min-width: 90px;
  }

  .rankingCard h3 {
    font-size: 22px;
  }

  /* NEWS */
  .newsSection {
    padding: 60px 20px;
  }

  .newsGrid {
    gap: 30px;
  }

  .newsCard h3 {
    font-size: 24px;
  }

  .newsCard p {
    font-size: 16px;
  }

  .sliderBtn {
    display: none;
  }

  /* BELONG */
  .belongLeft,
  .belongRight {
    padding: 40px 20px;
  }

  .belongLeft h2 {
    font-size: 52px;
  }

  .belongLeft span {
    font-size: 62px;
  }

  .smallGradient {
    width: 160px;
  }

  .belongCenter {
    min-height: 360px;
  }

  .belongRight h3 {
    font-size: 34px;
  }

  .belongRight p {
    font-size: 18px;
  }

  .belongRight button {
    width: 100%;
  }

  /* AI */
  .aiImage {
    height: 260px;
  }

  .aiContent h2 {
    font-size: 34px;
  }

  .aiContent p {
    font-size: 18px;
  }

  /* EXPLORE */
  .exploreImage {
    height: 220px;
  }

  .exploreContent {
    padding: 24px 10px 0;
  }

  .exploreContent h3 {
    font-size: 30px;
  }

  .exploreContent p {
    font-size: 17px;
    max-width: 100%;
  }

  .exploreButtons button,
  .singleButton button {
    width: 100%;
    height: 58px;
    font-size: 18px;
  }

  /* STATS */
  .stats {
    padding: 60px 20px;
  }

  .stat svg {
    width: 70px;
    height: 70px;
  }

  .stat h2 {
    font-size: 52px;
  }

  .stat p {
    font-size: 20px;
  }

  /* CTA */
  .cta {
    padding: 70px 20px;
  }

  .cta h2 {
    font-size: 34px;
    line-height: 1.4;
  }

  .ctaButtons {
    gap: 20px;
  }

  .ctaButtons button {
    width: 100%;
    height: 62px;
    font-size: 20px;
  }

  /* EVENTS */
  .sectionTitle {
    font-size: 40px;
  }

  .eventImage {
    height: 240px;
  }

  .eventTitle {
    font-size: 24px;
  }

  .eventCard {
    flex-direction: column;
    padding: 24px;
  }

  .eventText {
    font-size: 20px;
  }

  /* FEATURE */
  .featureCard {
    height: 500px;
  }

  .featureContent {
    top: 30px;
    left: 20px;
    right: 20px;
  }

  .featureContent h2 {
    font-size: 38px;
  }

  .featureContent p {
    font-size: 18px;
  }

  /* AU NEWS */
  .auNewsImage {
    height: 220px;
  }

  .auNewsBody {
    padding: 24px 20px 28px 36px;
  }

  .auNewsBody h3 {
    font-size: 22px;
  }

  .auNewsBody p {
    font-size: 17px;
  }

  .leftLine {
    height: 160px;
  }

  /* MISSION */
  .missionBox {
    padding: 30px 20px;
  }

  .missionContent h2 {
    font-size: 42px;
  }

  .missionContent p {
    font-size: 22px;
  }

  .shapes {
    width: 240px;
    height: 180px;
  }

  .shapeOne,
  .shapeTwo {
    width: 130px;
    height: 90px;
    border-width: 14px;
  }

  /* BLACK SECTION */
  .floatingWords {
    position: static;
    padding: 40px 20px 0;
    font-size: 34px;
    gap: 20px;
  }

  .blackSection h2 {
    position: static;
    transform: none;
    padding: 40px 20px;
    font-size: 36px;
    line-height: 1.3;
  }

  /* FOOTER */
  .footer {
    padding: 50px 20px;
  }

  .footerLogo {
    font-size: 16px;
    line-height: 1.5;
  }

  .footerGrid {
    gap: 34px;
  }

  .footerGrid h3 {
    font-size: 22px;
  }

  .footerGrid p {
    font-size: 16px;
  }

  /* SCROLL BUTTON */
  .scrollTop {
    width: 44px;
    height: 44px;
    right: 14px;
    bottom: 14px;
  }
}

/* =========================================
   SMALL MOBILE
========================================= */
@media (max-width: 480px) {

  .heroContent h1 {
    font-size: 30px;
  }

  .heroContent p {
    font-size: 18px;
  }

  .infoCard h2,
  .aiContent h2,
  .featureContent h2,
  .missionContent h2 {
    font-size: 28px;
  }

  .belongLeft h2 {
    font-size: 40px;
  }

  .belongLeft span {
    font-size: 48px;
  }

  .cta h2 {
    font-size: 28px;
  }

  .quickItem {
    font-size: 15px;
  }

  .eventText {
    font-size: 18px;
  }

  .searchBox input {
    font-size: 20px;
  }
}
      `}</style>
    </div>
  );
}