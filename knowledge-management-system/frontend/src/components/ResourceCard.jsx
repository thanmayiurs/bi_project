import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

const typeLabels = {
  dataset: 'Dataset',
  paper: 'Research Paper',
  tutorial: 'Tutorial',
  failure_case: 'Failure Case Study',
};

const ResourceCard = ({ resource }) => (
  <Card
    sx={{
      minWidth: 300,
      maxWidth: 350,
      bgcolor: 'background.paper',
      color: 'text.primary',
      borderRadius: 3,
      boxShadow: 6,
      transition: 'transform 0.2s, box-shadow 0.2s',
      '&:hover': {
        transform: 'translateY(-6px) scale(1.03)',
        boxShadow: 12,
      },
      fontFamily: '"Sora", sans-serif',
    }}
  >
    <CardContent>
      <Chip
        label={typeLabels[resource.category || resource.type] || 'Resource'}
        color="secondary"
        sx={{ mb: 1, fontWeight: 600, fontFamily: '"Sora", sans-serif' }}
      />
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
        {resource.title}
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        {resource.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        size="small"
        href={resource.link || resource.url}
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        color="secondary"
        sx={{ fontWeight: 600, fontFamily: '"Sora", sans-serif' }}
      >
        View Resource
      </Button>
    </CardActions>
  </Card>
);

export default ResourceCard;