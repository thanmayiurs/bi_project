import React, { useEffect, useState } from 'react';

const ResourceList = () => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/resources')
            .then((response) => response.json())
            .then((data) => setResources(data))
            .catch((error) => console.error('Error fetching resources:', error));
    }, []);

    return (
        <div>
            <h2>Knowledge Base</h2>
            <ul>
                {resources.map((resource) => (
                    <li key={resource._id}>
                        <h3>{resource.title}</h3>
                        <p>{resource.description}</p>
                        <p><strong>Category:</strong> {resource.category}</p>
                        <a href={resource.link} target="_blank" rel="noopener noreferrer">View Resource</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResourceList;