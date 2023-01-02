import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';




const Login = () => {
  return (
    <section className='signUp'>
        <div className="titleDiv">
            <h2>Login</h2>
            <hr />
            <p>see who else joined the circle recently</p>
        </div>



        <form >
            <input 
                name='nickname'
                type="text" 
                placeholder='Enter your Nickname'
            />
            
            <input 
                type="password" 
                name='password'
                placeholder='Enter your password'
            />

            <button>
                LOG IN  <AiOutlineArrowRight id='submitIcon'/>
            </button>

        </form>

        <p id='toLogin'>
            If you have not taken the oath already,
            <Link to="/"> Take Oath</Link>
        </p>
    </section>
  )
}

export default Login