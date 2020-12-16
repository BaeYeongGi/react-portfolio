import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Section, SectionTitle, Contents, SectionArea } from "style/common";
import { URL } from "include/ImageURL";
import styled from "styled-components";

const images = {
	clickCursor: URL + "/images/icon_click_cursor_brown.png",
};

const InterviewTabs = styled.ul`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	> li {
		width: 16rem;
		height: 8rem;
		text-align: center;
    line-height: 1.4;
		> a {
			display: flex;
			align-items: center;
			width: 100%;
			height: 100%;
			padding: 0 1.4rem;
			color: #fff;
			background: #786e6e;
      font-size: 1.6rem;
      cursor: url(${images.clickCursor}), auto;
			&.active {
				background: #7f6362;
			}
		}
		&:not(:last-child) {
			margin: 0 1rem 0 0;
		}
	}
`;

const InterviewContents = styled.div`
	width: 100%;
	background: #7f6362;
	padding: 4rem;
`;

const tabContents = [
	{
		tabId: 0,
		tabButton: "프론트앤드 개발을 하게 된 이유는?",
		tabContent: "ㅇㅇ",
	},
	{
		tabId: 1,
		tabButton: "다른개발자에 비해 강점이 있다면?",
		tabContent: "ㅇㅇㅇ",
	},
	{
		tabId: 2,
		tabButton: "이직을 하게 된 사유는?",
		tabContent: "ㅇㅇㅇㅇ",
	},
	{
		tabId: 3,
		tabButton: "앞으로의 계획과 포부는?",
		tabContent: "ㅇㅇㅇㅇㅇ",
	},
];

const useTabs = (initialTabs, allTabs) => {
	const [contentIndex, setContentIndex] = useState(initialTabs);
	return {
		contentItem: allTabs[contentIndex],
		contentChange: setContentIndex,
	};
};

const SelfInterview = () => {
	const { contentItem, contentChange } = useTabs(0, tabContents);
	return (
		<Section className="self_interview">
			<SectionArea id="SelfInterview"/>
			<SectionTitle className="self_interview">Self interview</SectionTitle>
			<Contents>
				<InterviewTabs>
					{tabContents.map((section, index) => (
						<li>
							<Link to="#" className={contentItem.tabId === index ? "active" : ""} onClick={() => contentChange(index)}>
								{section.tabButton}
							</Link>
						</li>
					))}
				</InterviewTabs>
				<InterviewContents>{contentItem.tabContent}</InterviewContents>
			</Contents>
		</Section>
	);
};

export default SelfInterview;
