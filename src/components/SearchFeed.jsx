import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";

function SearchFeed() {

	const { searchTerm } = useParams();
	const [videos, setVideos] = useState([]);
	useEffect(() => {
		window.scrollTo(0, 0);
		fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
			setVideos(data.items)
		);
	}, [searchTerm]);

	return (
		<Box
			p={2}
			sx={{
				height: "90vh",
				overflowY: "auto",
				flex: "2",
			}}
		>
			<Typography variant="h4" fontWeight="bold" sx={{ color: "#fff" }}>
				Results for :
				<span style={{ color: "#f31503" }}>{searchTerm}</span>
			</Typography>

			<Videos videos={videos} />
		</Box>
	);
}

export default SearchFeed;
