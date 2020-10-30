import { useState, useEffect } from 'react';
import Link from 'next/link';
import JobCard from '@/components/JobCard';

const JobList = ({ description = '', location = '', full_time = '' }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let isSubscribed = true;
    async function fetchData() {
      const res = await fetch(
        `/api/jobs?description=${description}&location=${location}&full_time=${full_time}`
      );

      if (isSubscribed) {
        const { data, error } = await res.json();
        if (error) {
          console.log('ERROR - NEED BETTER ERROR HANDLING');
          setJobs([]);
        } else if (data) {
          setJobs(data);
        }
      }
    }
    fetchData();

    return () => (isSubscribed = false);
  }, [description, location, full_time]);

  return (
    <div>
      <ul>
        {jobs.map((job) => (
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
