import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const DisplayModeToggle = () => {
  const [isLight, setIsLight] = useState(true);
  const dispatch = useDispatch();

  const starsStyle = {
    width: "3px",
    height: "3px",
    backgroundColor: "white",
    borderRadius: "100px",
  };

  useEffect(() => {
    const switchToggle = document.getElementById("switchToggle");
    const togglebg = document.getElementById("togglebg");
    if (!isLight) {
      // causing the white button to move to the right
      if (switchToggle && togglebg) {
        dispatch({ type: "CHANGETODARK" });
        switchToggle.style.transform = "translateX(48px)";
        togglebg.style.backgroundColor = "black";
      }
    } else {
      // causing the white button to move to the left
      if (switchToggle && togglebg) {
        dispatch({ type: "CHANGETOLIGHT" });
        switchToggle.style.transform = "translateX(0px)";
        togglebg.style.backgroundColor = "lightblue";
      }
    }
  }, [isLight]);

  return (
    <div
      style={{
        position: "absolute",
        // top: "15px",
        left: "80%",
        transform: "translate(-50%, -50%",
        width: "500px",
      }}
    >
      <input type="checkbox" id="switch" style={{ display: "none" }} />

      <label
        id="togglebg"
        onClick={() => setIsLight(!isLight)}
        htmlFor="switch"
        style={{
          width: "90px",
          height: "40px",
          backgroundColor: "lightblue",
          display: "block",
          borderRadius: "100px",
          margin: "0px auto",
          cursor: "pointer",
          position: "relative",
        }}
      >
        {/* white toggle circle */}
        <div
          id="switchToggle"
          style={{
            position: "absolute",
            left: "2px",
            top: "0px",
            width: "28px",
            height: "28px",
            backgroundColor: "white",
            borderRadius: "100px",
            margin: "5px",
            transition: "0.5s ease-in-out",
          }}
        ></div>

        {isLight ? (
          <div className="light_theme" style={{ transition: "0.5s" }}>
            {/* sun */}
            <div
              style={{
                position: "absolute",
                width: "22px",
                height: "22px",
                backgroundColor: "yellow",
                borderRadius: "100px",
                right: "23px",
                top: "6px",
                transition: "0.5s",
              }}
            ></div>
            {/* clouds */}
            <div
              style={{
                position: "relative",
                width: "50px",
                height: "35px",
                left: "70px",
                top: "10px",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "40px",
                  width: "20px",
                  height: "23px",
                  backgroundColor: "white",
                  borderRadius: "100px",
                }}
              ></span>
              <span
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "52px",
                  width: "14px",
                  height: "14px",
                  backgroundColor: "white",
                  borderRadius: "100px",
                }}
              ></span>
              <span
                style={{
                  position: "absolute",
                  bottom: "14px",
                  right: "36px",
                  width: "20px",
                  height: "15px",
                  backgroundColor: "white",
                  borderRadius: "100px",
                }}
              ></span>
            </div>
          </div>
        ) : (
          <div className="dark_theme">
            {/* moon */}
            <div
              id="moon"
              style={{
                position: "absolute",
                width: "23px",
                height: "23px",
                backgroundColor: "white",
                borderRadius: "100px",
                left: "21px",
                top: "4px",
                transition: "0.5s",
              }}
            ></div>
            {/* stars */}
            <span
              style={{
                ...starsStyle,
                position: "absolute",
                top: "8px",
                left: "10px",
              }}
            ></span>
            <span
              style={{
                ...starsStyle,
                position: "absolute",
                left: "20px",
                top: "30px",
              }}
            ></span>
            <span
              style={{
                ...starsStyle,
                position: "absolute",
                left: "45px",
                top: "10px",
              }}
            ></span>
          </div>
        )}
      </label>
    </div>
  );
};

export default DisplayModeToggle;
