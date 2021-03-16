import { FaGithub, FaLinkedin, FaDev, FaTwitter } from 'react-icons/fa';
import { Link } from './styled';
import { gaEvent } from '../../services/analytics';

export default function Social() {
  const trackClick = (event) => gaEvent('Clicked Icon', event.currentTarget.href);

  return (
    <div className="row mt-2">
      <Link
        className="ml-3"
        target="_blank"
        href="https://github.com/italosa"
        rel="noopener noreferrer"
        onClick={trackClick}
      >
        <FaGithub size="1.2rem" />
      </Link>
      <Link
        className="ml-3"
        target="_blank"
        href="https://linkedin.com/in/sousaitalo"
        rel="noopener noreferrer"
        onClick={trackClick}
      >
        <FaLinkedin size="1.2rem" />
      </Link>
      <Link
        className="ml-3"
        target="_blank"
        href="https://dev.to/anditsou"
        rel="noopener noreferrer"
        onClick={trackClick}
      >
        <FaDev size="1.2rem" />
      </Link>
      <Link
        className="ml-3"
        target="_blank"
        href="https://twitter.com/anditsou"
        rel="noopener noreferrer"
        onClick={trackClick}
      >
        <FaTwitter size="1.2rem" />
      </Link>
    </div>
  );
}
