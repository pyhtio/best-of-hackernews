import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import { useParams } from "react-router-dom";

import { humanReadableTimestamp } from "../utils/helpers";

import BackButton from "../components/BackButton";
import Loader from "../components/Loader";

function UserProfile() {
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

      {Object.keys(userData).length === 0 && <Loader />}

      {"created" in userData && (
        <main className="UserProfile">
          <h4>User details:</h4>
          <h1>{id}</h1>
          <dl>
            <dt>Join date</dt>
            <dd>{humanReadableTimestamp(userData.created)}</dd>
            <dt>Karma</dt>
            <dd>{userData.karma}</dd>
            <dt>Posts</dt>
            <dd>
              {typeof userData.submitted === "object"
                ? userData.submitted.length
                : ""}
            </dd>
          </dl>
        </main>
      )}
    </Page>
  );
}

export default UserProfile;
