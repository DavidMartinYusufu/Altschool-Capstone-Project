import Magic from "../assets/magic_wand.png";
import { useState } from "react";
import axios from "axios";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";

function FifthSection() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showQRCode, setShowQRCode] = useState(false);

  const shortenUrl = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api-ssl.bitly.com/v4/shorten",
        {
          long_url: originalUrl,
        },
        {
          headers: {
            Authorization: `2f0f5acfcbe6f7c9318a179b6f585b214bf0b7e4`,
            "Content-Type": "application/json",
          },
        }
      );

      setShortenedUrl(response.data.id);
      setShowQRCode(true);
    } catch (error) {
      console.error("Error shortening URL:", error.response.data);
      setErrorMessage("Error shortening URL. Please try again.");
    }
  };

  return (
    <>
      <section className="bg-blue-700 h-[300px] flex mt-[50px] mb-[50px] ">
        <section className="flex  flex-col justify-center bg-white border-[1px] border-blue-500 w-10/12 md:w-5/12 m-auto h-[200px] rounded-[12px]">
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

          {showQRCode ? (
            <>
              <section className="text-center">
                <Link>Shortened URL: {shortenedUrl}</Link>
                <QRCode value={shortenedUrl} />
              </section>
            </>
          ) : null}
          {errorMessage && (
            <p className="text-center" style={{ color: "red" }}>
              {errorMessage}
            </p>
          )}
        </section>
      </section>
    </>
  );
}

export default FifthSection;
