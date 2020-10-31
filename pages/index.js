import JobList from '@/components/JobList';
import { HomePageLayout, SiteLayout } from '@/components/Layouts';
import JobsContext from '@/lib/context';

const Index = () => (
  <JobsContext.Consumer>
    {({ description, location }) => <JobList description={description} location={location} />}
  </JobsContext.Consumer>
);

Index.getLayout = (page) => (
  <SiteLayout>
    <HomePageLayout>{page}</HomePageLayout>
  </SiteLayout>
);

export default Index;
