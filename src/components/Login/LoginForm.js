 
import './LoginForm.css'; 

const LoginForm = (props) => { 

    var getName;
    var getPwd;
    const getUserName = (e) => {
       getName =  e.target.value;
    }

    const getPassword = (e) => {
         getPwd = e.target.value;
    }  
    const getLoginValue = (e) => { 
        e.preventDefault(); 
        let values = [getName, getPwd];
        props.onLoginValues(values);
        return values;
    }


    return( 
    <div> 
        <div className='login-form'>
            <input type='text' placeholder='username' className='uname' id='uname' onChange={getUserName}/>
            <br /><br />
            <input type='password' placeholder='password' className='pwd' id='pwd'onChange={getPassword}/>
            <br /><br />
            <button type='submit' className='btn-login' onClick={getLoginValue}>Login</button> 
        </div> 
    </div>
)}

export default LoginForm;