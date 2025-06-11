import React from "react";
import './psycho.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer.jsx';

function Psycho() {
    return (
        <>
            <Navbar />
            <div className='nfood1'>
                <p className='nfood-title1'>Psychosocial support and Inclusive Counseling </p>
                <div className='nbox1'>
                    <p className='nfood-text1'>Psychosocial Support and Inclusive Counseling is an add-on course designed to equip learners with skills to address emotional, social, and psychological well-being in diverse populations. It emphasizes inclusive practices that respect cultural, gender, and ability differences. The course prepares participants to provide empathetic, accessible, and context-sensitive counseling support.</p>
                    <p className='nfood-text2'>The program is available in two formats: an add-on course and a diploma program.</p>
                    <p className='nfood-text2'>The <strong>add-on course</strong> in Psychosocial Support and Inclusive Counseling is designed as a supplementary program for students currently pursuing other academic degrees. It offers foundational knowledge and basic practical skills in counseling, enabling learners to integrate psychosocial awareness into their primary field of study. The course is ideal for those seeking an introduction to inclusive counseling without the commitment of a full-time program.</p>
                    <p className='nfood-text2'>The <strong>certificate course or diploma version</strong> is a more intensive, standalone program aimed at graduates, professionals, or individuals seeking specialized training in the field. It provides deeper theoretical understanding, hands-on practice, and professional competency in psychosocial support and inclusive counseling. This format is suited for those looking to enhance their qualifications or pursue a career in mental health and counseling services.</p>
                </div>
            </div>
            

            <div className='nlearning'>
                <p className='nfood-title2'>Learning Outcomes</p>
                <div className='nlearning-box'>
                    <div className='nleft'>
                    <div className='nlt'>
                        <img src='tick.svg' className='tick' alt='best bsc food processing in kochi'/>
                        <p className='nlt-text'>Differentiate between counseling, guidance, and psychotherapy.</p>
                    </div> 

                    <div className='nlt'>
                        <img src='tick.svg' className='tick' alt='diploma in food processing in kerala'/>
                        <p className='nlt-text'>Identify the main goals and broad applications of counseling.</p>
                    </div> 

                    <div className='nlt'>
                        <img src='tick.svg' className='tick' alt='diploma in food processing'/>
                        <p className='nlt-text'>Understand the ethical principles that guide counseling practice.</p>
                    </div> 

                    <div className='nlt'>
                        <img src='tick.svg' className='tick' alt='entrepreneurship courses in food technology kerala'/>
                        <p className='nlt-text'>Recognize the essential qualities of effective counselors and barriers to communication.</p>
                    </div>

                    <div className='nlt'>
                        <img src='tick.svg' className='tick' alt='entrepreneurship courses in food technology kerala'/>
                        <p className='nlt-text'>Describe the stages, techniques, and adaptations used in counseling for special populations.</p>
                    </div>  
                    </div>

                    <div className='nright'>
                        <img src='psychology.svg' alt='coursees for psychology students in kerala'/>                   
                    </div>
                </div>

                <div className='ngiant'>
                    <div className='ngiant-left'>
                        <p className='nleft-header'>Core Learning Areas</p>
                        <div className='nleft-box'>
                            <ul className='ncore-areas-list'>
                                <li>Foundations of Counseling – Understanding definitions, ethics, stages, and communication in counseling.</li>
                                <li>Counseling Techniques and Approaches – Learning key methods like person-centered, CBT, behavioral, feminist, and postmodern approaches.</li>
                                <li>Applied Counseling Practice – Engaging in role plays, clinical visits, live sessions, and therapy workshops.</li>
                                <li>Specialized Counseling Areas – Addressing counseling needs of special populations, families, and groups.</li>
                                <li>Assessment and Professional Scope – Exploring testing, diagnosis, and diverse settings where counseling is applied.</li>
                            </ul>
                        </div>
                    </div>

                    <div className='ngiant-right'>
                        <p className='nright-header'>Training & Certification Programs</p>
                         <div className='nright-box'>
                            <div className='nlb'>
                                <div className='nedath'>
                                <p className='nrtext'>
                                    <ul className='nrlist'>
                                        <li>Foundational Psychological Theories</li>
                                        <li>Core Counseling Skills Development</li>
                                        <li>Cognitive Behavioral Therapy (CBT) Workshops</li>
                                        <li>Transactional Analysis Workshops</li>
                                        <li>Hands-on Training in Therapeutic Methods</li>
                                    </ul>
                                </p>
                                </div>

                                <div className='nvalath'>
                                    <p className='nrtext'>
                                    <ul className='nrlist'>
                                        <li>Live Counselling Sessions</li>
                                        <li>Role-Play Sessions</li>
                                        <li>Clinical Visits</li>
                                        <li>Industry Visits</li>
                                        <li>Ethical and Professional Development</li>
                                    </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='nlastt'>
                <p className='nlast-header'>Job Sectors & Job Roles</p>
                <div className='nfinal-boxx1'> 
                    <div className='nbig-beautiful-box'>   
                    <p className='nfinaltext'>                        
                        <ul className='nfinalrlist'>
                            <li>School Counselor</li>
                            <li>Mental Health Counselor</li>
                            <li>Career Counselor</li>
                            <li>Marriage and Family Therapist</li>
                            <li>Substance Abuse Counselor</li>
                            <li>Rehabilitation Counselor</li>
                        </ul>
                    </p>
                    <p className='nfinaltext'>
                        <ul className='nfinalrlist'>
                            <li>Geriatric Counselor</li>
                            <li>Sports Psychologist</li>
                            <li>Organizational Consultant</li>
                            <li>Researcher</li>
                            <li>Teaching Field</li>
                            <li>Non-profit organizations/NGO</li>
                        </ul>
                    </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Psycho;