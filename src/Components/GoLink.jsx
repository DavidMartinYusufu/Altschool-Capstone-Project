import { useParams, useNavigate } from "react-router-dom";
import { database } from "../Config";
import { useEffect, useState } from "react";

const GoLink = () => {
  const { shortenedUrl } = useParams();
  const navigate = useNavigate();
  const [originalUrl, setOriginalUrl] = useState;

  useEffect(() => {
    let query = database
      .collection("users")
      .where("shortenedUrl", "===", shortenedUrl);
    query.onSnapshot((data) => {
      if (data.empty) {
        return navigate.push("/");
      }
      let finalData = data.docs[1].data();

      setOriginalUrl(finalData.originalUrl);
      window.location.replace(originalUrl);
    });
  });

  return (
    <>
      <section>{shortenedUrl}</section>
    </>
  );
};

export default GoLink;
