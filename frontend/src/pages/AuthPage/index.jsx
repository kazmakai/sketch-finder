import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const AuthPage = ({setUser}) => {
    return (
        <div>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    credentialResponseDecoded = jwt_decode(
                        credentialResponse.credential
                    );
                    console.log(credentialResponseDecoded);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </div>

    )
}

export default AuthPage