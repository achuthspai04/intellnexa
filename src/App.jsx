import './App.css'
import Navbar from './components/navbar'

function App() {

  const handleConsultationClick = () => {
    window.open("https://wa.me/917907451370?text=Hey, I wanted to schedule a call to know more about your courses and services.", '_blank');
  };

  return (
    <>
      <Navbar />

      <div className="main-box">
        <p className="head1">Welcome to Intellnexa !</p>
        <p className="head2">Imparting Futuristic Solutions</p>
        <p className="p1">
          At Intellnexa, we are committed to delivering high-quality educational and developmental
        </p>
        <p className="p2">
          services designed to empower individuals and institutions alike. Operating as a remote
        </p>
        <p className="p3">
          private firm, we offer a flexible and innovative platform that meets the diverse learning and
        </p>
        <p className="p4">
          training needs of today’s dynamic world.
        </p>

        <div className='button-gang'>
          <button className="btn1">
            <span>Explore Programs</span>
            <img className='im1 image-style' src='/black.png' alt="Arrow Icon" />
          </button>
          <button className="btn2" onClick={handleConsultationClick}>
            <span>Book a Free Consultation</span>
            <img className='im2 image-style' src='/white.png' alt="Arrow Icon" />
          </button>
        </div>
      </div>

      <div className='core'>
        <p className='core-head'>Our Core Services</p>

        <div className='core-services'>
          <div className='core1'>
            <div className='content'>
            <img className="core-image" src="/core1.svg" alt="add-on certificate course" width={90} height={90} />
            <p className='core-header'>Add-on Certificate Courses</p>
            <p className='core-text'>Skill-oriented short-term programs designed to complement academic learning.</p>
            </div>
          </div>

          <div className='core2'>
            <div className='content'>
            <img className="core-image" src="/core2.svg" alt="workshops and seminars" width={90} height={90} />
            <p className='core-header'>Workshops and Seminars</p>
            <p className='core-text'> Interactive sessions covering emerging trends and practical applications across various fields</p>
            </div>
          </div>

          <div className='core3'>
            <div className='content'>
            <img className="core-image" src="/core3.svg" alt="corporate training sessions" width={90} height={90} />
            <p className='core-header'>Corporate Training Sessions</p>
            <p className='core-text'>Customized programs to enhance employee productivity, communication, and team synergy</p>
            </div>
          </div>

          <div className='core4'>
            <div className='content'>
            <img className="core-image" src="/core4.svg" alt="awareness sessions" width={90} height={90} />
            <p className='core-header'>Awareness Sessions (online/offline)</p>
            <p className='core-text'> Initiatives to spread awareness on mental health, nutrition, and wellness</p>
            </div>
          </div>

        </div>

      </div>

      <div className='additional'>
        <p className='additional-head'>Additional Offerings</p>

        <div className='additional-services'>
          <div className='additional1'>
            <div className='content1'>
            <img className="addl-image" src="/addl1.svg" alt="Career Guidance and Counseling" width={90} height={90} />
            <p className='addl-header'>Career Guidance and Counseling</p>
            <p className='addl-text'> Personalized support for academic and career planning</p>
            </div>
          </div>

          <div className='additional2'>
            <div className='content1'>
            <img className="addl-image" src="/addl2.svg" alt="Project Support and Metorship" width={90} height={90} />
            <p className='addl-header'>Project Support and Metorship</p>
            <p className='addl-text'> Assistance with academic projects, research, and innovation incubation</p>
            </div>
          </div>

          <div className='additional3'>
            <div className='content1'>
            <img className="addl-image" src="/addl3.svg" alt="Faculty Development Programs(FDPs)" width={90} height={90} />
            <p className='addl-header'>Faculty Development Programs(FDPs)</p>
            <p className='addl-text'> Designed for educators and trainers to upgrade their teaching methodologies</p>
            </div>
          </div>

          <div className='additional4'>
            <div className='content1'>
            <img className="addl-image" src="/addl4.svg" alt="Skill Development Bootcamps" width={90} height={90} />
            <p className='addl-header'>Skill Development Bootcamps</p>
            <p className='addl-text'> Fast-paced programs focused on soft skills and technical competencies</p>
            </div>
          </div>

          <div className='additional5'>
            <div className='content1'>
            <img className="addl-image" src="/addl5.svg" alt="Community Outreach Programs" width={90} height={90} />
            <p className='addl-header'>Community Outreach Programs</p>
            <p className='addl-text'>Educational drives and initiatives targeting social development</p>
            </div>
          </div>
        </div>
        
      </div>

      <div className='add-on'>
        <p className='add-on-head'>Add-on Courses</p>

        <div className='add-services'>
          <div className='add1'>
            <div className='addcontent'>
            <p className='add-header'>Food Processing and Entrepreneurship Development  Programme </p>
            <p className='add-text'>This comprehensive course in Food Processing and Entrepreneurship Development  Programme is designed to equip students with both theoretical knowledge and hands-on  experience across key areas of the food industry. It integrates core scientific principles with  modern innovations to prepare students for dynamic roles in food safety, quality control,  processing, and entrepreneurship.</p>
            <button className='view-more'>View More</button>
            </div>
          </div>

          <div className='add2'>
            <div className='addcontent'>
            <p className='add-header'>Nutrition and Dietetics Programme</p>
            <p className='add-text'>The Nutrition and Dietetics Programme is a comprehensive academic and skill-based  course designed to equip students with essential theoretical knowledge and practical  competencies in human nutrition, therapeutic dietetics, food science, and public health. It  aims to prepare students for diverse careers in nutrition, community health, food service  management, and wellness entrepreneurship.</p>
            <button className='view-more'>View More</button>
            </div>
          </div>

          <div className='add3'>
            <div className='addcontent'>
            <p className='add-header'>Psychosocial Support and Inclusive Counseling</p>
            <p className='add-text'>Psychosocial Support and Inclusive Counseling is an add-on course designed to equip learners with skills to address emotional, social, and psychological well-being in diverse populations. It emphasizes inclusive practices that respect cultural, gender, and ability differences. The course prepares participants to provide empathetic, accessible, and context-sensitive counseling support.</p>
            <button className='view-more'>View More</button>
            </div>
          </div>
        </div>
        
      </div>

      <div className='why'>
        <p className='why-head'>Why Choose Intellnexa ?</p>
        <div className='the-body'>
          <div className='left'>

            <div className='why1'>
              <img className='tick' src='/tick.svg' alt="flexible online/offline modes" />
              <p className='why1-text'>Flexible Online/Offline Modes</p>
            </div>

            <div className='why2'>
              <img className='tick' src='/tick.svg' alt="Industry-Relevant Curriculum" />
              <p className='why2-text'>Industry-Relevant Curriculum</p>
            </div>

            <div className='why3'>
              <img className='tick' src='/tick.svg' alt="Expert Trainers and Mentors" />
              <p className='why3-text'>Expert Trainers and Mentors</p>
            </div>

            <div className='why4'>
              <img className='tick' src='/tick.svg' alt="Affordable and Accessible Programs" />
              <p className='why4-text'>Affordable and Accessible Programs</p>
            </div>

            <div className='why5'>
              <img className='tick' src='/tick.svg' alt=" Strong Network of Collaborators and Alumni" />
              <p className='why5-text'> Strong Network of Collaborators and Alumni</p>
            </div>
          </div>
          <div className='right'>
            <img className='image-why' src='/student.svg' alt="best add-on courses in kerala"/>
          </div>
        </div>
      </div>

      <div className='testimonials'>
        <p className='testimonials-head'>Testimonials</p>
        <div className='test-box'>
          <div className='test1'>
              <p className='test-text'>“The Behavioural Therapy and Counseling add-on course was a game-changer for me. It not only deepened my understanding of human behavior but also gave me practical tools to handle real-life situations with empathy and confidence. The sessions were engaging, and the support from the mentors was incredible. I feel more prepared and inspired to pursue a career in mental health.”</p>
              <div className='test-deets'>
                <img className='test-image' src='/st1.svg' alt='food tech diploma courses in kochi' />
                <div className='test-deetail'>
                  <p className='test-name'>Meenakshi Sudarsanan</p>
                  <p className='test-course'>Psychology Student</p>
                </div>  
              </div>   
          </div>

          <div className='test2'>
              <p className='test-text'>“The Add-on Course on Food Processing and Entrepreneurship Development Program provided me with practical knowledge and real-life applications that helped me understand the industry better. The field visits and industrial visits were incredibly beneficial, giving me insights into food companies' operations. The course content was relevant and up-to-date, and the faculty was friendly and supportive. This course has been a valuable stepping stone in my journey, and I'm grateful for the experience.”</p>
              <div className='test-deets'>
                <img className='test-image' src='/st2.svg' alt='best psychology courses in kochi' />
                <div className='test-deetail'>
                  <p className='test-name'>Aparna</p>
                  <p className='test-course'>Food Technology student</p>
                </div>  
              </div>   
          </div>

          <div className='test2'>
              <p className='test-text'>" I'm Nivedita, and food processing add on course provided me with comprehensive knowledge of the food industry, exploring various career opportunities and roles for qualified professionals in food science and technology. I gained in-depth understanding of food processing techniques, industry practices, and food safety management systems. The course also equipped me with relevant certificates, enhancing my credentials. Overall, this course was a valuable experience that opened doors to new possibilities in the food industry. I'm grateful for it."</p>
              <div className='test-deets'>
                <img className='test-image' src='/st3.svg' alt='best psychology session in kerala' />
                <div className='test-deetail'>
                  <p className='test-name'>Nivedita</p>
                  <p className='test-course'>Food Technology student</p>
                </div>  
              </div>   
          </div>

        </div>
      </div>
    </>
  )
}

export default App
