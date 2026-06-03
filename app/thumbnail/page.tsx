"use client";

import Image from "next/image";

export default function Thumbnail() {
  return (
    <>
      <div className="thumb">
        <div className="bgGlow" />

        {/* SSC Logo */}
        <div className="sscLogo">
          <Image
            src="/ssc-logo.png"
            alt="SSC"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* LIVE */}
        <div className="liveTag">
          <span className="dot" />
          LIVE
        </div>

        {/* Heading */}
        <div className="topTitle">
          <span className="ssc">SSC/UPSC</span>
          <span className="year">2026</span>
        </div>

        {/* Maths */}
        <div className="mathBox">
          <div className="mathText">MATHS</div>
        </div>

        {/* One Shot */}
        <div className="oneShot">One Shot</div>

        {/* Percentage */}
        <div className="percentage">Number System</div>

        {/* Marks */}
        <div className="marks">
          <span className="red">6.</span> से{" "}
          <span className="red">8</span> नम्बर पक्के
        </div>

        {/* Teacher Glow */}
        <div className="teacherGlow" />

        {/* Teacher */}
        <div className="teacherWrap">
          <Image
            src="/teacher.png"
            alt="Teacher"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Name */}
        <div className="teacherName">
          By <span>Giresh Sir</span>
        </div>

        {/* Offer */}
        <div className="offer">
          <div className="offerCircle">
            <span>1</span>
            <p>बड़ा उपहार</p>
          </div>
          <div className="gift">🎁</div>
        </div>

        {/* Notes */}
        <div className="notesCard">
          <ul>
            <li>✓ COMPLETE WEBSITE NOTES</li>
            <li>✓ IMPORTANT FORMULAS SHEET</li>
            <li>✓ TOP QUESTIONS ON WEBSITE</li>
          </ul>
        </div>

        {/* Decoration */}
        <div className="target">🎯</div>
        <div className="bulb">💡</div>
      </div>

      <style jsx>{`
        .thumb {
          position: relative;
          width: 1280px;
          height: 720px;
          overflow: hidden;
          border-radius: 24px;
          background: #000;
          font-family: Arial, Helvetica, sans-serif;
        }

        .bgGlow {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 90% 10%,
              rgba(255, 140, 0, 0.95) 0%,
              rgba(255, 140, 0, 0.75) 20%,
              transparent 50%
            ),
            radial-gradient(
              circle at 5% 95%,
              rgba(180, 0, 0, 0.95) 0%,
              transparent 45%
            ),
            linear-gradient(
              135deg,
              #000000 0%,
              #180000 30%,
              #2b0000 60%,
              #000000 100%
            );
        }

        .sscLogo {
          position: absolute;
          left: 25px;
          top: 25px;
          width: 120px;
          height: 120px;
          z-index: 5;
        }

        .liveTag {
          position: absolute;
          top: 18px;
          right: 20px;
          background: #fff;
          color: #000;
          padding: 10px 18px;
          border-radius: 14px;
          font-weight: 900;
          font-size: 28px;
          z-index: 10;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
        }

        .dot {
          width: 12px;
          height: 12px;
          background: red;
          display: inline-block;
          border-radius: 50%;
          margin-right: 8px;
        }

       .topTitle {
  position: absolute;
  left: 145px;
  top: 20px;
  display: flex;
  align-items: center;
  gap: 22px;
  z-index: 20;
}

.ssc {
  font-size: 108px;
  font-weight: 900;
  color: #ffd400;
  line-height: 1;
  text-shadow:
    0 0 15px #ffbf00,
    0 0 40px #ffbf00,
    0 10px 25px rgba(0,0,0,.6);
}

.year {
  font-size: 108px;
  font-weight: 900;
  color: #ffffff;
  line-height: 1;
}

      .mathBox {
  position: absolute;
  left: 70px;
  top: 150px;
  width: 640px;
  height: 220px;

  border-radius: 24px;
  border: 4px solid #b00000;

  background: linear-gradient(
    145deg,
    #111111,
    #000000
  );

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow:
    0 0 25px rgba(255,0,0,.25),
    0 25px 50px rgba(0,0,0,.6);

  z-index: 10;
}

.mathText {
  font-size: 170px;
  font-weight: 900;
  color: white;

  text-shadow:
    0 3px 0 #d5d5d5,
    0 6px 0 #b0b0b0,
    0 12px 25px rgba(0,0,0,.8);

  letter-spacing: 6px;
}

        .oneShot {
  position: absolute;
  left: 180px;
  top: 385px;

  background: white;
  color: #781414;

  padding: 8px 45px;
  border-radius: 14px;

  font-size: 64px;
  font-style: italic;

  box-shadow:
    0 12px 25px rgba(0,0,0,.3);

  z-index: 15;
}

       .percentage {
  position: absolute;
  left: 10px;
  top: 470px;

  font-size: 103px;
  font-weight: 900;

  color: #ffd400;

  text-shadow:
    0 4px 0 #000,
    0 8px 0 #000,
    0 15px 30px rgba(0,0,0,.8);

  z-index: 12;
}
       .marks {
  position: absolute;
  left: 200px;
  bottom: 5px;

  width: 540px;

  background: white;

  border-radius: 12px;

  padding: 9px 15px;

  text-align: center;

  font-size: 42px;
  font-weight: 900;

  box-shadow:
    0 12px 30px rgba(0,0,0,.4);

  z-index: 20;
}
        .red {
          color: #ff0000;
        }

        .teacherGlow {
          position: absolute;
          right: 70px;
          top: 40px;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255, 140, 0, 0.95) 0%,
            rgba(255, 140, 0, 0.45) 40%,
            transparent 80%
          );
          filter: blur(25px);
        }

        .teacherWrap {
  position: absolute;

  right: 290px;
  bottom: 200px;

  width: 300px;
  height: 470px;

  z-index: 8;

  filter:
    drop-shadow(0 20px 40px rgba(0,0,0,.8));
}
      .teacherName {
  position: absolute;

  right: 70px;
  bottom: 20px;

  z-index: 20;

  color: white;

  font-size: 34px;
  font-style: italic;
}

.teacherName span {
  color: #ffd400;
  font-size: 62px;
  font-weight: 700;
}

    
       .offer {
  position: absolute;
  right: 35px;
  top: 90px;
  z-index: 20;
}

.offerCircle {
  width: 180px;
  height: 180px;

  border-radius: 50%;

  background: white;
  border: 6px solid #c40000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transform: rotate(-8deg);
}

.offerCircle span {
  font-size: 70px;
}

.offerCircle p {
  font-size: 34px;
}


        .gift {
          text-align: center;
          font-size: 85px;
          margin-top: -15px;
        }

      .notesCard {
  position: absolute;

  right: 25px;
  top: 300px;

  width: 290px;

  background: rgba(0,0,0,.95);

  border-radius: 22px;

  padding: 28px;

  z-index: 20;

  box-shadow:
    0 20px 40px rgba(0,0,0,.5);
}

.notesCard li {
  color: white;
  font-size: 24px;
  font-weight: 800;
  line-height: 1.4;
  margin-bottom: 18px;
}

        .target {
          position: absolute;
          left: 20px;
          bottom: 15px;
          font-size: 90px;
        }

        .bulb {
          position: absolute;
          left: 35px;
          top: 260px;
          font-size: 70px;
        }
      `}</style>
    </>
  );
}