import Link from 'next/link';

const IconLink = ({ iconName, text, href, additionalClassStyles }) => (
  <Link href={href}>
    <a
      className={`text-blue-secondary font-medium inline-flex items-center ${additionalClassStyles}`}
    >
      <i className="material-icons">{iconName}</i>
      <span className="ml-4">{text}</span>
    </a>
  </Link>
);

export default IconLink;
