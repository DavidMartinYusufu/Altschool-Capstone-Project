import { Link } from "react-router-dom";
// import apple from "../assets/apple.png";
import google from "../assets/search.png";
import {
  signInWithEmailAndPassword,
  auth,
  provider,
  onAuthStateChanged,
  signInWithRedirect,
  getRedirectResult
} from "../Config";
import { useState, useEffect } from "react";
import UserProfile from "./userProfile";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  // Sign in using email and password
  const handleLogin = async (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log("login sucessful", userCredential);
        // ...
      })
      .catch((error) => {
        console.log("login not sucessful", error);
      });
  };

  // Sign into firebase with Google...
  const signIn = (event) => {
    event.preventDefault();
    signInWithRedirect(auth, provider);
  };

  //Check auth state, if the user is signed in or not..
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // set the user..
        const { displayName, email, photoURL, uid } = user;
        setUser({ displayName, email, photoURL, uid });
        setAuthenticated(true);
        // ...
      } else {
        // User is signed out
        setUser(null);
        setAuthenticated(false);
        // ...
      }
      setLoading(false);
    });
  }, []);

  // get redirect result..
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        // Get the result
        if (result) {
          console.log(result.user);
          // setSignedIn(true);
        } else {
          //..
        }
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  }, []);

  return (
    <>
    <section>
      {loading ? (
        <div className=" flex items-center mt-[200px] justify-center text-[18px]">Loading...</div>
      ) : (
        <section>
        {user ? (
            authenticated ? (
              
                <UserProfile user={user}/>
            
            ) : (
              <div>Please wait..</div>
            )
          ) : (
            <section>
              <section className="w-11/12 md:w-5/12 m-auto text-center mt-[100px]">
                <h1 className="text-[15px] text-gray-600">Log in with</h1>
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
                  {/* <button className="bg-blue-500 flex justify-center items-center gap-2 text-white py-[8px] px-[20px] rounded-[4px] ">
                    <span>
                      <img
                        className="bg-white w-[20px] h-[20px]"
                        src={apple}
                        alt=""
                      />
                    </span>
                    Apple
                  </button> */}
                </section>
                <section className="flex items-center justify-center gap-5 mt-[10px]">
                  <div className="bg-gray-300 w-full h-[2px]"></div>
                  <p className="text-gray-600">Or</p>
                  <div className="bg-gray-300 w-full h-[2px]"></div>
                </section>
                <section>
                  <form
                    onSubmit={handleLogin}
                    className="flex flex-col gap-6 mt-[30px]"
                  >
                    <input
                      type="email"
                      placeholder="Email address or username"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-[2px] border-grey-900 w-full md:w-full m-auto h-[43px] rounded-[10px] focus:outline-blue-500 pl-[20px] "
                      required
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="border-[2px] border-grey-900 w-full md:w-full m-auto h-[43px] rounded-[10px] focus:outline-blue-500 pl-[20px] "
                      required
                    />
                    <section>
                      <span className="text-[15px] text-blue-500 flex justify-end">
                        <a href="">Forgot your password?</a>
                      </span>
                      <button
                        type="submit"
                        className="text-[15px] bg-blue-500 text-white py-[8px] px-[20px] rounded-[100px] w-full md:w-full m-auto mt-[10px] "
                      >
                        Log in
                      </button>
                    </section>
                  </form>
                </section>
                <section className="mt-[20px] mb-[20px] text-[15px] text-gray-700">
                  <p>
                    Don`t have an account?{" "}
                    <Link to="/signUp">
                      <span className="text-blue-500">Sign up</span>
                    </Link>
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
        </section>
      )}
    </section>

   

    </>
  );
}

export default LoginPage;
