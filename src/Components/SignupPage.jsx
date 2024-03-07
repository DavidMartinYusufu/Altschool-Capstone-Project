import { useEffect } from "react";
// import apple from "../assets/apple.png";
import google from "../assets/search.png";
import {
  signInWithRedirect,
  auth,
  provider,
  getRedirectResult,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "../Config";
import { useState } from "react";
import { Link } from "react-router-dom";
import UserProfile from "./userProfile";
// import { rootCertificates } from "tls";

function SignupPage() {
  // const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  // Sign into firebase with Google...
  const signIn = (event) => {
    event.preventDefault();
    signInWithRedirect(auth, provider);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (retypePassword !== password) {
      console.log("Password does not match");
      return;
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          console.log(userCredential);
          // ...
        })
        .catch((error) => {
          console.log(error);
          // ..
        });
    }
  };

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
    });
  }, []);

  return (
    <>
      <div className="mt-[20px] ml-[20px] text-blue-500">
        <Link to="/">Go to Home</Link>
      </div>
      {user ? (
        authenticated ? (
          <UserProfile user={user} />
        ) : (
          <div>Please wait..</div>
        )
      ) : (
        <section>
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
                onSubmit={handleSignIn}
                className="flex flex-col gap-6 mt-[30px]"
              >
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className=" pl-[20px] border-[2px] border-grey-900 w-full md:w-full m-auto h-[43px] rounded-[10px] focus:outline-blue-500  "
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-[20px] border-[2px] border-grey-900 w-full md:w-full m-auto h-[43px] rounded-[10px] focus:outline-blue-500 "
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-[20px] border-[2px] border-grey-900 w-full md:w-full m-auto h-[43px] rounded-[10px] focus:outline-blue-500 "
                  required
                />
                <input
                  type="password"
                  placeholder="Retype Password"
                  value={retypePassword}
                  onChange={(e) => setRetypePassword(e.target.value)}
                  className="pl-[20px] border-[2px] border-grey-900 w-full md:w-full m-auto h-[43px] rounded-[10px] focus:outline-blue-500 "
                  required
                />
                {password !== retypePassword && (
                  <div style={{ color: "red", marginTop: "5px" }}>
                    Passwords do not match
                  </div>
                )}
                <section>
                  <button
                    type="submit"
                    className=" text-[15px] bg-blue-500 text-white py-[8px] px-[20px] rounded-[100px] w-full md:w-full m-auto mt-[10px] "
                  >
                    Sign up with Email
                  </button>
                </section>
              </form>
            </section>
            <section className="mt-[20px] mb-[20px] text-[15px] text-gray-700">
              <p>
                Already have an account?{" "}
                <Link to="/login">
                  <span className="text-blue-500">Log in</span>
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
    </>
  );
}

export default SignupPage;
