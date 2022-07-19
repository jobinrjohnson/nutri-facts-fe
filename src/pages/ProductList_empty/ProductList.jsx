import './style.css';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

function ProductListEmpty() {
    return (
        <DashboardLayout>
            <div className="text-center py-5 box">
                <br/>
                <br/>
                <p>Your don’t have image in the list</p>
                <br/>
                <button className='btn btn-primary' style={{ width: '192px' }}>Add New</button>
                <br/>
                <br/>
            </div>
        </DashboardLayout>
    );
}

export default ProductListEmpty;
