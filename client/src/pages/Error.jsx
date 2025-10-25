import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Error Page</h1>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default Error;
