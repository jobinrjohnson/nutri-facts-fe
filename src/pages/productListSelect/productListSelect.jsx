import './style.css';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import SelectBar from '../../components/Selectbar/Selectbar';
import NutrieFact from '../../components/NutrieFact/NutrieFact';

function ProductListSelect() {
    return (
        <DashboardLayout>

            <div className='row align-items center px-5 pb-3'>
                <div className='col-auto'>
                <input type="checkbox" />

                </div>
                <div className='col'>
                    Select All
                </div>
            </div>

            <div className='row'>
                <div className='col-3'>
                    <SelectBar />
                </div>
                <div className='col ps-2'>
                    <NutrieFact />
                </div>
            </div>

        </DashboardLayout>
    );
}

export default ProductListSelect;