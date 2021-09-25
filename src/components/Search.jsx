import { TextField } from "@mui/material"
import { setSearch } from "../redux/actions/books"
import { useSelector, useDispatch} from "react-redux"

const Search = (props) => {
    const search = useSelector(({books}) => books.search)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(setSearch(e.target.value))
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