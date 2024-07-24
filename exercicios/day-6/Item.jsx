import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Item = (props) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.tipo}
        </Typography>
        <Typography variant="h5" component="div">
          {props.titulo}
        </Typography>
        <Typography variant="body2">
          {props.sub}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={props.botao}>VER MAIS</Button>
      </CardActions>
    </Card>
  );
}

export default Item;