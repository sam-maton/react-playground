import { useState, useRef, useLayoutEffect } from 'react';
export default function FlexibleTooltip() {
  return (
    <div>
      <h1 className="text-3xl">Flexible Tooltip</h1>

      <section className="max-w-2xl">
        <p className="pt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla enim
          velit, scelerisque sed mattis id, congue nec mauris. Praesent a ligula
          odio. Duis venenatis ligula ut magna lobortis, eget dapibus nulla
          consectetur. <Tooltip>Donec auctor ex eros,</Tooltip> in lacinia lacus
          rhoncus eget. Suspendisse id nunc velit. Aenean arcu lacus, faucibus
          vitae tristique in, hendrerit sit amet lacus. Suspendisse potenti.
          Mauris scelerisque justo id sollicitudin volutpat. Cras a rutrum nisi.
          Sed dignissim vehicula eros, quis bibendum est eleifend vitae.
          Maecenas eleifend magna finibus tortor pharetra, eu lobortis risus
          interdum.
        </p>

        <p className="pt-8">
          Cras laoreet consectetur placerat. Phasellus eget cursus arcu. Donec
          pharetra consectetur tellus, vitae ornare enim bibendum quis. Nulla
          maximus ex eget nibh scelerisque, a commodo tellus laoreet. Curabitur
          rutrum, mauris ut fermentum elementum, velit mauris interdum magna,
          nec facilisis sapien quam non nisl. Praesent commodo velit felis, non
          mattis nisl consequat quis. Praesent aliquet vehicula mauris a
          sollicitudin. Vestibulum sagittis elit in eros accumsan auctor. Mauris
          metus quam, ornare in diam at, tempus tempus sapien. Proin vitae
          libero maximus, condimentum felis eu, pharetra tortor. Maecenas id
          lacinia quam.
        </p>

        <p className="pt-8">
          Donec libero sapien, sollicitudin et enim quis, malesuada laoreet ex.
          Donec eu enim nunc. Proin placerat eleifend eros nec egestas.
          Curabitur fermentum scelerisque leo, sed fermentum erat. In pulvinar
          tempor diam. Mauris ac orci felis. Aliquam sollicitudin blandit
          tristique. Suspendisse augue est, pellentesque sed eleifend sit amet,
          molestie ac lacus. Proin in ipsum convallis, tempus libero in, iaculis
          dolor. Donec gravida ex mattis massa ornare vehicula. Nulla ligula
          nisi, ultrices nec feugiat ut, volutpat eget velit. In nec eros dolor.
          Nulla lacinia ac dolor sit amet vestibulum. Nunc nec orci in orci
          tristique condimentum.
        </p>

        <p className="pt-8">
          Vestibulum tincidunt, mi a vulputate tincidunt, nisi magna convallis
          mauris, sit amet pharetra est nisl sed tellus. Nunc sagittis id tellus
          vel porta. Aenean sed felis ut tellus accumsan tempor. Vivamus a
          fringilla lectus. Curabitur ultricies nunc tincidunt sem pretium, in
          mattis odio posuere. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Quisque ac maximus risus, a commodo odio. Vivamus
          pellentesque a neque a posuere. Aliquam feugiat aliquam leo eu
          vestibulum. Donec ullamcorper, purus sit amet efficitur vehicula, erat
          ipsum pellentesque nisl, quis porttitor sapien sem ut eros. Donec
          molestie maximus magna at blandit.
        </p>

        <p className="pt-8">
          Etiam maximus faucibus tortor, id interdum massa molestie eget. Nam
          accumsan enim vel nisi fringilla, sed pretium est blandit. Aliquam
          tincidunt massa nec nibh accumsan maximus. Vestibulum id facilisis
          orci, in mattis ipsum. Quisque eget ante ullamcorper, feugiat lectus
          et, facilisis leo. Integer iaculis lectus id diam convallis, at
          fermentum leo tristique. Maecenas et mollis urna. Vivamus suscipit
          elit a sem hendrerit sollicitudin.
        </p>
      </section>
    </div>
  );
}

function Tooltip({ children }) {
  const [isHovered, setIsHovered] = useState(false);
  const contentRef = useRef(null);
  const [tipLayout, setTipLayout] = useState({
    top: 0,
    left: 0,
  });

  const handleHover = () => {
    setIsHovered((h) => !h);
  };

  useLayoutEffect(() => {
    const { bottom, top, left, right, y, x, width, height } =
      contentRef.current.getBoundingClientRect();

    console.log(window.scrollY);

    if (top > window.innerHeight - bottom) {
      setTipLayout({
        bottom: top + 10,
        left: x - width / 2,
      });
    } else {
      setTipLayout({
        top: bottom + 5,
        left: x - width / 2,
      });
    }
  }, []);

  return (
    <span
      ref={contentRef}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className="underline underline-offset-2 decoration-amber-600"
    >
      {children}
      {isHovered && (
        <span
          className="fixed bg-white p-8 border shadow-2xl w-2xs"
          style={tipLayout}
        >
          Etiam maximus faucibus tortor, id interdum massa molestie eget. Nam
          accumsan enim vel nisi fringilla, sed pretium est blandit. Aliquam
          tincidunt massa nec nibh accumsan maximus.
        </span>
      )}
    </span>
  );
}
