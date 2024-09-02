export const LoginPage = () => {

    const loginSubmit = (event) => {
        event.preventDefault();
        console.log("Log in!")
    }

    return (
        <div>
            <div>
                <div>
                    <h3>Login to start buying digital monsters!</h3>

                    <form onSubmit={loginSubmit}>
                        <div>
                            <input 
                                type="text"
                                placeholder="Email"
                                name="loginEmail"
                                // value={loginEmail}
                                // onChange={onLoginInputChange}
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                name="loginPassword"
                                // value={loginPassword}
                                // onChange={onLoginInputChange}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}