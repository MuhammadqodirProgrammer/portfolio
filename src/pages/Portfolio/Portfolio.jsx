import React, { useEffect, useRef, useState } from 'react';
import {
	Card,
	CardBox,
	Cardbtn,
	CardImg,
	CardPr,
	CardText,
	CardTitle,
	MyHeading,
	PortfolioBox,
	TextAnimationBody,
	TextAnimationBox,
	TextAnimationHtml,
} from './portfolio.style.jsx';
import myImg from '../../assets/images/foodapp2.jpg';
import myImg2 from '../../assets/images/scootimg.jpg';
import myImg3 from '../../assets/images/CarRental.jpg';
import myImg4 from '../../assets/images/inwood.jpg';
import '../../components/TextAnimation/animationtext.scss';
import '../../components/TextAnimation/text.js';
import './portfolio.scss';
import  Carousel  from '../../components/Cerousel/Carousel';
export const Portfolio = () => {
	let mytextAll = "Portfolio";
const [nameAll, setNameAll] = useState([]);
const [isHover, setIsHover] = useState(false);
const [index, setIndex] = useState();
useEffect(() => {
	
	setNameAll(mytextAll.split(''));
}, []);
	return (
		<TextAnimationBox className=' text-white'>
			<TextAnimationHtml>
				<TextAnimationBody>
					<MyHeading
						aria-label=' Hi,  I’m  ack,  web developer'
						className='blast-root'
					>
					{nameAll?.map((t, i) => {
								return (
									<>
										<span
										key={i }
											style={
												t === ' '
													? { display: 'inline-block', marginRight: '20px' }
													: t === '  '
													? { display: 'block' }
													: { display: 'inline-block', marginRight: '0' }
											}
											className={isHover && i == index ? 'onHover' : 'notHover'}
											onMouseEnter={() => {
												setIndex(i);
												if (isHover || index) {
													setIsHover(true);
												}
												
											}}
											onMouseOut={() => {
												setIsHover(false);
												
											}}
											about={i}
											
										>
											{t}
										</span>
									</>
								);
							})}
					</MyHeading>

<Carousel />
					{/* <PortfolioBox>
						<CardBox>
							<Card className='card_portfolio'>
								<CardImg src={myImg} alt='card-img' />
								<div className='active_div' id='active_card'>
									{' '}
								</div>
								<CardText className='card_content'>
									<CardTitle>Food</CardTitle>
									<CardPr> React, Styled component, Bootstarpt , </CardPr>

									<Cardbtn className='btn-view' id='btn_view'>
										<a
											href='https://food-app07.netlify.app/'
											target='_blank'
											rel='noopener noreferrer'
											className='link_portfolio'
										>
											View
										</a>
									</Cardbtn>
								</CardText>
							</Card>

							<Card className='card_portfolio'>
								<CardImg src={myImg4} alt='card-img' />
								<div className='active_div' id='active_card'>
									{' '}
								</div>
								<CardText className='card_content'>
									<CardTitle>Inwood</CardTitle>
									<CardPr> Html, Scss, Javascript , Slick Js </CardPr>

									<Cardbtn className='btn-view' id='btn_view'>
										<a
											href='https://inwood-mk.netlify.app/'
											target='_blank'
											rel='noopener noreferrer'
											className='link_portfolio'
										>
											View
										</a>
									</Cardbtn>
								</CardText>
							</Card>
							<Card className='card_portfolio'>
								<CardImg src={myImg3} alt='card-img' />
								<div className='active_div' id='active_card'>
									{' '}
								</div>
								<CardText className='card_content'>
									<CardTitle>CarRental</CardTitle>
									<CardPr>
										It was prepared in 12 hours in the competition held in
										"Najot Talim"{' '}
									</CardPr>
									<CardPr> Html, Scss, Javascript , Slick Js </CardPr>

									<Cardbtn className='btn-view' id='btn_view'>
										<a
											href='https://carrental-mk.netlify.app/'
											target='_blank'
											rel='noopener noreferrer'
											className='link_portfolio'
										>
											View
										</a>
									</Cardbtn>
								</CardText>
							</Card>
							<Card className='card_portfolio'>
								<CardImg src={myImg2} alt='card-img' />
								<div className='active_div' id='active_card'>
									{' '}
								</div>
								<CardText className='card_content'>
									<CardTitle>Scoot</CardTitle>
									<CardPr> Html, Scss, Bootstarpt </CardPr>

									<Cardbtn className='btn-view' id='btn_view'>
										<a
											href='https://scoot-mk-02.netlify.app/'
											target='_blank'
											rel='noopener noreferrer'
											className='link_portfolio'
										>
											View
										</a>
									</Cardbtn>
								</CardText>
							</Card>
						</CardBox>
					</PortfolioBox> */}
				</TextAnimationBody>
			</TextAnimationHtml>
		</TextAnimationBox>
	);
};
