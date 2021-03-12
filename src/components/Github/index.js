import React, { useState, useEffect } from 'react';

const { REACT_APP_GITHUB_URL } = process.env;
const { REACT_APP_GITHUB_API_URL } = process.env;

const GithubBio = () => {
  const [profileInfo, setProfileInfo] = useState({});
  const { followers = 0, following = 0, public_repos = 0 } = profileInfo;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(`${REACT_APP_GITHUB_API_URL}/users/italosa`);
    const data = await response.json();
    setProfileInfo(data);
  };

  return (
    <div className="row mt-4">
      <div className="col d-flex flex-row">
        <a target="_blank" href={`${REACT_APP_GITHUB_URL}?tab=followers`} rel="noopener noreferrer">
          <p>Followers {followers}</p>
        </a>
        <a
          className="ml-3"
          target="_blank"
          href={`${REACT_APP_GITHUB_URL}?tab=following`}
          rel="noopener noreferrer"
        >
          <p>Following {following}</p>
        </a>
        <a
          className="ml-3"
          target="_blank"
          href={`${REACT_APP_GITHUB_URL}?tab=repositories`}
          rel="noopener noreferrer"
        >
          <p>Repos {public_repos}</p>
        </a>
        <p className="ml-3">{' - '}</p>
        <a className="ml-3" target="_blank" href={REACT_APP_GITHUB_URL} rel="noopener noreferrer">
          GH
        </a>
      </div>
    </div>
  );
};

export default GithubBio;
