import './style.css';


function Topbar() {
    return (
        <div className='row align-items-center topbar'>
            <div className='col'>

            </div>
            <div className='col-auto'>
                <div className='row align-items-center'>
                    <div className='col-auto'>
                        <svg
                        style={{
                            position:"relative",
                            left:"50px"
                        }}
                         width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 10.3283C2 5.73857 5.73857 2 10.3283 2C14.918 2 18.6566 5.73857 18.6566 10.3283C18.6566 12.3242 17.9478 14.1571 16.7713 15.5937L21.7439 20.5662C21.9615 20.7751 22.0491 21.0853 21.973 21.3772C21.897 21.669 21.669 21.897 21.3772 21.973C21.0853 22.0491 20.7751 21.9615 20.5662 21.7439L15.5937 16.7713C14.1571 17.9478 12.3242 18.6566 10.3283 18.6566C5.73857 18.6566 2 14.918 2 10.3283ZM16.9909 10.3283C16.9909 6.63875 14.0178 3.66565 10.3283 3.66565C6.63875 3.66565 3.66565 6.63875 3.66565 10.3283C3.66565 14.0178 6.63875 16.9909 10.3283 16.9909C14.0178 16.9909 16.9909 14.0178 16.9909 10.3283Z" fill="#BDDD6D" />
                        </svg>
                    </div>
                    <div className='col'>
                        <label className="form-label"></label>
                        <input  className='searchButton' type="search"/>
                    </div>
                </div>
            </div>
            <div className='col-auto'>
                <svg width="18" height="18" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.1451 16.4625C26.2051 15.9825 26.2501 15.495 26.2501 15C26.2501 14.505 26.2051 14.0175 26.1451 13.5375L29.3176 11.055C29.6026 10.83 29.6851 10.425 29.4976 10.095L26.4976 4.8975C26.3101 4.575 25.9201 4.44 25.5826 4.575L21.8476 6.0825C21.0751 5.49 20.2276 4.9875 19.3126 4.605L18.7501 0.63C18.6826 0.2775 18.3751 0 18.0001 0H12.0001C11.6251 0 11.3176 0.2775 11.2576 0.63L10.6951 4.605C9.78011 4.9875 8.93261 5.4825 8.16011 6.0825L4.42511 4.575C4.08761 4.4475 3.69761 4.575 3.51011 4.8975L0.510107 10.095C0.322607 10.4175 0.405108 10.8225 0.690108 11.055L3.85511 13.5375C3.79511 14.0175 3.75011 14.505 3.75011 15C3.75011 15.495 3.79511 15.9825 3.85511 16.4625L0.690108 18.945C0.405108 19.17 0.322607 19.575 0.510107 19.905L3.51011 25.1025C3.69761 25.425 4.08761 25.56 4.42511 25.425L8.16011 23.9175C8.93261 24.51 9.78011 25.0125 10.6951 25.395L11.2576 29.37C11.3176 29.7225 11.6251 30 12.0001 30H18.0001C18.3751 30 18.6826 29.7225 18.7426 29.37L19.3051 25.395C20.2201 25.0125 21.0676 24.5175 21.8401 23.9175L25.5751 25.425C25.9126 25.5525 26.3026 25.425 26.4901 25.1025L29.4901 19.905C29.6776 19.5825 29.5951 19.1775 29.3101 18.945L26.1451 16.4625ZM15.0001 20.25C12.0976 20.25 9.75011 17.9025 9.75011 15C9.75011 12.0975 12.0976 9.75 15.0001 9.75C17.9026 9.75 20.2501 12.0975 20.2501 15C20.2501 17.9025 17.9026 20.25 15.0001 20.25Z" fill="#BDDD6D" />
                </svg>

            </div>

            <div className='col-auto textColor'>
                        John Doe
            </div>
        </div>
    );
}

export default Topbar;
