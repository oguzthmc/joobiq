import { useParams } from 'react-router-dom';

export const loader = async ({ params }) => {
  console.log(params);
  return null;
};

export const action = async () => {
  return null;
};

const EditJob = () => {
  const params = useParams();
  console.log('Editing job with ID:', params);

  return <h1>EditJob Page</h1>;
};

export default EditJob;
