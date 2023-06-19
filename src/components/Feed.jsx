import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "./";

import { fetchFromAPI } from "../utils/fetchFromAPI";
function Feed() {

	const [selectedCategory, setSelectedCategory] = useState('New');
	const [videos, setVideos] = useState([])
	useEffect(() => {
		window.scrollTo(0, 0);
		fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
			.then((data) => setVideos(data.items))
	}, [selectedCategory]);

	return (
		<Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
			<Box
				sx={{
					height: { sx: "auto", md: "92vh" },
					borderRight: "1px solid #3d3d3d",
					px: { sx: 0, md: 2 },
				}}
			>
				<SideBar
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				/>

			</Box>
			<Box
				p={2}
				sx={{
					height: "90vh",
					overflowY: "auto",
					flex: "2",
				}}
			>
				<Typography
					py={2}
					variant="h4"
					fontWeight="bold"
					sx={{ color: "#fff" }}
				>
					{selectedCategory}{" "}
					<span style={{ color: "#f31503" }}>video</span>
				</Typography>

				<Videos videos={videos} />
			</Box>
		</Stack>
	);
}

export default Feed;
