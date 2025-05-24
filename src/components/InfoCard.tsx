interface InfoCardProps {
  label: string;
  value: React.ReactNode;
}
const InfoCard = ({ label, value }: InfoCardProps) => {
  return (
    <div className="flex-1 space-y-2 p-4 bg-gray-100 rounded-md">
      <div className="uppercase text-sm">{label}</div>
      <div className="font-bold text-lg">{value}</div>
    </div>
  );
};

export default InfoCard;
