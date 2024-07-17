import React, { useState } from "react";
// import "./Footer.css"; // Import your CSS file for styling

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="footer-container">
      <div className="accordion-header bg-primary-light dark:bg-primary-dark ">
        <div className="flex justify-between items-center">
          <div>If you wanna be cool like Batman, Use CryptoNight! </div>
          <div>
            <span
              onClick={toggleAccordion}
              className="underline-offset-1 underline hover:underline-offset-4 transition-all"
            >
              (Please) Click to see a creative explanation (Please)
            </span>
            {/* <span className="text-xs items-baseline ">
              Please click, took a lot of effort
            </span> */}
          </div>
        </div>
      </div>
      <div
        className={`font-mono accordion-content bg-primary-dark dark:bg-primary-light ${
          isOpen ? "open" : "opacity-0"
        }`}
      >
        🦸‍♂️ : Hey, batsy ! What is this cool crypto trading and information
        software everyone is talking about lately. <br />
        🦇 : Haha, trust me you don&apos;t wanna know, you&apos;re gonna regret
        it. <br />
        🦸‍♂️: No, please. Tell me, it is so good, see even you&apos;re using it to
        earn so much. <br />
        🦇: Haha you asked for it. The tool that is making me super cool and
        super rich is called: CryptoNight ! <br />
        🦸‍♂️: *Dies* {"  "}
        <span className="text-center mx-auto font-bold">
          (Coz CryptoNight == Kryptonite, lol. Anyways, use CryptoNight and Be
          Batman. Thank You So Much for reading.)
        </span>
      </div>
    </div>
  );
};

export default Footer;
