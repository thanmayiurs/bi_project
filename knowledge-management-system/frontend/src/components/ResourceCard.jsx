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
      minWidth: { xs: '90vw', sm: 280, md: 320 },
      maxWidth: { xs: '98vw', sm: 380 },
      width: '100%',
      bgcolor: 'background.paper',
      color: 'text.primary',
      borderRadius: 4,
      boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      '&:hover': {
        transform: 'translateY(-4px) scale(1.02)',
        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.16)',
      },
      fontFamily: '"Sora", sans-serif',
      margin: 'auto',
      p: { xs: 1, sm: 2 },
      my: 2,
    }}
  >
    <CardContent sx={{ p: { xs: 1, sm: 2 } }}>
      <Chip
        label={typeLabels[resource.category || resource.type] || 'Resource'}
        color="secondary"
        sx={{
          mb: 1.5,
          fontWeight: 600,
          fontFamily: '"Sora", sans-serif',
          fontSize: { xs: '0.85rem', sm: '1rem' },
        }}
      />
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          mb: 1,
          fontSize: { xs: '1.05rem', sm: '1.25rem' },
          wordBreak: 'break-word',
        }}
      >
        {resource.title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          mb: 2,
          fontSize: { xs: '0.95rem', sm: '1.05rem' },
          wordBreak: 'break-word',
        }}
      >
        {resource.description}
      </Typography>
    </CardContent>
    <CardActions sx={{ justifyContent: 'flex-end', px: 2, pb: 2 }}>
      <Button
        size="small"
        href={resource.link || resource.url}
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        color="secondary"
        sx={{
          fontWeight: 600,
          fontFamily: '"Sora", sans-serif',
          fontSize: { xs: '0.85rem', sm: '1rem' },
          px: { xs: 2, sm: 2.5 },
          py: { xs: 0.7, sm: 1 },
          borderRadius: 2,
        }}
      >
        View Resource
      </Button>
    </CardActions>
  </Card>
);

export default ResourceCard;