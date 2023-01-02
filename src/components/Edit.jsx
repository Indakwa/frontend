import { AiOutlineCheckCircle } from 'react-icons/ai';
import Pic1 from '../images/1.jpg'
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const Edit = () => {
  return (
    <section className='edit'>
        <div className="titleDiv">
            <h2>Edit Profile</h2>
            <hr />
            <p>Do you.</p>
        </div>


        <Link to="/profile"><BiArrowBack id='back'/></Link>
        

        <form >

            <label id='upload' htmlFor="file-input">
                <img src={Pic1} alt="a friend of a friend" />
            </label>
            <input 
                id="file-input" 
                type="file" 
                style={{ display: "none" }} 
            />


            <input 
                name='nickname'
                type="text" 
                placeholder='Freder|'
            />
            

            <button>
                Save  <AiOutlineCheckCircle id='saveIcon'/>
            </button>

        </form>
    </section>
  )
}

export default Edit