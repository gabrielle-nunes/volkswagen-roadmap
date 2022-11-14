import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Calendar from 'react-calendar';
import React, { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DoneAllIcon from '@mui/icons-material/DoneAll';


function HG() {

const [visivel1, setVisivel1]=useState(false);
const [visivel2, setVisivel2]=useState(false);
const [visivel3, setVisivel3]=useState(false);
const [visivel4, setVisivel4]=useState(false);
const [visivel5, setVisivel5]=useState(false);


const [selectedDate1, setSelectedDate1] = useState(null);
const [selectedDate2, setSelectedDate2] = useState(null);
const [selectedDate3, setSelectedDate3] = useState(null);
const [selectedDate4, setSelectedDate4] = useState(null);
const [selectedDate5, setSelectedDate5] = useState(null);



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

    dateFormat(selectedDate1, selectedDate2, selectedDate3, selectedDate4, selectedDate5);
    

    return (
        <body>

            <h2> Realisation </h2>


            <div class="MeasureText" >
                <h6> 1. Measure/Potencial identified </h6>
            </div>



            <div class="MeasureRespHG1" >
                <TextField required id="standard-basic" label="Responsable" variant="standard" />
            </div>

            <div class="MeasureStatusHG1" >
                <FormControl>
                    <FormLabel  labelPlacement='start'>Status</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        defaultValue="NOK"
                    >
                        <FormControlLabel value="NOK" onClick={()=> setVisivel1(false)} control={<Radio />} label="NOK" />
                        <FormControlLabel value="OK" onClick={()=> setVisivel1(true)} control={<Radio />} label="OK" ></FormControlLabel>
                        
                    </RadioGroup>
                </FormControl>
{visivel1 &&
<DoneAllIcon className="doneIcon" fontSize="large" color="success"></DoneAllIcon>
}
            </div>

            <div class="MeasureDataHG1" >

                <DatePicker
                    selected={selectedDate1}
                    onChange={date => setSelectedDate1(date)}
                    minDate={new Date()}
                    placeholderText="Data da Reunião"
                    //showTimeSelect (ativar opção de horario)
                    dateFormat="dd/MM/yyyy"
                />
            </div>

            {visivel1 &&
            
            <div class="MeasureTextHG2" >
                <h6> 2. Measure Valued </h6>
            </div>
            }
            
            {visivel1 &&
            <div class="MeasureRespHG2" >
                <TextField label="Responsable" variant="standard" />
            </div>
}
            {visivel1 &&
            <div class="MeasureStatusHG2" >
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label" labelPlacement='start'>Status</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        defaultValue="NOK"
                        
                    >
                        <FormControlLabel value="NOK" onClick={()=> setVisivel2(false)} control={<Radio />} label="NOK" />
                        <FormControlLabel value="OK" onClick={()=> setVisivel2(true)} control={<Radio />} label="OK" />
                    </RadioGroup>
                </FormControl>
{visivel2 &&
<DoneAllIcon className="doneIcon" fontSize="large" color="success"></DoneAllIcon>
}
            </div>
}
            {visivel1 &&
            
            <div class="MeasureDataHG2" >

                <DatePicker
                    
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
{visivel2 &&
            <div class="MeasureTextHG3" >
                <h6> 3. Measure Decided </h6>
            </div>
}
{visivel2 &&
            <div class="MeasureRespHG3" >
                <TextField required id="standard-basic" label="Responsable" variant="standard" />
            </div>
}
{visivel2 &&
            <div class="MeasureStatusHG3" >
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label" labelPlacement='start'>Status</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      
                    >
                        <FormControlLabel value="NOK" onClick={()=> setVisivel3(false)} control={<Radio />} label="NOK" />
                        <FormControlLabel value="OK" onClick={()=> setVisivel3(true)} control={<Radio />} label="OK" />
                    </RadioGroup>
                </FormControl>
{visivel3 &&
<DoneAllIcon className="doneIcon" fontSize="large" color="success"></DoneAllIcon>
}
            </div>
}
{visivel2 &&
            <div class="MeasureDataHG3" >

                <DatePicker
                    minDate={new Date(selectedDate2)}
                    selected={selectedDate3}
                    onChange={date => setSelectedDate3(date)}
                    placeholderText="Data da Reunião"
                    //showTimeSelect (ativar opção de horario)
                    dateFormat="dd/MM/yyyy"
                />
            </div>
}
{visivel3 &&
            <div class="MeasureTextHG4" >
                <h6> 4. Measure Realizes </h6>
            </div>
}

{visivel3 &&
            <div class="MeasureRespHG4" >
                <TextField required id="standard-basic" label="Responsable" variant="standard" />
            </div>
}
{visivel3 &&
            <div class="MeasureStatusHG4" >
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label" labelPlacement='start'>Status</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        defaultValue="NOK"
                    >
                        <FormControlLabel value="NOK" onClick={()=> setVisivel4(false)} control={<Radio />} label="NOK" />
                        <FormControlLabel value="OK" onClick={()=> setVisivel4(true)} control={<Radio />} label="OK" />
                    </RadioGroup>
                </FormControl>
{visivel4 &&
<DoneAllIcon className="doneIcon" fontSize="large" color="success"></DoneAllIcon>
}
            </div>
}
{visivel3 &&
            <div class="MeasureDataHG4" >

                <DatePicker
                    minDate={new Date(selectedDate3)}
                    selected={selectedDate4}
                    onChange={date => setSelectedDate4(date)}
                    placeholderText="Data da Reunião"
                    //showTimeSelect (ativar opção de horario)
                    dateFormat="dd/MM/yyyy"
                />
            </div>
}
{visivel4 &&

            <div class="MeasureTextHG5" >
                <h6> 5. Finance Effect </h6>
            </div>
}
{visivel4 &&

            <div class="MeasureRespHG5" >
                <TextField required id="standard-basic" label="Responsable" variant="standard" />
            </div>
}
{visivel4 &&
            <div class="MeasureStatusHG5" >
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label" labelPlacement='start'>Status</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        defaultValue="NOK"
                    >
                        <FormControlLabel value="NOK"  control={<Radio />} label="NOK" />
                        <FormControlLabel value="OK"  onClick={()=> setVisivel5(true)} control={<Radio />} label="OK" />
                    </RadioGroup>
                </FormControl>
{visivel5 &&
<DoneAllIcon className="doneIcon" fontSize="large" color="success"></DoneAllIcon>
}
            </div>
}
{visivel4 &&
            <div class="MeasureDataHG5" >

                <DatePicker
                    minDate={new Date(selectedDate4)}
                    selected={selectedDate5}
                    onChange={date => setSelectedDate5(date)}
                    placeholderText="Data da Reunião"
                    //showTimeSelect (ativar opção de horario)
                    dateFormat="dd/MM/yyyy"
                />
            </div>
}
        </body>
    );
}







export default HG;