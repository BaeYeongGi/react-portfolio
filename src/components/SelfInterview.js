import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Section, SectionTitle, Contents, SectionArea } from "style/common";
import { InterviewTabs, InterviewContents } from "style/SelfInterview";

const Reason = () => {
	return (
		<p>
			Tab Contents1
		</p>
	);
};

const Strength = () => {
	return (
		<p>
			Tab Contents2
		</p>
	);
};

const Changing = () => {
	return (
		<p>
			Tab Contents3
		</p>
	);
};

const Plan = () => {
	return (
		<>
			<p>
				Tab Contents4
			</p>
		</>
	);
};

const tabContents = [
	{
		tabId: 0,
		tabButton: "Title1",
		tabContent: <Reason />,
	},
	{
		tabId: 1,
		tabButton: "Title2",
		tabContent: <Strength />,
	},
	{
		tabId: 2,
		tabButton: "Title3",
		tabContent: <Changing />,
	},
	{
		tabId: 3,
		tabButton: "Title4",
		tabContent: <Plan />,
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
			<SectionArea id="SelfInterview" />
			<SectionTitle className="self_interview">Tab Sample</SectionTitle>
			<Contents>
				<InterviewTabs>
					{tabContents.map((section, index) => (
						<li key={index}>
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
