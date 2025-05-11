import React from 'react';
import ResourceList from '../components/ResourceList';

const Failures = () => (
  <div>
    <h2>Failure Case Studies</h2>
    <ResourceList filterType="failure_case" />
  </div>
);

export default Failures;