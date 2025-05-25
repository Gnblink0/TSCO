import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { tableWidth } from "../TableUtils";
import { useState, useEffect, useCallback, useMemo } from "react";
import { debounce } from "lodash";

interface SearchProps {
  onSearch: (searchTerm: string) => void;
}

const Search = ({ onSearch }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = useMemo(
    () =>
      debounce((term: string) => {
        onSearch(term);
      }, 300),
    [onSearch]
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
      debouncedSearch(event.target.value);
    },
    [debouncedSearch]
  );

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <div style={{ width: `${tableWidth}px` }} className="mb-4 bg-white">
      <TextField
        fullWidth
        id="search"
        placeholder="Search by airline or country..."
        value={searchTerm}
        onChange={handleSearchChange}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: searchTerm && (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClear}
                  size="small"
                  aria-label="clear search"
                >
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
        size="small"
      />
    </div>
  );
};

export default Search;
