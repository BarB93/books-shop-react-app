import { TextField } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Search = (props) => {
    
    const {search, setSearch} = useContext(AppContext)

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
    <TextField 
        fullWidth
        label="Поиск"
        type='search' 
        value={search} 
        onChange={handleChange} 
        sx={{mb: "1rem"}}
    />)
};

export default Search;