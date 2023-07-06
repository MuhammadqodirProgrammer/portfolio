import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bgimg from '../../assets/images/photo_2023-02-02_18-49-00.jpg';
export const TextAnimationBox = styled.div`
	text-align: left;
	margin-left: 140px;
`;
export const TextAnimationBody = styled.div`
	position: relative;
	padding: 30px 0;
	&::before {
		content: '<body>';
		font-family: 'La Belle Aurore', cursive;
		color: #515152;
		font-size: 18px;
		position: absolute;
		margin-top: -1.6rem;
		left: -1rem;
	}
	&::after {
		content: '<body/>';
		font-family: 'La Belle Aurore', cursive;
		color: #515152;
		font-size: 1.8rem;
		font-size: 18px;
		position: absolute;
		left: -1rem;
		bottom: -2rem;
	}
`;
export const TextAnimationHtml = styled.div`
	position: relative;
	padding: 30px 0;
	z-index: 999;
	&::before {
		content: '<html>';
		font-family: 'La Belle Aurore', cursive;
		color: #515152;
		font-size: 18px;
		position: absolute;
		margin-top: -1.6rem;
		left: -2rem;
	}
	&::after {
		content: '<html/>';
		font-family: 'La Belle Aurore', cursive;
		color: #515152;
		font-size: 1.8rem;
		font-size: 18px;
		position: absolute;
		left: -2rem;
		bottom: -2rem;
	}
`;
export const TextPr = styled.div`
	max-width: 500px;
	font-size: 16px;
	letter-spacing: 2px;
	margin-top: 3rem;
	display: block;
	color: white;
	position: relative;
	&::before {
		content: '<p>';
		font-family: 'La Belle Aurore', cursive;
		color: #515152;
		font-size: 18px;
		position: absolute;
		margin-top: -1.2rem;
		left: -1rem;
	}
	&::after {
		content: '<p/>';
		font-family: 'La Belle Aurore', cursive;
		color: #515152;
		font-size: 1.8rem;
		font-size: 18px;
		position: absolute;
		left: -1rem;
		bottom: -1.6rem;
	}
`;

export const MyHeading = styled.h2`
	color: #08fdd8;
	margin: 0;

	font-family: 'Lexend Deca', sans-serif;
	font-weight: 400;
	font-size: 3.5rem;
	line-height: 5rem;
	position: relative;
	margin-top: 30px;
	&::before {
		content: '<h2>';
		font-family: 'La Belle Aurore', cursive;
		color: #515152;
		font-size: 18px;
		position: absolute;
		margin-top: -2rem;
		left: -1rem;
	}
	&::after {
		content: '<h2/>';
		font-family: 'La Belle Aurore', cursive;
		color: #515152;
		font-size: 1.8rem;
		font-size: 18px;
		position: absolute;
		left: -1rem;
		bottom: -2.6rem;
	}

	@media (max-width: 992px) {
		font-weight: 400;
		font-size: 3rem;
		line-height: 4rem;
		position: relative;
		margin-top: 30px;
	}
	@media (max-width: 700px) {
		font-weight: 400;
		font-size: 2rem;
		line-height: 3rem;
		position: relative;
		margin-top: 30px;
	}
`;
export const MyPoto = styled.div`
	position: absolute;
	top: 5px;
	right: 0;
	width: 48vw;
	height: 98vh;
	z-index: 999;
`;
export const Simplediv2 = styled.div`
	/* position: absolute; */
	/* top: 5px; */
	right: 0;
	width: 48vw;
	height: 98vh;
	z-index: 999;
`;
export const Simplediv = styled.div``;
export const SimpledivFlex = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 10px;
`;
export const BtnContact = styled.button`
	color: #08fdd8;
	font-size: 14px;
	letter-spacing: 4px;
	font-family: 'Open Sans', sans-serif;
	width: 100%;
	margin-left: auto;
	max-width: 120px;
	height: 40px;
	line-height: 40px;
	display: block;
	text-align: center;
	border: 1px solid #08fdd8;
	background-color: transparent;

	&:hover {
		color: black;
		background-color: #08fdd8;
		transition: 0.3s ease-out all;
	}
`;
export const BtnContactDiv = styled.div`
	width: 100%;
	margin-top: 10px;
`;
export const ContactLink = styled(Link)`
	color: #08fdd8;
	-webkit-transition: color 0.3s;
	-o-transition: color 0.3s;
	transition: color 0.3s;
	text-decoration: none;
	&:hover {
		color: #08fdd8;
		-webkit-transition: color 0.3s;
		-o-transition: color 0.3s;
		transition: color 0.3s;
	}
`;

export const SpanBg = styled.span``;
export const Spantext = styled.span`
	z-index: 4;
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
`;
export const SpanBase = styled.span`
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	position: absolute;
	z-index: 2;
	width: 100%;
	height: 100%;
	left: 0;
	border: 1px solid #08fdd8;
`;

export const ContactFormDiv = styled.div`
	width: 100%;
	padding-top: 2.5rem;
	display: block;
	position: relative;
`;
export const ContactForm = styled.form`
	position: relative;

	&::before {
		content: '<form>';
		font-family: 'La Belle Aurore', cursive;
		color: #515152;
		font-size: 18px;
		position: absolute;
		bottom: 100%;
		left: -1rem;
	}

	&::after {
		display: block !important;
		content: '</form>';
		font-family: 'La Belle Aurore', cursive;
		color: #515152;
		font-size: 18px;
		position: absolute;
		top: 100%;
		left: -1rem;
	}
`;
export const FormInput = styled.input`
	width: 50%;
	border: 1px solid transparent;

	background: #115173;
	height: 50px;
	font-size: 16px;
	color: white;
	padding: 0 20px;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	&:focus {
		outline: #115173;
		border: 1px solid #08fdd8;
	}
	&:focus-visible {
		border: 1px solid #08fdd8;
		outline: #115173;
	}
`;
export const FormInputSubject = styled.input`
	border: 1px solid transparent;
	width: 100%;

	background: #115173;
	height: 50px;
	font-size: 16px;
	color: white;
	padding: 0 20px;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	margin-bottom: 20px;
	&:focus {
		outline: #115173;
		border: 1px solid #08fdd8;
	}
	&:focus-visible {
		border: 1px solid #08fdd8;
		outline: #115173;
	}
`;
export const FormTextarea = styled.textarea`
	width: 100%;
	border: 1px solid transparent;
	background: #115173;
	height: 50px;
	font-size: 16px;
	color: white;
	padding: 0 20px;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;

	&:focus {
		outline: #115173;
		border: 1px solid #08fdd8;
	}
	&:focus-visible {
		border: 1px solid #08fdd8;
		outline: #115173;
	}
`;
export const FormBox = styled.div`
	max-width: 510px;
`;

export const FormBoxWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 20px;
	margin-bottom: 20px;
`;
