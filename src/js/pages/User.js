import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import { useParams } from "react-router-dom";

import UserCard from "../components/UserCard";
import BackButton from "../components/BackButton";
import Loader from "../components/Loader";

function User() {
  const [userData, setUserData] = useState({});

  const { id } = useParams();
  const storageKey = `user-${id}`;

  useEffect(() => {
    const cachedData = sessionStorage.getItem(storageKey);
    if (cachedData) {
      setUserData(JSON.parse(cachedData));
    } else {
      fetch(`https://hacker-news.firebaseio.com/v0/user/${id}.json`)
        .then((response) => response.json())
        .then((result) => {
          setUserData(result);
          sessionStorage.setItem(storageKey, JSON.stringify(result));
        });
    }
  }, []);

  return (
    <Page>
      <BackButton route="/" />

      <main>
        {Object.keys(userData).length === 0 && <Loader />}
        {"created" in userData && <UserCard user={userData} />}
      </main>
    </Page>
  );
}

export default User;
