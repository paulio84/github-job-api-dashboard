import { string } from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import parse from 'date-fns/parse';
import IconLabel from '@/components/IconLabel';
import Tag from '@/components/Tag';

const JobCard = ({ companyName, title, type, location, createdAt, companyLogo }) => {
  const formattedCreatedAt = parse(
    createdAt.replace('UTC ', ''),
    'E MMM dd HH:mm:ss yyyy',
    new Date()
  );

  return (
    <article className="font-roboto text-blue-primary bg-white rounded flex p-3 shadow">
      <aside>
        <img className="rounded img-size-90" src={companyLogo} alt={`${companyName} Logo`} />
      </aside>
      <section className="ml-4 w-full">
        <p className="font-bold text-xs leading-none mb-2">{companyName}</p>
        <h1 className="leading-none mb-3">{title}</h1>
        <div className="md:flex md:items-center md:justify-between">
          <Tag text={type} />
          <div className="flex text-gray-dark text-xs justify-between md:space-x-8">
            <IconLabel iconName="public" text={location} />
            <IconLabel
              iconName="schedule"
              text={formatDistanceToNow(formattedCreatedAt, { addSuffix: true })}
            />
          </div>
        </div>
      </section>
    </article>
  );
};
JobCard.propTypes = {
  companyName: string.isRequired,
  title: string.isRequired,
  type: string.isRequired,
  location: string.isRequired,
  createdAt: string.isRequired,
  companyLogo: string.isRequired
};

export default JobCard;
