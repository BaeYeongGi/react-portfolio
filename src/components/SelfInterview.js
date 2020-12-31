import React, { useState } from "react";
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
	> p {color:#fff; font-size:1.6rem; line-height:1.4;}
	> ul {margin:1.4rem 0 1.4rem 0;
		> li {color:#fff; font-size:1.6rem; line-height:1.4; border-bottom:1px solid #fff; padding:0 0 0.4rem 0; margin:0 0 0.4rem 0;}
	}
`;

const Reason = () => {
	return (
		<>
			<p>
			홈페이지 퍼블리싱 작업만으로 만족하지 못한게 가장 큰 이유입니다.
			솔루션회사, 웹에이전시 등 지금까지 근무했던 기업에서 다양하게 웹퍼블리싱 기술을 접하게 되었고 많은 경험을 쌓았습니다.
			하지만 숙련된 웹퍼블리싱 기술 하나만으로 만족하는 것 보다는, Javascript로 페이지를 개발하면서 더 다양한 개발기술을
			접하고 해결 하는 과정이 있다면 더 즐거운 회사 생활이 되지 않을까? 라는 호기심부터 시작해 현재는 퍼블리싱과
			React.js를 함께 다루는 프론트엔드 개발자가 되었습니다.				
			</p>
		</>
	)
}

const Strength = () => {
	return (
		<>
			<p>두 가지가 있습니다. 커뮤니케이션과 퍼블리싱 기술입니다.</p>
			<ul>
				<li>
					A. 디자이너의 요구사항으로 디자인 시안과 일치하는 페이지를 구현하고 주어진 시간안에 동적인 효과를 어느부분까지 표현 가능한가에 대한 논의					
				</li> 
				<li>
					B. 프론트개발에 앞서 어떤 형태의 API를 백앤드 개발자로 부터 받을 것인지, 어떤 파라미터를 필수 값으로 넣어 데이터를 페이지에 표현할지의 논의					
				</li>
				<li>
					C. 모바일, 태블릿 시안이 별도로 존재하지 않아도 PC에 보여지는 모든 콘텐츠를 반응형 사이즈에 맞게 표현이 가능함
				</li>
				<li>
					D. 시맨틱태그를 활용한 마크업과 CSS의 [ transition, animation, flex ] 등을 활용한 형태의 퍼블리싱을 빠르고 정확하게 작업할 수 있습니다. 
				</li>
			</ul>
			<p>
				업무를 진행해오면서 겪어왔던 일부분을 예시로 들었습니다.
				이 일부분만 예시를 들어봐도 오고가는 커뮤니케이션은 필수적이고 상당히 중요한 부분을 차지한다고 생각합니다.
				업무의 흐름과 방향을 좌우하는 만큼 원활한 커뮤니케이션은 지금까지의 경험을 비롯해 개발 작업에 앞서 자신있다고 말할 수 있습니다.
				또한 다양한 퍼블리싱 경험으로 사용자 친화적인 페이지를 구성하고 조언할 자신이 있습니다. 
			</p>
		</>
	)
}

const Changing = () => {
	return (
		<>
		
		</>
	)
}

const Plan = () => {
	return (
		<>
			<p>
				Javascript 언어의 본질을 파악하는 프론트앤드 개발자가 되겠습니다. 현업에서 사용하고있는 React.js 또한
				Javascript의 라이브러리이며 이전 기업에서도 사용했던 jQuery도 Javascript 라이브러리 입니다.
				한때는 편리한 사용성과 접근성으로 대부분의 개발자에게 각광받던 jQuery가 현재는 규모가 점점 커지는 프로젝트에서는 사용되지 않는 라이브러리가 되었습니다.
				지금은 React.js를 다룰 수 있지만, jQuery와 마찬가지로 지금보다 언젠가는 더 좋은 라이브러리가 탄생한다면 도태될 수 있다는 걸 염두해 두고 있습니다.
				Javascript의 본질을 파악하여 어떤 프론트앤드 라이브러리나 프레임워크가 나오더라도 능숙하게 대응할 수 있는 프론트앤드 개발자가 되도록 노력할 것입니다.			
			</p>
		</>
	)
}

const tabContents = [
	{
		tabId: 0,
		tabButton: "프론트엔드 개발을 하게 된 이유는?",
		tabContent: <Reason/>,
	},
	{
		tabId: 1,
		tabButton: "다른개발자에 비해 강점이 있다면?",
		tabContent: <Strength/>,
	},
	{
		tabId: 2,
		tabButton: "이직을 하게 된 사유는?",
		tabContent: <Changing/>,
	},
	{
		tabId: 3,
		tabButton: "앞으로의 계획과 포부는?",
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
			<SectionArea id="SelfInterview"/>
			<SectionTitle className="self_interview">Self interview</SectionTitle>
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
