import React from 'react';
import { Card, CardContent, Avatar, Typography, Stack } from '@mui/material';

const TeamMemberCard = ({ name, role, bio, image }) => {
  return (
    <Card
      sx={{
        borderRadius: 4,
        backgroundColor: 'background.paper',
        boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
        textAlign: 'center',
        p: 2,
        transition: 'all 0.25s ease',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: '0px 8px 20px rgba(0,0,0,0.12)',
        },
      }}
    >
      <Stack spacing={2} alignItems='center'>
        <Avatar
          src={image}
          alt={name}
          sx={{
            width: 96,
            height: 96,
            border: '3px solid',
            borderColor: 'primary.main',
          }}
        />
        <Typography variant='h6' color='text.primary'>
          {name}
        </Typography>
        <Typography variant='body2' color='primary.main' fontWeight={500}>
          {role}
        </Typography>
        <Typography variant='body2' color='text.secondary' sx={{ maxWidth: 240 }}>
          {bio}
        </Typography>
      </Stack>
    </Card>
  );
};

export default TeamMemberCard;
