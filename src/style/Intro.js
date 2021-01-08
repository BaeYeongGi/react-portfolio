import styled from "styled-components";
import { device } from "style/Common";
import { URL } from "include/ImageURL";

export const images = {
	profile: URL + "/images/img_profile.png"
}

export const IntroProfileWrap = styled.div`
	.intro_profile_img {
		width: 15rem;
		height: 15rem;
		border-radius: 15rem;
		display:block;
		margin: 0 0 1.6rem 0;
		background: #d5e5ff;
	}
	> dl {
		text-align: center;
		color: #fff;
		> dt {
			margin: 0 0 1rem 0;
		}
		> dd {
		}
		&:not(:last-child) {
			&::after {
				content: "";
				display: block;
				width: 5px;
				height: 5px;
				border-radius: 5px;
				background: #fff;
				margin: 1.6rem auto;
			}
		}
	}
	${device.mobile} {
		width:100%;
		margin:0 0 2rem 0;
		.intro_profile_img { 			
			margin:0 auto 1.6rem auto;
		}	
	}
`;

export const IntroContents = styled.div`
	padding: 0 0 0 4rem;
	width: calc(100% - 15rem);
	.intro_contents_txt {
		font-size: 1.6rem;
		color: #fff;
		line-height: 1.3;
	}
	.intro_contents_line {
		display: block;
		border: 0;
		width: 100%;
		height: 1px;
		background: #fff;
		margin: 2rem 0;
	}
	.intro_contents_history_title {
		color: #fff;
		font-size: 2rem;
		margin: 0 0 2rem 0;
	}
	.intro_contents_history_contents {
		color: #fff;
		font-size: 1.6rem;
		line-height: 1.6;
	}
	${device.mobile} {
		width:100%;	
		padding:0;
		border-top:1px solid #fff; padding:2rem 0 0 0;
		.intro_contents_txt {text-align:center;}
	}
`;