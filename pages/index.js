import JobList from '@/components/JobList';

import { HomePageLayout, SiteLayout } from '@/components/Layouts';

const Index = () => <JobList />;

Index.getLayout = (page) => (
  <SiteLayout>
    <HomePageLayout>{page}</HomePageLayout>
  </SiteLayout>
);

export default Index;
