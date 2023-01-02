import Pic1 from '../images/1.jpg'
import Pic2 from '../images/2.jpg'
import Pic3 from '../images/3.jpg'
import Pic4 from '../images/4.jpg'
import Pic5 from '../images/5.jpg'
import Ben from '../images/pp.jpg'
import { RxAvatar } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Circle = () => {
  return (
    <section className='circlePage'>
        <div className="titleDiv">
            <h2>BigFOOT'S CIRCLE</h2>
            <hr />
            <p>friends of friends</p>
        </div>


        <Link to="/profile"><RxAvatar id='toProfile'/></Link>
        

        <div className="container">
            <div className="card">
                <img src={Pic1} alt="a friend of a friend" />
                <p className='nickname'>Freddy</p>
            </div>
            <div className="card">
                <img src={Pic2} alt="a friend of a friend" />
                <p className='nickname'>Siphy</p>
            </div>
            <div className="card">
                <img src={Pic3} alt="a friend of a friend" />
                <p className='nickname'>Kahenya</p>
            </div>
            <div className="card">
                <img src={Pic4} alt="a friend of a friend" />
                <p className='nickname'>Hadija</p>
            </div>
            <div className="card">
                <img src={Pic5} alt="a friend of a friend" />
                <p className='nickname'>Merona</p>
            </div>
            <div className="card">
                <img src={Ben} alt="a friend of a friend" />
                <p className='nickname'>Anungo</p>
            </div>
            <div className="card">
                <img src={Pic5} alt="a friend of a friend" />
                <p className='nickname'>Merona</p>
            </div>
        </div>

        <p id='copy'>&copy; 2023 </p>
    </section>
  )
}

export default Circle