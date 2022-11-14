import Form from "react-bootstrap/Form";
import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import "../css/styles.css";
import "../css/default-css.css";
import "../css/font-awesome.min.css";
import "../css/themify-icons.css";
import IconButton from '@mui/material/IconButton';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { Navbar, Jumbotron, Dropdown, DropdownButton } from 'react-bootstrap';
import { Dashboard, Visibility, Delete, Person, Home, Task, Block, Notifications, Mail, Settings, ArrowDropDown, HelpOutline, AccountCircle } from '@mui/icons-material';
const { jsPDF } = require("jspdf");
var dadus =""
var idDado =""
var aidDado  =""
var nomeDado =""
var anomeDado =""
var criadorDado =""
var acriadorDado =""
var setorDado =""
var asetorDado=""

//INICIO ICONES PERSONALIZADOS----------------->
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href='@mui/icons-material'
        ref={ref}
        onClick={e => {
            e.preventDefault();
            onClick(e);
        }}
    >
        <Mail />
        {children}
    </a>
));

const CustomToggleB = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href='@mui/icons-material'
        ref={ref}
        onClick={e => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {<Notifications />}
        {children}
    </a>
));

const CustomToggleC = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href='@mui/icons-material'
        ref={ref}
        onClick={e => {
            e.preventDefault();
            onClick(e);
        }}
    >
        <Settings />
        {children}
    </a>
));

//FIM ICONES PERSONALIZADOS----------------->

function Visualizar() {
    

    const { id } = useParams()
    let numero = Number(id)-1
    console.log(dadus[numero])
     



    const navegar = useNavigate();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        //resolver: yupResolver(schema),
    });


    useEffect(() => {
        axios.get(`http://localhost:8080/inovacao/lista/${id}`)
            .then((response) => {
                reset(response.data)
            })
    }, [])

    axios.get("http://localhost:8080/inovacao/lista")
    .then((response) => {
        dadus = (response.data)

        return dadus
        
    })

    for (var i = 0; i < dadus.length; i++) {
        idDado = (dadus[numero]["id"])
        nomeDado = (dadus[numero]["title"])
        criadorDado = (dadus[numero]["responsible"])
        setorDado = (dadus[numero]["area"])
    }

    console.log(nomeDado)

    return (


        <body>
            <div class="page-container">
                <div class="sidebar-menu">
                    <div class="sidebar-header">
                        <div class="logo">

                            <a><img src="https://logodownload.org/wp-content/uploads/2014/02/volkswagen-vw-logo-0.png" alt="logo" width="60px" height="60px" /></a>
                        </div>
                    </div>
                    <div class="main-menu">
                        <div class="menu-inner">
                            <nav>
                                {/* BARRA LATERAL*/}
                                <ul class="metismenu" id="menu">
                                    <li class="active">
                                        <a class="iconBar" onClick={() => navegar("/")} aria-expanded="true"><Home /><span>Inovações</span></a>
                                    </li>
                                    <li>
                                        <a class="iconBar" onClick={() => navegar("/aceitas")} aria-expanded="true"><Task /><span>Inovações Aceitas</span></a>
                                    </li>
                                    <li>
                                        <a class="iconBar" onClick={() => navegar("/recusadas")} aria-expanded="true"><Block /><span>Inovações Recusadas</span></a>
                                    </li>
                                    <li>
                                        <a class="iconBar" onClick={() => navegar("/dashboards")} aria-expanded="true"><Dashboard /><span>Dashboard</span></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="main-content">
                    <div class="header-area">
                        <div class="row align-items-center">
                            <div class="col-md-6 col-sm-8 clearfix">
                                <div class="search-box pull-left">
                                    <form action="#">
                                        <input type="text" name="search" placeholder="Procurar..." required />
                                        <i class="ti-search"></i>
                                    </form>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-4 clearfix">
                                <ul class="notification-area pull-right">
                                    <li class="dropdown">
                                        <i data-toggle="dropdown">
                                            <Dropdown>
                                                <Dropdown.Toggle as={CustomToggleB} menuVariant='dark' id="dropdown-custom-components">
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                                                    <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                                                    <Dropdown.Item eventKey="3" active>Orange</Dropdown.Item>
                                                    <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </i>
                                    </li>
                                    <li class="dropdown">
                                        <i data-toggle="dropdown">
                                            <Dropdown>
                                                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                                                    <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                                                    <Dropdown.Item eventKey="3" active>Orange</Dropdown.Item>
                                                    <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </i>
                                    </li>
                                    <li class="settings-btn">
                                        <i>
                                            <Dropdown>
                                                <Dropdown.Toggle as={CustomToggleC} id="dropdown-custom-components">
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item eventKey="1">Configurações</Dropdown.Item>
                                                    <Dropdown.Item eventKey="2">Sair</Dropdown.Item>
                                                    <Dropdown.Item eventKey="3" active>Orange</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="page-title-area">
                        <div class="row align-items-center">
                            <div class="col-sm-6">
                                <div class="breadcrumbs-area clearfix">
                                    <h4 class="page-title pull-left">Tabela de Inovações</h4>
                                </div>
                            </div>
                            <div class="col-sm-6 clearfix">
                                <div class="user-profile pull-right">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-content-inner">
                        <div class="card mt-5">
                            <div class="card-body">
                                <div class="d-flex justify-content-between mb-3">
                                    <h4 class="header-title mb-0">Visualizar Inovação</h4>
                                    <IconButton aria-label="pictureAsPdfIcon" color="error" variant="outlined"onClick={
                                        function pdfe() {

                                            handleSubmit()
                                            const doc = new jsPDF();
                                            doc.text( nomeDado, 10, 10);
                                            doc.text( setorDado, 50, 50);
                                            doc.save("a4.pdf")
                                    }}>
                                        <PictureAsPdfIcon/>
                                    </IconButton>
                                </div>
                                {/* TABELA*/}
                                <div id="mainCreate">
                                    <Form onSubmit={handleSubmit()}>

                                        <div class="forms">
                                            <Row>
                                                <Col>
                                                    <div class="selecao">
                                                        <PopupState variant="popover" popupId="demo-popup-popover">
                                                            {(popupState) => (
                                                                <h6 class="infoTitutlo"> Status <HelpOutline variant="contained" {...bindTrigger(popupState)} />
                                                                    <Popover
                                                                        {...bindPopover(popupState)}
                                                                        anchorOrigin={{
                                                                            vertical: 'bottom',
                                                                            horizontal: 'center',
                                                                        }}
                                                                        transformOrigin={{
                                                                            vertical: 'top',
                                                                            horizontal: 'left',
                                                                        }}
                                                                    >
                                                                        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                                                                    </Popover>
                                                                </h6>
                                                            )}
                                                        </PopupState>
                                                        <Form.Select aria-label="Default select example" type="text" name="status" {...register("status")} disabled>
                                                            <option>Escalação</option>
                                                            <option>No prazo</option>
                                                            <option>Em atraso</option>
                                                            <option>Concluído</option>
                                                            <option>Reprovado</option>
                                                        </Form.Select>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <PopupState variant="popover" popupId="demo-popup-popover">
                                                                {(popupState) => (
                                                                    <h6 class="infoTitutlo"> Staircase Element <HelpOutline variant="contained" {...bindTrigger(popupState)} />
                                                                        <Popover
                                                                            {...bindPopover(popupState)}
                                                                            anchorOrigin={{
                                                                                vertical: 'bottom',
                                                                                horizontal: 'center',
                                                                            }}
                                                                            transformOrigin={{
                                                                                vertical: 'top',
                                                                                horizontal: 'left',
                                                                            }}
                                                                        >
                                                                            <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                                                                        </Popover>
                                                                    </h6>
                                                                )}
                                                            </PopupState>
                                                            <Form.Control type="text" placeholder="Staircase element" name="staircaseElement" {...register("staircaseElement")} disabled />
                                                        </Form.Group>
                                                    </div>
                                                </Col>

                                                <Col>
                                                    <div>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <PopupState variant="popover" popupId="demo-popup-popover">
                                                                {(popupState) => (
                                                                    <h6 class="infoTitutlo"> Responsable <HelpOutline variant="contained" {...bindTrigger(popupState)} />
                                                                        <Popover
                                                                            {...bindPopover(popupState)}
                                                                            anchorOrigin={{
                                                                                vertical: 'bottom',
                                                                                horizontal: 'center',
                                                                            }}
                                                                            transformOrigin={{
                                                                                vertical: 'top',
                                                                                horizontal: 'left',
                                                                            }}
                                                                        >
                                                                            <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                                                                        </Popover>
                                                                    </h6>
                                                                )}
                                                            </PopupState>
                                                            <Form.Control type="text" placeholder="Responsable" name="responsable" {...register("responsible")} disabled />
                                                        </Form.Group>
                                                    </div>
                                                </Col>
                                            </Row>



                                            <Row>
                                                <Col>
                                                    <div>
                                                        <Form.Group controlId="exampleForm.ControlInput1">
                                                            <PopupState variant="popover" popupId="demo-popup-popover">
                                                                {(popupState) => (
                                                                    <h6 class="infoTitutlo"> Area <HelpOutline variant="contained" {...bindTrigger(popupState)} />
                                                                        <Popover
                                                                            {...bindPopover(popupState)}
                                                                            anchorOrigin={{
                                                                                vertical: 'bottom',
                                                                                horizontal: 'center',
                                                                            }}
                                                                            transformOrigin={{
                                                                                vertical: 'top',
                                                                                horizontal: 'left',
                                                                            }}
                                                                        >
                                                                            <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                                                                        </Popover>
                                                                    </h6>
                                                                )}
                                                            </PopupState>
                                                            <Form.Control type="text" placeholder="Area" name="area" {...register("area")} disabled />
                                                        </Form.Group>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <PopupState variant="popover" popupId="demo-popup-popover">
                                                                {(popupState) => (
                                                                    <h6 class="infoTitutlo"> Name of Measure <HelpOutline variant="contained" {...bindTrigger(popupState)} />
                                                                        <Popover
                                                                            {...bindPopover(popupState)}
                                                                            anchorOrigin={{
                                                                                vertical: 'bottom',
                                                                                horizontal: 'center',
                                                                            }}
                                                                            transformOrigin={{
                                                                                vertical: 'top',
                                                                                horizontal: 'left',
                                                                            }}
                                                                        >
                                                                            <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                                                                        </Popover>
                                                                    </h6>
                                                                )}
                                                            </PopupState>
                                                            <Form.Control type="text" placeholder="Nome of Measure" name="title" {...register("title")} disabled />
                                                            <p> OU: VWB : CUR : VWB </p>
                                                        </Form.Group>
                                                    </div>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col>
                                                    <div class="texto">
                                                        <PopupState variant="popover" popupId="demo-popup-popover">
                                                            {(popupState) => (
                                                                <h6 class="infoTitutlo"> Actual State <HelpOutline variant="contained" {...bindTrigger(popupState)} />
                                                                    <Popover
                                                                        {...bindPopover(popupState)}
                                                                        anchorOrigin={{
                                                                            vertical: 'bottom',
                                                                            horizontal: 'center',
                                                                        }}
                                                                        transformOrigin={{
                                                                            vertical: 'top',
                                                                            horizontal: 'left',
                                                                        }}
                                                                    >
                                                                        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                                                                    </Popover>
                                                                </h6>
                                                            )}
                                                        </PopupState>
                                                        <Form.Control type="text" as="textarea" name="actualState" {...register("actualState")} rows={3} disabled />
                                                    </div>
                                                </Col>


                                                <Col>
                                                    <div class="texto">
                                                        <PopupState variant="popover" popupId="demo-popup-popover">
                                                            {(popupState) => (
                                                                <h6 class="infoTitutlo"> Targer state with measure description <HelpOutline variant="contained" {...bindTrigger(popupState)} />
                                                                    <Popover
                                                                        {...bindPopover(popupState)}
                                                                        anchorOrigin={{
                                                                            vertical: 'bottom',
                                                                            horizontal: 'center',
                                                                        }}
                                                                        transformOrigin={{
                                                                            vertical: 'top',
                                                                            horizontal: 'left',
                                                                        }}
                                                                    >
                                                                        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                                                                    </Popover>
                                                                </h6>
                                                            )}
                                                        </PopupState>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                                                            <Form.Control as="textarea" rows={3} name="targetState" {...register("targetState")} disabled />
                                                        </Form.Group>
                                                    </div>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col>
                                                    <div class="texto">
                                                        <PopupState variant="popover" popupId="demo-popup-popover">
                                                            {(popupState) => (
                                                                <h6 class="infoTitutlo"> Calculation/Explication <HelpOutline variant="contained" {...bindTrigger(popupState)} />
                                                                    <Popover
                                                                        {...bindPopover(popupState)}
                                                                        anchorOrigin={{
                                                                            vertical: 'bottom',
                                                                            horizontal: 'center',
                                                                        }}
                                                                        transformOrigin={{
                                                                            vertical: 'top',
                                                                            horizontal: 'left',
                                                                        }}
                                                                    >
                                                                        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                                                                    </Popover>
                                                                </h6>
                                                            )}
                                                        </PopupState>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                            <Form.Control as="textarea" rows={3} name="calculationExplication" {...register("calculationExplication")} disabled />
                                                        </Form.Group>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div class="selecao">
                                                        <PopupState variant="popover" popupId="demo-popup-popover">
                                                            {(popupState) => (
                                                                <h6 class="infoTitutlo"> Handlungsfeld <HelpOutline variant="contained" {...bindTrigger(popupState)} />
                                                                    <Popover
                                                                        {...bindPopover(popupState)}
                                                                        anchorOrigin={{
                                                                            vertical: 'bottom',
                                                                            horizontal: 'center',
                                                                        }}
                                                                        transformOrigin={{
                                                                            vertical: 'top',
                                                                            horizontal: 'left',
                                                                        }}
                                                                    >
                                                                        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                                                                    </Popover>
                                                                </h6>
                                                            )}
                                                        </PopupState>
                                                        <select class="form-select" aria-label="Default select example" type="text" name="handlungsfeld" {...register("handlungsfeld")} disabled>
                                                            <option selected></option>
                                                            <option>SGK</option>
                                                            <option>Ramp-up Excellence</option>
                                                            <option>Low-Expenditure Factories of the Future</option>
                                                            <option>Stable Customer Order Process</option>
                                                            <option>Team of the Future</option>
                                                            <option>Sustainable Structures</option>
                                                            <option>Produtivity</option>
                                                            <option>Rework-free Products and Processes</option>
                                                            <option>Zero Impact Factory</option>
                                                        </select>
                                                    </div>
                                                </Col>
                                            </Row>


                                            <Row>
                                                <Col>
                                                    <div class="texto">
                                                        <PopupState variant="popover" popupId="demo-popup-popover">
                                                            {(popupState) => (
                                                                <h6 class="infoTitutlo"> Ganhos Previstos: <HelpOutline variant="contained" {...bindTrigger(popupState)} />
                                                                    <Popover
                                                                        {...bindPopover(popupState)}
                                                                        anchorOrigin={{
                                                                            vertical: 'bottom',
                                                                            horizontal: 'center',
                                                                        }}
                                                                        transformOrigin={{
                                                                            vertical: 'top',
                                                                            horizontal: 'left',
                                                                        }}
                                                                    >
                                                                        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                                                                    </Popover>
                                                                </h6>
                                                            )}
                                                        </PopupState>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                                                            <Form.Control as="textarea" rows={3} name="ganhosPrevistos" {...register("ganhosPrevistos")} disabled />
                                                        </Form.Group>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div class="texto" id="section2">
                                                        <PopupState variant="popover" popupId="demo-popup-popover">
                                                            {(popupState) => (
                                                                <h6 class="infoTitutlo"> Recursos Necessários: <HelpOutline variant="contained" {...bindTrigger(popupState)} />
                                                                    <Popover
                                                                        {...bindPopover(popupState)}
                                                                        anchorOrigin={{
                                                                            vertical: 'bottom',
                                                                            horizontal: 'center',
                                                                        }}
                                                                        transformOrigin={{
                                                                            vertical: 'top',
                                                                            horizontal: 'left',
                                                                        }}
                                                                    >
                                                                        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                                                                    </Popover>
                                                                </h6>
                                                            )}
                                                        </PopupState>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                                                            <Form.Control as="textarea" rows={3} name="recursosNecessarios" {...register("recursosNecessarios")} disabled />
                                                        </Form.Group>
                                                    </div>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col>
                                                    <div>
                                                        <PopupState variant="popover" popupId="demo-popup-popover">
                                                            {(popupState) => (
                                                                <h6 class="infoTitutlo"> Time de Trabalho: <HelpOutline variant="contained" {...bindTrigger(popupState)} />
                                                                    <Popover
                                                                        {...bindPopover(popupState)}
                                                                        anchorOrigin={{
                                                                            vertical: 'bottom',
                                                                            horizontal: 'center',
                                                                        }}
                                                                        transformOrigin={{
                                                                            vertical: 'top',
                                                                            horizontal: 'left',
                                                                        }}
                                                                    >
                                                                        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                                                                    </Popover>
                                                                </h6>
                                                            )}
                                                        </PopupState>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                                                            <Form.Control as="textarea" rows={3} name="timeTrabalho" {...register("timeTrabalho")} disabled />
                                                        </Form.Group>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div>
                                                        <PopupState variant="popover" popupId="demo-popup-popover">
                                                            {(popupState) => (
                                                                <h6 class="infoTitutlo"> Parcerias Necessárias: <HelpOutline variant="contained" {...bindTrigger(popupState)} />
                                                                    <Popover
                                                                        {...bindPopover(popupState)}
                                                                        anchorOrigin={{
                                                                            vertical: 'bottom',
                                                                            horizontal: 'center',
                                                                        }}
                                                                        transformOrigin={{
                                                                            vertical: 'top',
                                                                            horizontal: 'left',
                                                                        }}
                                                                    >
                                                                        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                                                                    </Popover>
                                                                </h6>
                                                            )}
                                                        </PopupState>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                                                            <Form.Control as="textarea" rows={3} name="parceriasNecessarias" {...register("parceriasNecessarias")} disabled />
                                                        </Form.Group>
                                                    </div>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col>
                                                    <div>
                                                        <PopupState variant="popover" popupId="demo-popup-popover">
                                                            {(popupState) => (
                                                                <h6 class="infoTitutlo"> Pontos de Escalação: <HelpOutline variant="contained" {...bindTrigger(popupState)} />
                                                                    <Popover
                                                                        {...bindPopover(popupState)}
                                                                        anchorOrigin={{
                                                                            vertical: 'bottom',
                                                                            horizontal: 'center',
                                                                        }}
                                                                        transformOrigin={{
                                                                            vertical: 'top',
                                                                            horizontal: 'left',
                                                                        }}
                                                                    >
                                                                        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                                                                    </Popover>
                                                                </h6>
                                                            )}
                                                        </PopupState>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                                                            <Form.Control as="textarea" rows={3} name="pontosEscalacao" {...register("pontosEscalacao")} disabled />
                                                        </Form.Group>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div>
                                                        <PopupState variant="popover" popupId="demo-popup-popover">
                                                            {(popupState) => (
                                                                <h6 class="infoTitutlo"> Divulgação: <HelpOutline variant="contained" {...bindTrigger(popupState)} />
                                                                    <Popover
                                                                        {...bindPopover(popupState)}
                                                                        anchorOrigin={{
                                                                            vertical: 'bottom',
                                                                            horizontal: 'center',
                                                                        }}
                                                                        transformOrigin={{
                                                                            vertical: 'top',
                                                                            horizontal: 'left',
                                                                        }}
                                                                    >
                                                                        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                                                                    </Popover>
                                                                </h6>
                                                            )}
                                                        </PopupState>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                                                            <Form.Control as="textarea" rows={3} name="divulgacao" {...register("divulgacao")} disabled />
                                                        </Form.Group>
                                                    </div>
                                                </Col>
                                            </Row>

                                            <div>
                                                <button type="button" class="btn btn-danger" onClick={() => navegar("/")}>Voltar</button>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                                {/* FIM TABELA*/}
                            </div>
                        </div>


                    </div>
                </div>
                <footer>
                    <div class="footer-area">
                        <p>© Copyright 2022. Todos os direitos reservados. Desenvolvido pela <a href="https://github.com/gabrielle-nunes/volkswagen-roadmap">Equipe Roadmap de Inovação</a>.</p>
                    </div>
                </footer>
            </div>
        </body>

    );

}

export default Visualizar;