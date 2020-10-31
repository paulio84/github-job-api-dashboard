import Head from 'next/head';
import { number, string } from 'prop-types';
import IconLink from '@/components/IconLink';

const Error = ({ errorCode, text }) => {
  const errorCodes = {
    404: 'This page could not be found :(',
    500: 'Internal Server Error'
  };

  const message = text || errorCodes[errorCode] || 'An unexpected error occurred';

  return (
    <>
      <Head>
        <title>
          {errorCode ? `${errorCode}:` : ''} {message}
        </title>
      </Head>
      <div className="pt-8 text-center space-y-8">
        {errorCode ? <h1 className="text-4xl font-bold text-blue-secondary">{errorCode}</h1> : null}
        <div>
          <h2 className="text-blue-primary text-lg">{message}</h2>
        </div>
        <IconLink iconName="keyboard_backspace" text="Back to search" href="/" />
      </div>
    </>
  );
};
Error.propTypes = {
  errorCode: number,
  text: string
};

export default Error;
