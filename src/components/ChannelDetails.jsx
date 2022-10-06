import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
function ChannelDetails() {
	const { id } = useParams();
	const [channelDelails, setChannelDelails] = useState(null);
	const [videos, setVideos] = useState([]);
	useEffect(() => {
		window.scrollTo(0, 0);
		fetchFromAPI(`channels?&part=snippet&id=${id}`).then((data) =>
			setChannelDelails(data?.items[0])
		);

		fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
			(data) => {setVideos(data?.items);console.log(data)}
      
		);
	}, [id]);
	
	return (
		<Box minHeight="95vh">
			<Box
				sx={{
					height: 300,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					textAlign: "center",
				}}
			>
				<ChannelCard channelDetails={channelDelails} />
			</Box>
			<Box display="flex" p={2}/>
				<Box sx={{mr:{sm:'100px'}}}>
					<Videos videos={videos} />
				
			</Box>
		</Box>
	);
}

export default ChannelDetails;
