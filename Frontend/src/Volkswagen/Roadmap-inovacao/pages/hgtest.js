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

function HG() {

    const [value, onChange] = useState(new Date());

    const [selectedDate, setSelectedDate] = useState(null);

    //transformar em formato BRB 
    const dateFormatAux = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        return [year, month, day].join('-');
    }

    const dateFormat = (date) => {

        console.log(new Date(date));

        let formatYearMonthDay = dateFormatAux(date); //formate para tela (não vamos usar)

        let formatISO8601 = new Date(date).toISOString(); //format para o banco

        return [formatISO8601];

    }

    dateFormat(selectedDate);

    return (
    <body>
            
        <h2> Realisation </h2>

        
            <div class="MeasureText" >
                <h6> 1. Measure/Potencial identified </h6>
            </div>
        
        
        
            <div class="MeasureResp" >
                <TextField id="standard-basic" label="Responsable" variant="standard" />
            </div>

        <div class="MeasureStatus" >
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label" labelPlacement='start'>Status</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                     <FormControlLabel value="NOK" control={<Radio />} label="NOK" />
                    <FormControlLabel value="OK" control={<Radio />} label="OK" />
                    </RadioGroup>
                </FormControl>

                
            </div>


            <div class="MeasureData" >
                <DatePicker
                    selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                    placeholderText="Data da Reunião"
                    //showTimeSelect (ativar opção de horario)
                    dateFormat="dd/MM/yyyy"
                />
            </div>

        </body>
    );
}







export default HG;