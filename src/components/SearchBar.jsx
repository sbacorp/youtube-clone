import React from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = React.useState('');
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		if (searchTerm) {
			navigate(`/search/${searchTerm}`);
			setSearchTerm('')
		}
	}
	return (
		<Paper
			component="form"
			onSubmit={handleSubmit}
			sx={{
				borderRadius: 20,
				border: "1px silid #e3e3e3",
				pl: 2,
				boxShadow: "none",
				mr: { sm: 5 },
			}}
		>
			<input
				className="search-bar"
				placeholder="search..."
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
				style={{ fontSize: "16px" }}
			/>
			<IconButton type="submit" sx={{ p: "10px", color: "#171717" }}>
				<Search />
			</IconButton>
		</Paper>
	);
}

export default SearchBar;
