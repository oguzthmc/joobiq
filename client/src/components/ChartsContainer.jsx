import { useState } from 'react';
import Wrapper from '../assets/wrappers/ChartsContainer';
import BarChart from './BarChart';
import AreaChart from './AreaChart';

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? 'Show Area Chart' : 'Show Bar Chart'}
      </button>
      {barChart ? <BarChart /> : <AreaChart />}
    </Wrapper>
  );
};

export default ChartsContainer;
