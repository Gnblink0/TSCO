import { TextField } from "@mui/material";

interface InfoCardProps {
  label: string;
  value: React.ReactNode;
  isEdit?: boolean;
  onEdit?: (value: string) => void;
}

const InfoCard = ({ label, value, isEdit, onEdit }: InfoCardProps) => {
  
  return (
    <div className="flex-1 space-y-2 p-4 bg-gray-100 rounded-md">
      <div className="uppercase text-sm">{label}</div>
      {isEdit ? (
        <TextField
          fullWidth
          label={label}
          value={value}
          onChange={(e) => onEdit?.(e.target.value)}
        />
      ) : (
        <div className="font-bold text-lg">{value}</div>
      )}
    </div>
  );
};

export default InfoCard;
