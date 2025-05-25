import { Modal, Box, Button, TextField } from "@mui/material";
import type { Airline } from "../types";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import InfoCard from "./InfoCard";
import { formatDimension } from "../TableUtils";
import { useState } from "react";
import { authUtils } from "../utils/authUtils";

interface InfoModalProps {
  open: boolean;
  onClose: () => void;
  airline: Airline;
}

const InfoModal = ({ open, onClose, airline }: InfoModalProps) => {
  const [isEditButtonClicked, setIsEditButtonClicked] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [country, setCountry] = useState(airline.country);

  const handleEditCountry = (value: string) => {
    setCountry(value);
  };

  const handleEditButtonClick = () => {
    setIsEditButtonClicked(true);
  };

  const handlePasswordSubmit = () => {
    const staffPassword = import.meta.env.VITE_STAFF_PASSWORD;
    if (password === staffPassword) {
      setIsEditModal(true);
      setIsEditButtonClicked(false);
      setPassword("");
      setPasswordError("");
      authUtils.setAuth();
      setSuccessMessage(
        "✅ Staff mode verified! You can edit for the next 1 hour."
      );
      setTimeout(() => setSuccessMessage(""), 3000);
    } else {
      setPasswordError("Incorrect password");
    }
  };

  const handleCancelEdit = () => {
    setIsEditButtonClicked(false);
    setPassword("");
    setPasswordError("");
  };

  const handleSaveEdit = () => {
    setIsEditModal(false);
  };

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
        {successMessage && (
          <div className="w-full bg-green-100 text-green-700 p-3 rounded-md mb-4">
            {successMessage}
          </div>
        )}
        {isEditButtonClicked && (
          <div className="w-full h-full bg-amber-100 rounded-md p-4 mb-6">
            <h2 className="text-lg font-semibold mb-2">🔒 Staff Edit Mode</h2>
            <div className="flex flex-col gap-4">
              <TextField
                fullWidth
                label="Password"
                type="password"
                size="small"
                variant="standard"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!passwordError}
                helperText={passwordError}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handlePasswordSubmit();
                  }
                }}
              />
              <div className="flex justify-end gap-2">
                <Button
                  variant="text"
                  color="inherit"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handlePasswordSubmit}
                >
                  Verify
                </Button>
              </div>
            </div>
          </div>
        )}
        {/* content */}
        <div className="flex flex-col gap-4">
          {/* basic info */}
          <div className="flex justify-between gap-4">
            <InfoCard
              label="Country"
              value={country}
              isEdit={isEditModal}
              onEdit={handleEditCountry}
            />
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
            {isEditModal ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSaveEdit}
                >
                  Save
                </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleEditButtonClick}
              >
                Edit
              </Button>
            )}
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default InfoModal;
