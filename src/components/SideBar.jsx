import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
function SideBar({selectedCategory, setSelectedCategory}) {
	return (
		<Stack
			direction="row"
			sx={{
				overflowY: "auto",
				height: { sx: "auto", md: "97%" },
				flexDirection: { md: "column" },
			}}
		>
			{categories.map((item) => (
				<button
					onClick={() => setSelectedCategory(item.name)}
					className="category-btn"
					style={{
						background:
							item.name === selectedCategory &&
							"rgb(114, 113, 113)",
					}}
					key={item.name}
				>
					<span>{item.icon}</span>
					<span>{item.name}</span>
				</button>
			))}
		</Stack>
	);
}

export default SideBar;
