import * as React from 'react';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import PinDropIcon from '@mui/icons-material/PinDrop';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';

const opciones = [
    {
        titulo: 'Eventos finalizados',
        descripcion: 'Encuentra los eventos más memorables que han pasado por VEM.',
        icono: "fot",
        linkPagina: "EventosFinalGeneral",
        section: "ecu"
    },
    {
        titulo: 'Eventos finalizados',
        descripcion: 'Encuentra los eventos más memorables que han pasado por VEM.',
        icono: "fot",
        linkPagina: "EventosFinalGeneral",
        section: "ecu"
    },
    {
        titulo: 'Eventos finalizados',
        descripcion: 'Encuentra los eventos más memorables que han pasado por VEM.',
        icono: "fot",
        linkPagina: "EventosFinalGeneral",
        section: "ecu"
    },
    {
        titulo: 'Eventos finalizados',
        descripcion: 'Encuentra los eventos más memorables que han pasado por VEM.',
        icono: "fot",
        linkPagina: "EventosFinalGeneral",
        section: "ecu"
    },
    {
        titulo: 'Eventos finalizados',
        descripcion: 'Encuentra los eventos más memorables que han pasado por VEM.',
        icono: "fot",
        linkPagina: "EventosFinalGeneral",
        section: "ecu"
    },
    {
        titulo: 'Eventos finalizados',
        descripcion: 'Encuentra los eventos más memorables que han pasado por VEM.',
        icono: "fot",
        linkPagina: "EventosFinalGeneral",
        section: "ecu"
    },
    {
        titulo: 'Eventos finalizados',
        descripcion: 'Encuentra los eventos más memorables que han pasado por VEM.',
        icono: "fot",
        linkPagina: "EventosFinalGeneral",
        section: "ecu"
    },
    {
        titulo: 'Eventos finalizados',
        descripcion: 'Encuentra los eventos más memorables que han pasado por VEM.',
        icono: "fot",
        linkPagina: "EventosFinalGeneral",
        section: "ecu"
    },
    {
        titulo: 'Eventos finalizados',
        descripcion: 'Encuentra los eventos más memorables que han pasado por VEM.',
        icono: "fot",
        linkPagina: "EventosFinalGeneral",
        section: "sisecu"
    },
    {
        titulo: 'Eventos finalizados',
        descripcion: 'Encuentra los eventos más memorables que han pasado por VEM.',
        icono: "fot",
        linkPagina: "EventosFinalGeneral",
        section: "sisecu"
    },
    {
        titulo: 'Eventos finalizados',
        descripcion: 'Encuentra los eventos más memorables que han pasado por VEM.',
        icono: "fot",
        linkPagina: "EventosFinalGeneral",
        section: "sisecu"
    },
    {
        titulo: 'Eventos finalizados',
        descripcion: 'Encuentra los eventos más memorables que han pasado por VEM.',
        icono: "fot",
        linkPagina: "EventosFinalGeneral",
        section: "sisecu"
    },
    {
        titulo: 'Eventos finalizados',
        descripcion: 'Encuentra los eventos más memorables que han pasado por VEM.',
        icono: "fot",
        linkPagina: "EventosFinalGeneral",
        section: "sisecu"
    },
    {
        titulo: 'Eventos finalizados',
        descripcion: 'Encuentra los eventos más memorables que han pasado por VEM.',
        icono: "fot",
        linkPagina: "EventosFinalGeneral",
        section: "sisecu"
    },
    {
        titulo: 'Eventos finalizados',
        descripcion: 'Encuentra los eventos más memorables que han pasado por VEM.',
        icono: "fot",
        linkPagina: "EventosFinalGeneral",
        section: "sisecu"
    },
    {
        titulo: 'Eventos finalizados',
        descripcion: 'Encuentra los eventos más memorables que han pasado por VEM.',
        icono: "fot",
        linkPagina: "EventosFinalGeneral",
        section: "sisecu"
    },
    {
        titulo: 'Eventos finalizados',
        descripcion: 'Encuentra los eventos más memorables que han pasado por VEM.',
        icono: "fot",
        linkPagina: "EventosFinalGeneral",
        section: "sisecu"
    },
    {
        titulo: 'Eventos finalizados',
        descripcion: 'Encuentra los eventos más memorables que han pasado por VEM.',
        icono: "fot",
        linkPagina: "EventosFinalGeneral",
        section: "interpol"
    },
    {
        titulo: 'Eventos finalizados',
        descripcion: 'Encuentra los eventos más memorables que han pasado por VEM.',
        icono: "fot",
        linkPagina: "EventosFinalGeneral",
        section: "interpol"
    },
    {
        titulo: 'Eventos finalizados',
        descripcion: 'Encuentra los eventos más memorables que han pasado por VEM.',
        icono: "fot",
        linkPagina: "EventosFinalGeneral",
        section: "interpol"
    },
    {
        titulo: 'Eventos finalizados',
        descripcion: 'Encuentra los eventos más memorables que han pasado por VEM.',
        icono: "fot",
        linkPagina: "EventosFinalGeneral",
        section: "interpol"
    }
];

const sections = ["ecu", "sisecu", "interpol"];

function giveIcon(icono) {
    if (icono === "pin") {
        return <PinDropIcon sx={{ fontSize: 40 }} />;
    }
    if (icono === "fav") {
        return <FavoriteIcon sx={{ fontSize: 40 }} />;
    } else {
        return <PhotoSizeSelectActualIcon sx={{ fontSize: 40 }} />;
    }
}
function CardSection() {
    return (
        <Container width="100%" component="main" sx={{ mt: 10, mb: 25 }}>

            <Grid container
                spacing={5}
                direction="row"
                alignItems="center"
                justifyContent="center"
                m={2}
            >
                <Typography variant="h1" gutterBottom>
                    Ecuaciones
                </Typography>
                {opciones.filter(opcion => opcion.section === "ecu").map((tier) => (
                    <React.Fragment key={tier.titulo}>
                        <Grid
                            item
                            mr={5}
                        >
                            <Card sx={{
                                maxWidth: 300,
                                textAlign: 'center',
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignContent: 'center',
                                backgroundColor: '#FBFBFB'
                            }} variant="outlined">
                                <CardActionArea to={`/${tier.linkPagina}`}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                        }}>
                                        <Avatar style={{ alignSelf: 'center' }} sx={{ m: 1, bgcolor: 'info.main', width: 60, height: 60, }}>
                                            {giveIcon(tier.icono)}
                                        </Avatar>
                                    </Box>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {tier.titulo}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {tier.descripcion}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </React.Fragment>
                ))}
                <Typography variant="h1" gutterBottom>
                    Mondaquera
                </Typography>
                {opciones.filter(opcion => opcion.section === "sisecu").map((tier) => (
                    <React.Fragment key={tier.titulo}>
                        <Grid
                            item
                            mr={5}
                        >
                            <Card sx={{
                                maxWidth: 300,
                                textAlign: 'center',
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignContent: 'center',
                                backgroundColor: '#FBFBFB'
                            }} variant="outlined">
                                <CardActionArea to={`/${tier.linkPagina}`}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                        }}>
                                        <Avatar style={{ alignSelf: 'center' }} sx={{ m: 1, bgcolor: 'info.main', width: 60, height: 60, }}>
                                            {giveIcon(tier.icono)}
                                        </Avatar>
                                    </Box>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {tier.titulo}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {tier.descripcion}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </React.Fragment>
                ))}
                <Typography variant="h1" gutterBottom>
                    Interpolación
                </Typography>
                {opciones.filter(opcion => opcion.section === "interpol").map((tier) => (
                    <React.Fragment key={tier.titulo}>
                        <Grid
                            item
                            mr={5}
                        >
                            <Card sx={{
                                maxWidth: 300,
                                textAlign: 'center',
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignContent: 'center',
                                backgroundColor: '#FBFBFB'
                            }} variant="outlined">
                                <CardActionArea to={`/${tier.linkPagina}`}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                        }}>
                                        <Avatar style={{ alignSelf: 'center' }} sx={{ m: 1, bgcolor: 'info.main', width: 60, height: 60, }}>
                                            {giveIcon(tier.icono)}
                                        </Avatar>
                                    </Box>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {tier.titulo}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {tier.descripcion}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </React.Fragment>
                ))}
            </Grid>
        </Container>
    )
}
export default CardSection;