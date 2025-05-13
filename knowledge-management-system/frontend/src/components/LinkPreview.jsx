import React, { useEffect, useState } from 'react';

const LinkPreview = ({ url }) => {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!url) return;
    fetch('https://bi-project-a6pc.onrender.com/api/link/preview', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    })
      .then(res => res.json())
      .then(data => setPreview(data))
      .catch(() => setPreview(null));
  }, [url]);

  if (!preview) return null;

  return (
    <div style={{
      border: '1px solid #eee',
      borderRadius: 8,
      padding: 12,
      marginTop: 8,
      maxWidth: 400,
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12
    }}>
      {preview.image && (
        <img src={preview.image} alt="preview" style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 4 }} />
      )}
      <div>
        <strong>{preview.title}</strong>
        <p style={{ margin: '4px 0' }}>{preview.description}</p>
        <a href={preview.url} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>
          {preview.url}
        </a>
      </div>
    </div>
  );
};

export default LinkPreview;