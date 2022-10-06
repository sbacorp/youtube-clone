import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetails }) => (
	<Box
		sx={{
			boxShadow: "none",
			borderRadius: "20px",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			width: { xs: "300px", md: "358px" },
			height: "326px",
			margin: "auto",
		}}
	>
		<Link to={`/channel/${channelDetails?.id?.channelId}`}>
			<CardContent
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					textAlign: "center",
					color: "#fff",
				}}
			>
				<CardMedia
					image={
						channelDetails?.snippet?.thumbnails?.high?.url
					}
					alt={channelDetails?.snippet?.title}
					sx={{
						borderRadius: "50%",
						height: "180px",
						width: "180px",
						mb: 2,
						border: "1px solid #e3e3e3",
					}}
				/>
				<Typography variant="h6">
					{channelDetails?.snippet?.title}{" "}
					<CheckCircleIcon
						sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
					/>
				</Typography>
				{channelDetails?.statistics?.subscriberCount && (
					<Typography
						sx={{
							fontSize: "15px",
							fontWeight: 500,
							color: "gray",
						}}
					>
						{parseInt(
							channelDetails?.statistics?.subscriberCount
						).toLocaleString("en-US")}{" "}
						Subscribers
					</Typography>
				)}
			</CardContent>
		</Link>
	</Box>
);

export default ChannelCard;
