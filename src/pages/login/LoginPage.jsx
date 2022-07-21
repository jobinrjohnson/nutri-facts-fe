import './style.css';
import loginPage from "../login/loginPage.png"
import logo from "../../logo.png"
import { Component } from 'react';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            token: "",
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch("https://api.staging.restaurant.thefoodo.com/auth/login", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    onSubmit = (e) =>{
        this.fetchData();
        e.preventDefault();
        console.log(this.state);
        this.setState({
             email: "",
             password: "",
            });

        };

    render() {
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
                        <input  name ='email' value={this.state.email} onChange={e => this.change(e) } type="email" className="form-control" placeholder="" />
                    </div>
                    <div class="mb-3 text-start">
                        <label className="form-label text-spec">Password</label>
                        <input name='password' value={this.state.password} onChange={e => this.change(e) } type="password" className="form-control" />
                    </div>

                    <p className='text-end text-muted2'>Forgot password?</p>
                    <button onClick={e => this.onSubmit(e)} className='btn btn-primary w-100'>Sign In</button>

                </div>
            </div>
        );
    }

}

export default Login;
