import React, { useEffect, useState } from 'react';
import ResourceCard from './ResourceCard';

const ResourceList = ({ filterType }) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch('https://bi-project-a6pc.onrender.com/api/resources')
      .then(res => res.json())
      .then(data => setResources(data));
  }, []);

  const filtered = filterType
    ? resources.filter(r => r.category === filterType || r.type === filterType)
    : resources;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2rem' }}>
      {filtered.map(resource => (
        <ResourceCard key={resource._id} resource={resource} />
      ))}
    </div>
  );
};

export default ResourceList;