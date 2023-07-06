import styled from 'styled-components';
import myImg from '../../assets/images/foodapp2.jpg';

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
export const MyHeading = styled.h2`
	color: #08fdd8;
	margin: 0;

	font-family: 'Lexend Deca', sans-serif;
	font-weight: 400;
	font-size: 4rem;
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
export const PortfolioBox = styled.div`
position: relative;
max-height:auto;
margin-top: 30px;
`;
export const CardBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	gap: 15px;
	padding-bottom: 10px;
    margin-top: 30px;
`;
export const Card = styled.div`
	
   

`;
export const CardImg = styled.img`
background-image: url(${myImg});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
	height: 100%;
	object-fit: cover;
	position: relative;
	width: 100%;
	z-index: -1;
`;
export const CardText = styled.div`
	background: linear-gradient(180deg, rgba(0, 0, 0, 0.2), #000);
	transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
	bottom: 0;
	padding: 10px 20px;
	position: absolute;
	width: 100%;
	z-index: 3;
`;
export const CardTitle = styled.h4`
	color: #fff;
	font-size: 24px;
	font-weight: 500;
	line-height: 24px;
	margin-bottom: 20px;
	margin-top: 0;
`;
export const CardPr = styled.p`
	color: #fff;
	font-size: 14px;
	font-weight: 700;
	margin-bottom: 15px;
`;
export const Cardbtn = styled.button`
	background: transparent;
	border: 2px solid #20c997;
	border-radius: 4px;
	color: #fff;
	cursor: pointer;
	font-size: 14px;
	font-weight: 700;
	height: 40px;
	line-height: 34px;
	margin-bottom: 10px;
	margin-top: 30px;
	padding: 0 23px;
	text-transform: uppercase;
	transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
   
`;
