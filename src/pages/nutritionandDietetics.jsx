import React from "react";
import './nutrition.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer.jsx';

function NutritionAndDietetics() {
    return (
        <>
            <Navbar />
            <div className='food1'>
                <p className='food-title1'>Nutrition and Dietetics Programme</p>
                <div className='box1'>
                    <p className='food-text1'>The Nutrition and Dietetics Programme is a comprehensive academic and skill-based  course designed to equip students with essential theoretical knowledge and practical  competencies in human nutrition, therapeutic dietetics, food science, and public health. It  aims to prepare students for diverse careers in nutrition, community health, food service  management, and wellness entrepreneurship.</p>
                    <p className='food-text2'>The <strong>diploma program</strong> offers in-depth training in nutrition assessment, diet planning,  therapeutic nutrition and public health interventions. It is ideal for individuals seeking a  career in clinical or community nutrition, food service management, wellness coaching or  nutraceutical companies. </p>
                </div>
            </div>
            

            <div className='learning'>
                <p className='food-title2'>Learning Outcomes</p>
                <div className='learning-box'>
                    <div className='left'>
                    <div className='lt'>
                        <img src='tick.svg' className='tick' alt='best food processing courses in kereala'/>
                        <p className='lt-text'>Develop a strong foundation in human nutrition, physiology, and biochemistry.</p>
                    </div>

                    <div className='lt'>
                        <img src='tick.svg' className='tick' alt='best bsc food processing in kochi'/>
                        <p className='lt-text'>Gain expertise in diet planning for health promotion and disease management.</p>
                    </div> 

                    <div className='lt'>
                        <img src='tick.svg' className='tick' alt='diploma in food processing in kerala'/>
                        <p className='lt-text'>Understand food science principles and the role of functional foods.</p>
                    </div> 

                    <div className='lt'>
                        <img src='tick.svg' className='tick' alt='diploma in food processing'/>
                        <p className='lt-text'>Build communication and counseling skills for client-centered nutrition care.</p>
                    </div> 

                    <div className='lt'>
                        <img src='tick.svg' className='tick' alt='entrepreneurship courses in food technology kerala'/>
                        <p className='lt-text'>Be equipped for careers in healthcare, wellness, and food service sectors.</p>
                    </div>

                    <div className='lt'>
                        <img src='tick.svg' className='tick' alt='entrepreneurship courses in food technology kerala'/>
                        <p className='lt-text'> Be prepared for employment or self-employment in the food sector.</p>
                    </div>  
                    </div>

                    <div className='right'>
                        <img src='nutrition.svg' alt='food processing technology courses'/>                   
                    </div>
                </div>

                <div className='giant'>
                    <div className='giant-left'>
                        <p className='left-header'>Core Learning Areas</p>
                        <div className='left-box'>
                            <ul className='core-areas-list'>
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

                    <div className='giant-right'>
                        <p className='right-header'>Practicals & Internship</p>
                         <div className='right-box'>
                            <div className='lb'>
                                <p className='rhead'>Practicals</p>
                                <p className='rtext'>
                                    <ul className='rlist'>
                                        <li>Anthropometric and dietary assessment techniques</li>
                                        <li>Therapeutic meal preparation and menu planning</li>
                                        <li>Institutional food service operations</li>
                                    </ul>
                                </p>
                            </div>

                            <div className='rb'>
                                <p className='rhead'>Internship</p>
                                <p className='rtext'>
                                    <ul className='rlist'>
                                        <li>One month training in hospital</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lastt'>
                <p className='last-header'>Job Sectors & Job Roles</p>
                <div className='final-boxx1'>      
                    <div className='top'>
                        <p className='end-text'>This program provides learners with holistic training in human nutrition and dietetics,  combining scientific theory with real-world applications. Graduates will be prepared to  pursue careers in diverse nutrition-related fields or build independent practices in nutrition  counseling and wellness entrepreneurship.</p>
                    </div> 

                    <div className='bottom'>
                        <div className='boxx1'>
                            <p className='h'>Healthcare Institutions</p>
                            <p className='t'>
                                <ul className='end-l'>
                                    <li>Diet Assistant</li>
                                    <li>Nutrition Assistant</li>
                                </ul>
                            </p>
                        </div>
                        <div className='boxx1'>
                            <p className='h'>Public Health & NGOs</p>
                            <p className='t'>
                                <ul className='end-l'>
                                    <li>Community Nutritionist</li>
                                    <li>Program Coordinator</li>
                                </ul>
                            </p>
                        </div>

                        <div className='boxx1'>
                            <p className='h'>Food Service & Hospitality</p>
                            <p className='t'>
                                <ul className='end-l'>
                                    <li>Diet Technician</li>
                                    <li>Food Service Supervisor</li>
                                    <li>Executive Nutritionist</li>
                                </ul>
                            </p>
                        </div>

                        <div className='boxx1'>
                            <p className='h'>Fitness & Wellness Industry</p>
                            <p className='t'>
                                <ul className='end-l'>
                                    <li>Health Coach</li>
                                    <li>Wellness Coach</li>
                                    
                                </ul>
                            </p>
                        </div>

                        <div className='boxx1'>
                            <p className='h'>Entrepreneurship</p>
                            <p className='t'>
                                <ul className='end-l'>
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