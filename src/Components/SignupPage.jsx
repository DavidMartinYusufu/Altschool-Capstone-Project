import { useEffect } from "react";
import apple from "../assets/apple.png";
import google from "../assets/search.png";
import {
  signInWithRedirect,
  auth,
  provider,
  getRedirectResult,
  onAuthStateChanged,
} from "../Config";
import { useState } from "react";
import { Link } from "react-router-dom";

function SignupPage() {
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated  ] = useState(false)

  // Sign out of firebase
  const signOut = (event) => {
    event.preventDefault()
    auth.signOut().then(() => {
      alert("Do you want to signed out?")
    })
  }


  // Sign into firebase...
  const signIn = (event) => {
    event.preventDefault();
    signInWithRedirect(auth, provider);
  };

  // get redirect result..
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        // Get the result
        if (result) {
          // console.log(result.user)
          setSignedIn(true);
        } else {
          //..
        }
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  }, []);

  //Check auth state, if the user is signed in or not..
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // set the user..
        const { displayName, email, photoURL, uid } = user;
        setUser({ displayName, email, photoURL, uid });
        setAuthenticated(true)
        // ...
      } else {
        // User is signed out
        setUser(null);
        setAuthenticated(false)
        // ...
      }
    });
  }, []);


  return (
    <>
      {user ? (
        authenticated ? <div>
        <h1>Welcome. You are signed in</h1>
        <div>{user.displayName}</div>
        <div>{user.email}</div>
        <button onClick={signOut} className=" text-[15px] bg-blue-500 text-white py-[8px] px-[20px] rounded-[100px] w-full md:w-full m-auto mt-[10px] ">
          Log out
        </button>
      </div> : <div>Please wait..</div>
      ) : (
        <section>
          <div style={signedIn ? {} : { display: "none" }}>
            Sign in successful
          </div>
          <section className="w-11/12 md:w-5/12 m-auto text-center mt-[50px]">
            <h1 className="text-[15px] text-gray-600">Sign up with</h1>
            <section className="flex justify-center gap-4 mt-[10px]">
              <button
                onClick={signIn}
                className="bg-blue-500 text-white py-[8px] px-[20px] rounded-[4px] flex justify-center items-center gap-2 "
              >
                <span>
                  <img className="w-[20px] h-[20px]" src={google} alt="" />
                </span>
                Google
              </button>
              <button className="bg-blue-500 flex justify-center items-center gap-2 text-white py-[8px] px-[20px] rounded-[4px] ">
                <span>
                  <img
                    className="bg-white w-[20px] h-[20px]"
                    src={apple}
                    alt=""
                  />
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
                placeholder="Username"
                className=" pl-[20px] border-[2px] border-grey-900 w-full md:w-full m-auto h-[43px] rounded-[10px] focus:outline-blue-500  "
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="pl-[20px] border-[2px] border-grey-900 w-full md:w-full m-auto h-[43px] rounded-[10px] focus:outline-blue-500 "
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="pl-[20px] border-[2px] border-grey-900 w-full md:w-full m-auto h-[43px] rounded-[10px] focus:outline-blue-500 "
                required
              />
              <input
                type="password"
                placeholder="Retype Password"
                className="pl-[20px] border-[2px] border-grey-900 w-full md:w-full m-auto h-[43px] rounded-[10px] focus:outline-blue-500 "
                required
              />
              <section>
                <button className=" text-[15px] bg-blue-500 text-white py-[8px] px-[20px] rounded-[100px] w-full md:w-full m-auto mt-[10px] ">
                  Sign up with Email
                </button>
              </section>
            </section>
            <section className="mt-[20px] mb-[20px] text-[15px] text-gray-700">
              <p>
                Already have an account?{" "}
                
                <Link to='/login'><span className="text-blue-500">Log in</span></Link>
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
      )}
    </>
  );
}

export default SignupPage;
