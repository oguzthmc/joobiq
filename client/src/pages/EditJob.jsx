import { Form, redirect, useLoaderData, useNavigation } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { FormRow, FormRowSelect } from '../components';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/jobs/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect('/dashboard/all-jobs');
  }
};

export const action = async () => {
  return null;
};

const EditJob = () => {
  const { job } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Edit Job</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            labelText="Position"
            defaultValue={job.position}
          />
          <FormRow
            type="text"
            name="company"
            labelText="Company"
            defaultValue={job.company}
          />
          <FormRow
            type="text"
            name="jobLocation"
            labelText="Job Location"
            defaultValue={job.jobLocation}
          />
          <FormRowSelect
            name="jobType"
            labelText="Job Type"
            defaultValue={job.jobType}
            list={Object.values(JOB_TYPE)}
          />
          <FormRowSelect
            name="status"
            labelText="Job Status"
            defaultValue={job.status}
            list={Object.values(JOB_STATUS)}
          />
          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'submitting...' : 'Submit'}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default EditJob;
