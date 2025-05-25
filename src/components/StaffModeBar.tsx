import { Button } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";

const StaffModeStatus = () => {
  // const isStaffMode = false; 

  // if (!isStaffMode) return null; // TODO: change to true when staff mode is implemented

    // const handleLogout = () => {
    //   authUtils.clearAuth();
    //   setIsEditModal(false);
    //   setSuccessMessage("You are successfully logged out.");
    //   setTimeout(() => setSuccessMessage(""), 3000);
    // };

  return (
    <div className="fixed top-4 right-4 flex items-center gap-3 bg-green-50 px-4 py-2 rounded-md shadow-sm">
      <div className="flex items-center gap-2">
        <LockOpenIcon className="text-green-600" fontSize="small" />
        <span className="text-green-600 text-sm">Staff Mode</span>
      </div>
      <Button variant="text" color="error" size="small">
        Log out
      </Button>
    </div>
  );
};

export default StaffModeStatus;
