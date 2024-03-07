import Logo from "../assets/Logo.png";
import Frame from "../assets/Frame_29546.png";
import { Link } from "react-router-dom";
import { useState } from "react";

import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
import SeventhSection from "./SeventhSection";
import Sixth1Section from "./Sixth1Page";

function HeroPage() {
  const [hamburger, setHamburger] = useState(false);

  const handleHamburger = () => {
    setHamburger(!hamburger);
    // setHamburger(false)
  };

  return (
    <>
      <nav className="flex mt-[20px] justify-between items-center w-11/12 md:w-10/12 m-0 m-auto">
        <section>
          <img src={Logo} alt="This is an image" />
        </section>

        <section className="hidden md:flex gap-10">
          <a href="#" className="text-blue-500">
            My URLs
          </a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Analytics</a>
          <a href="#">FAQs</a>
        </section>

        <section className="hidden md:inline md:flex gap-[20px] items-center">
          <div>
            {/* <a href="" className='text-blue-500'>Log in</a> */}
            <Link to="login" className="text-blue-500">
              Log in
            </Link>
          </div>
          <div className="bg-blue-500 text-white py-[8px] px-[20px] rounded-[100px]">
            <button>
              <Link to="/signup">Try for free</Link>
            </button>
          </div>
        </section>

        <section
          onClick={handleHamburger}
          className="flex flex-col gap-[4px] md:hidden"
        >
          <div className="w-[25px] h-[3px] bg-black"></div>
          <div className="w-[25px] h-[3px] bg-black"></div>
          <div className="w-[25px] h-[3px] bg-black"></div>
        </section>
      </nav>
      {hamburger && (
        <section className="inline md:hidden flex flex-col justify-center items-center gap-2 bg-hex-F9FBFD w-full pt-8 pb-8 absolute top-[80px] left-0">
          <section className="flex flex-col justify-center items-center gap-2">
            {/* <a href="#" className='text-blue-500'>My URLs</a> */}
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Analytics</a>
            <a href="#">FAQs</a>
          </section>

          <section className="flex flex-col justify-center items-center gap-2">
            <div>
              {" "}
              <Link to="login" className="text-blue-500">
                Log in
              </Link>
            </div>
            <div className="bg-blue-500 text-white py-[8px] px-[30px] rounded-[50px]">
              <button>
                <Link to="/signup">Try for free</Link>
              </button>
            </div>
          </section>
        </section>
      )}

      <section className="w-11/12 md:w-9/12 text-center m-auto mt-[75px]">
        <article>
          <h1 className="text-center font-bold text-[40px] md:text-[48px]">
            {" "}
            OptimizeYour Online Experience with Our Advanced{" "}
            <span className="text-blue-500">URL Shortening</span> Solution
          </h1>
          <p className="mt-[40px] md:w-8/12 m-auto">
            Personalize your shortened URLs to align with your brand identity.
            Utilize custom slugs, branded links, and domain customization
            options to reinforce your brand presence and enhance user
            engagement.
          </p>
        </article>

        <article className="mt-[40px] flex justify-center items-center gap-12">
          <button className="bg-blue-500 text-white py-[8px] px-[30px] rounded-[50px]">
            <Link to="/signUp">Sign Up</Link>
          </button>
          <p className="text-blue-500" href="">
            Learn more
          </p>
        </article>

        <article className="mt-[60px] md:w-6/12">
          <img className="m-auto" src={Frame} alt="" />
        </article>
      </section>
      <SecondSection />
      <ThirdSection />
      <FifthSection />
      <FourthSection />
      <Sixth1Section />
      <SeventhSection />
    </>
  );
}

export default HeroPage;
