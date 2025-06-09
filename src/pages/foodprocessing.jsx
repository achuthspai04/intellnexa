import react from 'react';
import './foodprocessing.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer.jsx';

function FoodProcessing() {
    return (
        <>
        <Navbar/>
            
            <div className='food1'>
                <p className='food-title1'>Food Processing and Entrepreneurship Development Programme</p>
                <div className='box1'>
                    <p className='food-text1'>This comprehensive course in Food Processing and Entrepreneurship Development  Programme is designed to equip students with both theoretical knowledge and hands-on  experience across key areas of the food industry. It integrates core scientific principles with  modern innovations to prepare students for dynamic roles in food safety, quality control,  processing, and entrepreneurship.</p>
                    <p className='food-text2'>The program is available in two formats: an add-on course and a diploma program </p>
                    <p className='food-text3'>The <strong>add-on course</strong> is specially designed for students currently pursuing undergraduate or  postgraduate degrees in Food Science, Food Technology, Nutrition, Food Processing, and other  Bioscience fields. It aims to enhance their academic journey by providing practical exposure,  industry insights, and value-added national and international certifications alongside their  regular studies. </p>
                    <p className='food-text4'>The <strong>diploma program</strong> provides comprehensive training in food processing technologies,  quality control, food safety, and entrepreneurship. It is ideal for individuals seeking specialized  knowledge and hands-on skills to enter the food industry or start their own food-related  ventures. This program equips learners with the practical competencies and credentials needed  for both employment and entrepreneurship in the growing food sector.</p>
                </div>
            </div>
            

            <div className='learning'>
                <p className='food-title2'>Learning Outcomes</p>
                <div className='learning-box'>
                    <div className='left'>
                    <div className='lt'>
                        <img src='tick.svg' className='tick' alt='best food processing courses in kereala'/>
                        <p className='lt-text'>Develop technical competencies in food processing and preservation. </p>
                    </div>

                    <div className='lt'>
                        <img src='tick.svg' className='tick' alt='best bsc food processing in kochi'/>
                        <p className='lt-text'>Understand and implement food safety, hygiene, and quality standards</p>
                    </div> 

                    <div className='lt'>
                        <img src='tick.svg' className='tick' alt='diploma in food processing in kerala'/>
                        <p className='lt-text'>Gain entrepreneurial and managerial skills to establish food startups.  </p>
                    </div> 

                    <div className='lt'>
                        <img src='tick.svg' className='tick' alt='diploma in food processing'/>
                        <p className='lt-text'>Apply practical knowledge in product development and business incubation. </p>
                    </div> 

                    <div className='lt'>
                        <img src='tick.svg' className='tick' alt='entrepreneurship courses in food technology kerala'/>
                        <p className='lt-text'> Be prepared for employment or self-employment in the food sector.</p>
                    </div> 
                    </div>

                    <div className='right'>
                        <img src='food.svg' alt='food processing technology courses'/>                   
                    </div>
                </div>

                <div className='giant'>
                    <div className='giant-left'>
                        <p className='left-header'>Core Learning Areas</p>
                    </div>

                    <div className='giant-right'>
                        <p className='right-header'>Training & Certification Programs</p>
                    </div>
                </div>
            </div>
            
       <Footer/> 
        </>
    );
    }

export default FoodProcessing;