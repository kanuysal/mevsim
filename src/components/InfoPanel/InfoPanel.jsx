import React from "react";
import "./InfoPanel.css";
import { useCurveProgressStore } from "../../store/useCurveProgressStore";

const progressMoveRanges = {
  winter: { start: 0, end: 0.235 },
  spring: { start: 0.235, end: 0.49 },
  summer: { start: 0.49, end: 0.74 },
  fall: { start: 0.74, end: 1 },
};

const seasonImages = {
  winter: "/images/blue.webp",
  spring: "/images/green.webp",
  summer: "/images/orange.webp",
  fall: "/images/red.webp",
};

const getSeason = (scrollProgress) => {
  for (const [season, range] of Object.entries(progressMoveRanges)) {
    if (scrollProgress >= range.start && scrollProgress <= range.end) {
      return season;
    }
  }
  return "winter";
};

const InfoPanel = () => {
  const scrollProgress = useCurveProgressStore((state) => state.scrollProgress);
  const season = getSeason(scrollProgress);

  return (
    <div
      className="info-panel"
      style={{ backgroundImage: `url(${seasonImages[season]})` }}
    >
      <div className="info-box">
        <div className="info-box-content">
          <div className="info-box-title">Mina Lidya</div>
          <p className="info-intro">
            4 Mevsim koleksiyonumuzu keşfedin. Daha fazla bilgi için{" "}
            <a
              href="https://minalidya.com"
              target="_blank"
              rel="noreferrer"
            >
              minalidya.com
            </a>{" "}
            adresini ziyaret edebilirsiniz.
          </p>

          <ul className="info-list">
            {/* <li>
              UI Design inspired by
              <a
                href="https://github.com/wehwayne2/lucys-bedroom-interface"
                target="_blank"
                rel="noreferrer"
              >
                Xianyao Wei
              </a>
              .
            </li>
            <li>
              3D curve system inspired by{" "}
              <a href="https://github.com" target="_blank" rel="noreferrer">
                this open source repo
              </a>
              .
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
