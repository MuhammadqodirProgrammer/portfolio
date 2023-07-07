import React, { Component } from "react";
import Slider from "react-slick";
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
} from '../../pages/Portfolio/portfolio.style';
import myImg from '../../assets/images/foodapp2.jpg';
import myImg2 from '../../assets/images/scootimg.jpg';
import myImg3 from '../../assets/images/CarRental.jpg';
import myImg4 from '../../assets/images/inwood.jpg';
import "./carousel.css"
export default class Carousel extends Component {

   
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2,
                dots: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
              }
            }]
      };

      return (
        <PortfolioBox  >
          
          <Slider {...settings}>
          
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
						
          </Slider>
        </PortfolioBox>
      );
    }
  }