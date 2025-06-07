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
            <img className='im1' src='/black.png' alt="Arrow Icon" />
          </button>
          <button className="btn2" onClick={handleConsultationClick}>
            <span>Book a Free Consultation</span>
            <img className='im2' src='/white.png' alt="Arrow Icon" />
          </button>
        </div>
      </div>

      <div className='core'>
        <p className='core-head'>Our Core Services</p>
      </div>
    </>
  )
}

export default App
