import './style.css';
import  {Formik} from 'formik';
import { useNavigate} from 'react-router-dom';

function App() {
 const navigate = useNavigate()
  return (
    <div className="App">
      <div className='container'>
        <div className='form'>
          <Formik 
            initialValues={{
              name:"",
              email:"",
              password:""
             
            }}
           
            onSubmit={(values,)=> {
              navigate("/Home")
            }}
          > 
          {
        ({ values, errors, handleSubmit,handleChange, isSubmitting})=>(
              <form onSubmit={handleSubmit}>
                <h3>Login</h3>
                <label htmlFor='name'>Name</label>
                <input id='name' type="text" 
                placeholder='Ceyda'
                 value={values.name} 
                 onChange={handleChange}
                 required>

                 </input>
                 <label htmlFor='email'>Mail</label>
                <input id='email' type="email" 
                placeholder='ornek@gmail.com' 
                className='input'
                 value={values.email} 
                 onChange={handleChange}
                 required>

                 </input>
                 <label htmlFor='Password'>Password</label>
                <input id='password' type="password" 
                placeholder='password.' 
                className='input'
                 value={values.password} 
                 onChange={handleChange}
                 required>
                 </input>
                 <button type='submit' className='login-btn'>Login</button>
              </form>
              )
          }
      
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default App;



