import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import IconLabel from '@/components/IconLabel';
import Error from '@/components/Error';
import { SiteLayout } from '@/components/Layouts';
import Tag from '@/components/Tag';
import { formatCreatedAtDate } from '@/lib/helpers';

const JobPage = ({ errorCode, jobListing }) => {
  if (errorCode) {
    return <Error errorCode={errorCode} />;
  }

  const {
    company,
    company_logo,
    created_at,
    description,
    how_to_apply,
    location,
    title,
    type
  } = jobListing;

  const formattedCreatedAt = formatCreatedAtDate(created_at);

  return (
    <main>
      <article className="lg:grid lg:grid-cols-job lg:place-content-between lg:gap-x-12">
        <aside className="font-poppins text-sm leading-none">
          <Link href="/">
            <a className="text-blue-secondary font-medium flex items-center mb-8 pb-1">
              <i className="material-icons">keyboard_backspace</i>
              <span className="ml-4">Back to search</span>
            </a>
          </Link>
          <p className="text-gray-dark uppercase mb-4">How to apply</p>
          <ReactMarkdown
            className="how-to-apply text-blue-primary leading-5 mb-8 pb-1 overflow-hidden"
            plugins={[gfm]}
            children={how_to_apply}
            linkTarget="_blank"
          />
        </aside>
        <section className="font-roboto text-blue-primary">
          <div className="md:flex md:items-center mb-3 md:mb-2">
            <h1 className="text-2xl font-bold mb-1 md:mb-0 md:mr-4 leading-none">{title}</h1>
            <Tag text={type} />
          </div>
          <IconLabel
            iconName="schedule"
            text={formatDistanceToNow(formattedCreatedAt, { addSuffix: true })}
            additionalClassStyles="text-xs text-gray-dark mb-8"
          />
          <div className="flex mb-8">
            <aside>
              <img
                className="rounded img-size-42"
                src={company_logo ? company_logo : 'https://via.placeholder.com/42'}
                alt={`${company} Logo`}
              />
            </aside>
            <section className="ml-3 w-full">
              <p className="font-bold text-lg leading-5 mb-2">{company}</p>
              <div className="md:flex md:items-center md:justify-between">
                <div className="flex justify-between md:space-x-8">
                  <IconLabel
                    iconName="public"
                    text={location}
                    additionalClassStyles="text-xs text-gray-dark"
                  />
                </div>
              </div>
            </section>
          </div>
          <ReactMarkdown
            className="description"
            plugins={[gfm]}
            children={description}
            linkTarget="_blank"
          />
        </section>
      </article>
    </main>
  );
};

JobPage.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export async function getServerSideProps(context) {
  // fetch data from external API
  const res = await fetch(
    `https://jobs.github.com/positions/${context.params.id}.json?markdown=true`
  );
  const errorCode = res.ok ? false : res.status;
  let jobListing = null;
  if (!errorCode) {
    jobListing = await res.json();
  }

  return {
    props: { errorCode, jobListing }
  };
}

export default JobPage;
