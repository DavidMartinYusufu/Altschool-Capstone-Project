import "./App.css";
import Logo from "./assets/Logo.png";
import Frame from "./assets/Frame_29546.png";

function HeroSection() {
  return (
    <>
      <nav>
        <section>
          <img src={Logo} alt="" />
        </section>

        <section id="links">
          <a className="Blue-link" href="">My URLs</a>
          <a href="">Features</a>
          <a href="">Pricing</a>
          <a href="">Analytics</a>
          <a href="">FAQs</a>
        </section>

        <section id="buttons1">
          <div>
            <a className="Blue-link"  href="">Log in</a>
          </div>
          <div id="try-free">
            <button>Try for free</button>
          </div>
        </section>

        <section id="mobile-lines">
          <div className="mobile-lines"></div>
          <div className="mobile-lines"></div>
          <div className="mobile-lines"></div>
        </section>
      </nav>

      <section id="article">
        <article>
          <h1>
            {" "}
            OptimizeYour Online Experience with Our Advanced <span>URL Shortening</span> Solution
          </h1>
          <p>
            Personalize your shortened URLs to align with your brand identity.
            Utilize custom slugs, branded links, and domain customization
            options to reinforce your brand presence and enhance user
            engagement.
          </p>
        </article>

        <article id="buttons2">
          <button>Sign Up</button>
          <a className="Blue-link" href="">Learn more</a>
        </article>

        <article id="image">
          <img src={Frame} alt="" />
        </article>
      </section>
    </>
  );
}

{
  /* function SecondSection() {
  return (
    <>
      <div>First text</div>
    </>
  );
}
function ThirdSection() {
  return (
    <>
      <div>First text</div>
    </>
  );
}
function FourthSection() {
  return (
    <>
      <div>First text</div>
    </>
  );
} */
}

function App() {
  return (
    <>
      <HeroSection />
    </>
  );
}

export default App;
