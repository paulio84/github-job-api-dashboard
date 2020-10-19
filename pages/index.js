import JobCard from '@/components/JobCard';
import Layout from '@/components/Layout';

export default function Index() {
  return (
    <>
      <Layout>
        <JobCard
          companyName="Kasisto"
          title="Front-End Software Developer"
          type="Full time"
          location="Remote"
          createdAt="Mon Oct 12 15:59:27 UTC 2020"
          companyLogo="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdFdMIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--09e058440662150cf22211cb95ce476343f97978/gun.io_NoBox_black%20(6).png"
        />
      </Layout>
    </>
  );
}
