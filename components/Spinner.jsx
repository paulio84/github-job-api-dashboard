import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Spinner = () => (
  <Loader
    type="Bars"
    height={60}
    width={100}
    svgClass="fill-current mx-auto"
    className="text-blue-secondary mt-6"
  />
);

export default Spinner;
