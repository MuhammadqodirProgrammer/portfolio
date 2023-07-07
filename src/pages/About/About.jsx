import React, { useEffect, useState } from 'react';
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
export const About = () => {
	let mytextAll = "About me";
	const [nameAll, setNameAll] = useState([]);
	const [isHover, setIsHover] = useState(false);
	const [index, setIndex] = useState();
	useEffect(() => {
		
		setNameAll(mytextAll.split(''));
	}, []);
	return (
		<TextAnimationBox classNameName=' text-white'>
        <TextAnimationHtml>

			<TextAnimationBody>
				<SimpledivFlex>
					<Simplediv>
						<MyHeading aria-label='About Me' className='blast-root'>
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
