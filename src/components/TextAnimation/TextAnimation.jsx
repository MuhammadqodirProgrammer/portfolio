import React  from 'react';
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
import './text'
export const TextAnimation = () => {



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
							aria-label=' Hi,  I’m  ack,  web developer'
							className='blast-root'
						>
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								H
							</span>
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								i
							</span>
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								,
							</span>{' '}
							<br />
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								I
							</span>
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								’
							</span>
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								m
							</span>
							<span
								className='blast ms-3'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								M
							</span>
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								u
							</span>
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								h
							</span>
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								a
							</span>
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								m
							</span>
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								m
							</span>
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								a
							</span>
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								d
							</span>
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								Q
							</span>
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								o
							</span>
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								d
							</span>
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								i
							</span>
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								r
							</span>
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								,
							</span>
							<br />
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								w
							</span>
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								e
							</span>
							<span
								className='blast me-3'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								b
							</span>
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								d
							</span>
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								e
							</span>
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								v
							</span>
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								e
							</span>
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								l
							</span>
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								o
							</span>
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								p
							</span>
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								e
							</span>
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								r
							</span>
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

					{/* <MyPoto></MyPoto> */}
				{/* </SimpledivFlex> */}
			</TextAnimationBody>
		</TextAnimationHtml>
		</TextAnimationBox>
	);
};
