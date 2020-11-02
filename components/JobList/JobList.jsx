import Link from 'next/link';
import useFetchJobs from '@/hooks/useFetchJobs';
import JobCard from '@/components/JobCard';
import Spinner from '@/components/Spinner';

const JobList = ({ description = '', location = '', full_time = '' }) => {
  const { data, error, isLoading } = useFetchJobs(description, location, full_time);

  if (error)
    return (
      <div className="font-poppins text-white bg-red-secondary border-red-primary border-2 mt-8 p-4 rounded block-size-fit">
        {error.message}
      </div>
    );
  if (isLoading) return <Spinner />;

  return (
    <div>
      {data && data.length > 0 ? (
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
      ) : (
        <p className="font-poppins text-center text-blue-primary text-2xl font-medium mt-8">
          No Jobs Found
        </p>
      )}
    </div>
  );
};

export default JobList;
