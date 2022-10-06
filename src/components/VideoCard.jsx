import React from 'react'
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import {Link} from 'react-router-dom';



function VideoCard({video: {id:{videoId}, snippet }}) {
  return (
		<Card
			sx={{
				borderRadius: 0,
				width: { md: "358px", xs: "300px" },
				boxShadow: "none",
			}}
		>
			<Link to={videoId ? `/video/${videoId}` : ""}>
				<CardMedia
					image={snippet?.thumbnails?.high?.url}
					alt={snippet?.title}
					sx={{
						width: { md: "358px", xs: "300px" },
						height: { md: "170px", xs: "200px" },
					}}
				/>
			</Link>
			<CardContent
				sx={{
					backgroundColor: "#413F42",
					height: 110,
					width: { md: "350px", xs: "100%" },
				}}
			>
				<Link to={videoId ? `/video/${videoId}` : ""}>
					<Typography
						variants="subtitle1"
						fontWeight="bold"
						color="#fff"
					>
						{snippet?.title.slice(0, 60)}
					</Typography>
				</Link>
				<Link
					to={
						snippet?.channelId
							? `/channel/${snippet?.channelId}`
							: ""
					}
				>
					<Typography
						variants="subtitle2"
						fontWeight="bold"
						color="gray"
					>
						{snippet?.channelTitle}
					</Typography>
				</Link>
			</CardContent>
		</Card>
  );
}

export default VideoCard