import React, { useState } from 'react';

const UploadForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        link: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/api/resources', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                alert('Resource added successfully!');
                setFormData({ title: '', description: '', category: '', link: '' });
            })
            .catch((error) => console.error('Error adding resource:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Upload a New Resource</h2>
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                required
            />
            <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
                required
            />
            <input
                type="url"
                name="link"
                placeholder="Link"
                value={formData.link}
                onChange={handleChange}
                required
            />
            <button type="submit">Upload</button>
        </form>
    );
};

export default UploadForm;