import { useState, useLayoutEffect } from 'react';

export default function UseLayoutEffect() {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  //Using useEffect instead of useLayoutEffect means the effect is fired after the DOM has rendered so there is no flicker when getting the height and width from the window.
  useLayoutEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>width</td>
            <td>{screenSize.width}</td>
          </tr>
          <tr>
            <td>height</td>
            <td>{screenSize.height}</td>
          </tr>
        </tbody>
      </table>

      <div
        className="bg-blue-400 border"
        style={{
          height: `${screenSize.height / 4}px`,
          width: `${screenSize.width / 4}px`,
        }}
      ></div>
    </div>
  );
}
