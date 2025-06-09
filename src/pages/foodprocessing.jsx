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
            
       <Footer/> 
        </>
    );
    }

export default FoodProcessing;