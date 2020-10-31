import JobList from '@/components/JobList';
import { HomePageLayout, SiteLayout } from '@/components/Layouts';
import JobsContext from '@/lib/context';

const Index = () => (
  <JobsContext.Consumer>
    {({ description }) => <JobList description={description} />}
  </JobsContext.Consumer>
);

Index.getLayout = (page) => (
  <SiteLayout>
    <HomePageLayout>{page}</HomePageLayout>
  </SiteLayout>
);

export default Index;
