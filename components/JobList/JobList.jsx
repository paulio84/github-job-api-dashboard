import { useState, useEffect } from 'react';
import Link from 'next/link';
import JobCard from '@/components/JobCard';

const JobList = ({ description = 'Engineer', location = '', full_time = 'on' }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let isSubscribed = true;
    async function fetchData() {
      const res = await fetch(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&location=${location}&full_time=${full_time}&markdown=false`
      );

      if (isSubscribed) {
        const data = await res.json();
        setJobs(data);
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
            <Link href={`/job/${job.id}`}>
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
