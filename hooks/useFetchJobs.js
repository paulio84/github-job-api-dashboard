import useSWR from 'swr';
import { fetcher } from '@/lib/helpers';

const useFetchJobs = (description, location, full_time) => {
  const { data, error } = useSWR(
    `/api/jobs?description=${description}&location=${location}&full_time=${full_time}`,
    fetcher
  );

  return {
    data: data || [],
    error,
    isLoading: !data && !error
  };
};

export default useFetchJobs;
