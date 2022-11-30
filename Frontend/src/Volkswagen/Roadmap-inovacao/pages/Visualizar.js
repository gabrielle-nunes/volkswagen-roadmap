import Form from "react-bootstrap/Form";
import { useForm } from 'react-hook-form';
import React, { useEffect, useState, PropTypes, Component } from "react";
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
                                            <span id="id" name="id" {...register("id")}>
                                            </span>
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

                                    <IconButton aria-label="pictureAsPdfIcon" color="error" variant="outlined" onClick={
                                        function pdfe() {
                                            handleSubmit()
                                            const doc = new jsPDF('l');
                                            doc.setLineWidth(1 / 75);
                                            doc.line(20, 25, 280, 25);
                                            doc.setFontSize(18);

                                            doc.text("Status: " + document.getElementById("status").value, 220, 20);

                                            doc.text(document.getElementById("title").value, 20, 20);

                                            doc.setFontSize(8);

                                            doc.text("Inovação desenvolvida por:", 20, 30);

                                            doc.setFontSize(12);

                                            doc.text(document.getElementById("handlungsfeld").value, 235, 30);
                                            
                                            
                                            doc.text(document.getElementById("responsable").value, 20, 35);
                                            
                                            

                                            doc.setFontSize(8);

                                            doc.text("ID: " + document.getElementById("id").value, 270, 40);

                                            doc.text("Setor: " + document.getElementById("setor").value, 20, 40);

                                            var staircaseVar = doc.splitTextToSize("Staircase: " + document.getElementById("staircase").value, 280);

                                            doc.text(staircaseVar, 255, 35);

                                            doc.setFontSize(12);

                                            doc.text('Actual State:', 20, 55);

                                            doc.text('Targer state with measure description:', 20, 75);
                                            
                                            doc.text("Ganhos Previstos:", 20, 95);

                                            doc.text("Recursos Necessários:", 20, 115);

                                            doc.text("Time de Trabalho: ", 20, 135);

                                            doc.text("Calculation/Explication: ", 20, 155);

                                            doc.text("Parcerias Necessárias: " , 20, 175);

                                            doc.text("Pontos de Escalação: " , 20, 195);


                                            //doc.text("Divulgação: " , 200, 55);

                                            

                                            

                                            

                                            

                                            doc.setFontSize(10);

                                            var actualStateVar = doc.splitTextToSize(document.getElementById("actualState").value, 280);

                                            var targetStateVar = doc.splitTextToSize(document.getElementById("targetState").value, 280)
                                            
                                            doc.text(actualStateVar, 20, 60);

                                            doc.text(targetStateVar, 20, 80);

                                            doc.text(document.getElementById("ganhosPrevistos").value, 20, 100);

                                            doc.text(document.getElementById("recursosNecessarios").value, 20, 120);

                                            doc.text(document.getElementById("timeTrabalho").value, 20, 140);

                                            doc.text(document.getElementById("calculationExplication").value, 20, 160);

                                            doc.text(document.getElementById("parceriasNecessarias").value, 20, 180);

                                            doc.text(document.getElementById("pontosEscalacao").value, 20, 200);



                                            {/*doc.text(document.getElementById("divulgacao").value, 200, 60);*/}
                                            
                                            doc.save("inovação.pdf")

                                        }}>
                                        <PictureAsPdfIcon />
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
                                                        <Form.Select aria-label="Default select example" type="text" name="status" id="status" {...register("status")} disabled>
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
                                                            <Form.Control type="text" placeholder="Staircase element" id="staircase" name="staircaseElement"  {...register("staircaseElement")} disabled />
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
                                                            <Form.Control type="text" placeholder="Responsable" name="responsable" id="responsable" {...register("responsible")} disabled />
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
                                                                    <h6 class="infoTitutlo"> Setor  <HelpOutline variant="contained" {...bindTrigger(popupState)} />
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
                                                            <Form.Control type="text" placeholder="setor" name="setor" id="setor" {...register("setor")} disabled />
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
                                                            <Form.Control type="text" placeholder="Nome of Measure" id="title" name="title" {...register("title")} disabled />
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
                                                        <Form.Control type="text" as="textarea" id="actualState" name="actualState" {...register("actualState")} rows={3} disabled />
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
                                                            <Form.Control as="textarea" id="targetState" rows={3} name="targetState" {...register("targetState")} disabled />
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
                                                            <Form.Control as="textarea" id="calculationExplication" rows={3} name="calculationExplication" {...register("calculationExplication")} disabled />
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
                                                        <select class="form-select" aria-label="Default select example" type="text" name="handlungsfeld" id="handlungsfeld" {...register("handlungsfeld")} disabled>
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
                                                            <Form.Control as="textarea" id="ganhosPrevistos" rows={3} name="ganhosPrevistos" {...register("ganhosPrevistos")} disabled />
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
                                                            <Form.Control as="textarea" id="recursosNecessarios" rows={3} name="recursosNecessarios" {...register("recursosNecessarios")} disabled />
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
                                                            <Form.Control as="textarea" id="timeTrabalho" rows={3} name="timeTrabalho" {...register("timeTrabalho")} disabled />
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
                                                            <Form.Control as="textarea" rows={3} id="parceriasNecessarias" name="parceriasNecessarias" {...register("parceriasNecessarias")} disabled />
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
                                                            <Form.Control as="textarea" id="pontosEscalacao" rows={3} name="pontosEscalacao" {...register("pontosEscalacao")} disabled />
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
                                                            <Form.Control as="textarea" rows={3} id="divulgacao" name="divulgacao" {...register("divulgacao")} disabled />
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