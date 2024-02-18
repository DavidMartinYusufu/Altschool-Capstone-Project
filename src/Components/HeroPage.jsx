import Logo from "../assets/Logo.png";
import Frame from "../assets/Frame_29546.png";


function HeroSection() {
  return (
    <>
      <nav className="flex mt-[20px] justify-between items-center border-[1px] border-red-500 w-11/12 md:w-10/12 m-0 m-auto">
        <section>
          <img src={Logo} alt="This is an image" />
        </section>

        <section className='hidden md:flex gap-10'>
          <a href="#" className='text-blue-500'>My URLs</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Analytics</a>
          <a href="#">FAQs</a>
        </section>

        <section className='hidden md:inline md:flex gap-[20px] items-center'>
          <div>
            <a href="" className='text-blue-500'>Log in</a>
          </div>
          <div className='bg-blue-500 text-white py-[8px] px-[20px] rounded-[100px]'>
            <button>Try for free</button>
          </div>
        </section>

        <section className='flex flex-col gap-[4px] md:hidden'>
          <div className="w-[25px] h-[3px] bg-black"></div>
          <div className="w-[25px] h-[3px] bg-black"></div>
          <div className="w-[25px] h-[3px] bg-black"></div>
        </section>
      </nav>

      <section className='w-11/12 md:w-9/12 text-center m-auto border-[1px] border-solid border-red-500 mt-[75px]'>
        <article>
          <h1 className="text-center font-bold text-[40px] md:text-[48px]">
            {" "}
            OptimizeYour Online Experience with Our Advanced <span className='text-blue-500'>URL Shortening</span> Solution
          </h1>
          <p className='mt-[40px] md:w-8/12 m-auto'>
            Personalize your shortened URLs to align with your brand identity.
            Utilize custom slugs, branded links, and domain customization
            options to reinforce your brand presence and enhance user
            engagement.
          </p>
        </article>

        <article className='mt-[40px] flex justify-center items-center gap-12'>
          <button className='bg-blue-500 text-white py-[8px] px-[30px] rounded-[50px]'>
            Sign Up
          </button>
          <a className='text-blue-500' href="">Learn more</a>
        </article>

        <article className='mt-[60px] md:w-6/12 m-auto border-[1px] border-solid border-red-500'>
          <img src={Frame} alt="" />
        </article>
      </section>
    </>
  );
}

export default HeroSection