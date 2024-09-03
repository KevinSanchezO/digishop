import { Link } from "react-router-dom";
import './loginRegisterPage.css'
import { useAuthStore } from "../../hooks";
import { useState } from "react";

export const LoginPage = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const { startLogin, errorMessage } = useAuthStore(); 

    const loginSubmit = (event) => {
        event.preventDefault();
        startLogin(formData);
        console.log(formData);
    }

    return (
        <div className="form-container">
            <div className="login-form">
                <h3>Login to start buying digital monsters!</h3>

                <form onSubmit={loginSubmit}>
                    <div>
                        <input 
                            type="email"
                            placeholder="Email"
                            name="loginEmail"
                            className="form-control"
                            onChange={(e) => setFormData(
                                {...formData, email: e.target.value}
                            )}
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            name="loginPassword"
                            className="form-control"
                            onChange={(e) => setFormData(
                                {...formData, password: e.target.value}
                            )}
                        />
                    </div>

                    <div>
                        <input 
                            type="submit" 
                            className="btnSubmit" 
                            value="Login" />
                    </div>
                </form>

                <p>Don't have an account? <Link to="/auth/register">Register</Link></p>
            </div>
        </div>
    )

}