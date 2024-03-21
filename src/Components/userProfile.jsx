import Magic from "../assets/magic_wand.png";
import { useState, useEffect } from "react";
import axios from "axios";
import QRCode from "react-qr-code";
import { getAuth } from "firebase/auth";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { database } from "../Config";
import { Link } from "react-router-dom";
import isUrl from "is-url";

function UserProfile() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showQRCode, setShowQRCode] = useState(false);
  const [userData, setUserData] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const auth = getAuth();
  const user = auth.currentUser;

  const shortenUrl = async (e) => {
    e.preventDefault();
    const validator = isUrl(originalUrl);

    if (validator) {
      try {
        const response = await axios.post(
          "https://api-ssl.bitly.com/v4/shorten",
          {
            long_url: originalUrl,
          },
          {
            headers: {
              Authorization: `891140b80a262ecb16de2092d0a2d569a8b64670`,
              "Content-Type": "application/json",
            },
          }
        );

        setShortenedUrl(response.data.id);
        console.log(response.data.id);
        console.log(user);

        // Add shortened URL to Firestore
        const usersRef = collection(database, "users");
        await addDoc(usersRef, {
          userId: user.uid,
          originalUrl: originalUrl,
          shortenedUrl: response.data.id,
        });
        setShowQRCode(true);
        setOriginalUrl("");
        console.log("qr code", showQRCode);
      } catch (error) {
        console.error("Error shortening URL:", error.response.data);
        setErrorMessage("Error shortening URL. Please try again.");
      }
    } else {
      setErrorMessage("Invalid url");
    }
  };

  useEffect(() => {
    const getData = async () => {
      if (!user) return;

      const usersRef = collection(database, "users");
      const q = query(usersRef, where("userId", "==", user.uid));

      onSnapshot(q, (snapshot) => {
        const userData = [];
        snapshot.forEach((doc) => {
          userData.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setUserData(userData);
        console.log(userData);
      });
    };

    getData();
  }, [user]);

  // Sign out of firebase
  const signOut = (event) => {
    event.preventDefault();
    auth.signOut().then(() => {
      alert("Do you want to signed out?");
    });
  };

  const handleDelete = async (id) => {
    try {
      // Delete the document from Firestore
      await deleteDoc(doc(database, "users", id));
      // Update the state to reflect the changes
      setUserData(userData.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  const handleCopy = (url) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        // Set copySuccess to true to display confirmation message
        setCopySuccess(true);
        console.log("URL copied to clipboard!");
        alert("URL copied to clipboard!");
        // Reset copySuccess after 3 seconds
        setTimeout(() => {
          setCopySuccess(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Failed to copy URL:", error);
      });
  };

  return (
    <div>
      <section className="mb-50px">
        <section className="flex pl-[10px] pr-[10px] pt-[20px] justify-between items-center">
          <div className="text-blue-500">
            <Link to="/">Go to Home</Link>
          </div>
          <button
            onClick={signOut}
            className=" text-[15px] bg-blue-500 text-white py-[8px] px-[20px] rounded-[100px] "
          >
            Log out
          </button>
        </section>

        <section>
          <div className="text-gray-600 ml-[20px]">
            <div>{user.displayName}</div>
            <div>{user.email}</div>
          </div>
        </section>
        <section className=" h-[300px] flex mt-[50px] mb-[50px] ">
          <section className="flex  flex-col justify-center bg-white shadow-sm border-[1px] border-gray-200 w-10/12 md:w-5/12 m-auto h-[200px] rounded-[12px]">
            <form action="" className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Enter the link here..."
                value={originalUrl}
                onChange={(e) => setOriginalUrl(e.target.value)}
                className="border-[2px] border-grey-900 w-10/12 m-auto h-[40px] rounded-[12px] focus:outline-blue-500 pl-[20px] "
                required
              />
              <button
                onClick={shortenUrl}
                type="submit"
                className=" bg-blue-500 text-white py-[8px] px-[20px] rounded-[100px] w-6/12 m-auto  "
              >
                <span className="flex flex-row items-center justify-center gap-2">
                  Trim URL
                  <img src={Magic} alt="" />
                </span>
              </button>
            </form>

            {errorMessage && (
              <p className="text-red-500 text-center pt-[10px]">
                {errorMessage}
              </p>
            )}
          </section>
        </section>

        {copySuccess && (
          <div className="bg-green-500 text-white py-2 text-center">
            URL copied to clipboard!
          </div>
        )}

        <section className="">
          {userData && (
            <div>
              <h2 className="text-center text-gray-600 text-[20px]">
                Your Shortened URLs
              </h2>

              <div className="w-11/12 m-auto">
                {userData.map((user, index) => (
                  <div className="" key={index}>
                    <section className="w-full">
                      <section className="flex flex-col  md:flex-row shadow-sm text-gray-600 m-6 rounded-[8px] justify-between items-center gap-8 bg-hex-F9FBFD border border-hex-F9FBFD p-[40px]">
                        <p className="text-blue-500">{user.shortenedUrl}</p>
                        <Link
                          to={originalUrl}
                          className="overflow-hidden max-w-[200px] md:w-none truncate"
                        >
                          {user.originalUrl}
                        </Link>
                        <a>
                          <QRCode
                            className="w-[60px] h-[60px]"
                            value={shortenedUrl}
                          />
                        </a>

                        <div className="flex gap-7 ">
                          <button
                            className="hover:bg-gray-200 hover:rounded-[8px] p-2 text-blue-500"
                            onClick={() => handleCopy(user.shortenedUrl)}
                          >
                            Copy
                          </button>
                          <button
                            className="bg-gray-200 rounded-[8px] p-2 "
                            onClick={() => handleDelete(user.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </section>
                    </section>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </section>
    </div>
  );
}

export default UserProfile;
