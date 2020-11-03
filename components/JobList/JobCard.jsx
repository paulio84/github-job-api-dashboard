import { string } from 'prop-types';
import { formatCreatedAtDate } from '@/lib/helpers';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import IconLabel from '@/components/IconLabel';
import Tag from '@/components/Tag';

const JobCard = ({ companyName, title, type, location, createdAt, companyLogo }) => {
  const formattedCreatedAt = formatCreatedAtDate(createdAt);

  return (
    <article className="font-roboto text-blue-primary bg-white rounded flex p-3 shadow mt-6 lg:mt-8">
      <aside>
        <img
          className="rounded img-size-90"
          src={companyLogo ? companyLogo : 'https://via.placeholder.com/90'}
          alt={`${companyName} Logo`}
          width="90"
          height="90"
        />
      </aside>
      <section className="ml-4 w-full">
        <p className="font-bold text-xs leading-none mb-2">{companyName}</p>
        <h1 className="leading-none mb-3">{title}</h1>
        <div className="md:flex md:items-center md:justify-between">
          <Tag text={type} additionalClassStyles="mb-6 md:mb-0" />
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
  companyLogo: string
};

export default JobCard;
