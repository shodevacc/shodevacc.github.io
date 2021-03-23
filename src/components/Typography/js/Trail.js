import React, { useEffect, useRef, useState } from "react";
import * as styles from "../styles/trailText.module.css";

//A function to return an array of pairs of elements which are to be styled together
async function getTrailOrder(ref) {
  const elements = ref.current.children;
  const length = elements.length;
  const pairs = Math.floor(length / 2);
  let order = [];
  let n1 = 0;
  let n2 = length - 1;
  for (let i = 0; i < pairs; i++) {
    // console.log(elements[n1],elements[n2])
    order.push([elements[n1], elements[n2]]);
    n1 += 1;
    n2 -= 1;
  }
  order.push([elements[n1]]);
  return order;
}

//TO show the text. Input is the array of pairs and interval between their animations
function showText(elements, interval = 200) {
  console.log("SHOWINF");
  //Iterate over all the elements(an array of pairs of elements(array)) and make their opacity 1 at regular intervals
  elements.forEach((pair, index) => {
    setTimeout(() => {
      pair.forEach((element) => {
        element.style.opacity = 1;
      });
    }, interval * index);
  });
  //Iterate over all the elements(except the middle one) and make their opacity 0
  //Slice to not include the middle element
  elements.slice(0, elements.length - 1).forEach((pair, index) => {
    setTimeout(() => {
      pair.forEach((element) => {
        element.style.opacity = 0;
      });
    }, interval * elements.length + interval * index);
  });
}

function hideText(elements, interval = 200) {
  console.log("Hiding");
  const length = elements.length;

  //Iterate over all the elements(an array of pairs of elements(array)) and make their opacity 1 at regular intervals
  //(length - index) is done to attach the largest interval on the first element so the element disapper in reverse order
  elements.slice(0, elements.length - 1).forEach((pair, index) => {
    setTimeout(() => {
      //elements[i] = pair
      pair.forEach((element) => {
        element.style.opacity = 1;
      });
    }, interval * (length - index));
  });
  //Now make the elements opacity 0 by iterating all the elements
  elements.forEach((pair, index) => {
    setTimeout(() => {
      //elements[i] = pair
      pair.forEach((element) => {
        element.style.opacity = 0;
      });
    }, interval * elements.length + interval * (length - index));
  });
}

function Trail({ children }) {
  const [elements, setElements] = useState([]);
  const [showState, setShowState] = useState({ state: false, enable: false });
  var number = [...Array(11)];
  const containerRef = useRef();
  async function setElementsState(res) {
    setElements(res);
  }
  useEffect(() => {
    getTrailOrder(containerRef).then((res) => {
      setElementsState(res).then(() => {
        setShowState({ state: false, enable: true });
        showText(res,100)
      });
    });
  }, []);

  const handleClick = () => {
    if (showState.state && showState.enable) {
    //   console.log("I want to show", showState);
      showText(elements,100);
      setShowState((state) => {
        return { ...state, state: !state.state };
      });
    } else if (showState.enable) {
    //   console.log("I want to Hide", showState);
      hideText(elements,100);
      setShowState((state) => {
        return { ...state, state: !state.state };
      });
    }
    // console.log("CLICK");
    // setShowState((state) => {
    //   return { ...state, state: !state.state };
    // })
  };
  return (
    <div className="TextContainer">
      <div ref={containerRef} className={styles.container}>
        {number.map((i, index) => {
          return (
            <span
              key={index}
              className={
                index % 2 == 0
                  ? `${styles.outerTextBox}`
                  : `${styles.outerTextBox} ${styles.outlineText}`
              }
            >
              <span className={styles.innerText}>Trail</span>
            </span>
          );
        })}
      </div>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
}

export default Trail;
