import Ellipse from "../assets/Group-6.png";
import Frame1 from "../assets/Frame1.png";
import Frame2 from "../assets/Frame2.png";
import Frame3 from "../assets/Frame3.png";

function ThirdSection() {
  return (
    <>
      <section className="flex flex-col mt-[50px] justify-between md:flex-row w-10/12 md:w-10/12 m-auto">
        <section className=" md:w-5/12">
          <h2 className="font-bold text-[40px]">
            Why choose <span className="text-blue-500">Scissors</span>
          </h2>
          <p className="hidden md:inline text-[15px]">
            Scissors is the hub of everything that has to do
            <br /> with your link management. We shorten your URLs, <br />
            allow you creating custom ones for your personal, <br />
            business, event usage. Our swift QR code <br />
            creation, management and usage tracking with <br />
            advance analytics for all of these is second to <br />
            none.
          </p>
          <article className="mb-[20px]">
            <p className="md:hidden inline ">
              Scissors is the hub of everything that has to do with your link
              management. We shorten your URLs, allow you creating custom ones
              for your personal, business, event usage. Our swift QR code
              creation, management and usage tracking with advance analytics for
              all of these is second to none.{" "}
            </p>
          </article>
        </section>

        <section className=" md:w-7/12">
          <section className="flex flex-col justify-between md:flex-row">
            <article className="">
              <img src={Ellipse} alt="" />
              <h2 className="text-[25px] font-medium mt-4">URL Shortening</h2>
              <div className="mt-3"></div>
              <p className="hidden md:inline text-[15px]">
                Scissor allows you to shorten URLs of your
                <br />
                business, events. Shorten your URL at scale,<br /> URL redirects.
              </p>

              <p className="md:hidden inline">
                Scissor allows you to shorten URLs of your business, events.
                Shorten your URL at scale, URL redirects.
              </p>
            </article>

            <article>
              <img src={Frame1} alt="" />
              <h2 className="text-[25px] font-medium mt-[20px]">Custom URLs</h2>
              <div className="mt-3"></div>
              <p className="hidden md:inline  text-[15px]">
                With Scissor, you can create custom URLs, <br />
                with the length you want! A solution for socials <br />
                and businesses.
              </p>

              <p className="md:hidden inline">
                With Scissor, you can create custom URLs, with the length you
                want! A solution for socials and businesses.
              </p>
            </article>
          </section>

          <section className="flex flex-col justify-between md:flex-row">
            <article className="mt-[40px]">
              <img src={Frame2} alt="" />
              <h2 className="text-[25px] font-medium mt-[20px]">QR Codes</h2>
              <div className="mt-3"></div>
              <p className="hidden md:inline text-[15px]">
                Generate QR codes to your business, events. <br />
                Bring your audience and customers to your <br />
                doorstep with this scan and go solution.
              </p>
              <article>
                <p className="md:hidden inline">
                  Generate QR codes to your business, events. Bring your
                  audience and customers to your doorstep with this scan and go
                  solution.
                </p>
              </article>
            </article>
            <article className="md:mt-[40px]">
              <img src={Frame3} alt="" />
              <h2 className="text-[25px] font-medium mt-[20px]">
                Data Analytics
              </h2>
              <div className="mt-3"></div>
              <p className="hidden md:inline text-[15px]">
                Receive data on the usage of either your <br />
                shortened URL, custom URLs or generated QR <br />
                codes. Embedded to monitor progress.
              </p>
              <article className="">
                <p className="md:hidden inline">
                  Receive data on the usage of either your shortened URL, custom
                  URLs or generated QR codes. Embedded to monitor progress.
                </p>
              </article>
            </article>
          </section>
        </section>
      </section>
    </>
  );
}

export default ThirdSection;
