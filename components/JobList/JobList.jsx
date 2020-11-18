import { useEffect, useState } from 'react';
import Link from 'next/link';
import { string, number } from 'prop-types';
import useFetchJobs from '@/hooks/useFetchJobs';
import JobCard from './JobCard';
import Spinner from './Spinner';
import PageControlContainer from './PageControlContainer';

const JobList = ({ description, location, full_time, jobsToDisplay }) => {
  const { data, error, isLoading } = useFetchJobs(description, location, full_time);
  const [currentPage, setCurrentPage] = useState(1);

  const onUpdateCurrentPage = (newCurrentPage) => {
    setCurrentPage(newCurrentPage);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [description, location, full_time, jobsToDisplay]);

  if (error)
    return (
      <div className="font-poppins text-white bg-red-secondary border-red-primary border-2 mt-6 lg:mt-8 p-4 rounded block-size-fit">
        {error.message}
      </div>
    );
  if (isLoading) return <Spinner />;

  return (
    <>
      {data && data.length > 0 ? (
        <div>
          <ul>
            {data
              .slice((currentPage - 1) * jobsToDisplay, currentPage * jobsToDisplay)
              .map((job) => (
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
          <PageControlContainer
            numPages={Math.ceil(data.length / jobsToDisplay)}
            currentPage={currentPage}
            updateCurrentPage={onUpdateCurrentPage}
          />
        </div>
      ) : (
        <p className="font-poppins text-center text-blue-primary text-2xl font-medium mt-6 lg:mt-8">
          No Jobs Found
        </p>
      )}
    </>
  );
};
JobList.propTypes = {
  description: string,
  location: string,
  full_time: string,
  jobsToDisplay: number
};
JobList.defaultProps = {
  description: '',
  location: '',
  full_time: '',
  jobsToDisplay: 5
};

export default JobList;
