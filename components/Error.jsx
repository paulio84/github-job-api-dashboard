import Head from 'next/head';
import { number, string } from 'prop-types';

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
      <div className="pt-8 text-center">
        {errorCode ? (
          <h1 className="text-4xl font-bold mb-8 text-blue-secondary">{errorCode}</h1>
        ) : null}
        <div>
          <h2 className="text-blue-primary text-lg">{message}</h2>
        </div>
      </div>
    </>
  );
};
Error.propTypes = {
  errorCode: number,
  text: string
};

export default Error;
