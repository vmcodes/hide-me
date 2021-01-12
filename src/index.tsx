import React from "react";

interface HideMeProps {
  classes?: string;
  Child?: JSX.Element;
}

const HideMe: React.FC<HideMeProps> = ({ classes, Child }) => {
  const [navBar, setNavBar] = React.useState<React.CSSProperties>({
    top: "0",
    transition: "top 0.3s",
    position: "fixed",
  });

  const [header, setHeader] = React.useState<JSX.Element | null>(null);

  React.useEffect(() => {
    let prevScroll = window.pageYOffset;
    window.onscroll = function onScroll() {
      let currentScroll = window.pageYOffset;

      if (prevScroll > currentScroll) {
        setNavBar({
          top: "0",
          transition: "top 0.3s",
          position: "fixed",
        });
      } else if (
        "ontouchstart" in window === false &&
        "ontouchstart" in document.documentElement === false
      ) {
        setNavBar({ top: "-75px", transition: "top 0.3s", position: "fixed" });
      }
    };
  }, [window.pageYOffset]);

  React.useEffect(() => {
    if (Child) {
      setHeader(Child);
    }
  }, [Child]);

  return (
    <nav style={navBar} className={classes}>
      {header}
    </nav>
  );
};

export default HideMe;
