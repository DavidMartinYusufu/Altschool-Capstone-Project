import Logo from "../assets/Logo.png";

function SeventhSection() {
  return (
    <>
      <section className=" bg-black text-white pt-[20px] pb-[20px]">
        <section className="flex items-center justify-between w-11/12 m-auto ">
          <section>
            <img src={Logo} alt="This is an image" />
          </section>

          <section>
            <p>Copyright &copy; Scissor.plc</p>
          </section>
        </section>
      </section>
    </>
  );
}

export default SeventhSection;
