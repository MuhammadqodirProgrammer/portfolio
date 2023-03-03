import React, { useRef } from 'react';
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
const emailRef = useRef();
const subjectRef = useRef();
const textareaRef = useRef();
  const handleSubmit =(evt)=>{

evt.preventDefault()
console.log({
  name:nameRef.current.value,
  email:emailRef.current.value,
  subject:subjectRef.current.value,
  message:textareaRef.current.value,
});
  }
	return (
		<TextAnimationBox className=' text-white'>
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
									C
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
									n
								</span>
								<span
									className='blast'
									aria-hidden='true'
									style={{ opacity: '1' }}
								>
									t
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
									c
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
						
							<ContactFormDiv>
								<ContactForm id='contact' autoComplete='off' onSubmit={handleSubmit} >
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
                    ref={subjectRef}
											type='text'
											placeholder='Subject'
											autoComplete='off'
											required
											id='subject'
											name='subject'
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
					</SimpledivFlex>
				</TextAnimationBody>
			</TextAnimationHtml>
			<MyPoto>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.099675563748!2d69.20272249782492!3d41.284935093865826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a2e226429b3%3A0x714de973f1b285b!2zMTMg0YPQu9C40YbQsCDQmtCw0YLQsNGA0YLQsNC7LCDQotCw0YjQutC10L3RgiAxMDAwOTcsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1677647733341!5m2!1sru!2s'
					style={{ border: '0', width: '100%', height: '100%' }}
					allowFullScreen=''
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
				></iframe>
			</MyPoto>
		</TextAnimationBox>
	);
};
