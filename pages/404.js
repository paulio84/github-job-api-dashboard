import Error from '@/components/Error';
import SiteLayout from '@/components/Layouts/SiteLayout';

const custom404 = () => <Error errorCode={404} />;

custom404.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default custom404;
