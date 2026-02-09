import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";

const options = ["Elise Frazier", "Ralph Edwards", "Mae Gibson", "Lena Wade"];

// Creating the manageable states
export default function ManageableStates() {
  const [value, setValue] = useState<string | null>(options[0]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
  
      {/* Calling the Autocomplete component and updating its state features */}
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="manageable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Search Manager Names" />}
      />
        <Card sx={{ padding: 2, margin: 2, position:'relative', marginLeft:'unset'}}>
        <Avatar sx={{float:'right'}}>{value ? value[0] : ""}</Avatar>
        <h1>Manageable States</h1>
        <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div>
        <div>{`inputValue: '${inputValue}'`}</div>
      </Card>
    </div>
  );
}
