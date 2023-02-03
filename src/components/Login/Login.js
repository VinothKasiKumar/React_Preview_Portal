 
 
import './Login.css';
import LoginForm from './LoginForm';
import LoginMsg from './LoginMsg'; 

const Login = (props) => {   

    const getLogins = (v) =>{
        const values = [...v];
        // const validate = (values[0] === SettingUserName && values[1] === SettingPasseword) ? console.log('Login success') : console.log('Please enter correct user Input'); 
         
        props.onValues(values); 
    }
     

    return<div className='login-container'> 
        
        <LoginForm onLoginValues={getLogins}/>
        <LoginMsg /> 
    </div>
}

export default Login;