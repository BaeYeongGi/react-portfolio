import React from "react";
import styled from "styled-components";

const SideBar = styled.div`
	position: fixed;
	top: 14rem;
	left: 50%;
	transform: translate(-50%, 0);
	margin-left: 70rem;
`;
const Aside = () => {
	return (
		<SideBar>
			날씨정보
			<br />
			pageYOffset % scroll
			<br />
      current Time
			<br />
		</SideBar>
	);
};

export default Aside;
