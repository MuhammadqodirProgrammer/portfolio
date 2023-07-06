import React, { useEffect, useRef, useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import {
	BtnContact,
	BtnContactDiv,
	MyHeading,
	MyPoto,
	Simplediv,
	SimpledivFlex,
	SpanBase,
	SpanBg,
	Spantext,
	TextAnimationBody,
	TextAnimationBox,
	TextAnimationHtml,
	TextPr,
} from './textanimation.style';
import './animationtext.scss';
import './text';
export const TextAnimation = () => {
	let mytextAll = "Hi,                         I'm Muhammadqodirweb developer";
	const headingRef = useRef();
	const [nameAll, setNameAll] = useState([]);
	const [isHover, setIsHover] = useState(false);
	const [index, setIndex] = useState();
	useEffect(() => {
		
		setNameAll(mytextAll.split(''));
	}, []);

	const [text] = useTypewriter({
		words: [
			'Front End Developer',
			'Front End Developer',
			'Front End Developer',
		],
		loop: {},
		typeSpeed: 120,
		delaySpeed: 80,
	});

	return (
		<TextAnimationBox classNameName=' text-white'>
			<TextAnimationHtml>
				<TextAnimationBody>
					{/* <SimpledivFlex> */}
					<Simplediv>
						<MyHeading
							ref={headingRef}
							aria-label=' Hi,  I’m  Muhammadqodir,  web developer'
							className='blast-root'
						>
							{nameAll?.map((t, i) => {
								return (
									<>
										<span
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
											key={i + 1}
										>
											{t}
										</span>
									</>
								);
							})}
						
						</MyHeading>
						<TextPr>
							<span style={{}}>{text}</span>
							<span style={{ color: 'black' }}>
								<Cursor cursorStyle='🖋' />
							</span>
						</TextPr>

						<BtnContact to='/contact'>
							<BtnContactDiv>
								<SpanBg></SpanBg>
								<SpanBase></SpanBase>
								<Spantext>Contact me!</Spantext>
							</BtnContactDiv>
						</BtnContact>
					</Simplediv>

				
				</TextAnimationBody>
			</TextAnimationHtml>
		</TextAnimationBox>
	);
};
