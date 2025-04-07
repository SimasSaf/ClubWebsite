import React from "react";
import "./page.css";

const LeftPage: React.FC = () => {
  return (
    <div>
      <p className="pages-title">Bulwark</p>
      <p className="pages-text">
        If you're after real protection without the bulk, the{" "}
        <span className="pages-text-title">Bulwark</span> has you
        covered—literally. This thing’s built like a tank but still feels good
        in your hand. With solid drop protection, a sturdy grip, and a clean,
        no-nonsense design, it’s made to take hits so your phone doesn’t have
        to.
      </p>
      <br />
      <p className="pages-text">
        Whether you’re always on the move, a bit clumsy, or just want the peace
        of mind, Bulwark’s got your back. It’s tough, reliable, and looks sharp
        doing it. Simple as that.
      </p>
      <br />
      <p className="pages-secondary-title">Your phone deserves a bodyguard.</p>
    </div>
  );
};

export default LeftPage;
