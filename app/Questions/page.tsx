"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Search,
  Globe,
  ArrowRight,
  GraduationCap,
  Venus,
  Network,
  ChevronUp,
  Menu,
  BookOpen,
  Brain,
  Monitor,
  Calculator,
  Trophy,
  Sparkles,
  ShieldCheck,
  Play,
  PenTool,
  Eraser,
  Trash2,
  ChevronRight,
} from "lucide-react";

import Chart from "chart.js/auto";

import {
  useRouter,
} from "next/navigation";

export default function FinalUniversityWebsite() {
  
    const scrollToAcademic = () => {
  academicSectionRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
const topicSectionRef = useRef<HTMLDivElement | null>(null);
const scrollToVideo = () => {
  videoSectionRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
  const router = useRouter();

const topicDescriptions: any = {
  // Quantitative Aptitude
  "Number System":
    "Learn natural numbers, integers, fractions, divisibility rules, HCF, LCM and advanced SSC level concepts.",

  "Simplification":
    "Master BODMAS, approximation, square roots, cube roots and calculation shortcuts.",

  "HCF & LCM":
    "Understand highest common factor, least common multiple and their real exam applications.",

  "Decimal & Fraction":
    "Convert decimals and fractions, compare values and solve arithmetic problems quickly.",

  Percentage:
    "Learn percentage increase, decrease, profit-loss and exam-oriented shortcut methods.",

  "Ratio and Proportion":
    "Understand ratios, direct proportion, inverse proportion and partnership problems.",

  Average:
    "Solve average-based questions including weighted averages and missing values.",

  "Profit and Loss":
    "Calculate profit percentage, discount, marked price and selling price questions.",

  "Simple Interest":
    "Learn principal, rate, time and simple interest calculations with shortcuts.",

  "Compound Interest":
    "Master annual, half-yearly and quarterly compound interest concepts.",

  "Time and Work":
    "Solve work efficiency, pipes and cisterns and workforce problems easily.",

  "Time Speed Distance":
    "Understand speed, distance, trains, boats and relative speed concepts.",

  Mensuration:
    "Learn area, perimeter, volume and surface area formulas for all shapes.",

  Algebra:
    "Study equations, identities, polynomials and SSC level algebra tricks.",

  Geometry:
    "Understand lines, angles, triangles, circles and theorem-based questions.",

  Trigonometry:
    "Master trigonometric ratios, identities, heights and distances concepts.",

  "Data Interpretation":
    "Analyze charts, tables and graphs efficiently for competitive exams.",

  Probability:
    "Learn event probability, outcomes and exam-oriented problem solving.",

  "Permutation and Combination":
    "Understand arrangements, selections and counting techniques.",

  "Mixture and Allegation":
    "Solve mixture ratio and replacement questions using shortcut methods.",

  Partnership:
    "Calculate business profit sharing based on investment and time.",

  "Boat and Stream":
    "Understand upstream, downstream and current speed calculations.",

  "Pipes and Cistern":
    "Solve tank filling and emptying questions using efficiency concepts.",

  // English
  "Reading Comprehension":
    "Improve reading speed, understanding ability and passage solving techniques.",

  "Cloze Test":
    "Learn contextual vocabulary and grammar through paragraph completion.",

  "Fill in the Blanks":
    "Practice vocabulary, grammar and sentence completion questions.",

  "Error Spotting":
    "Identify grammatical mistakes commonly asked in SSC and Banking exams.",

  "Sentence Improvement":
    "Enhance sentence correctness using grammar and vocabulary rules.",

  Synonyms:
    "Build vocabulary by learning words with similar meanings.",

  Antonyms:
    "Improve word knowledge through opposite meaning practice.",

  Vocabulary:
    "Expand word power with important SSC, Banking and UPSC vocabulary.",

  Grammar:
    "Master English grammar rules including tenses, voice and narration.",

  // General Awareness
  History:
    "Explore Ancient, Medieval and Modern Indian History with important events.",

  Geography:
    "Learn physical, Indian and world geography including maps and resources.",

  "Indian Polity":
    "Understand Constitution, Parliament, Judiciary and governance structure.",

  Economics:
    "Study Indian economy, banking, inflation, GDP and government schemes.",

  Physics:
    "Learn motion, force, electricity, magnetism and modern physics concepts.",

  Chemistry:
    "Understand matter, reactions, periodic table and chemical processes.",

  Biology:
    "Study human body, plants, animals and life science concepts.",

  "Current Affairs":
    "Stay updated with national, international and government developments.",

  // Reasoning
  Analogy:
    "Identify relationships between words, numbers and figures.",

  Classification:
    "Find odd one out using logical comparison techniques.",

  Series:
    "Master number, alphabet and mixed pattern sequences.",

  "Coding Decoding":
    "Solve coding patterns and language interpretation questions.",

  "Blood Relation":
    "Understand family relationships using shortcut methods.",

  Puzzle:
    "Practice logical arrangement and analytical reasoning problems.",

  Syllogism:
    "Learn Venn diagram based logical deduction techniques.",

  // Computer
  "Computer Fundamentals":
    "Understand basic computer concepts, architecture and functionality.",

  Networking:
    "Learn LAN, WAN, IP addressing, protocols and internet communication.",

  "Operating System":
    "Study Windows, Linux, process management and memory concepts.",

  "Cyber Security":
    "Understand threats, encryption and secure computing practices.",

  Database:
    "Learn DBMS concepts, tables, SQL basics and data management.",

  "Artificial Intelligence":
    "Explore machine learning, AI applications and modern technologies.",
};
const academicSectionRef = useRef<HTMLDivElement | null>(null);
const videoSectionRef = useRef<HTMLDivElement | null>(null);

  const chartRef = useRef<HTMLCanvasElement | null>(null);

  const drawCanvasRef =
    useRef<HTMLCanvasElement | null>(null);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [showPrograms, setShowPrograms] =
    useState(false);

  const [sectionTitle, setSectionTitle] =
    useState("SELECT SECTION");

  const [topics, setTopics] = useState<
    string[]
  >([]);

  const syllabus: any = {
    english: [
      "Reading Comprehension",
      "Cloze Test",
      "Fill in the Blanks",
      "Error Spotting",
      "Sentence Improvement",
      "Synonyms",
      "Antonyms",
      "Idioms and Phrases",
      "One Word Substitution",
      "Active and Passive Voice",
      "Direct and Indirect Speech",
      "Spellings",
      "Para Jumbles",
      "Vocabulary",
      "Grammar",
      "Sentence Structure",
      "Phrases and Clauses",
      "Verbs",
      "Tenses",
      "Subject Verb Agreement",
      "Comprehension Passage",
    ],

    gk: [
      "History",
      "Geography",
      "Indian Polity",
      "Economics",
      "Static GK",
      "Current Affairs",
      "Physics",
      "Chemistry",
      "Biology",
      "Science and Technology",
      "Environment",
      "Sports",
      "Awards and Honors",
      "Books and Authors",
      "Important Days",
      "Art and Culture",
      "National and International Organizations",
      "Government Schemes",
      "Indian Constitution",
      "Budget and Economic Survey",
      "Computer Awareness",
    ],

    quantitative: [
      "Number System",
      "Simplification",
      "HCF & LCM",
      "Decimal & Fraction",
      "Percentage",
      "Ratio and Proportion",
      "Average",
      "Profit and Loss",
      "Simple Interest",
      "Compound Interest",
      "Time and Work",
      "Time Speed Distance",
      "Mensuration",
      "Algebra",
      "Geometry",
      "Trigonometry",
      "Data Interpretation",
      "Probability",
      "Permutation and Combination",
      "Mixture and Allegation",
      "Partnership",
      "Boat and Stream",
      "Pipes and Cistern",
    ],

    reasoning: [
      "Analogy",
      "Classification",
      "Series",
      "Coding Decoding",
      "Blood Relation",
      "Direction Sense",
      "Venn Diagram",
      "Syllogism",
      "Puzzle",
      "Seating Arrangement",
      "Non Verbal Reasoning",
      "Mirror Image",
      "Paper Folding",
      "Embedded Figure",
      "Statement and Conclusion",
      "Statement and Assumption",
      "Logical Reasoning",
      "Mathematical Operations",
      "Order and Ranking",
      "Alphabet Test",
      "Decision Making",
    ],

    computer: [
      "Computer Fundamentals",
      "Input and Output Devices",
      "MS Word",
      "MS Excel",
      "MS PowerPoint",
      "Internet",
      "Networking",
      "Operating System",
      "Shortcut Keys",
      "Computer Abbreviations",
      "Memory",
      "Hardware and Software",
      "Cyber Security",
      "Database",
      "Computer Generations",
      "Programming Basics",
      "Virus and Malware",
      "Email",
      "Cloud Computing",
      "Artificial Intelligence",
    ],

    CurrentAffairs: [
      "National News",
      "International News",
      "Economy",
      "Sports",
      "Science & Technology",
    ],
  };

  const pageRoutes: any = {
    "Number System": "number-system",
    Percentage: "percentage",
    Algebra: "algebra",
    Geometry: "geometry",
    Trigonometry: "trigonometry",
    History: "history",
    Geography: "geography",
    Physics: "physics",
    Chemistry: "chemistry",
    Biology: "biology",
  };

  const loadSection = (section: string) => {
    setSectionTitle(section.toUpperCase());

    setTopics(syllabus[section]);

   router.push(
    `/Questions?section=${section}`, {
      scroll: false,
    });
  };

  const showDetail = (topic: string) => {
    if (pageRoutes[topic]) {
       router.push(
    `/number-system?topic=${encodeURIComponent(topic)}`
  );
    }
  };



  useEffect(() => {
    if (!chartRef.current) return;

    const chart = new Chart(
      chartRef.current,
      {
        type: "doughnut",

        data: {
          labels: [
            "English",
            "General Awareness",
            "Quantitative",
            "Reasoning",
            "Computer",
          ],

          datasets: [
            {
              data: [25, 25, 25, 15, 10],

              backgroundColor: [
                "#ff0055",
                "#00b4d8",
                "#f9c74f",
                "#7b2ff7",
                "#00c853",
              ],

              borderWidth: 4,

              borderColor: "#07111f",

              hoverOffset: 20,
            },
          ],
        },

        options: {
          cutout: "60%",

          plugins: {
            legend: {
              position: "bottom",

              labels: {
                color: "#ffffff",

                padding: 20,

                font: {
                  size: 14,
                  weight: "bold",
                },
              },
            },
          },
        },
      }
    );

    return () => chart.destroy();
  }, []);

  useEffect(() => {
    const canvas = drawCanvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let drawing = false;

    let drawMode = false;

    let erasing = false;

    const resizeCanvas = () => {
      const ratio =
        window.devicePixelRatio || 1;

      canvas.width =
        window.innerWidth * ratio;

      canvas.height =
        window.innerHeight * ratio;

      canvas.style.width =
        window.innerWidth + "px";

      canvas.style.height =
        window.innerHeight + "px";

      ctx.setTransform(
        ratio,
        0,
        0,
        ratio,
        0,
        0
      );
    };

    resizeCanvas();

    window.addEventListener(
      "resize",
      resizeCanvas
    );

    const getPosition = (e: any) => {
      const rect =
        canvas.getBoundingClientRect();

      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const start = (e: any) => {
      if (!drawMode) return;

      drawing = true;

      const pos = getPosition(e);

      ctx.beginPath();

      ctx.moveTo(pos.x, pos.y);
    };

    const stop = () => {
      drawing = false;

      ctx.beginPath();
    };

    const draw = (e: any) => {
      if (!drawing || !drawMode) return;

      const pos = getPosition(e);

      ctx.lineWidth = 3;

      ctx.lineCap = "round";

      ctx.lineJoin = "round";

      if (erasing) {
        ctx.globalCompositeOperation =
          "destination-out";
      } else {
        ctx.globalCompositeOperation =
          "source-over";

        ctx.strokeStyle = "#ffffff";
      }

      ctx.lineTo(pos.x, pos.y);

      ctx.stroke();

      ctx.beginPath();

      ctx.moveTo(pos.x, pos.y);
    };

    canvas.addEventListener(
      "mousedown",
      start
    );

    canvas.addEventListener(
      "mouseup",
      stop
    );

    canvas.addEventListener(
      "mouseout",
      stop
    );

    canvas.addEventListener(
      "mousemove",
      draw
    );

    (window as any).enablePen = () => {
      drawMode = !drawMode;

      erasing = false;

      canvas.style.pointerEvents =
        drawMode ? "auto" : "none";
    };

    (window as any).enableEraser = () => {
      drawMode = true;

      erasing = true;

      canvas.style.pointerEvents =
        "auto";
    };

    (window as any).clearCanvas = () => {
      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );
    };

    return () => {
      window.removeEventListener(
        "resize",
        resizeCanvas
      );
    };
  }, []);

  return (
    <div className="page">
      <header className="header">
        <div className="topBar"></div>

        <div className="navContainer">
          <div className="logo">
            GIRESH ACADEMY
          </div>

          <nav
            className={`menu ${
              mobileOpen ? "mobileShow" : ""
            }`}
          >
            <div className="menuItem">
              <button
                className="menuButton"
                onClick={() =>
                  setShowPrograms(
                    !showPrograms
                  )
                }
              >
                Programmes
              </button>

              {showPrograms && (
                <div className="megaMenu">
                  <div className="megaColumn">
                    <h3>
                      SSC EXAMINATION
                    </h3>

                    <a>
                      Notes & Lectures
                    </a>

                    <a>Mock Tests</a>

                    <a>Revision</a>
                  </div>

                  <div className="megaColumn">
                    <h3>
                      UPSC EXAMINATION
                    </h3>

                    <a>Syllabus</a>

                    <a>Current Affairs</a>

                    <a>Research</a>
                  </div>

                  <div className="megaColumn">
                    <h3>
                      COMPUTER COURSES
                    </h3>

                    <a>Programming</a>

                    <a>Cyber Security</a>

                    <a>AI & ML</a>
                  </div>
                </div>
              )}
            </div>

            <a>Research</a>

            <a>Admissions</a>

            <a>Academics</a>

            <a>Placements</a>

            <a>About</a>
          </nav>

          <div className="headerRight">
            <Search size={20} />

            <Globe size={20} />
<button
  className="applyBtn"
  onClick={() => router.push("/")}
>
  Home Page
</button>

            <button
              className="mobileMenu"
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      <section className="hero">
        <video
          className="heroVideo"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/hero-video.mp4"
            type="video/mp4"
          />
        </video>

        <div className="heroOverlay"></div>

        <div className="heroContent">
       

          <h1>
            FUTURE IN
            <br />
            SSC (INSPECTOR)
          </h1>

          <div className="gradientLine"></div>

          <p>
            Modern Preparation Platform for
            SSC, UPSC, Banking,
            Quantitative Aptitude,
            Reasoning and Computer
            Science.
          </p>

         <div className="heroButtons">
  <button
    className="heroBtn"
    onClick={scrollToAcademic}
  >
    Start Learning
    <ArrowRight size={20} />
  </button>

  <button
    className="watchBtn"
    onClick={scrollToVideo}
  >
    <Play size={18} />
    Watch Video
  </button>
</div>
        </div>
      </section>

      <section className="quickStats">
        <div className="quickCard">
          <GraduationCap size={52} />

          <h2>2941+</h2>

          <p>Students</p>
        </div>

        <div className="quickCard">
          <Trophy size={52} />

          <h2>97%</h2>

          <p>Success Rate</p>
        </div>

        <div className="quickCard">
          <Network size={52} />

          <h2>120+</h2>

          <p>Research Projects</p>
        </div>

        <div className="quickCard">
          <Venus size={52} />

          <h2>41%</h2>

          <p>Female Students</p>
        </div>
      </section>

      <section className="highlightSection">
        <div className="highlightCard">
          <Sparkles size={42} />

          <h3>AI Powered Learning</h3>

          <p>
            Smart learning system with
            analytics and preparation
            tracking.
          </p>
        </div>

        <div className="highlightCard">
          <Brain size={42} />

          <h3>Advanced Reasoning</h3>

          <p>
            Industry level aptitude and
            reasoning preparation modules.
          </p>
        </div>

        <div className="highlightCard">
          <ShieldCheck size={42} />

          <h3>Trusted Platform</h3>

          <p>
            Complete preparation ecosystem
            for competitive examinations.
          </p>
        </div>
      </section>

    <section
  ref={academicSectionRef}
  className="dashboardSection"
>
        <div className="sidebar">
          <h2>ACADEMIC PROGRAMS</h2>

         <button
  onClick={() => {
   loadSection("english");

  }}
>
  <BookOpen size={18} />
  English Language
</button>
    <button
  onClick={() => {

   loadSection("gk");

setTimeout(() => {
  topicSectionRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}, 50);
  }}
>
            <Brain size={18} />
            General Awareness
          </button>

          <button
  onClick={() => {
loadSection("quantitative");

setTimeout(() => {
  topicSectionRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}, 50);
  }}
>
            <Calculator size={18} />
            Quantitative Aptitude
          </button>

      
          <button
  onClick={() => {
loadSection("reasoning");

setTimeout(() => {
  topicSectionRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}, 50);
  }}
>
            <Brain size={18} />
            GI & Reasoning
          </button>

              <button
  onClick={() => {
loadSection("computer");

setTimeout(() => {
  topicSectionRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}, 50);
  }}
>
            <Monitor size={18} />
            Computer Knowledge
          </button>

                     <button
  onClick={() => {
    loadSection("CurrentAffairs");
setTimeout(() => {
  topicSectionRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}, 50);
  }}
>
            <Globe size={18} />
            Current Affairs
          </button>
        </div>

        <div className="mainContent" ref={topicSectionRef}>
          <div className="sectionHeader">
            <div>
              <span className="smallHeading">
                COURSE CONTENT
              </span>

              <h2 className="sectionTitle">
                {sectionTitle}
              </h2>
            </div>

            <button className="exploreBtn">
              Explore More
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="topicGrid">
            {topics.map((topic, index) => (
              <div
                className="topicCard"
                key={index}
                onClick={() =>
                  showDetail(topic)
                }
              >
                <div className="cardGlow"></div>

                <h3>{topic}</h3>

              <p>
  {topicDescriptions[topic] ||
    "Complete theory, solved examples, shortcut tricks and practice questions for competitive examinations."}
</p>

                <span>
                  Learn More
                  <ArrowRight size={16} />
                </span>
              </div>
            ))}
          </div>

          <div className="chartWrapper">
            <div className="chartText">
              <span>
                PERFORMANCE ANALYTICS
              </span>

              <h2>
                Subject Distribution
              </h2>

              <p>
                Complete syllabus coverage
                with balanced preparation
                strategy.
              </p>
            </div>

            <div className="chartContainer">
              <canvas
                ref={chartRef}
              ></canvas>
            </div>
          </div>
        </div>
      </section>

  <section
  ref={videoSectionRef}
  className="videoSpotlightSection"
>
  <div className="videoHeader">
    <span>GIRESH ACADEMY MEDIA</span>

    <h2>Student Organization Spotlights</h2>

    <p>
      Want to learn more about student groups and educational communities?
      Watch featured video spotlights and explore different learning programs.
    </p>
  </div>

  <div className="videoLayout">
    <div className="mainVideo">
      <iframe
        width="100%"
        height="550"
        src="https://www.youtube.com/embed/Nl3Dha1pUBA"
        title="Featured Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>

    <div className="videoSidebar">
      <div className="videoItem">
        <img
          src="https://img.youtube.com/vi/Nl3Dha1pUBA/mqdefault.jpg"
          alt=""
        />

        <div>
          <span>GIRESH ACADEMY</span>

          <h4>
            Quantitative Aptitude Masterclass
          </h4>
        </div>
      </div>

      <div className="videoItem">
        <img
          src="https://img.youtube.com/vi/jNQXAC9IVRw/mqdefault.jpg"
          alt=""
        />

        <div>
          <span>GIRESH ACADEMY</span>

          <h4>
            Reasoning Preparation Strategy
          </h4>
        </div>
      </div>

      <div className="videoItem">
        <img
          src="https://img.youtube.com/vi/kXYiU_JCYtU/mqdefault.jpg"
          alt=""
        />

        <div>
          <span>GIRESH ACADEMY</span>

          <h4>
            SSC Complete Preparation Guide
          </h4>
        </div>
      </div>

      <div className="videoItem">
        <img
          src="https://img.youtube.com/vi/ScMzIvxBSi4/mqdefault.jpg"
          alt=""
        />

        <div>
          <span>GIRESH ACADEMY</span>

          <h4>
            Current Affairs Weekly Analysis
          </h4>
        </div>
      </div>

      <div className="videoItem">
        <img
          src="https://img.youtube.com/vi/tgbNymZ7vqY/mqdefault.jpg"
          alt=""
        />

        <div>
          <span>GIRESH ACADEMY</span>

          <h4>
            Computer Awareness Crash Course
          </h4>
        </div>
      </div>
    </div>
  </div>
</section>
      <section className="researchSection">
        <div className="researchContent">
          <span>
            RESEARCH & INNOVATION
          </span>

          <h2>
            Building the Future of Smart
            Education
          </h2>

          <p>
            Combining AI, analytics and
            modern education systems to
            create world-class preparation
            experiences.
          </p>

          <button className="heroBtn">
            Explore Research
          </button>
        </div>
      </section>

      <footer className="footer">
        <div className="footerGrid">
          <div>
            <h3>GIRESH ACADEMY</h3>

            <p>
              Modern learning ecosystem for
              SSC, UPSC and Computer
              Education.
            </p>
          </div>

          <div>
            <h4>Academics</h4>

            <p>SSC</p>

            <p>UPSC</p>

            <p>Reasoning</p>
          </div>

          <div>
            <h4>Research</h4>

            <p>AI Labs</p>

            <p>Analytics</p>

            <p>Innovation</p>
          </div>

          <div>
            <h4>Contact</h4>

            <p>Delhi NCR</p>

            <p>India</p>

            <p>support@academy.com</p>
          </div>
        </div>

        <button
          className="scrollTop"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <ChevronUp size={20} />
        </button>
      </footer>

      <canvas
        id="globalDraw"
        ref={drawCanvasRef}
      ></canvas>

      <div className="drawControls">
        <button
          onClick={() =>
            (window as any).enablePen()
          }
        >
          <PenTool size={18} />
        </button>

        <button
          onClick={() =>
            (window as any).enableEraser()
          }
        >
          <Eraser size={18} />
        </button>

        <button
          onClick={() =>
            (window as any).clearCanvas()
          }
        >
          <Trash2 size={18} />
        </button>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Inter", sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: #07111f;
          overflow-x: hidden;
        }

        .page {
          background: #07111f;
          color: white;
        }

        .page::before {
          content: "";

          position: fixed;

          width: 500px;
          height: 500px;

          background: radial-gradient(
            #7b2ff7,
            transparent
          );

          top: -200px;
          right: -120px;

          filter: blur(80px);

          opacity: 0.45;

          z-index: 0;
        }

        .topBar {
          height: 5px;

          background: linear-gradient(
            to right,
            #ff0055,
            #7b2ff7
          );
        }

        .header {
          position: fixed;

          top: 0;

          width: 100%;

          z-index: 999;

          backdrop-filter: blur(25px);

          background: rgba(0, 0, 0, 0.45);

          border-bottom: 1px solid
            rgba(255, 255, 255, 0.08);
        }

        .navContainer {
          height: 90px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          padding: 0 5%;
        }

        .logo {
          font-size: 24px;

          font-weight: 900;

          letter-spacing: 1px;
        }
          @media (max-width: 768px) {
  .dashboardSection {
    padding: 20px;
    overflow-x: hidden;
  }

  .mainContent {
    width: 100%;
    min-width: 0;
  }

  .topicGrid {
    grid-template-columns: 1fr;
    width: 100%;
  }

  .topicCard {
    width: 100%;
    min-width: 0;
    padding: 24px;
  }

  .topicCard h3 {
    font-size: 1.8rem;
    word-break: break-word;
  }

  .topicCard p {
    font-size: 15px;
  }
}
  @media (max-width: 768px) {
  .chartWrapper {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .chartContainer {
    width: 100%;
    padding: 15px;
    overflow: hidden;
  }

  .chartContainer canvas {
    max-width: 100% !important;
    height: auto !important;
  }

  .chartText h2 {
    font-size: 2rem;
    word-break: break-word;
  }
}

        .menu {
          display: flex;

          align-items: center;

          gap: 34px;
        }

        .menu a,
        .menuButton {
          color: white;

          background: transparent;

          border: none;

          font-size: 15px;

          font-weight: 600;

          cursor: pointer;

          position: relative;
        }

        .menu a::after,
        .menuButton::after {
          content: "";

          position: absolute;

          left: 0;

          bottom: -6px;

          width: 0;

          height: 2px;

          background: #ff0055;

          transition: 0.3s;
        }

        .menu a:hover::after,
        .menuButton:hover::after {
          width: 100%;
        }

        .headerRight {
          display: flex;

          align-items: center;

          gap: 18px;
        }

        .applyBtn {
          border: none;

          padding: 12px 22px;

          border-radius: 999px;

          background: linear-gradient(
            135deg,
            #ff0055,
            #7b2ff7
          );

          color: white;

          font-weight: 700;

          cursor: pointer;
        }

        .megaMenu {
          position: absolute;

          top: 90px;

          left: 0;

          width: 100%;

          padding: 50px;

          display: grid;

          grid-template-columns: repeat(
            3,
            1fr
          );

          gap: 40px;

          background: rgba(10, 15, 25, 0.96);

          backdrop-filter: blur(25px);
        }

        .megaColumn h3 {
          margin-bottom: 20px;

          color: #ff4da6;
        }

        .megaColumn a {
          display: block;

          margin-bottom: 14px;

          color: white;
        }

        .hero {
          position: relative;

          height: 100vh;
        }

        .heroVideo {
          width: 100%;
          height: 100%;

          object-fit: cover;
        }

        .heroOverlay {
          position: absolute;

          inset: 0;

          background: linear-gradient(
              to right,
              rgba(0, 0, 0, 0.9),
              rgba(0, 0, 0, 0.3)
            ),
            linear-gradient(
              to top,
              rgba(0, 0, 0, 0.85),
              transparent
            );
        }

        .heroContent {
          position: absolute;

          top: 50%;

          left: 7%;

          transform: translateY(-50%);

          max-width: 850px;

          z-index: 2;
        }

        .heroMini {
          display: inline-block;

          margin-bottom: 18px;

          background: rgba(
            255,
            255,
            255,
            0.1
          );

          padding: 10px 18px;

          border-radius: 999px;

          font-size: 14px;

          font-weight: 700;
        }

        .heroContent h1 {
          font-size: clamp(
            3.5rem,
            5vw,
            5rem
          );

          line-height: 0.95;

          font-weight: 900;

          letter-spacing: -4px;
        }

        .gradientLine {
          width: 240px;

          height: 7px;

          margin: 30px 0;

          border-radius: 999px;

          background: linear-gradient(
            to right,
            #ff0055,
            #7b2ff7
          );
        }

        .heroContent p {
          font-size: 23px;

          line-height: 1.8;

          color: rgba(
            255,
            255,
            255,
            0.8
          );
        }

        .heroButtons {
          display: flex;

          gap: 20px;

          margin-top: 40px;

          flex-wrap: wrap;
        }

        .heroBtn,
        .watchBtn {
          border: none;

          padding: 18px 34px;

          border-radius: 999px;

          display: flex;

          align-items: center;

          gap: 12px;

          cursor: pointer;

          font-size: 16px;

          font-weight: 700;
        }

        .heroBtn {
          background: linear-gradient(
            135deg,
            #ff0055,
            #7b2ff7
          );

          color: white;

          box-shadow: 0 15px 40px
            rgba(123, 47, 247, 0.4);
        }

        .watchBtn {
          background: rgba(
            255,
            255,
            255,
            0.08
          );

          color: white;

          border: 1px solid
            rgba(255, 255, 255, 0.1);
        }

        .quickStats {
          display: grid;

          grid-template-columns: repeat(
            4,
            1fr
          );

          gap: 30px;

          padding: 90px 7%;

          margin-top: -80px;

          position: relative;

          z-index: 5;
        }

        .quickCard {
          padding: 40px;

          border-radius: 30px;

          background: rgba(
            255,
            255,
            255,
            0.06
          );

          backdrop-filter: blur(25px);

          border: 1px solid
            rgba(255, 255, 255, 0.08);

          text-align: center;

          transition: 0.4s;
        }

      

        .quickCard h2 {
          font-size: 54px;

          margin: 20px 0;
        }

        .highlightSection {
          display: grid;

          grid-template-columns: repeat(
            auto-fit,
            minmax(280px, 1fr)
          );

          gap: 30px;

          padding: 40px 7% 100px;
        }

        .highlightCard {
          padding: 40px;

          border-radius: 30px;

          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.08),
            rgba(255, 255, 255, 0.03)
          );

          backdrop-filter: blur(25px);

          border: 1px solid
            rgba(255, 255, 255, 0.08);

          transition: 0.4s;
        }


        .highlightCard h3 {
          margin: 20px 0;

          font-size: 26px;
        }

        .highlightCard p {
          color: rgba(
            255,
            255,
            255,
            0.75
          );

          line-height: 1.8;
        }

        .dashboardSection {
          display: grid;

          grid-template-columns: 300px 1fr;

          gap: 40px;

          padding: 40px 7% 100px;
        }

        .sidebar {
          padding: 30px;

          border-radius: 30px;

          background: rgba(
            255,
            255,
            255,
            0.05
          );

          backdrop-filter: blur(25px);

          border: 1px solid
            rgba(255, 255, 255, 0.08);

          height: fit-content;

          position: sticky;

          top: 120px;
        }

        .sidebar h2 {
          margin-bottom: 30px;

          text-align: center;
        }

        .sidebar button {
          width: 100%;

          margin-bottom: 14px;

          border: none;

          border-radius: 18px;

          padding: 16px;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 12px;

          background: linear-gradient(
            135deg,
            #ff0055,
            #7b2ff7
          );

          color: white;

          font-weight: 700;

          cursor: pointer;

          transition: 0.3s;
        }

        

        .sectionHeader {
          display: flex;

          align-items: center;

          justify-content: space-between;

          margin-bottom: 40px;

          flex-wrap: wrap;

          gap: 20px;
        }

        .smallHeading {
          color: #ff4da6;

          font-weight: 700;

          letter-spacing: 1px;
        }

        .sectionTitle {
          font-size: 56px;

          margin-top: 10px;
        }

        .exploreBtn {
          border: none;

          padding: 16px 26px;

          border-radius: 999px;

          display: flex;

          align-items: center;

          gap: 10px;

          background: rgba(
            255,
            255,
            255,
            0.08
          );

          color: white;

          cursor: pointer;
        }

        .topicGrid {
          display: grid;

          grid-template-columns: repeat(
            auto-fill,
            minmax(280px, 1fr)
          );

          gap: 25px;
        }

        .topicCard {
          position: relative;

          overflow: hidden;

          padding: 32px;

          border-radius: 28px;

          background: rgba(
            255,
            255,
            255,
            0.06
          );

          backdrop-filter: blur(20px);

          border: 1px solid
            rgba(255, 255, 255, 0.08);

          cursor: pointer;

          transition: 0.4s;
        }

        // .topicCard:hover {
        //   transform: translateY(-10px)
        //     scale(1.03);

        //   box-shadow: 0 25px 50px
        //     rgba(0, 0, 0, 0.4);
        // }

        .cardGlow {
          position: absolute;

          width: 220px;
          height: 220px;

          background: radial-gradient(
            rgba(123, 47, 247, 0.4),
            transparent
          );

          top: -100px;
          right: -100px;
        }

        .topicCard h3 {
          position: relative;

          z-index: 2;

          font-size: 26px;

          margin-bottom: 18px;
        }

        .topicCard p {
          position: relative;

          z-index: 2;

          line-height: 1.7;

          color: rgba(
            255,
            255,
            255,
            0.72
          );
        }

        .topicCard span {
          position: relative;

          z-index: 2;

          margin-top: 25px;

          display: inline-flex;

          align-items: center;

          gap: 10px;

          font-weight: 700;

          color: #ff4da6;
        }

        .chartWrapper {
          margin-top: 80px;

          display: grid;

          grid-template-columns: 1fr 500px;

          gap: 40px;

          align-items: center;
        }

        .chartText span {
          color: #ff4da6;

          font-weight: 700;
        }

        .chartText h2 {
          font-size: 54px;

          margin: 20px 0;
        }

        .chartText p {
          line-height: 1.8;

          color: rgba(
            255,
            255,
            255,
            0.75
          );
        }

        .chartContainer {
          padding: 30px;

          border-radius: 30px;

          background: rgba(
            255,
            255,
            255,
            0.05
          );

          backdrop-filter: blur(20px);

          border: 1px solid
            rgba(255, 255, 255, 0.08);
        }

        .founderSection {
          padding: 100px 7%;
        }

        .founderCard {
          display: grid;

          grid-template-columns: 420px 1fr;

          overflow: hidden;

          border-radius: 40px;

          background: rgba(
            255,
            255,
            255,
            0.05
          );

          backdrop-filter: blur(25px);

          border: 1px solid
            rgba(255, 255, 255, 0.08);
        }

        .imageSide {
          position: relative;

          min-height: 650px;
        }

        .founderImage {
          object-fit: cover;
        }

        .contentSide {
          padding: 60px;
        }

        .founderTag {
          display: inline-block;

          padding: 10px 18px;

          border-radius: 999px;

          background: linear-gradient(
            135deg,
            #ff0055,
            #7b2ff7
          );

          font-weight: 700;

          margin-bottom: 20px;
        }

        .contentSide h2 {
          font-size: 62px;

          margin-bottom: 24px;
        }

        .contentSide p {
          line-height: 1.9;

          color: rgba(
            255,
            255,
            255,
            0.75
          );

          margin-bottom: 30px;
        }

        .youtubeWrap {
          overflow: hidden;

          border-radius: 24px;
        }

        .researchSection {
          padding: 120px 7%;

          background: linear-gradient(
            135deg,
            #08111e,
            #13253f
          );
        }

        .researchContent {
          max-width: 900px;
        }

        .researchContent span {
          color: #ff4da6;

          font-weight: 700;
        }

        .researchContent h2 {
          font-size: 74px;

          line-height: 1;

          margin: 25px 0;
        }

        .researchContent p {
          font-size: 22px;

          line-height: 1.9;

          margin-bottom: 40px;

          color: rgba(
            255,
            255,
            255,
            0.75
          );
        }

        .footer {
          position: relative;

          padding: 90px 7%;

          background: #050b14;
        }

        .footerGrid {
          display: grid;

          grid-template-columns: repeat(
            4,
            1fr
          );

          gap: 40px;
        }

        .footerGrid h3,
        .footerGrid h4 {
          margin-bottom: 20px;
        }

        .footerGrid p {
          margin-bottom: 12px;

          color: rgba(
            255,
            255,
            255,
            0.7
          );
        }

        .scrollTop {
          position: absolute;

          right: 40px;
          bottom: 40px;

          width: 58px;
          height: 58px;

          border-radius: 999px;

          border: none;

          background: linear-gradient(
            135deg,
            #ff0055,
            #7b2ff7
          );

          color: white;

          cursor: pointer;
        }

        #globalDraw {
          position: fixed;

          top: 0;
          left: 0;

          width: 100vw;
          height: 100vh;

          z-index: 9999;

          pointer-events: none;
        }

        .drawControls {
          position: fixed;

          right: 20px;
          bottom: 20px;

          display: flex;

          gap: 10px;

          padding: 12px;

          border-radius: 20px;

          background: rgba(
            0,
            0,
            0,
            0.75
          );

          backdrop-filter: blur(20px);

          z-index: 10000;
        }

        .drawControls button {
          width: 42px;
          height: 42px;

          border: none;

          border-radius: 12px;

          background: linear-gradient(
            135deg,
            #ff0055,
            #7b2ff7
          );

          color: white;

          cursor: pointer;
        }

        .mobileMenu {
          display: none;

          background: transparent;

          border: none;

          color: white;
        }
          .videoSpotlightSection {
  padding: 100px 7%;
}

.videoHeader {
  margin-bottom: 40px;
}

.videoHeader span {
  color: #4da3ff;
  font-weight: 800;
  letter-spacing: 1px;
}

.videoHeader h2 {
  font-size: 58px;
  margin-top: 12px;
  margin-bottom: 20px;
}

.videoHeader p {
  font-size: 22px;
  color: rgba(255,255,255,0.75);
  line-height: 1.8;
}

.videoLayout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 25px;
}

.mainVideo {
  border-radius: 24px;
  overflow: hidden;
  background: #000;
}

.mainVideo iframe {
  display: block;
}

.videoSidebar {
  max-height: 600px;
  overflow-y: auto;
  padding-right: 10px;
}

.videoSidebar::-webkit-scrollbar {
  width: 8px;
}

.videoSidebar::-webkit-scrollbar-thumb {
  background: #7b2ff7;
  border-radius: 999px;
}

.videoItem {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.videoItem:hover {
  transform: translateX(8px);
}

.videoItem img {
  width: 140px;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
}

.videoItem span {
  font-size: 12px;
  font-weight: 700;
  color: #4da3ff;
  display: block;
  margin-bottom: 6px;
}

.videoItem h4 {
  font-size: 24px;
  line-height: 1.4;
}

@media (max-width: 1200px) {
  .videoLayout {
    grid-template-columns: 1fr;
  }

  .videoSidebar {
    max-height: 400px;
  }
}

@media (max-width: 768px) {
  .videoHeader h2 {
    font-size: 38px;
  }

  .videoItem h4 {
    font-size: 18px;
  }

  .mainVideo iframe {
    height: 300px;
  }
}

        @media (max-width: 1200px) {
          .chartWrapper,
          .founderCard,
          .dashboardSection,
          .quickStats,
          .footerGrid {
            grid-template-columns: 1fr;
          }

          .sidebar {
            position: relative;

            top: 0;
          }
        }

        @media (max-width: 992px) {
          .menu {
            position: fixed;

            top: 90px;

            left: -100%;

            width: 100%;

            height: calc(100vh - 90px);

            background: #07111f;

            flex-direction: column;

            padding-top: 40px;

            transition: 0.4s;
          }

          .mobileShow {
            left: 0;
          }

          .mobileMenu {
            display: block;
          }

          .heroContent {
            left: 5%;
            right: 5%;
          }

          .heroContent p {
            font-size: 18px;
          }

          .sectionTitle,
          .chartText h2,
          .researchContent h2,
          .contentSide h2 {
            font-size: 42px;
          }

          .heroContent h1 {
            font-size: 58px;
          }

          .navContainer {
            padding: 0 20px;
          }
        }

        @media (max-width: 768px) {
          .topicGrid {
            grid-template-columns: 1fr;
          }

          .heroButtons {
            flex-direction: column;
          }

          .quickCard h2 {
            font-size: 42px;
          }

          .researchContent h2 {
            font-size: 36px;
          }

          .contentSide {
            padding: 30px;
          }

          .chartText h2 {
            font-size: 34px;
          }
        }
          @media (max-width: 768px) {
  .hero {
    height: auto;
    min-height: 100vh;
  }

  .heroContent {
    position: absolute;
    left: 20px;
    right: 20px;
    top: 55%;
    transform: translateY(-50%);
    max-width: 100%;
  }

  .heroContent h1 {
    font-size: 2.8rem;
    line-height: 1.05;
    letter-spacing: -1px;
  }

  .heroContent p {
    font-size: 16px;
    line-height: 1.7;
  }

  .gradientLine {
    width: 120px;
    height: 5px;
  }

  .heroButtons {
    flex-direction: column;
    width: 100%;
  }

  .heroBtn,
  .watchBtn {
    width: 100%;
    justify-content: center;
  }
}
      `}</style>
    </div>
  );
}