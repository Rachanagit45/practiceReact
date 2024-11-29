import { useState } from "react";
import './ThreeD.css'

const ThreeDHomePage = () => {

    const [isBig, setIsBig] = useState(false);
  
    const createBoxes = () => {
      const boxes = [];
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          boxes.push(
            <div
              key={`${i}-${j}`}
              className="box"
              style={{
                backgroundPosition: `${-j * 125}px ${-i * 125}px`,
              }}
            />
          );
        }
      }
      return boxes;
    };
  
    return (
      <>
        <div>
          <button id="button" className="magic" onClick={() => setIsBig((prev) => !prev)}>
            Magic
          </button>
        </div>
        <div id="boxes" className={`boxes ${isBig ? "big" : ""}`}>
          {createBoxes()}
        </div>
      </>
    );
  };
  export default ThreeDHomePage;
  