import Link from 'next/link';
import useFetchJobs from '@/hooks/useFetchJobs';
import JobCard from '@/components/JobCard';

const JobList = ({ description = '', location = '', full_time = '' }) => {
  const { data, error, isLoading } = useFetchJobs(description, location, full_time);

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <ul>
        {data.map((job) => (
          <li key={job.id}>
            <Link href={`/jobs/${job.id}`}>
              <a>
                <JobCard
                  companyName={job.company}
                  title={job.title}
                  type={job.type}
                  location={job.location}
                  createdAt={job.created_at}
                  companyLogo={job.company_logo}
                />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
