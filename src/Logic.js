import Login from "./components/Login/Login";

const Logic = (props) => {
    const userName = props.uName;
    const password = props.uPass;

    const getValues = (val) => {
        const getVal = [...val]
        
        const validate = (val[0] === userName && val[1] === password) ? console.log('Login success') : console.log('Please enter correct user Input');  
    }
return <div>
    <Login onValues={getValues} />
</div>
};

export default Logic;