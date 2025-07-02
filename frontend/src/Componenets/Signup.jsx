// import React, { useState } from 'react'
// import '../sign.css'

// // change
// import axios from "axios"
// import { toast } from 'react-toastify'
// import { useNavigate } from 'react-router-dom'
// // change

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faUserPlus,
// } from '@fortawesome/free-solid-svg-icons'
// import {
//   faGooglePlusG,
//   faFacebookF,
//   faGithub,
//   faLinkedinIn,
// } from '@fortawesome/free-brands-svg-icons';

// function Sign() {
//     // change
//     // const navigate=useNavigate()
//   const [formData, setFormData] = useState("")
//   const handleInputChange = (e) => {
//     console.log(e.target)
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }
//   const handleInputSubmit = async (e) => {
//     try {
//       e.preventDefault()
//       const log = await axios.post(`http://localhost:6942/user/signUp`, formData)
//       console.log(log)

//       if (log.data.status !== 200) {
//         toast.error(log.data.message)
//       }
//       else {
//         setData(log.data.body)
//         toast.success(log.data.message)
//         // navigate("/Login")
//       }


//     } catch (error) {
//       console.log(error)
//     }
//   }

// const navigate=useNavigate()
//   const [data, setData] = useState("")
//   const handleChange = (e) => {
//     console.log(e.target)
//     setData({ ...data, [e.target.name]: e.target.value })
//   }
//   const handleSubmit = async (e) => {
//     try {
//       e.preventDefault()
//       const log = await axios.post(`http://localhost:6942/user/logIn`, data)
//       console.log(log)

//       if (log.data.status !== 200) {
//         toast.error(log.data.message)
//       }
//       else {
//         setData(log.data.body)
//         toast.success(log.data.message)
//         navigate("/")
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }
//     // change
//   const [isActive, setIsActive] = useState(false)

//   return (
//      <div className="signup-wrapper">
//       <div className={`signup-container ${isActive ? 'active' : ''}`} id="signup-container">
//       <div className="form-signup-container sign-up">

//         <form onChange={handleInputChange} onSubmit={handleInputSubmit}>
//           <h1>Create Account</h1>
//           <div className="social-icons">
//             <a href="#" className="icon">
//               <FontAwesomeIcon icon={faUserPlus} />
//             </a>
//             <a href="#" className="icon">
//               <FontAwesomeIcon icon={faFacebookF} />
//             </a>
//             <a href="#" className="icon">
//               <FontAwesomeIcon icon={faGithub} />
//             </a>
//             <a href="#" className="icon">
//               <FontAwesomeIcon icon={faLinkedinIn} />
//             </a>
//           </div>
//           <span>or use your email for registration</span>
//           <input type="text" name="name" placeholder="Name" />
//           <input type="email" name="email" placeholder="Email" />
//           <input type="password" name="password" placeholder="Password" />
//           <button>Sign Up</button>
//         </form>
//       </div>

//       <div className="form-signup-container sign-in">
//         <form onChange={handleChange} onSubmit={handleSubmit}>
//           <h1>Sign In</h1>
//           <div className="social-icons">
//             <a href="#" className="icon">
//               <FontAwesomeIcon icon={faGooglePlusG} />
//             </a>
//             <a href="#" className="icon">
//               <FontAwesomeIcon icon={faFacebookF} />
//             </a>
//             <a href="#" className="icon">
//               <FontAwesomeIcon icon={faGithub} />
//             </a>
//             <a href="#" className="icon">
//               <FontAwesomeIcon icon={faLinkedinIn} />
//             </a>
//           </div>
//           <span>or use your email and password</span>
//           <input
//   type="email"
//   name="email"
//   placeholder="Email"
//   onChange={handleChange}
// />
// <input
//   type="password"
//   name="password"
//   placeholder="Password"
//   onChange={handleChange}
// />
//           <a href="#">Forget Your Password?</a>
//           <button>Sign In</button>
//         </form>
//       </div>

//       <div className="toggle-signup-container">
//         <div className="toggle">
//           <div className="toggle-panel toggle-left">
//             <h1>Welcome Back!</h1>
//             <p>Enter your personal details to use all of site features</p>
//             <button
//               className="hidden"
//               // id="login"
//               onClick={() => setIsActive(false)}
//             >
//               Sign In
//             </button>
//           </div>
//           <div className="toggle-panel toggle-right">
//             <h1>Hello, Friend!</h1>
//             <p>Register with your personal details to use all of site features</p>
//             <button
//               className="hidden"
//               id="register"
//               onClick={() => setIsActive(true)}
//             >
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//      </div>
//   )
// }

// export default Sign

















import React, { useState } from 'react'
import '../sign.css'

// change
import axios from "axios"
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
// change
import cookie from "js-cookie"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGooglePlusG,
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

function Sign() {
    // change
    // const navigate=useNavigate()
  const [formData, setFormData] = useState("")
  const handleInputChange = (e) => {
    console.log(e.target)
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleInputSubmit = async (e) => {
    try {
      e.preventDefault()
      const log = await axios.post(`http://localhost:6942/user/signUp`, formData)
      console.log(log)

      if (log.data.status !== 200) {
        toast.error(log.data.message)
      }
      else {
        setData(log.data.body)
        toast.success(log.data.message)
              setIsActive(false); // 👈 Switch to Sign In panel
        // navigate("/Login")
      }


    } catch (error) {
      console.log(error)
    }
  }

const navigate=useNavigate()
  const [data, setData] = useState("")
  const handleChange = (e) => {
    console.log(e.target)
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const log = await axios.post(`http://localhost:6942/user/logIn`, data)
      console.log(log)

      if (log.data.status !== 200) {
        toast.error(log.data.message)
      }
      else {
        setData(log.data.body)
        toast.success(log.data.message)
        cookie.set("userInfo",JSON.stringify(log.data.body))
        navigate("/")
      }
    } catch (error) {
      console.log(error)
    }
  }
    // change
  const [isActive, setIsActive] = useState(false)

  return (
     <div className="signup-wrapper">
      <div className={`signup-container ${isActive ? 'active' : ''}`} id="signup-container">
      <div className="form-signup-container sign-up">

        <form onChange={handleInputChange} onSubmit={handleInputSubmit}>
          <h1 style={{color:'#BA101F'}}>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faUserPlus} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>

      <div className="form-signup-container sign-in">
        <form onChange={handleChange} onSubmit={handleSubmit}>
          <h1>Sign <span style={{color:"#BA101F", fontSize:"inherit"}}>in</span></h1> 
          
          <div className="social-icons">
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <span>or use your email and password</span>
          <input
  type="email"
  name="email"
  placeholder="Email"
  onChange={handleChange}
/>
<input
  type="password"
  name="password"
  placeholder="Password"
  onChange={handleChange}
/>
          <a href="#">Forget Your Password?</a>
          <button>Sign In</button>
        </form>
      </div>

      <div className="toggle-signup-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1 style={{color:"white"}}>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button
              className="hidden"
              // id="login"
              onClick={() => setIsActive(false)}
            >
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1 style={{color:"white"}}>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            <button
              className="hidden"
              id="register"
              onClick={() => setIsActive(true)}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
     </div>
  )
}

export default Sign
