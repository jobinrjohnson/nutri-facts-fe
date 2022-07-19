import './style.css';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

function ProductList() {
    return (
        <DashboardLayout>

            <h1 className='monthtext px-4 py-2'>This Month</h1>
            <div className="text-center py-5 box">
                <table class="table">
                    <thead className='tablehead'>
                        <tr>
                            <th> </th>
                            <th>Product Name</th>
                            <th>Product ID</th>
                            <th>Product ID Type</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className='number'>1</td>
                            <td>name</td>
                            <td>123456789</td>
                            <td>Type</td>
                        </tr>
                        <tr>
                            <td className='number'>2</td>
                            <td>name</td>
                            <td>123456789</td>
                            <td>Type</td>
                        </tr>
                        <tr>
                            <td className='number'>3</td>
                            <td>name</td>
                            <td>123456789</td>
                            <td>Type</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <br />
            <br />

            <h1 className='monthtext px-4 py-2'>May</h1>

            <div className="text-center py-5 box">
                <table class="table">
                    <thead className='tablehead'>
                        <tr>
                            <th> </th>
                            <th>Product Name</th>
                            <th>Product ID</th>
                            <th>Product ID Type</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className='number'>1</td>
                            <td>name</td>
                            <td>123456789</td>
                            <td>Type</td>
                        </tr>
                        <tr>
                            <td className='number'>2</td>
                            <td>name</td>
                            <td>123456789</td>
                            <td>Type</td>
                        </tr>
                        <tr>
                            <td className='number'>3</td>
                            <td>name</td>
                            <td>123456789</td>
                            <td>Type</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    );
}

export default ProductList;