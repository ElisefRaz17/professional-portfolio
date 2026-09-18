import "./Chips.css";
import { useState } from "react";
import { Chip } from "@mui/material";
const filterChip = (chips: string[], chipToDelete: string) => {
  return chips.filter((chip) => chip !== chipToDelete);
};

const Chips = () => {
  const [chips, setChips] = useState(["Chip 1", "Chip 2"]);
  
  const handleDelete = (chipToDelete: string) => () => {
    setChips((currentChips) => filterChip(currentChips, chipToDelete));
  };
  
  const handleAdd = (newChip: string) => {
    setChips((currentChips) => [...currentChips, newChip]);
  };
  
  return (
    <div className="flex gap-2 flex-col">
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={handleDelete(chip)}/>
      ))}
      <button onClick={()=>handleAdd(`Chip ${chips.length + 1}`)}>Add Chip</button>
    </div>
  );
};


export default Chips;
