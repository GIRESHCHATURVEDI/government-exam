"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import {
  Calculator,
  Sigma,
  Hash,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Brain,
  Star,
  X,
  Pencil,
  Eraser,
  Trash2,
  StickyNote,
  Minus,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function NumberSystemPage() {
  const [openCard, setOpenCard] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

const cardsPerView = 1;
 const pyqQuestions = [
 {
  title: "SSC CGL 2024 PYQ",
  question:
    "The Least Common Multiple of three different numbers is 120. Which of the following cannot be their Highest Common Factor?",
  options: [
    "15",
    "40",
    "20",
    "16",
  ],
  answer: "16",
},
{
  title: "SSC CGL 2024 PYQ",
  question:
    "What is the Least Common Multiple of 120, 240 and 480?",
  options: [
    "240",
    "960",
    "480",
    "1800",
  ],
  answer: "480",
},
{
  title: "SSC CGL 2024 PYQ",
  question:
    "Find the numbers if the HCF of two numbers is 47 and their sum is 188.",
  options: [
    "141 and 138",
    "47 and 141",
    "215 and 211",
    "47 and 51",
  ],
  answer: "47 and 141",
},
{
  title: "SSC CGL 2024 PYQ",
  question:
    "What is the remainder when 58^29 is divided by 5?",
  options: [
    "2",
    "4",
    "3",
    "7",
  ],
  answer: "2",
},
{
  title: "SSC CGL 2024 PYQ",
  question:
    "The least number which is exactly divisible by 27, 36, 56, 12 and 10?",
  options: [
    "7694",
    "8584",
    "7560",
    "5953",
  ],
  answer: "7560",
},
{
  title: "SSC CGL 2024 PYQ",
  question:
    "What is the Highest Common Factor of 2³ × 3⁵ and 2⁴ × 3⁶?",
  options: [
    "2 × 3²",
    "2³ × 3⁵",
    "2² × 3²",
    "2³ × 3³",
  ],
  answer: "2³ × 3⁵",
},
{
  title: "SSC CGL 2024 PYQ",
  question:
    "The product of two numbers is 720 and their Highest Common Factor is 4. What is the Least Common Multiple of these numbers?",
  options: [
    "120",
    "480",
    "180",
    "240",
  ],
  answer: "180",
},
{
  title: "SSC CGL 2024 PYQ",
  question:
    "What is the Highest Common Factor of 12, 8 and 24?",
  options: [
    "12",
    "6",
    "4",
    "8",
  ],
  answer: "4",
},
{
  title: "SSC CGL 2024 PYQ",
  question:
    "Which of the following number is divisible by 11?",
  options: [
    "1442",
    "9196",
    "4320",
    "8487",
  ],
  answer: "9196",
},
{
  title: "SSC CGL 2024 PYQ",
  question:
    "Find the HCF of 27/50, 9/20, 6/25.",
  options: [
    "68/7",
    "47/5",
    "56/5",
    "3/100",
  ],
  answer: "3/100",
},
{
  title: "SSC CGL 2024 PYQ",
  question:
    "Least Common Multiple of 6 and 29 is X, Highest Common Factor of 6 and 29 is Y. Then what is the value of (X + 4Y)?",
  options: [
    "180",
    "190",
    "178",
    "244",
  ],
  answer: "178",
},
{
  title: "SSC CGL 2024 PYQ",
  question:
    "4 bells ring at intervals of 6, 8, 9 and 10 seconds. All the bells ring at the same time. After how many minutes will they ring together again?",
  options: [
    "6 min",
    "10 min",
    "8 min",
    "15 min",
  ],
  answer: "6 min",
},
{
  title: "SSC CGL 2024 PYQ",
  question:
    "For what value of M 58524M is divisible by 9?",
  options: [
    "3",
    "2",
    "8",
    "7",
  ],
  answer: "3",
},
{
  title: "SSC CGL 2024 PYQ",
  question:
    "The product of two numbers is 3375, and their HCF is 15. Find their LCM.",
  options: [
    "220",
    "250",
    "225",
    "215",
  ],
  answer: "225",
},
{
  title: "SSC CGL 2024 PYQ",
  question:
    "Find the greatest number which on dividing 60 and 90 leaves remainders 2 and 3 respectively.",
  options: [
    "29",
    "19",
    "17",
    "23",
  ],
  answer: "29",
},
{
  title: "SSC CGL 2024 PYQ",
  question:
    "Which of the following number is divisible by 11?",
  options: [
    "8962",
    "6589",
    "9164",
    "4857",
  ],
  answer: "9164",
},
{
  title: "SSC CGL 2024 PYQ",
  question:
    "The Least Common Multiple of two prime numbers x and y (x < y) is 141. Then what is the value of (y - 5x)?",
  options: [
    "40",
    "32",
    "38",
    "30",
  ],
  answer: "32",
},
{
  title: "SSC CGL 2024 PYQ",
  question:
    "What is the Least Common Multiple of 2⁴ × 3³, 2⁵ × 3² and 2⁵ × 3⁶?",
  options: [
    "2³ × 3⁵",
    "2⁵ × 3⁵",
    "2⁵",
    "2⁵ × 3⁶",
  ],
  answer: "2⁵ × 3⁶",
},
{
  title: "SSC CGL 2024 PYQ",
  question:
    "Find the LCM of 18, 24 and 36.",
  options: [
    "24",
    "36",
    "64",
    "72",
  ],
  answer: "72",
},
{
  title: "SSC CGL 2024 PYQ",
  question:
    "Find the HCF of 31 and 73.",
  options: [
    "1",
    "11",
    "3",
    "7",
  ],
  answer: "1",
},
{
  title: "SSC CGL 2024 PYQ",
  question:
    "Find the maximum number of students among whom 1003 chocolates and 2703 candies can be distributed such that each student gets the same number of each.",
  options: [
    "19",
    "29",
    "17",
    "33",
  ],
  answer: "17",
},
{
  title: "SSC CGL 2024 PYQ",
  question:
    "What is the sum of all prime numbers between 30 and 50?",
  options: [
    "202",
    "199",
    "173",
    "187",
  ],
  answer: "199",
},
{
  title: "SSC CGL 2024 PYQ",
  question:
    "What is the smallest number that is a multiple of 5, 8 and 15?",
  options: [
    "40",
    "230",
    "120",
    "60",
  ],
  answer: "120",
},
{
  title: "SSC CGL 2024 PYQ",
  question:
    "Which of the following number is divisible by 4?",
  options: [
    "2342",
    "4348",
    "1734",
    "1570",
  ],
  answer: "4348",
},
{
  title: "SSC CGL 2024 PYQ",
  question:
    "Which among the following is divisible by 4, 7 and 23?",
  options: [
    "6457",
    "6440",
    "6245",
    "6490",
  ],
  answer: "6440",
},
{
  title: "SSC CGL 2024 PYQ",
  question:
    "Three numbers are in the ratio 3 : 9 : 11 and their HCF is 29. Find the numbers.",
  options: [
    "58, 88, and 319",
    "87, 261, and 319",
    "144, 261 and 320",
    "84, 240, and 300",
  ],
  answer: "87, 261, and 319",
},
{
  title: "SSC CGL 2024 PYQ",
  question:
    "What will be the remainder when 31 × 32 × 33 is divided by 5?",
  options: [
    "0",
    "1",
    "3",
    "2",
  ],
  answer: "1",
},
{
  title: "SSC CGL 2024 PYQ",
  question:
    "Convert 0.427̅ into fraction.",
  options: [
    "420/999",
    "400/999",
    "423/999",
    "423/990",
  ],
  answer: "423/999",
},
{
  title: "SSC CGL 2024 PYQ",
  question:
    "Find the HCF of 84, 126, and 168.",
  options: [
    "44",
    "40",
    "49",
    "42",
  ],
  answer: "42",
},
];
const totalSlides = Math.ceil(
  pyqQuestions.length / cardsPerView
);

const nextSlide = () => {
  setCurrentSlide((prev) =>
    prev === totalSlides - 1 ? 0 : prev + 1
  );
};

const prevSlide = () => {
  setCurrentSlide((prev) =>
    prev === 0 ? totalSlides - 1 : prev - 1
  );
};

  const [loading, setLoading] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [isDrawing, setIsDrawing] = useState(false);

  const [brushColor, setBrushColor] = useState("#ffffff");

  const [brushSize, setBrushSize] = useState(4);

  const [tool, setTool] = useState("pen");

  const [pdfImage, setPdfImage] = useState<string | null>(null);

  const topics = [
    {
      title: "Natural Numbers",
      desc: "Counting numbers starting from 1.",
      icon: <Hash size={28} />,

      formulas: [
        "Natural Numbers = 1,2,3,4...",
        "Sum of first n natural numbers = n(n + 1) / 2",
        "Sum of squares = n(n + 1)(2n + 1) / 6",
      ],

      tricks: [
        "0 is not a natural number.",
        "Natural numbers are always positive.",
        "Used mainly for counting objects.",
      ],

      revision: [
        "Smallest natural number = 1",
        "No largest natural number exists.",
      ],
    },

    {
      title: "Whole Numbers",
      desc: "Natural numbers including zero.",
      icon: <Sigma size={28} />,

      formulas: [
        "Whole Numbers = 0,1,2,3...",
        "Whole numbers include zero.",
      ],

      tricks: [
        "Every natural number is a whole number.",
        "0 is the smallest whole number.",
      ],

      revision: [
        "Whole numbers are non-negative.",
        "No decimal or fraction exists in whole numbers.",
      ],
    },

    {
      title: "Integers",
      desc: "Positive, negative numbers and zero.",
      icon: <Calculator size={28} />,

      formulas: [
        "Integers = {...,-3,-2,-1,0,1,2,3...}",
        "Addition of opposite integers can become zero.",
      ],

      tricks: [
        "Negative × Negative = Positive",
        "Positive × Negative = Negative",
      ],

      revision: [
        "Integers include negative numbers.",
        "0 is neither positive nor negative.",
      ],
    },

    {
      title: "Rational Numbers",
      desc: "Numbers represented in p/q form.",
      icon: <Brain size={28} />,

      formulas: [
        "Rational Number = p/q",
        "q should not be zero.",
        "Fraction = p/q where q ≠ 0 and p,q must be integers.",
        "0.37 = 37/100",
        "2.541 = 2541/1000",
        "0.616161... = 61/99",
        "3.432432... = 3 + 432/999",
      ],

      tricks: [
        "Every integer is rational.",
        "Decimals terminating or repeating are rational.",
        "Repeating decimals can be converted into p/q form.",
      ],

      revision: [
        "1/2, 3/5 are rational numbers.",
        "Can be represented in fraction form.",
        "Step 1:",
        "x = 0.616161...",
        "100x = 61.616161...",
        "100x - x = 61",
        "99x = 61",
        "x = 61/99",
      ],
    },

    {
      title: "Irrational Numbers",
      desc: "Non-terminating non-repeating decimals.",
      icon: <Sparkles size={28} />,

      formulas: ["√2, √3, π are irrational numbers."],

      tricks: [
        "Irrational numbers never terminate.",
        "They never repeat in pattern.",
      ],

      revision: [
        "Cannot be represented in p/q form.",
        "Mostly found in roots and π values.",
      ],
    },

    {
      title: "Prime Numbers",
      desc: "Numbers having exactly two factors.",
      icon: <Star size={28} />,

      formulas: [
        "Prime Numbers have exactly 2 factors.",
        "2 is the only even prime number.",
      ],

      tricks: [
        "Prime numbers greater than 3 are of form 6n ± 1.",
        "1 is not prime.",
      ],

      revision: [
        "Factors are 1 and itself only.",
        "Examples: 2,3,5,7,11",
      ],
    },
    {
  title: "Surds",
  desc: "Irrational roots that cannot be simplified into rational numbers.",
  icon: <Sparkles size={28} />,

  formulas: [
    "√a × √b = √(ab)",
    "√a / √b = √(a/b)",
    "a√b + c√b = (a + c)√b",
    "Rationalization: 1/√a = √a / a",
  ],

  tricks: [
    "Surds are irrational numbers.",
    "Only like surds can be added/subtracted.",
    "Rationalize denominator to simplify expressions.",
  ],

  revision: [
    "Example: √2, √3, √5",
    "Cannot be written in p/q form.",
  ],
},
{
  title: "Indices (Exponents)",
  desc: "Rules of powers and exponential expressions.",
  icon: <Sigma size={28} />,

  formulas: [
    "a^m × a^n = a^(m+n)",
    "a^m / a^n = a^(m-n)",
    "(a^m)^n = a^(mn)",
    "a^0 = 1",
    "a^-n = 1/a^n",
  ],

  tricks: [
    "Same base ⇒ add/subtract powers.",
    "Power of power ⇒ multiply exponents.",
    "Negative power ⇒ reciprocal.",
  ],

  revision: [
    "10^3 = 1000",
    "2^5 = 32",
  ],
},
{
  title: "LCM & HCF",
  desc: "Methods to find least common multiple and highest common factor.",
  icon: <Calculator size={28} />,

  formulas: [
    "LCM × HCF = Product of two numbers",
    "HCF = Common prime factors",
    "LCM = Highest powers of all primes",
  ],

  tricks: [
    "HCF ≤ smallest number",
    "LCM ≥ largest number",
    "If numbers are co-prime → HCF = 1",
  ],

  revision: [
    "HCF → common factors",
    "LCM → common multiples",
  ],
},
{
  title: "Divisibility Rules",
  desc: "Quick rules to check divisibility of numbers.",
  icon: <Hash size={28} />,

  formulas: [
    "2 → last digit even",
    "3 → sum of digits divisible by 3",
    "4 → last 2 digits divisible by 4",
    "5 → last digit 0 or 5",
    "9 → sum of digits divisible by 9",
    "11 → difference of alternating sum is 0 or multiple of 11",
  ],

  tricks: [
    "Use digit sum for 3, 9 quickly.",
    "Check last digits for 2, 4, 5, 10.",
  ],

  revision: [
    "Fast checking saves exam time.",
    "Important for SSC & banking exams.",
  ],
},
{
  title: "Number Properties",
  desc: "Properties of even, odd, natural, whole and integers.",
  icon: <Brain size={28} />,

  formulas: [
    "Even numbers = 2n",
    "Odd numbers = 2n + 1",
    "Natural numbers = 1,2,3,...",
    "Whole numbers = 0,1,2,3,...",
  ],

  tricks: [
    "Even + Even = Even",
    "Odd + Odd = Even",
    "Odd × Odd = Odd",
    "Even × Any = Even",
  ],

  revision: [
    "0 is neither odd nor even.",
    "Natural numbers start from 1.",
  ],
}
  ];
 

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = 950;

      ctx.fillStyle = "#0b1728";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (pdfImage) {
        const img = new Image();

        img.src = pdfImage;

        img.onload = () => {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
      }
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [pdfImage]);

  const startDrawing = (
    e:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>
  ) => {
    setIsDrawing(true);

    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);

    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    ctx.beginPath();
  };

  const draw = (
    e:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>
  ) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();

    let x = 0;
    let y = 0;

    if ("touches" in e) {
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }

    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (tool === "eraser") {
      ctx.strokeStyle = "#0b1728";
    } else {
      ctx.strokeStyle = brushColor;
    }

    ctx.lineTo(x, y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clearBoard = () => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    ctx.fillStyle = "#0b1728";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    setPdfImage(null);
  };

  const handlePdfUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const result = event.target?.result as string;

      const canvas = canvasRef.current;

      if (!canvas) return;

      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      const img = new Image();

      img.src = result;

      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        setPdfImage(result);
      };
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
        {loading && (
      <div className="pageLoader">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    )}

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap");

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: "Poppins", sans-serif;
          background: #07111f;
          color: white;
          overflow-x: hidden;
        }

        body::before {
          content: "";
          position: fixed;
          width: 700px;
          height: 700px;
          background: radial-gradient(
            circle,
            rgba(0, 183, 255, 0.18),
            transparent 70%
          );
          top: -250px;
          right: -200px;
          z-index: -1;
        }

        body::after {
          content: "";
          position: fixed;
          width: 600px;
          height: 600px;
          background: radial-gradient(
            circle,
            rgba(119, 0, 255, 0.16),
            transparent 70%
          );
          bottom: -200px;
          left: -150px;
          z-index: -1;
        }

        .container {
          width: 100%;
          min-height: 100vh;
          padding: 30px 7%;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 60px;
        }

        .logo {
          font-size: 30px;
          font-weight: 800;
          background: linear-gradient(90deg, #00d2ff, #7a5cff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .navBtn {
          padding: 12px 24px;
          border-radius: 12px;
          text-decoration: none;
          color: white;
          font-weight: 600;
          background: linear-gradient(135deg, #00c6ff, #0072ff);
          transition: 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 114, 255, 0.4);
        }

        .hero {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          align-items: center;
          gap: 60px;
          margin-bottom: 80px;
        }

        .heroContent h1 {
          font-size: 62px;
          line-height: 1.1;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .heroContent h1 span {
          background: linear-gradient(90deg, #00d2ff, #7a5cff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .heroContent p {
          font-size: 18px;
          color: #cfd8e3;
          line-height: 1.8;
          margin-bottom: 35px;
        }

        .heroButtons {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }

        .primaryBtn {
          padding: 15px 28px;
          border-radius: 14px;
          background: linear-gradient(135deg, #00c6ff, #0072ff);
          color: white;
          text-decoration: none;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .secondaryBtn {
          padding: 15px 28px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          color: white;
          text-decoration: none;
          font-weight: 600;
        }

        .heroCard {
          position: relative;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 32px;
          padding: 40px;
          backdrop-filter: blur(18px);
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
        }

        .heroCard::before {
          content: "";
          position: absolute;
          width: 250px;
          height: 250px;
          background: rgba(0, 183, 255, 0.2);
          border-radius: 50%;
          top: -80px;
          right: -80px;
        }

        .heroCard h2 {
          font-size: 32px;
          margin-bottom: 20px;
        }

        .heroCard ul {
          display: flex;
          flex-direction: column;
          gap: 18px;
          list-style: none;
        }

        .heroCard li {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 17px;
          color: #d7e0ea;
        }

        .sectionTitle {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 12px;
          text-align: center;
        }

        .sectionSubtitle {
          text-align: center;
          color: #aeb8c5;
          margin-bottom: 50px;
          font-size: 17px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-bottom: 90px;
        }

        .card {
          position: relative;
          overflow: hidden;
          padding: 30px;
          border-radius: 28px;
          background: linear-gradient(
            180deg,
            rgba(10, 25, 47, 0.95),
            rgba(7, 17, 31, 0.98)
          );
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(18px);
          cursor: pointer;
          min-height: 320px;
        }

        .card::before {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          background: rgba(0, 183, 255, 0.08);
          border-radius: 50%;
          top: -80px;
          right: -80px;
        }

        .iconBox {
          width: 65px;
          height: 65px;
          border-radius: 18px;
          background: linear-gradient(135deg, #00c6ff, #7a5cff);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .card h2 {
          font-size: 24px;
          margin-bottom: 14px;
        }

        .card p {
          color: #b8c4d1;
          line-height: 1.7;
          margin-bottom: 24px;
          font-size: 20px;
        }

        .readMore {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #00d2ff;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
        }

        .teacherSection {
          margin-bottom: 120px;
          position: relative;
        }

        .teacherSection::before {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(
            circle,
            rgba(0, 210, 255, 0.12),
            transparent 70%
          );
          top: -120px;
          left: -120px;
          z-index: -1;
        }

        .teacherSection::after {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(
            circle,
            rgba(122, 92, 255, 0.14),
            transparent 70%
          );
          bottom: -150px;
          right: -120px;
          z-index: -1;
        }

        .teacherHeader {
          text-align: center;
          margin-bottom: 45px;
        }

        .teacherHeader h2 {
          font-size: 58px;
          margin-bottom: 18px;
          font-weight: 800;
          background: linear-gradient(90deg, #00d2ff, #7a5cff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 1px;
        }

        .teacherHeader p {
          color: #d7e0ea;
          font-size: 18px;
          line-height: 1.9;
          max-width: 900px;
          margin: auto;
        }

        .teacherLayout {
          position: relative;
        }

        .boardContainer {
          position: relative;
          overflow: hidden;
          border-radius: 36px;
          background: linear-gradient(
            145deg,
            rgba(12, 24, 44, 0.96),
            rgba(7, 17, 31, 0.98)
          );
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(25px);
          box-shadow:
            0 25px 80px rgba(0, 0, 0, 0.55),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }

        .boardContainer::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            );
          background-size: 40px 40px;
          pointer-events: none;
        }

        .toolbar {
          position: relative;
          z-index: 2;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 18px;
          padding: 24px 28px;
          background: rgba(255, 255, 255, 0.04);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
        }

        .toolButton {
          width: 62px;
          height: 62px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.06);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(12px);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.05),
            0 8px 25px rgba(0, 0, 0, 0.25);
        }

        .toolButton:hover {
          transform: translateY(-3px) scale(1.04);
          background: rgba(255, 255, 255, 0.12);
        }

        .toolButton.active {
          background: linear-gradient(135deg, #00c6ff, #0072ff);
          border: none;
          box-shadow:
            0 10px 30px rgba(0, 114, 255, 0.45),
            0 0 30px rgba(0, 198, 255, 0.25);
        }

        .colorPicker {
          width: 64px;
          height: 64px;
          border: none;
          border-radius: 18px;
          overflow: hidden;
          background: transparent;
          cursor: pointer;
        }

        .rangeInput {
          width: 220px;
          accent-color: #00c6ff;
          cursor: pointer;
        }

        .canvasBoard {
          width: 100%;
          height: 950px;
          background:
            linear-gradient(
              180deg,
              rgba(11, 23, 40, 0.98),
              rgba(7, 14, 25, 1)
            );
          cursor: crosshair;
          touch-action: none;
          position: relative;
        }

        .popupOverlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
          padding: 20px;
        }

        .popupBox {
          width: 100%;
          max-width: 1300px;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 35px;
          background: linear-gradient(
            180deg,
            rgba(10, 25, 47, 0.98),
            rgba(7, 17, 31, 0.99)
          );
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 50px;
          position: relative;
          backdrop-filter: blur(20px);
        }

        .closeBtn {
          position: absolute;
          top: 25px;
          right: 25px;
          width: 55px;
          height: 55px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.08);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .popupTitle {
          font-size: 42px;
          margin-bottom: 18px;
        }

        .popupDesc {
          font-size: 20px;
          color: #c6d1dc;
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .contentGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 35px;
        }

        .contentBox {
          background: rgba(255, 255, 255, 0.05);
          padding: 30px;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .contentBox h4 {
          font-size: 24px;
          margin-bottom: 24px;
          color: #00d2ff;
        }

        .contentBox ul {
          padding-left: 20px;
        }

        .contentBox li {
          color: #c6d1dc;
          margin-bottom: 14px;
          line-height: 1.8;
          font-size: 20px;
          font-weight: 700;
        }

        .infoSection {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 35px;
          margin-bottom: 80px;
        }

        .infoCard {
          padding: 35px;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .infoCard h3 {
          font-size: 28px;
          margin-bottom: 20px;
        }

        .infoCard p {
          color: #c6d1dc;
          line-height: 1.9;
          font-size: 16px;
        }

        .footer {
          text-align: center;
          padding: 35px 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          color: #9eacbc;
        }

        .hiddenInput {
          display: none;
        }

        @media (max-width: 992px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .contentGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .heroContent h1 {
            font-size: 46px;
          }

          .sectionTitle {
            font-size: 34px;
          }

          .container {
            padding: 25px;
          }

          .grid {
            grid-template-columns: 1fr;
          }

          .popupBox {
            padding: 30px 20px;
          }

          .popupTitle {
            font-size: 30px;
          }

          .popupDesc {
            font-size: 17px;
          }

          .contentBox li {
            font-size: 17px;
          }

          .teacherHeader h2 {
            font-size: 38px;
          }

          .toolbar {
            justify-content: center;
            padding: 18px;
          }

          .toolButton {
            width: 54px;
            height: 54px;
            border-radius: 16px;
          }

          .canvasBoard {
            height: 650px;
          }

          .rangeInput {
            width: 140px;
          }
        }
          .pageLoader {
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.95);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 999999;
}

.spinner {
  width: 60px;
  height: 60px;

  border: 5px solid #e5e5e5;
  border-top: 5px solid #65255f;

  border-radius: 50%;

  animation: spin 0.8s linear infinite;
}

.pageLoader p {
  margin-top: 15px;
  font-size: 18px;
  font-weight: 600;
  color: #65255f;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.questionsSection {
  margin: 120px 0;
  position: relative;
}

.questionsHeader {
  text-align: center;
  margin-bottom: 60px;
}

.questionsHeader h2 {
  font-size: 52px;
  font-weight: 800;
  background: linear-gradient(
    90deg,
    #00d2ff,
    #7a5cff
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.questionsHeader p {
  color: #c6d1dc;
  font-size: 18px;
  margin-top: 12px;
}

.sliderWrapper {
  position: relative;
  overflow: hidden;
}

.sliderTrack {
  display: flex;
        
  transition: transform 0.5s ease;
}

.questionCard {
  flex: 0 0 100%;
  padding: 30px;
  border-radius: 28px;
  background: linear-gradient(
    180deg,
    rgba(10, 25, 47, 0.95),
    rgba(7, 17, 31, 0.98)
  );
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
  position: relative;
  overflow: hidden;

  /* ⭐ IMPORTANT FIX */
  height: auto;
  align-self: flex-start;
}
  

.questionCard::before {
  content: "";
  position: absolute;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: rgba(0, 210, 255, 0.08);
  top: -100px;
  right: -100px;
}

.examBadge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 10px 18px;
  border-radius: 999px;
  background: rgba(0, 210, 255, 0.15);
  color: #00d2ff;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 210, 255, 0.25);
}

.questionTitle {
  font-size: 20px;
  font-weight: 700;
  color: white;
  margin-bottom: 5px;
  
}

.questionText {
  color: #c6d1dc;
  font-size: 24px;
  line-height: 1.8;
  margin-bottom: 10px;
  font-weight: 500;
}

.optionList {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.optionItem {
  padding: 14px 16px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: #e5edf7;
  font-weight: 500;
}

.answerBox {
  margin-top: 24px;
  padding: 15px 18px;
  border-radius: 14px;
  background: rgba(0, 255, 127, 0.12);
  border: 1px solid rgba(0, 255, 127, 0.2);
  color: #34d399;
  font-weight: 700;
}

.sliderBtn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 62px;
  height: 62px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  z-index: 10;

  background: linear-gradient(
    135deg,
    #00c6ff,
    #0072ff
  );

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 15px 30px rgba(0, 114, 255, 0.4);
}

.sliderBtn.left {
  left: -20px;
}
  

.sliderBtn.right {
  right: -20px;
}

.dots {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 35px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.2);
  transition: 0.3s;
}

.dot.active {
  width: 42px;
  background: linear-gradient(
    90deg,
    #00d2ff,
    #7a5cff
  );
}

@media (max-width: 768px) {
  .questionCard {
    min-width: 100%;
  }

  .questionsHeader h2 {
    font-size: 38px;
  }

  .sliderBtn {
    width: 50px;
    height: 50px;
  }
}
  @media (max-width: 768px) {
  .sliderTrack {
    align-items: flex-start;
  }

  .questionCard {
    height: auto;
    min-height: unset;
  }

  .questionText {
    font-size: 18px;
    line-height: 1.6;
  }

  .optionItem {
    font-size: 14px;
    padding: 10px 12px;
  }

  .answerBox {
    font-size: 14px;
  }
}
      `}</style>

      <div className="container">
        <div className="navbar">
          <div className="logo">Number System</div>

          <Link href="/Questions" className="navBtn"
            onClick={() => {
              setLoading(true);
            }}
          >
            Back Home
          </Link>
        </div>

        <section className="hero">
          <div className="heroContent">
            <h1>
              Master the <span>Number System</span> for SSC, Banking &
              Competitive Exams
            </h1>

            <p>
              Learn complete Number System concepts with formulas, tricks,
              divisibility rules, simplification methods, LCM-HCF shortcuts,
              prime numbers, surds & indices, decimals, fractions and much
              more.
            </p>

            <div className="heroButtons">
              <a href="#topics" className="primaryBtn">
                Explore Topics <ArrowRight size={18} />
              </a>

              <a href="#digitalBoard" className="secondaryBtn">
                Open Smart Board
              </a>
            </div>
          </div>

          <div className="heroCard">
            <h2>What You Will Learn</h2>

            <ul>
              <li>
                <CheckCircle2 size={20} color="#00d2ff" />
                Complete Number System Concepts
              </li>

              <li>
                <CheckCircle2 size={20} color="#00d2ff" />
                SSC & Banking Important Questions
              </li>

              <li>
                <CheckCircle2 size={20} color="#00d2ff" />
                Fast Tricks & Shortcuts
              </li>

              <li>
                <CheckCircle2 size={20} color="#00d2ff" />
                Simplification Techniques
              </li>

              <li>
                <CheckCircle2 size={20} color="#00d2ff" />
                Practice Based Learning
              </li>
            </ul>
          </div>
        </section>

        <section id="topics">
          <h2 className="sectionTitle">Important Topics</h2>

          <p className="sectionSubtitle">
            Modern learning cards for every important Number System topic.
          </p>

          <div className="grid">
            {topics.map((topic, index) => (
              <div className="card" key={index}>
                <div className="iconBox">{topic.icon}</div>

                <h2>{topic.title}</h2>

                <p>{topic.desc}</p>

                <div
                  className="readMore"
                  onClick={() => setOpenCard(index)}
                >
                  Learn More

                  <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="questionsSection">
  <div className="questionsHeader">
    <h2>SSC Previous Year Questions</h2>

    <p>
      Real SSC CGL, CHSL, MTS and GD examination
      questions with solutions.
    </p>
  </div>

  <div className="sliderWrapper">
    <button
      className="sliderBtn left"
      onClick={prevSlide}
    >
      <ChevronLeft size={30} />
    </button>

    <button
      className="sliderBtn right"
      onClick={nextSlide}
    >
      <ChevronRight size={30} />
    </button>

    <div
      className="sliderTrack"
      style={{
        transform: `translateX(-${
          currentSlide * 100
        }%)`,
      }}
    >
      {pyqQuestions.map((item, index) => (
        <div
          className="questionCard"
          key={index}
        >
       

          <div className="questionContent">
           <div className="examBadge">
  Question #{index + 1}
</div>

            <div className="questionTitle">
              {item.title}
            </div>

            <div className="questionText">
              {item.question}
            </div>

            <div className="optionList">
              {item.options.map((option, i) => (
                <div
                  key={i}
                  className="optionItem"
                >
                  {String.fromCharCode(
                    65 + i
                  )}. {option}
                </div>
              ))}
            </div>

            <div className="answerBox">
              Correct Answer: {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className="dots">
    {[...Array(totalSlides)].map(
      (_, index) => (
        <div
          key={index}
          className={`dot ${
            currentSlide === index
              ? "active"
              : ""
          }`}
        />
      )
    )}
  </div>
</section>

        <section className="teacherSection" id="digitalBoard">
          <div className="teacherHeader">
            <h2>AI Digital Smart Board</h2>

            <p>
              Futuristic AI powered teaching board with premium glassmorphism
              UI, smooth handwriting experience, intelligent drawing tools,
              neon effects, advanced eraser support and immersive classroom
              interaction.
            </p>
          </div>

          <div className="teacherLayout">
            <div className="boardContainer">
              <div className="toolbar">
                <button
                  className={`toolButton ${
                    tool === "pen" ? "active" : ""
                  }`}
                  onClick={() => setTool("pen")}
                >
                  <Pencil size={26} />
                </button>

                <button
                  className={`toolButton ${
                    tool === "eraser" ? "active" : ""
                  }`}
                  onClick={() => setTool("eraser")}
                >
                  <Eraser size={26} />
                </button>

                <button
                  className="toolButton"
                  onClick={clearBoard}
                >
                  <Trash2 size={26} />
                </button>

                <button
                  className="toolButton"
                  onClick={() => {
                    const canvas = canvasRef.current;

                    if (!canvas) return;

                    const ctx = canvas.getContext("2d");

                    if (!ctx) return;

                    ctx.beginPath();
                  }}
                >
                  <StickyNote size={26} />
                </button>

                <button
                  className="toolButton"
                  onClick={() => {
                    const canvas = canvasRef.current;

                    if (!canvas) return;

                    const ctx = canvas.getContext("2d");

                    if (!ctx) return;

                    ctx.strokeStyle = brushColor;
                    ctx.lineWidth = brushSize;

                    ctx.beginPath();
                    ctx.moveTo(0, 475);
                    ctx.lineTo(canvas.width, 475);
                    ctx.stroke();
                  }}
                >
                  <Minus size={26} />
                </button>

                <button
                  className="toolButton"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <FileText size={26} />
                </button>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,.pdf"
                  className="hiddenInput"
                  onChange={handlePdfUpload}
                />

                <input
                  type="color"
                  className="colorPicker"
                  value={brushColor}
                  onChange={(e) => setBrushColor(e.target.value)}
                />

                <input
                  type="range"
                  min="1"
                  max="25"
                  value={brushSize}
                  onChange={(e) =>
                    setBrushSize(Number(e.target.value))
                  }
                  className="rangeInput"
                />
              </div>

              <canvas
                ref={canvasRef}
                className="canvasBoard"
                onMouseDown={startDrawing}
                onMouseUp={stopDrawing}
                onMouseMove={draw}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchEnd={stopDrawing}
                onTouchMove={draw}
              />
            </div>
          </div>
        </section>

        <section className="infoSection" id="about">
          <div className="infoCard">
            <h3>About Number System</h3>

            <p>
              Number System is one of the most important topics in mathematics
              and competitive exams. It forms the base of arithmetic,
              simplification, algebra, percentage, ratio and many other
              mathematical concepts.
            </p>
          </div>

          <div className="infoCard">
            <h3>Why Learn This Topic?</h3>

            <p>
              Questions from Number System are frequently asked in SSC,
              Banking, Railway and other government exams. Learning formulas,
              divisibility tricks, LCM-HCF concepts and simplification methods
              helps students solve questions quickly and accurately.
            </p>
          </div>
        </section>

        <footer className="footer">
          © 2026 Number System Learning Platform • Designed with Modern UI
        </footer>
      </div>

      {openCard !== null && (
        <div className="popupOverlay">
          <div className="popupBox">
            <button
              className="closeBtn"
              onClick={() => setOpenCard(null)}
            >
              <X size={28} />
            </button>

            <h2 className="popupTitle">
              {topics[openCard].title}
            </h2>

            <p className="popupDesc">
              {topics[openCard].desc}
            </p>

            <div className="contentGrid">
              <div className="contentBox">
                <h4>Important Formulas</h4>

                <ul>
                  {topics[openCard].formulas.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="contentBox">
                <h4>Quick Tricks</h4>

                <ul>
                  {topics[openCard].tricks.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="contentBox">
                <h4>Revision Notes</h4>

                <ul>
                  {topics[openCard].revision.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}