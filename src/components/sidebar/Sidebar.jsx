import './style.css';
import logo from "../../logo.png"
import {Link} from "react-router-dom";

function Sidebar() {
    return (

        <div className='sidebar p-5'>

            <img
                className='mb-5 mx-auto w-100'
                src={logo} />


            <br />
            <br />

            <Link to={"/list"} className='row align-items-center mb-5 mt-4'>
                <div className='col-auto'>
                    <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 19.6667H6.33333V16.3334H3V19.6667ZM3 26.3334H6.33333V23.0001H3V26.3334ZM3 13.0001H6.33333V9.66675H3V13.0001ZM9.66667 19.6667H33V16.3334H9.66667V19.6667ZM9.66667 26.3334H33V23.0001H9.66667V26.3334ZM9.66667 9.66675V13.0001H33V9.66675H9.66667Z" fill="#4CB051" />
                    </svg>
                </div>
                <div className='col ps-0 text-color text-spec'>Product list</div>
            </Link>

            <div className='row align-items-center mb-5'>
                <div className='col-auto'>
                    <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M26.2426 5C25.4751 5 24.8529 5.58978 24.8529 6.31731V6.93534L9.36391 11.3577C8.77682 11.5253 8.375 12.0378 8.375 12.619V21.1324L11.4771 31.0565C11.6985 31.7648 12.4909 32.1621 13.2331 31.9369L17.4384 30.6614C18.1602 30.4424 18.5639 29.7156 18.3457 29.0276L16.8128 24.1926L24.8529 26.58V27.2061C24.8529 27.9336 25.4751 28.5234 26.2426 28.5234H30.6103C31.3778 28.5234 32 27.9336 32 27.2061V6.31731C32 5.58978 31.3778 5 30.6103 5H26.2426ZM10.3603 13.0386L24.8529 8.90072V24.608L10.3603 20.3046V13.0386ZM13.2077 29.9688L10.8486 22.4217L14.5244 23.5131L16.276 29.0381L13.2077 29.9688ZM26.8382 26.6415V6.88187H30.0147V26.6415H26.8382ZM5.99265 11.022C5.44442 11.022 5 11.4664 5 12.0146V20.9442C5 21.4924 5.44442 21.9368 5.99265 21.9368C6.54087 21.9368 6.98529 21.4924 6.98529 20.9442V12.0146C6.98529 11.4664 6.54087 11.022 5.99265 11.022Z" fill="#B0B0B0" />
                    </svg>

                </div>
                <div className='col ps-0 text-muted2 text-spec'>Campaigns</div>
            </div>
            <div className='row align-items-center mb-5'>
                <div className='col-auto'>
                    <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.8571 4H10.1429C8.40643 4 7.01571 5.39222 7.01571 7.11111L7 32L18 27.3333L29 32V7.11111C29 5.39222 27.5936 4 25.8571 4ZM26.381 27.8519L18 24.2222L9.61905 27.8519V6.59259H26.381V27.8519Z" fill="#B0B0B0" />
                    </svg>


                </div>
                <div className='col ps-0 text-muted2 text-spec'>Promotions</div>
            </div>
            <div className='row align-items-center mb-5'>
                <div className='col-auto'>
                    <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.21316 6.31405H3V4H6.3573C7.15143 4 7.87645 4.45162 8.22658 5.1644L8.67765 6.08264H30.1684C31.7317 6.08264 32.7377 7.74084 32.0156 9.12733L27.1946 18.3835C26.836 19.0722 26.124 19.5041 25.3475 19.5041H13.9898C13.7991 19.5041 13.6124 19.4781 13.4339 19.4286L11.4112 23.2066H29.3801V25.5206H11.0248C9.45113 25.5206 8.44599 23.8423 9.18877 22.455L11.7719 17.6301L6.21316 6.31405ZM9.81438 8.39669L14.1339 17.1901H25.2071L29.787 8.39669H9.81438ZM13.6448 29.6859C13.6448 30.9639 12.6087 32 11.3307 32C10.0527 32 9.01668 30.9639 9.01668 29.6859C9.01668 28.4079 10.0527 27.3719 11.3307 27.3719C12.6087 27.3719 13.6448 28.4079 13.6448 29.6859ZM27.5289 32C28.8069 32 29.843 30.9639 29.843 29.6859C29.843 28.4079 28.8069 27.3719 27.5289 27.3719C26.2509 27.3719 25.2149 28.4079 25.2149 29.6859C25.2149 30.9639 26.2509 32 27.5289 32Z" fill="#B0B0B0" />
                    </svg>


                </div>
                <div className='col ps-0 text-muted2 text-spec'>Retailers</div>
            </div>

            <br />
            <br />

            <Link to={"/upload"} className='row align-items-center'>
                <button className='btn btn-primary' style={{ width: "163px" }}>Add New</button>
            </Link>

        </div>
    );
}

export default Sidebar;
