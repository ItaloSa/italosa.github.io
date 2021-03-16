import React, { useState, useEffect } from 'react';
import { Link } from './styled';

const NEXT_PUBLIC_GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL;
const NEXT_PUBLIC_GITHUB_API_URL = process.env.NEXT_PUBLIC_GITHUB_API_URL;

type ProfileInfoType = {
  followers: number;
  following: number;
  public_repos: number;
};

const GithubBio: React.FC = () => {
  const [profileInfo, setProfileInfo] = useState<Partial<ProfileInfoType>>({});
  const { followers = 0, following = 0, public_repos = 0 } = profileInfo;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(`${NEXT_PUBLIC_GITHUB_API_URL}/users/italosa`);
    const data = await response.json();
    setProfileInfo(data);
  };

  return (
    <div className="row mt-4">
      <div className="col d-flex flex-row">
        <Link
          target="_blank"
          href={`${NEXT_PUBLIC_GITHUB_URL}?tab=followers`}
          rel="noopener noreferrer"
        >
          Followers {followers}
        </Link>
        <Link
          className="ml-3"
          target="_blank"
          href={`${NEXT_PUBLIC_GITHUB_URL}?tab=following`}
          rel="noopener noreferrer"
        >
          Following {following}
        </Link>
        <Link
          className="ml-3"
          target="_blank"
          href={`${NEXT_PUBLIC_GITHUB_URL}?tab=repositories`}
          rel="noopener noreferrer"
        >
          Repos {public_repos}
        </Link>
      </div>
    </div>
  );
};

export default GithubBio;
