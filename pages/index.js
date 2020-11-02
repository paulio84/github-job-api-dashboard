import { NextSeo } from 'next-seo';
import JobList from '@/components/JobList';
import { HomePageLayout, SiteLayout } from '@/components/Layouts';
import JobsContext from '@/lib/context';

const Index = () => (
  <>
    <NextSeo title="Github Jobs" />
    <JobsContext.Consumer>
      {({ description, location, fullTime }) => (
        <JobList
          description={description}
          location={location}
          full_time={fullTime ? 'on' : 'off'}
        />
      )}
    </JobsContext.Consumer>
  </>
);

Index.getLayout = (page) => (
  <SiteLayout>
    <HomePageLayout>{page}</HomePageLayout>
  </SiteLayout>
);

export default Index;
