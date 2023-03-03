import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bgimg from "../../assets/images/photo_2023-02-02_18-49-00.jpg"
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
export const TextPr = styled.div`
	font-size: 1.6rem;
	letter-spacing: 4px;
	margin-top: 3rem;
	display: block;
	color: #8d8d8d;
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

export const MyHeading = styled.h1`
	color: #fff;
	margin: 0;

	font-family: 'Lexend Deca', sans-serif;
	font-weight: 400;
	font-size: 3.5rem;
	line-height: 5rem;
	position: relative;
    margin-top: 30px;
	&::before {
		content: '<h1>';
		font-family: 'La Belle Aurore', cursive;
		color: #515152;
		font-size: 1.8rem;
		position: absolute;
		margin-top: -3rem;
		left: -1rem;
	}
	&::after {
		content: '<h1/>';
		font-family: 'La Belle Aurore', cursive;
		color: #515152;
		font-size: 1.8rem;
		position: absolute;
		margin-top: 1.6rem;
		margin-left: 2rem;
	}

  @media (max-width: 992px)   {
    font-weight: 400;
	font-size: 3rem;
	line-height: 4rem;
	position: relative;
    margin-top: 30px;
  }
  @media (max-width: 700px)   {
    font-weight: 400;
	font-size: 2rem;
	line-height: 3rem;
	position: relative;
    margin-top: 30px;
  }
`;
export const MyPoto =styled.div`
width: 380px;
max-height: 500px;
min-height: 450px;
/* background-color: red; */
background-image: url(${bgimg});
background-repeat: no-repeat;
background-size: cover ;
background-position: center ;
padding-right: 50px;
border-radius: 50% 50% 5px 5px ;

`
export const Simplediv =styled.div`


`
export const SimpledivFlex =styled.div`

display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-around;
gap: 10px;
`
export const BtnContact = styled(Link)`
	color: #08fdd8;
	font-size: 14px;
	letter-spacing: 4px;
	font-family: 'Open Sans', sans-serif;
	text-decoration: none;
	margin-top: 20px;
	position: relative;
	width: 100%;
	max-width: 220px;
	height: 50px;
	line-height: 50px;
	display: block;
	text-align: center;
	text-decoration: none;
margin-top: 65px;

`;

export const BtnContactDiv = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
	overflow: hidden;
	

	&:hover {
		color: black;
		background-color: #08fdd8;
        transition: 0.3s ease-out all;
	}
`;

export const SpanBg = styled.span`
	
`;
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
export const TextAnimationHtml = styled.div`
	position: relative;
    padding: 30px 0;
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