import Form from "react-bootstrap/Form";
import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import "../css/styles.css";
import "../css/default-css.css";
import "../css/font-awesome.min.css";
import "../css/themify-icons.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { Navbar, Jumbotron, Dropdown, DropdownButton } from 'react-bootstrap';
import { Dashboard, Visibility, Delete, Edit, Person, Home, Task, Block, Notifications, Mail, Settings, ArrowDropDown, HelpOutline, AccountCircle, Functions } from '@mui/icons-material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Stack from '@mui/material/Stack';
import DoneAllIcon from '@mui/icons-material/DoneAll';



function pegarValue() {
    var select = document.getElementById("setores");

    var opcaoValor = select.options[select.selectedIndex].value;

    console.log(opcaoValor);
}

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
        {<Settings />}
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
        <AccountCircle />
        {children}
    </a>
));
//FIM ICONES PERSONALIZADOS----------------->


function Segundo() {

    const [visivel1, setVisivel1] = useState(false);
    const [visivel2, setVisivel2] = useState(false);
    const [visivel3, setVisivel3] = useState(false);
    const [visivel4, setVisivel4] = useState(false);
    const [visivel5, setVisivel5] = useState(false);


    const [selectedDate1, setSelectedDate1] = useState(null);
    const [selectedDate2, setSelectedDate2] = useState(null);
    const [selectedDate3, setSelectedDate3] = useState(null);
    const [selectedDate4, setSelectedDate4] = useState(null);
    const [selectedDate5, setSelectedDate5] = useState(null);
    const [selectedDate6, setSelectedDate6] = useState(null);



    //transformar em formato BRB 
    const dateFormatAux = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        return [year, month, day].join('-');
    }

    const dateFormat = (date) => {

        //console.log(new Date(date));

        let formatYearMonthDay = dateFormatAux(date); //formate para tela (não vamos usar)

        let formatISO8601 = new Date(date).toISOString(); //format para o banco

        return [formatISO8601];


    }

    dateFormat(selectedDate1, selectedDate2, selectedDate3, selectedDate4, selectedDate5, selectedDate6);

    const navegar = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        //resolver: yupResolver(schema),
    });

    const addPost = data => axios.post("http://localhost:8080/inovacao/cadastro", data)
        .then(() => {
            console.log("Deu certo")
            navegar("/")
        })
        .catch(() => {
            console.log("Deu errado")

        })



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
                                    <h4 class="header-title mb-0">Criar Inovação</h4>
                                </div>
                                {/* TABELA*/}
                                <div id="mainCreate">
                                    <Form onSubmit={handleSubmit(addPost)}>
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
                                                        <Form.Select aria-label="Default select example" type="text" name="status" {...register("status")}>
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
                                                            <Form.Control type="text" placeholder="Staircase element" name="staircaseElement" {...register("staircaseElement")} />
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
                                                            <Form.Control type="text" placeholder="Responsable" name="responsable" {...register("responsible")} />
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
                                                                    <h6 class="infoTitutlo"> Setor <HelpOutline variant="contained" {...bindTrigger(popupState)} />
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
                                                            <Form.Select aria-label="Default select example" id="setores" name="setor" {...register("setor")}>
                                                                <option value="1">Plan. De Série</option>
                                                                <option value="2">Fábrica Piloto</option>
                                                                <option value="3">Manutenção Site</option>
                                                                <option value="4">Estamparia</option>
                                                                <option value="5">Armação</option>
                                                                <option value="6">Pintura</option>
                                                                <option value="7">Montagem Final</option>
                                                                <option value="8">VW Componentes</option>
                                                                <option value="9">QA Processos</option>
                                                                <option value="10">Eng. Industrial</option>
                                                                <option value="11">Logística</option>
                                                                <option value="12">TI</option>
                                                            </Form.Select>
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
                                                            <Form.Control type="text" placeholder="Nome of Measure" name="title" {...register("title")} />
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
                                                        <Form.Control type="text" as="textarea" name="actualState" {...register("actualState")} rows={3} />
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
                                                            <Form.Control as="textarea" rows={3} name="targetState" {...register("targetState")} />
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
                                                            <Form.Control as="textarea" rows={3} name="calculationExplication" {...register("calculationExplication")} />
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
                                                        <select class="form-select" aria-label="Default select example" type="text" name="handlungsfeld" {...register("handlungsfeld")}>
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
                                                            <Form.Control as="textarea" rows={3} name="ganhosPrevistos" {...register("ganhosPrevistos")} />
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
                                                            <Form.Control as="textarea" rows={3} name="recursosNecessarios" {...register("recursosNecessarios")} />
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
                                                            <Form.Control as="textarea" rows={3} name="timeTrabalho" {...register("timeTrabalho")} />
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
                                                            <Form.Control as="textarea" rows={3} name="parceriasNecessarias" {...register("parceriasNecessarias")} />
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
                                                            <Form.Control as="textarea" rows={3} name="pontosEscalacao" {...register("pontosEscalacao")} />
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
                                                            <Form.Control as="textarea" rows={3} name="divulgacao" {...register("divulgacao")} />
                                                        </Form.Group>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <h2 className="realization"> Realisation </h2>

                                            <Row>
                                                <div class="MeasureText" >
                                                    <h6> 1. Measure/Potencial identified </h6>
                                                </div>
                                                <Col>
                                                    <TextField required id="standard-basic" label="Responsable" variant="standard" {...register("responsibleHg1")}/>
                                                </Col>
                                                <Col>
                                                    <div className="dataPicker" >
                                                        <DatePicker
                                                             {...register("dataHg1")}
                                                            selected={selectedDate1}
                                                            onChange={date => setSelectedDate1(date)}
                                                            minDate={new Date()}
                                                            placeholderText="Data da Reunião"
                                                            //showTimeSelect (ativar opção de horario)
                                                            dateFormat="dd/MM/yyyy"
                                                           
                                                        />
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="radioStatus">
                                                        <FormControl>
                                                            <FormLabel labelPlacement='start'>Status</FormLabel>
                                                            <RadioGroup
                                                                row
                                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                                name="row-radio-buttons-group"
                                                                defaultValue="false"
                                                                {...register("okHg1")}
                                                            >
                                                                <FormControlLabel value="false" onClick={() => setVisivel1(false)} control={<Radio />} label="NOK" />
                                                                <FormControlLabel value="true" onClick={() => setVisivel1(true)} control={<Radio />} label="OK" ></FormControlLabel>
                                                            </RadioGroup>
                                                        </FormControl>

                                                        {visivel1 &&
                                                            <DoneAllIcon className="doneIcon" fontSize="large" color="success"></DoneAllIcon>
                                                        }
                                                    </div>
                                                </Col>
                                            </Row>
                                            {/*parte 2 começa aqui*/}
                                            <Row>
                                                {visivel1 &&

                                                    <div class="MeasureTextHG2" >
                                                        <h6> 2. Measure Valued </h6>
                                                    </div>
                                                }
                                                <Col>
                                                    {visivel1 &&
                                                        <div class="MeasureRespHG2" >
                                                            <TextField label="Responsable" variant="standard" {...register("responsibleHg2")} />
                                                        </div>
                                                    }
                                                </Col>
                                                <Col>
                                                    {visivel1 &&
                                                        <div className="dataPicker" >
                                                            <DatePicker
                                                            {...register("dataHg2")}
                                                                startDate={new Date()}
                                                                minDate={new Date(selectedDate1)}
                                                                selected={selectedDate2}
                                                                onChange={date => setSelectedDate2(date)}
                                                                placeholderText="Data da Reunião"
                                                                //showTimeSelect (ativar opção de horario)
                                                                dateFormat="dd/MM/yyyy"
                                                                
                                                            />
                                                        </div>
                                                    }
                                                </Col>
                                                <Col>
                                                    {visivel1 &&
                                                        <div className="radioStatus" >
                                                            <FormControl>
                                                                <FormLabel id="demo-row-radio-buttons-group-label" labelPlacement='start'>Status</FormLabel>
                                                                <RadioGroup
                                                                    row
                                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                                    name="row-radio-buttons-group"
                                                                    defaultValue="false"
                                                                    {...register("okHg2")}

                                                                >
                                                                    <FormControlLabel value="false" onClick={() => setVisivel2(false)} control={<Radio />} label="NOK" />
                                                                    <FormControlLabel value="true" onClick={() => setVisivel2(true)} control={<Radio />} label="OK" />
                                                                </RadioGroup>
                                                            </FormControl>
                                                            {visivel2 &&
                                                                <DoneAllIcon className="doneIcon" fontSize="large" color="success"></DoneAllIcon>
                                                            }
                                                        </div>
                                                    }
                                                </Col>



                                            </Row>
                                            {/*parte 3 começa aqui*/}
                                            <Row>
                                                {visivel2 &&

                                                    <div class="MeasureTextHG3" >
                                                        <h6> 3. Measure Decided </h6>
                                                    </div>
                                                }
                                                <Col>
                                                    {visivel2 &&
                                                        <div class="MeasureRespHG3" >
                                                            <TextField label="Responsable" variant="standard" {...register("responsibleHg3")} />
                                                        </div>
                                                    }
                                                </Col>
                                                <Col>
                                                    {visivel2 &&
                                                        <div className="dataPicker">
                                                            <DatePicker
                                                                {...register("dataHg3")}
                                                                startDate={new Date()}
                                                                minDate={new Date(selectedDate2)}
                                                                selected={selectedDate3}
                                                                onChange={date => setSelectedDate3(date)}
                                                                placeholderText="Data da Reunião"
                                                                //showTimeSelect (ativar opção de horario)
                                                                dateFormat="dd/MM/yyyy"
                                                                
                                                            />
                                                        </div>
                                                    }
                                                </Col>
                                                <Col>
                                                    {visivel2 &&
                                                        <div className="radioStatus" >
                                                            <FormControl>
                                                                <FormLabel id="demo-row-radio-buttons-group-label" labelPlacement='start'>Status</FormLabel>
                                                                <RadioGroup
                                                                    row
                                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                                    name="row-radio-buttons-group"
                                                                    defaultValue="false"
                                                                    {...register("okHg3")}
                                                                >
                                                                    <FormControlLabel value="false" onClick={() => setVisivel3(false)} control={<Radio />} label="NOK" />
                                                                    <FormControlLabel value="true" onClick={() => setVisivel3(true)} control={<Radio />} label="OK" />
                                                                </RadioGroup>
                                                            </FormControl>
                                                            {visivel3 &&
                                                                <DoneAllIcon className="doneIcon" fontSize="large" color="success"></DoneAllIcon>
                                                            }
                                                        </div>
                                                    }
                                                </Col>
                                            </Row>
                                            {/*parte 4 começa aqui*/}
                                            <Row>
                                                {visivel3 &&

                                                    <div class="MeasureTextHG4" >
                                                        <h6> 4. Measure Realizes </h6>
                                                    </div>
                                                }
                                                <Col>
                                                    {visivel3 &&
                                                        <div class="MeasureRespHG4" >
                                                            <TextField label="Responsable" variant="standard" {...register("responsibleHg4")}/>
                                                        </div>
                                                    }
                                                </Col>
                                                <Col>
                                                    {visivel3 &&
                                                        <div className="dataPicker" >
                                                            <DatePicker
                                                                {...register("dataHg4")}
                                                                startDate={new Date()}
                                                                minDate={new Date(selectedDate3)}
                                                                selected={selectedDate4}
                                                                onChange={date => setSelectedDate4(date)}
                                                                placeholderText="Data da Reunião"
                                                                //showTimeSelect (ativar opção de horario)
                                                                dateFormat="dd/MM/yyyy"
                                                                
                                                            />
                                                        </div>
                                                    }
                                                </Col>
                                                <Col>
                                                    {visivel3 &&
                                                        <div className="radioStatus" >
                                                            <FormControl>
                                                                <FormLabel id="demo-row-radio-buttons-group-label" labelPlacement='start'>Status</FormLabel>
                                                                <RadioGroup
                                                                    row
                                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                                    name="row-radio-buttons-group"
                                                                    defaultValue="false"
                                                                    {...register("okHg4")}

                                                                >
                                                                    <FormControlLabel value="false" onClick={() => setVisivel4(false)} control={<Radio />} label="NOK" />
                                                                    <FormControlLabel value="true" onClick={() => setVisivel4(true)} control={<Radio />} label="OK" />
                                                                </RadioGroup>
                                                            </FormControl>
                                                            {visivel4 &&
                                                                <DoneAllIcon className="doneIcon" fontSize="large" color="success"></DoneAllIcon>
                                                            }
                                                        </div>
                                                    }
                                                </Col>
                                            </Row>
                                            {/*parte 5 começa aqui*/}
                                            <Row>
                                                {visivel4 &&

                                                    <div class="MeasureTextHG5" >
                                                        <h6> 5. Finance Effect </h6>
                                                    </div>
                                                }
                                                <Col>
                                                    {visivel4 &&
                                                        <div class="MeasureRespHG5" >
                                                            <TextField label="Responsable" variant="standard" {...register("responsibleHg5")}/>
                                                        </div>
                                                    }
                                                </Col>
                                                <Col>
                                                    {visivel4 &&
                                                        <div className="dataPicker">
                                                            <DatePicker
                                                                {...register("dataHg5")}
                                                                startDate={new Date()}
                                                                minDate={new Date(selectedDate4)}
                                                                selected={selectedDate5}
                                                                onChange={date => setSelectedDate5(date)}
                                                                placeholderText="Data da Reunião"
                                                                //showTimeSelect (ativar opção de horario)
                                                                dateFormat="dd/MM/yyyy"
                                                                
                                                            />
                                                        </div >
                                                    }
                                                </Col>
                                                <Col>
                                                    {visivel4 &&
                                                        <div className="radioStatus" >
                                                            <FormControl>
                                                                <FormLabel id="demo-row-radio-buttons-group-label" labelPlacement='start'>Status</FormLabel>
                                                                <RadioGroup
                                                                    row
                                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                                    name="row-radio-buttons-group"
                                                                    defaultValue="false"
                                                                    {...register("okHg5")}

                                                                >
                                                                    <FormControlLabel value="false" onClick={() => setVisivel5(false)} control={<Radio />} label="NOK" />
                                                                    <FormControlLabel value="true" onClick={() => setVisivel5(true)} control={<Radio />} label="OK" />
                                                                </RadioGroup>
                                                            </FormControl>
                                                            {visivel5 &&
                                                                <DoneAllIcon className="doneIcon" fontSize="large" color="success"></DoneAllIcon>
                                                            }
                                                        </div>
                                                    }
                                                </Col>
                                                <Col>
                                                        <div class="MeasureRespHG5" >
                                                            <TextField label="Responsable" variant="standard" {...register("motivoHg9")}/>
                                                        </div>
                                                        <div className="dataPicker">
                                                            <DatePicker
                                                                {...register("dataHg9")}
                                                                startDate={new Date()}
                                                                minDate={new Date()}
                                                                selected={selectedDate6}
                                                                onChange={date => setSelectedDate6(date)}
                                                                placeholderText="Data da Reunião"
                                                                //showTimeSelect (ativar opção de horario)
                                                                dateFormat="dd/MM/yyyy"
                                                                
                                                            />
                                                        </div >
                                                </Col>
                                            </Row>

                                            <div>
                                                <button type="submit" class="btn btn-primary" name="submit" {...register("submit")}> Salvar </button>
                                                <button type="button" class="btn btn-danger" onClick={() => navegar("/")}>Cancelar</button>
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
            </div >
        </body >
    );


}

export default Segundo;