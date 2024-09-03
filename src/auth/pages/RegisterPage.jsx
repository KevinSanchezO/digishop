import { Link } from "react-router-dom";

export const RegisterPage = () => {

    const registerSubmit = (event) => {
        event.preventDefault();
        console.log(Registered)
    }

    return (
        <div>
            <div>
                <div>
                    <h3>Register to create an account</h3>

                    <form onSubmit={registerSubmit}>
                        <div>
                            <input
                                type="text"
                                placeholder="Nombre"
                                name='registerName'
                                // value={registerName}
                                // onChange={onRegisterInputChange}
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Correo"
                                name='registerEmail'
                                // value={registerEmail}
                                // onChange={onRegisterInputChange}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Contraseña"
                                name='registerPassword'
                                // value={registerPassword}
                                // onChange={onRegisterInputChange}
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                placeholder="Repita la contraseña"
                                name='registerPassword2'
                                // value={registerPassword2}
                                // onChange={onRegisterInputChange}
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
        </div>
    )
}