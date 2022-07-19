import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';

function DashboardLayout(props) {
    return (
        <div className='container-fluid vh-100' style={{ background: "#F5F5F5" }}>
            <div className='row'>
                {props.noSidebar === true ? <></> : <div className='col-auto pe-0'>
                    <Sidebar />
                </div>}

                <div className='col'>

                    <Topbar />

                    <div className='content px-3 py-4'>

                        {/* Start of Content */}

                        {props.children ?? <></>}

                        {/* End of Content */}

                    </div>

                </div>
            </div>
        </div>
    );
}

export default DashboardLayout;
