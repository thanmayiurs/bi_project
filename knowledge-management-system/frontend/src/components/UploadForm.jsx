import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

const categories = [
  { value: 'dataset', label: 'Dataset' },
  { value: 'paper', label: 'Research Paper' },
  { value: 'tutorial', label: 'Tutorial' },
  { value: 'failure_case', label: 'Failure Case Study' },
];

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
    fetch('https://supreme-zebra-jj4976q7qrgjfv6g-5000.app.github.dev/api/resources', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => {
        alert('Resource added successfully!');
        setFormData({ title: '', description: '', category: '', link: '' });
      })
      .catch((error) => console.error('Error adding resource:', error));
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <TextField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        multiline
        rows={3}
        required
      />
      <TextField
        select
        label="Category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
      >
        {categories.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Link"
        name="link"
        value={formData.link}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained" color="secondary">
        Upload
      </Button>
    </Box>
  );
};

export default UploadForm;