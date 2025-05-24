import { TextField } from "@mui/material";
import { useState } from "react";

interface InfoCardProps {
  label: string;
  value: React.ReactNode;
  isEdit?: boolean;
  onEdit?: (value: string) => void;
}



const InfoCard = ({ label, value, isEdit, onEdit }: InfoCardProps) => {
  const [editValue, setEditValue] = useState(value);

  const handleEdit = () => {
    onEdit?.(editValue);
  };

  return (
    <div className="flex-1 space-y-2 p-4 bg-gray-100 rounded-md">
      <div className="uppercase text-sm">{label}</div>
      {/* {isEdit ? (
        <TextField
          fullWidth
          label={label}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : ( */}
        <div className="font-bold text-lg">{value}</div>
      {/* )} */}
    </div>
  );
};

export default InfoCard;
