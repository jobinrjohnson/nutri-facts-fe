import './style.css';
import loginPage from "../login/loginPage.png"
import logo from "../../logo.png"
import {Component} from 'react';
import {Navigate} from "react-router-dom";
import {getPath, saveToken} from "../../api/main";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "", password: "", token: "", err: "", isLoginComplete: false
        };
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    onSubmit = (e) => {
        e.preventDefault();
        let myHeaders = new Headers();

        myHeaders.append("Content-Type", "application/json");
        let raw = JSON.stringify({
            // "email": this.state.email, "password": this.state.password
            "email": "jobinrjohnson@gmail.com",
            "password": "helloWorld"
        });

        let requestOptions = {
            method: 'POST', body: raw, redirect: 'follow', headers: myHeaders
        };

        this.setState({err: ""})

        fetch(getPath("/auth/login"), requestOptions)
            .then(response => {
                response.json().then((r) => {
                    if (response.status >= 400) {
                        this.setState({err: r.msg})
                        return
                    }
                    saveToken(r.data.token)
                    this.setState({isLoginComplete: true})
                })
            })
            .catch(error => this.setState({err: error?.toString}));

    }

    render() {

        if (this.state.isLoginComplete) {
            return <Navigate to="/"/>
        }

        return (<div className='container-fluid vh-100 d-flex align-items-center justify-content-center' style={{
            backgroundImage: `url(${loginPage})`, backgroundSize: "100% 100%"
        }}>
            <img
                style={{
                    position: "absolute", top: "20px", left: "20px", width: "200px"
                }}
                src={logo}/>

            <div className='text-center' style={{
                width: "340px"
            }}>

                <h1 className='sigin-spec'>Sign In</h1>

                <p className="mb-3">Don’t have an account? <a href="#" className="text-reset small-signin-color">Sign
                    up</a></p>

                <div className="mb-3 text-start">
                    <label className="form-label text-spec">Email </label>
                    <input name='email' value={this.state.email} onChange={e => this.change(e)} type="email"
                           className="form-control" placeholder=""/>
                </div>
                <div className="mb-3 text-start">
                    <label className="form-label text-spec">Password</label>
                    <input name='password' value={this.state.password} onChange={e => this.change(e)}
                           type="password" className="form-control"/>
                </div>

                <p className='text-end text-muted2'>Forgot password?</p>
                <p className='text-center' style={{color: "red"}}>{this.state.err}</p>
                {/*<Link to="/list"  className='btn btn-primary w-100'>*/}
                {/*    Sign In*/}
                {/*</Link>*/}
                <button onClick={e => this.onSubmit(e)} className='btn btn-primary w-100'>Sign In</button>

            </div>
        </div>);
    }

}

export default Login;
