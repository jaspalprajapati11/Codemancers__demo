import React from 'react';
import CardContent from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import './Note.css'


const Note = ({ description, image }) => {
    return <div className="note">
        <CardContent>
            <Typography sx={{ p: 2, maxWidth: 500 }} variant="h6">
                {description}
            </Typography>
            {image && <CardMedia
                component="img"
                height="194"
                image={image}
                sx={{ p: 3 }}
                alt="Paella dish"
            />}
        </CardContent>
    </div>;
};

export default Note;
