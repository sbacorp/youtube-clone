import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Videos, Loader } from "./";
import { Typography, Box, Stack } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";

function VideoDetails() {
	const [videoDetail, setVideoDetail] = useState(null);
	const [videos, setVideos] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		window.scrollTo(0, 0);
		fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
			setVideoDetail(data.items[0])
		);
		fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) =>
			setVideos(data.items)
		);
	}, [id]);
	if (!videoDetail?.snippet) return <Loader />;
	const {
		snippet: { title, channelId, channelTitle },
		statistics: { viewCount, likeCount },
	} = videoDetail;

	return (
		<Box minHeight="98vh">
			<Stack direction={{ xs: "column", md: "row" }}>
				<Box flex={1}>
					<Box
						sx={{ width: "100%", position: "sticky", top: "80px" }}
					>
						<ReactPlayer
							className="react-player"
							controls
							url={`https://www.youtube.com/watch?v=${id}`}
						/>
						<Typography
							color="#fff"
							variants="h6"
							p={2}
							fontWeight="bold"
						>
							{title}
						</Typography>
						<Stack
							direction="row"
							justifyContent="space-between"
							sx={{ color: "#fff" }}
						>
							<Link to={`/channel/${channelId}`}>
								<Typography variant="h6" p={0} color="gray">
									{channelTitle}
								</Typography>
							</Link>
							<Stack direction="row" gap="20px">
								<Typography
									px={2}
									variant="body1"
									sx={{ opacity: 0.7 }}
								>
									{parseInt(viewCount).toLocaleString()}{" "}
									views
								</Typography>
								<Typography
									px={2}
									variant="body1"
									sx={{ opacity: 0.7 }}
								>
									{parseInt(likeCount).toLocaleString()}{" "}
									likes
								</Typography>
							</Stack>
						</Stack>
						<Typography
							mt={2}
							variant="body1"
							sx={{ opacity: 0.7 }}
						>


						</Typography>
					</Box>
				</Box>
				<Box
					px={2}
					py={{ md: 1, xs: 5 }}
					justifyContent="center"
					alignItems="center"
				>
					<Videos videos={videos} direction="column" />
				</Box>
			</Stack>
		</Box>
	);
}

export default VideoDetails;
