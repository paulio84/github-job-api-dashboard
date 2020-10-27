import JobCard from '@/components/JobCard';
import SearchBox from '@/components/SearchBox';
import { SiteLayout } from '@/components/Layouts';

const Index = () => {
  return (
    <main>
      <div className="rounded-lg bg-blue-primary py-10 px-4 bg-searchbox bg-center md:bg-cover">
        <SearchBox />
      </div>
      {/* <JobCard
        companyName="Kasisto"
        title="Front-End Software Developer"
        type="Full time"
        location="Remote"
        createdAt="Mon Oct 12 15:59:27 UTC 2020"
        companyLogo="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdFdMIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--09e058440662150cf22211cb95ce476343f97978/gun.io_NoBox_black%20(6).png"
      /> */}
    </main>
  );
};

Index.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default Index;
