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

  if (!preview || !preview.image) return null;

  return (
    <div style={{
      border: 'none',
      padding: 0,
      marginTop: 8,
      maxWidth: 400,
      display: 'flex',
      alignItems: 'flex-start',
      gap: 0
    }}>
      <img
        src={preview.image}
        alt="preview"
        style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 4 }}
      />
    </div>
  );
};

export default LinkPreview;