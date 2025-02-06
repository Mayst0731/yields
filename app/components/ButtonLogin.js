import Link from "next/link";

// This button is for logging in users and send them to the dashboard page
const ButtonLogin = ({ isLoggedin, name }) => {
    if (isLoggedin){
        return <Link href="/dashboard">Welcome {name}</Link>;
    } else {
        return <button>Login</button>
    }
    
};

export default ButtonLogin;