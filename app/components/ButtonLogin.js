import Link from "next/link";

// This button is for logging in users and send them to the dashboard page
const ButtonLogin = (props) => {
    if (props.isLoggedin){
        return <Link href="/dashboard">Welcome {props.name}</Link>;
    } else {
        return <button>Login</button>
    }
    
};

export default ButtonLogin;