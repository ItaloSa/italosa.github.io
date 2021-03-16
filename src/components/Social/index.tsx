import { FaGithub, FaLinkedin, FaDev, FaTwitter } from 'react-icons/fa';
import { Link } from './styled';

export default function Social() {
  return (
    <div className="row mt-2">
      <Link
        className="ml-3"
        target="_blank"
        href="https://github.com/italosa"
        rel="noopener noreferrer"
      >
        <FaGithub size="1.2rem" />
      </Link>
      <Link
        className="ml-3"
        target="_blank"
        href="https://linkedin.com/in/sousaitalo"
        rel="noopener noreferrer"
      >
        <FaLinkedin size="1.2rem" />
      </Link>
      <Link
        className="ml-3"
        target="_blank"
        href="https://dev.to/anditsou"
        rel="noopener noreferrer"
      >
        <FaDev size="1.2rem" />
      </Link>
      <Link
        className="ml-3"
        target="_blank"
        href="https://twitter.com/anditsou"
        rel="noopener noreferrer"
      >
        <FaTwitter size="1.2rem" />
      </Link>
    </div>
  );
}
