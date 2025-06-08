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
        
        
      </div>

      <div className='add-on'>
        <p className='add-on-head'>Add-on Courses</p>
      </div>

      <div className='why'>
        <p className='why-head'>Why Choose Intellnexa ?</p>
      </div>

      <div className='testimonials'>
        <p className='testimonials-head'>Testimonials</p>
      </div>
    </>
  )
}

export default App
