import React from 'react';
import {
	BtnContact,
	BtnContactDiv,
	ContactLink,
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
} from './about.style.jsx';
import '../../components/TextAnimation/animationtext.scss';
import '../../components/TextAnimation/text.js';
export const About = () => {

	return (
		<TextAnimationBox classNameName=' text-white'>
        <TextAnimationHtml>

			<TextAnimationBody>
				<SimpledivFlex>
					<Simplediv>
						<MyHeading aria-label='About Me' className='blast-root'>
							<span
								className='blast'
								aria-hidden='true'
								style={{ opacity: '1' }}
							>
								A
							</span>
							<span
								className='blast'
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
								o
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
								t
							</span>{' '}
							<span
								className='blast'
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
								e
							</span>
						</MyHeading>
						<TextPr>
                        I am Muhammadqodir Komilov .  I like to learn more about the programming, challenges that take me out of my comfort zone are the best. As I am Front-end developer I focused on creating Web and Mobile applications. I really like different projects that solve real problems.
                      <br /> <br />
                      <ContactLink to='/contact'>
                      Let’s make something special.
                      </ContactLink>  
						</TextPr>

						
					</Simplediv>

					<MyPoto></MyPoto>
				</SimpledivFlex>
			</TextAnimationBody>
        </TextAnimationHtml>
		</TextAnimationBox>
	);
};
