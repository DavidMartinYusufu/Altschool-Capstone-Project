import Magic from "../assets/magic_wand.png";

function FifthSection() {
  return (
    <>
      <section className="bg-blue-700 h-[300px] flex mt-[50px] mb-[50px] ">
        <section className="flex  flex-col justify-center bg-white border-[1px] border-blue-500 w-10/12 md:w-5/12 m-auto h-[200px] rounded-[12px]">
          <form action="" className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter the link here..."
              className="border-[2px] border-grey-900 w-10/12 m-auto h-[40px] rounded-[12px] focus:outline-blue-500 pl-[20px] "
              required
            />
            <button className=" bg-blue-500 text-white py-[8px] px-[20px] rounded-[100px] w-6/12 m-auto  ">
              <span className="flex flex-row items-center justify-center gap-2">
                Trim URL
                <img src={Magic} alt="" />
              </span>
            </button>
          </form>
          <article className="flex justify-center  mt-[20px]">
            <p className="text-blue-500 text-[14px]">
              By clicking TrimURL, I agree to the{" "}
              <span className="font-bold text-blue-800">Terms of Service,</span>{" "}
              <br /> Privacy Policy and Use of Cookies.
            </p>
          </article>
        </section>
      </section>
    </>
  );
}

export default FifthSection;
