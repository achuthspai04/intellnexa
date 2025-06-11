import React from "react";
import './nutrition.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer.jsx';

function NutritionAndDietetics() {
    return (
        <>
            <Navbar />
            <div className='pfood1'>
                <p className='pfood-title1'>Nutrition and Dietetics Programme</p>
                <div className='pbox1'>
                    <p className='pfood-text1'>The Nutrition and Dietetics Programme is a comprehensive academic and skill-based  course designed to equip students with essential theoretical knowledge and practical  competencies in human nutrition, therapeutic dietetics, food science, and public health. It  aims to prepare students for diverse careers in nutrition, community health, food service  management, and wellness entrepreneurship.</p>
                    <p className='pfood-text2'>The <strong>diploma program</strong> offers in-depth training in nutrition assessment, diet planning,  therapeutic nutrition and public health interventions. It is ideal for individuals seeking a  career in clinical or community nutrition, food service management, wellness coaching or  nutraceutical companies. </p>
                </div>
            </div>
            

            <div className='plearning'>
                <p className='pfood-title2'>Learning Outcomes</p>
                <div className='plearning-box'>
                    <div className='pleft'>
                    <div className='plt'>
                        <img src='tick.svg' className='tick' alt='best food processing courses in kereala'/>
                        <p className='plt-text'>Develop a strong foundation in human nutrition, physiology, and biochemistry.</p>
                    </div>

                    <div className='plt'>
                        <img src='tick.svg' className='tick' alt='best bsc food processing in kochi'/>
                        <p className='plt-text'>Gain expertise in diet planning for health promotion and disease management.</p>
                    </div> 

                    <div className='plt'>
                        <img src='tick.svg' className='tick' alt='diploma in food processing in kerala'/>
                        <p className='plt-text'>Understand food science principles and the role of functional foods.</p>
                    </div> 

                    <div className='plt'>
                        <img src='tick.svg' className='tick' alt='diploma in food processing'/>
                        <p className='plt-text'>Build communication and counseling skills for client-centered nutrition care.</p>
                    </div> 

                    <div className='plt'>
                        <img src='tick.svg' className='tick' alt='entrepreneurship courses in food technology kerala'/>
                        <p className='plt-text'>Be equipped for careers in healthcare, wellness, and food service sectors.</p>
                    </div>

                    <div className='plt'>
                        <img src='tick.svg' className='tick' alt='entrepreneurship courses in food technology kerala'/>
                        <p className='plt-text'> Be prepared for employment or self-employment in the food sector.</p>
                    </div>  
                    </div>

                    <div className='pright'>
                        <img src='nutrition.svg' alt='food processing technology courses'/>                   
                    </div>
                </div>

                <div className='pgiant'>
                    <div className='pgiant-left'>
                        <p className='pleft-header'>Core Learning Areas</p>
                        <div className='pleft-box'>
                            <ul className='pcore-areas-list'>
                                <li>Fundamentals of Human Physiology and Nutritional Biochemistry</li>
                                <li>Essentials of Human Health and Nutrition</li>
                                <li>Nutrition Through the Life Cycle (Pregnancy, Infants, Elderly, etc.)</li>
                                <li>Diet Therapy and Medical Nutrition Management</li>
                                <li>Food Science and Meal Planning</li>
                                <li>Public Health Nutrition and Community Nutrition</li>
                                <li>Nutrition Assessment Techniques and Tools</li>
                                <li>Food Service Management and Institutional Catering</li>
                                <li>Nutrition Counseling and Communication Skills</li>
                                <li>Functional Foods, Nutraceuticals, and Recent Trends</li>
                            </ul>
                        </div>
                    </div>

                    <div className='pgiant-right'>
                        <p className='pright-header'>Practicals & Internship</p>
                         <div className='pright-box'>
                            <div className='plb'>
                                <p className='prhead'>Practicals</p>
                                <p className='prtext'>
                                    <ul className='prlist'>
                                        <li>Anthropometric and dietary assessment techniques</li>
                                        <li>Therapeutic meal preparation and menu planning</li>
                                        <li>Institutional food service operations</li>
                                    </ul>
                                </p>
                            </div>

                            <div className='prb'>
                                <p className='prhead'>Internship</p>
                                <p className='prtext'>
                                    <ul className='prlist'>
                                        <li>One month training in hospital</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='plastt'>
                <p className='plast-header'>Job Sectors & Job Roles</p>
                <div className='pfinal-boxx1'>      
                    <div className='ptop'>
                        <p className='pend-text'>This program provides learners with holistic training in human nutrition and dietetics,  combining scientific theory with real-world applications. Graduates will be prepared to  pursue careers in diverse nutrition-related fields or build independent practices in nutrition  counseling and wellness entrepreneurship.</p>
                    </div> 

                    <div className='pbottom'>
                        <div className='pboxx1'>
                            <p className='ph'>Healthcare Institutions</p>
                            <p className='pt'>
                                <ul className='pend-l'>
                                    <li>Diet Assistant</li>
                                    <li>Nutrition Assistant</li>
                                </ul>
                            </p>
                        </div>
                        <div className='pboxx1'>
                            <p className='ph'>Public Health & NGOs</p>
                            <p className='pt'>
                                <ul className='pend-l'>
                                    <li>Community Nutritionist</li>
                                    <li>Program Coordinator</li>
                                </ul>
                            </p>
                        </div>

                        <div className='pboxx1'>
                            <p className='ph'>Food Service & Hospitality</p>
                            <p className='pt'>
                                <ul className='pend-l'>
                                    <li>Diet Technician</li>
                                    <li>Food Service Supervisor</li>
                                    <li>Executive Nutritionist</li>
                                </ul>
                            </p>
                        </div>

                        <div className='pboxx1'>
                            <p className='ph'>Fitness & Wellness Industry</p>
                            <p className='pt'>
                                <ul className='pend-l'>
                                    <li>Health Coach</li>
                                    <li>Wellness Coach</li>
                                    
                                </ul>
                            </p>
                        </div>

                        <div className='pboxx1'>
                            <p className='ph'>Entrepreneurship</p>
                            <p className='pt'>
                                <ul className='pend-l'>
                                    <li>Nutrition Consultant</li>
                                    <li>Health Blogger</li>
                                    <li>Diet App Developer</li>
                                </ul>
                            </p>
                        </div>
                    </div>   
                </div>
            </div>
            <Footer />
        </>
    );
}

export default NutritionAndDietetics;