import './style.css';
import loginPage from "../login/loginPage.png"
import logo from "../../logo.png"

function Login() {
    return (
        <div className='container-fluid vh-100 d-flex align-items-center justify-content-center' style={{
            backgroundImage: `url(${loginPage})`,
            backgroundSize: "100% 100%"
        }}>
            <img
                style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    width: "200px"
                }}
                src={logo} />

            <div className='text-center' style={{
                width: "340px"
            }}>

                <h1 className='sigin-spec'>Sign In</h1>

                <p className="mb-3">Don’t have an account? <a href="#" className="text-reset small-signin-color">Sign up</a></p>

                <div class="mb-3 text-start">
                    <label className="form-label text-spec">Email </label>
                    <input type="email" className="form-control" placeholder="" />
                </div>
                <div class="mb-3 text-start">
                    <label className="form-label text-spec">Password</label>
                    <input type="password" className="form-control" />
                </div>

                <p className='text-end text-muted2'>Forgot password?</p>
                <button className='btn btn-primary w-100'>Sign In</button>

            </div>
        </div>
    );
}

export default Login;
