import { useState, useRef, memo } from "react";
import { CgCode } from "react-icons/cg";




const  PortfolioSlider = ({beforeImage,afterImage}) => {
  const containerRef = useRef(null);
    const [position, setPosition] = useState(20);

  const handleMove = (clientX) => {
    const bounds = containerRef.current.getBoundingClientRect();
  
    let x = clientX - bounds.left;
    let percentage = (x / bounds.width) * 100;
  
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
  
    setPosition(percentage);
  };
  

    const startDrag = () => {
      const stopDrag = () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", stopDrag);
      };
  
      const onMouseMove = (e) => {
        handleMove(e.clientX);
      };
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", stopDrag);
    };
  
    const startTouch = () => {
      const stopTouch = () => {
        window.removeEventListener("touchmove", onTouchMove);
        window.removeEventListener("touchend", stopTouch);
      };
  
      const onTouchMove = (e) => {
        handleMove(e.touches[0].clientX);
      };
      window.addEventListener("touchmove", onTouchMove);
      window.addEventListener("touchend", stopTouch);
    };  
    return (
      <div className="w-full max-w-5xl mx-auto ">
        <div
          ref={containerRef}
          onClick={(e) => handleMove(e.clientX)}
          className="relative w-full aspect-4/3 sm:aspect-16/10 rounded-xl overflow-hidden shadow-xl select-none"
        >
          <img
            src={afterImage}
            alt="after"
            className="absolute inset-0 w-full h-full  object-cover  filter pointer-events-none"
          />
  
          <div
            className="absolute top-0 left-0 h-full overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <img
              src={beforeImage}
              alt="before"
              className="w-full h-full object-cover pointer-events-none"
              style={{
                width: containerRef.current
                  ? `${containerRef.current.offsetWidth}px`
                  : "100%",
                maxWidth: "none",
              }}
            />
          </div>
          <div
            onMouseDown={startDrag}
            onTouchStart={startTouch}
            className="absolute top-0 h-full w-1 bg-amber-300 shadow-lg"
            style={{ left: `${position}%`, transform: "translateX(-50%)" }} >
            
            <div className="absolute top-1/2 left-1/2 border-3 border-amber-300 text-center items-center rounded-full -translate-x-1/2 -translate-y-1/2 cursor-e-resize">
                          {/* <h3 className="text-white"><CgCode /></h3> */}
                          <div className="text-white text-5xl max-sm:text-3xl"><CgCode /></div>
                        </div>
          </div>

          <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm backdrop-blur-sm">
            BEFORE
          </div>
          <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm backdrop-blur-sm">
            AFTER
          </div>
          
        </div>
      </div>
    );
}

export default memo(PortfolioSlider);



// // ----------------------------------------------- gpt code-------------------


