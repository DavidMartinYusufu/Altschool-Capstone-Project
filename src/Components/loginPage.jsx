import { Link } from "react-router-dom";
import apple from "../assets/apple.png";
import google from "../assets/search.png";

function LoginPage() {
  return (
    <>
      <section>
        <section className="w-11/12 md:w-5/12 m-auto text-center mt-[100px]">
          <h1 className="text-[15px] text-gray-600">Log in with</h1>
          <section className="flex justify-center gap-4 mt-[10px]">
            <button className="bg-blue-500 text-white py-[8px] px-[20px] rounded-[4px] flex justify-center items-center gap-2 ">
              <span>
                <img className="w-[20px] h-[20px]" src={google} alt="" />
              </span>
              Google
            </button>
            <button className="bg-blue-500 flex justify-center items-center gap-2 text-white py-[8px] px-[20px] rounded-[4px] ">
              <span>
                <img className="bg-white w-[20px] h-[20px]" src={apple} alt="" />
              </span>
              Apple
            </button>
          </section>
          <section className="flex items-center justify-center gap-5 mt-[10px]">
            <div className="bg-gray-300 w-full h-[2px]"></div>
            <p className="text-gray-600">Or</p>
            <div className="bg-gray-300 w-full h-[2px]"></div>
          </section>
          <section className="flex flex-col gap-6 mt-[30px]">
            <input
              type="text"
              placeholder="Email address or username"
              className="border-[2px] border-grey-900 w-full md:w-full m-auto h-[43px] rounded-[10px] focus:outline-blue-500 pl-[20px] "
              required
            />
            <input
              type="text"
              placeholder="Password"
              className="border-[2px] border-grey-900 w-full md:w-full m-auto h-[43px] rounded-[10px] focus:outline-blue-500 pl-[20px] "
              required
            />
            <section>
              <span className="text-[15px] text-blue-500 flex justify-end">
                <a href="">Forgot your password?</a>
              </span>
              <button className="text-[15px] bg-blue-500 text-white py-[8px] px-[20px] rounded-[100px] w-full md:w-full m-auto mt-[10px] ">
                Log in
              </button>
            </section>
          </section>
          <section className="mt-[20px] mb-[20px] text-[15px] text-gray-700">
            <p>
              Don`t have an account?{" "}
              
              <Link to='/signUp'><span className="text-blue-500">Sign up</span></Link>
            </p>
          </section>

          <section className="text-[15px] text-gray-500">
            <p>By signing in with an account, you agree to </p>
            <p>
              Sciccor`s Terms of Service, Privacy Policy and Acceptable Use
              Policy.
            </p>
          </section>
        </section>
      </section>
    </>
  );
}

export default LoginPage;
