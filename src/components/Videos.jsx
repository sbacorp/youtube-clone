import React from 'react'
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard, Loader } from "./";
function Videos({videos, direction}) {
	if(!videos?.length) return <Loader/>
  return (
		<Stack alignItems='center' direction={direction||"row"} flexWrap="wrap" justifyContent="center" gap={3}>
			{videos.map((item, i) => (
				<Box key={i}>
					{item.id.videoId && <VideoCard video={item} />}
					{item.id.channelId && <ChannelCard channelDetails={item} />}
				</Box>
			))}
		</Stack>
  );
}

export default Videos