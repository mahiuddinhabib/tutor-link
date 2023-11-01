import { InputBase, alpha, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// import { SxProps, Theme } from "@mui/material/styles";
import { SystemStyleObject } from "@mui/system";
import React from "react";

interface ISearchProps {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sxProp?: SystemStyleObject;
}

const SearchBar = ({ handleSearch, sxProp }: ISearchProps) => {
  //   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     console.log(event.target.value);
  //   };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      // marginLeft: theme.spacing(1),
      // marginRight: theme.spacing(1),
      // marginTop: theme.spacing(1),
      width: "auto",
    },
    
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("xs")]: {
        width: "12ch",
        "&:focus": {
          width: "17ch",
        },
      },
      [theme.breakpoints.up("md")]: {
        width: "18ch",
        "&:focus": {
          width: "30ch",
        },
      },
    },
  }));
  return (
    <Search sx={{ ...sxProp }}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        onChange={handleSearch}
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default SearchBar;
