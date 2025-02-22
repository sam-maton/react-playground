import { useRef, useState, useLayoutEffect } from 'react';

export default function RulerResize() {
  const articleRef = useRef(null);

  const [width, setWidth] = useState(200);

  useLayoutEffect(() => {
    var ro = new ResizeObserver((entries) => {
      setWidth(entries[0].borderBoxSize[0].inlineSize);
    });

    if (articleRef.current) {
      ro.observe(articleRef.current);
    }

    return () => {
      ro.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>React Ruler</h1>
      <p>{'(Resize the ruler)'}</p>
      <article
        ref={articleRef}
        className="min-w-[200px] max-w-[600px] resize-x border bg-slate-400 h-10 p-2 overflow-auto"
      >
        <label>Width: {width}</label>
      </article>
    </div>
  );
}
