function ThirdSection() {
  return (
    <>
      <section className="pt-[40px] pb-[40px] mt-[50px]  bg-hex-F9FBFD">
        <section className="flex flex-col md:flex-row justify-center justify-between w-10/12 md:w-10/12 m-auto ">
          <section className="font-bold text-[40px]">
            <h1>One Stop.</h1>
            <h1>
              Four <span className="text-blue-500">Possibilities</span>.
            </h1>
          </section>

          <section className="flex flex-col md:flex-row gap-[20px] md:gap-[80px]">
            <article>
              <h2 className="text-[25px] font-medium">3M</h2>
              <p className=" text-[15px]">Active users</p>
            </article>
            <article>
              <h2 className="text-[25px] font-medium">60M</h2>
              <p className=" text-[15px]">
                Links & QR
                <br />
                codes created
              </p>
            </article>
            <article>
              <h2 className="text-[25px] font-medium">1B</h2>
              <p className=" text-[15px]">
                Clicked & Scanned
                <br />
                connections
              </p>
            </article>
            <article>
              <h2 className="text-[25px] font-medium">300K</h2>
              <p className=" text-[15px]">App Integrations</p>
            </article>
          </section>
        </section>
      </section>
    </>
  );
}

export default ThirdSection;
