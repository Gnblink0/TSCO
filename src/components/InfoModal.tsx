import { Modal, Box, Button } from "@mui/material";
import type { Airline } from "../types";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import InfoCard from "./InfoCard";
import { formatDimension } from "../TableUtils";

interface InfoModalProps {
  open: boolean;
  onClose: () => void;
  airline: Airline;
}

const InfoModal = ({ open, onClose, airline }: InfoModalProps) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="info-modal-title">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        {/* header */}
        <div className="flex justify-between items-center mb-6">
          {airline.name && (
            <h2 className="text-4xl font-bold">{airline.name}</h2>
          )}
          {airline.baggagePolicyUrl && (
            <a
              href={airline.baggagePolicyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <OpenInNewIcon />
            </a>
          )}
        </div>
        {/* content */}
        <div className="flex flex-col gap-4">
          {/* basic info */}
          <div className="flex justify-between gap-4">
            <InfoCard label="Country" value={airline.country} />
            <InfoCard
              label="Last Updated"
              value={
                airline.updatedAt ? airline.updatedAt.toLocaleDateString() : "-"
              }
            />
          </div>
          {/* carry-on and personal item sizes */}
          <div>
            <h2 className="text-lg font-bold mb-2">Carry-on</h2>
            <div className="flex justify-between gap-4">
              <InfoCard
                label="imperial"
                value={formatDimension(airline.carryOn?.imperial)}
              />
              <InfoCard
                label="metric"
                value={formatDimension(airline.carryOn?.metric)}
              />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">Personal Item</h2>
            <div className="flex justify-between gap-4">
              <InfoCard
                label="imperial"
                value={formatDimension(airline.personalItem?.imperial)}
              />
              <InfoCard
                label="metric"
                value={formatDimension(airline.personalItem?.metric)}
              />
            </div>
          </div>
          {/* special notes */}
          <div>
            <div className="text-sm text-gray-500">
              {airline.specialNotes?.map((note, index) => (
                <div key={index}>
                  [{index + 1}] {note}
                </div>
              ))}
            </div>
          </div>
          {/* buttons */}
          <div className="flex justify-end gap-4">
            <Button variant="text" color="inherit" onClick={onClose}>
              Close
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                // TODO: open edit modal
              }}
            >
              Edit
            </Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default InfoModal;
