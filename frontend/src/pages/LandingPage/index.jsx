import {Link} from "react-router-dom"

const LandingPage = () => {
    return (
        <div>
            <h1>LandingPage</h1>
            <Link to={"/login"}>Login</Link>
        </div>
    )
}

export default LandingPage