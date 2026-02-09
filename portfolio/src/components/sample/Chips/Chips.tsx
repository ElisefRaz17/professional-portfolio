import "./Chips.css";
import React, { useState } from "react";
import ChipsProvider, { useChipsContext } from "./ChipsContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { Chip } from "@mui/material";
const Chips = () => {
  const [chips, setChips] = useState(["Chip 1", "Chip 2"]);
  const handleDelete = (chipToDelete:any) => () => {
    setChips((currentChips) =>
      currentChips.filter((chip) => chip !== chipToDelete)
    );
  };
  const handleAdd = (newChip:any) => {
    setChips((currentChips) => [...currentChips, newChip]);
  };
  return (
    <div className="flex gap-2 flex-col">
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={handleDelete(chip)}/>
        // <div key={chip} className="relative grid select-none items-center whitespace-nowrap rounded-full bg-gradient-to-tr from-gray-900 to-gray-800 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white">
        //   <span className="">{chip}</span>
        // </div>
      ))}
      <button onClick={()=>handleAdd(`Chip ${chips.length + 1}`)}>Add Chip</button>
    </div>
  );
};

// type ChipsContentProps = {
//     items:{
//     label: string;
//     onDelete: () => void;
//     size: "small" | "medium";
//     clickable: boolean;
//     }[];
// }

// type ChipsComposition = {
//     Chip: (props: ChipsContentProps) => React.ReactNode;
// }

// type ChipsProps = {
//     children: React.ReactNode;
// }

// type ChipsWrapper = (props: ChipsProps) => React.ReactNode;

// const Chips: ChipsWrapper & ChipsComposition = ({ children }) => {
//     return <div>{children}</div>;
// };

// Chips.Chip = ({ items }) => {
//     return (
//         <div className="chips">
//             {items.map(({ label, onDelete, size, clickable }) => (
//                 <div
//                     key={label}
//                     className={`chip ${size} ${clickable ? "clickable" : ""}`}
//                     onClick={clickable ? onDelete : undefined}
//                 >
//                     {label}
//                     {clickable && <span className="delete" onClick={onDelete}><DeleteIcon/></span>}
//                 </div>
//             ))}
//         </div>
//     );
// };

// const Chips =  ()=>{
// new ChipList({chips: ['Send a text', 'Set a remainder', 'Read my emails ', 'Set alarm'],
//     click: (e: ClickEventArgs)=>{
//        alert('you have clicked ' + e.text)
//     } }, '#chip');
// }

export default Chips;
