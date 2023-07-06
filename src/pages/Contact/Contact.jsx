import React, { useEffect, useRef, useState } from 'react';
import {
	BtnContact,
	BtnContactDiv,
	ContactForm,
	ContactFormDiv,
	ContactLink,
	FormBox,
	FormBoxWrapper,
	FormInput,
	FormInputSubject,
	FormTextarea,
	MyHeading,
	MyPoto,
	Simplediv,
	Simplediv2,
	SimpledivFlex,
	SpanBase,
	SpanBg,
	Spantext,
	TextAnimationBody,
	TextAnimationBox,
	TextAnimationHtml,
	TextPr,
} from './contact.style.jsx';
import '../../components/TextAnimation/animationtext.scss';
import '../../components/TextAnimation/text.js';
export const Contact = () => {
	const nameRef = useRef();
	const phoneRef = useRef();
	const emailRef = useRef();
	const subjectRef = useRef();
	const textareaRef = useRef();
	let mytextAll = 'Contact me';
	const [nameAll, setNameAll] = useState([]);
	const [isHover, setIsHover] = useState(false);
	const [index, setIndex] = useState();
	useEffect(() => {
		setNameAll(mytextAll.split(''));
	}, []);

	const handleSubmit = (evt) => {
		evt.preventDefault();
		console.log({
			name: nameRef.current.value,
			email: emailRef.current.value,
			subject: subjectRef.current.value,
			message: textareaRef.current.value,
		});

		let tg = {
			token: '6307470300:AAEZZz6ZKgQoZF1VGOTmOAMbMtTSsNSrZ-A',
			chat_id: '-1001876092258',
		};

		function sendMessage() {
			const url = `https://api.telegram.org/bot${
				tg.token
			}/sendMessage?chat_id=${
				tg.chat_id
			}&text=${` ismi: ${nameRef.current.value}   \n email: ${emailRef.current.value} \n  subject: ${subjectRef.current.value} \n  habar: ${textareaRef.current.value} \n  tel: ${phoneRef.current.value}`}`;

			const xht = new XMLHttpRequest();

			xht.onreadystatechange = function () {
				if (xht.readyState == XMLHttpRequest.DONE) {
					if (JSON.parse(xht.responseText).ok) {
						alert('Message sent successfully');
					}
				}
			};
			xht.open('GET', url);
			xht.send();
			nameRef.current.value = '';
			emailRef.current.value = '';
			subjectRef.current.value = '';
			textareaRef.current.value = '';
		}
		sendMessage();
	};
	return (
		<TextAnimationBox className=' text-white'>
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
												className={
													isHover && i == index ? 'onHover' : 'notHover'
												}
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

							<ContactFormDiv>
								<ContactForm
									id='contact'
									autoComplete='off'
									onSubmit={handleSubmit}
								>
									<FormBox>
										<FormBoxWrapper>
											<FormInput
												ref={nameRef}
												type='text'
												placeholder='Name'
												autoComplete='off'
												required
												id='name'
												name='name'
											/>
											<FormInput
												ref={emailRef}
												type='email'
												placeholder='Email'
												autoComplete='off'
												required
												id='email'
												name='email'
											/>
										</FormBoxWrapper>
										<FormInputSubject
											ref={phoneRef}
											type='number'
											placeholder='Phone'
											autoComplete='off'
											required
										/>
										<FormInputSubject
											ref={subjectRef}
											type='text'
											placeholder='Subject'
											autoComplete='off'
										/>

										<FormTextarea
											ref={textareaRef}
											autoComplete='off'
											placeholder='Message'
											name='message'
											required=''
											style={{ height: '150px', width: '510px' }}
										></FormTextarea>
										<BtnContactDiv>
											<BtnContact type='submit'>Send</BtnContact>
										</BtnContactDiv>
									</FormBox>
								</ContactForm>
							</ContactFormDiv>
						</Simplediv>

						<Simplediv2>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.099675563748!2d69.20272249782492!3d41.284935093865826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a2e226429b3%3A0x714de973f1b285b!2zMTMg0YPQu9C40YbQsCDQmtCw0YLQsNGA0YLQsNC7LCDQotCw0YjQutC10L3RgiAxMDAwOTcsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1677647733341!5m2!1sru!2s'
								style={{ border: '0', width: '100%', height: '100%' }}
								allowFullScreen=''
								loading='lazy'
								referrerPolicy='no-referrer-when-downgrade'
							></iframe>
						</Simplediv2>
					</SimpledivFlex>
				</TextAnimationBody>
			</TextAnimationHtml>
		</TextAnimationBox>
	);
};
