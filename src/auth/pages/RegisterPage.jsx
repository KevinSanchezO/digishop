import { Link } from "react-router-dom";
import { useAuthStore } from "../../hooks";
import { useState } from "react";
import './loginRegisterPage.css'

export const RegisterPage = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        securingPassword: "",
    });

    const {startRegister, errorMessage} = useAuthStore();

    const registerSubmit = (event) => {
        event.preventDefault();

        if (formData.password != formData.securingPassword) {
            return;
        }

        startRegister({
            name: formData.name,
            email: formData.email,
            password: formData.password,
        })

        console.log("Registered!")
    }

    return (
        <div className="form-container">
            <div className="login-form">
                <h3>Register to create an account</h3>

                <form onSubmit={registerSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            name='registerName'
                            className="form-control"
                            onChange={(e) => setFormData(
                                {...formData, name: e.target.value}
                            )}
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            name='registerEmail'
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
                            name='registerPassword'
                            className="form-control"
                            onChange={(e) => setFormData(
                                {...formData, password: e.target.value}
                            )}
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Repeat the password"
                            name='registerPassword2'
                            className="form-control"
                            onChange={(e) => setFormData(
                                {...formData, securingPassword: e.target.value}
                            )}
                        />
                    </div>

                    <div>
                        <input 
                            type="submit" 
                            className="btnSubmit" 
                            value="Create account" />
                    </div>
                </form>

                <p>Already have an account? <Link to="/auth/login">Login</Link></p>
            </div>
        </div>
    )
}