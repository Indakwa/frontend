import { GrAttachment } from 'react-icons/gr';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';



const SignUp = () => {
  return (
    <section className='signUp'>
        <div className="titleDiv">
            <h2>Bigfoot Oath</h2>
            <hr />
            <p>take oath to join the circle</p>
        </div>

        <form >
            <input 
                name='nickname'
                type="text" 
                placeholder='Enter your Nickname'
            />
            
            <input 
                type="email" 
                name='email'
                placeholder='Enter your Email'
            />

            <input 
                type="password" 
                name='password'
                placeholder='Enter your password'
            />

            <input 
                type="password" 
                name='password2'
                placeholder='Confirm your password'
            />

            <label id='upload' htmlFor="file-input">
                Upload your favourite picture 
                <span>
                    <GrAttachment id='uploadIcon' style={{ color: '#fff' }}/>
                </span>
            </label>
            <input 
                id="file-input" 
                type="file" 
                style={{ display: "none" }} 
            />

            <button>
                SUBMIT  <AiOutlineArrowRight id='submitIcon'/>
            </button>

        </form>

        <p id='toLogin'>
            Have you taken the oath already?  
            <Link to="/login"> Log in</Link>
        </p>
    </section>
  )
}

export default SignUp