import './style.css';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import {Component} from "react";
import {Link, Navigate} from "react-router-dom";
import {getPath, getToken, saveToken} from "../../api/main";


class ProductList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true, items: [], has401: false, err: ""
        }
    }


    getFileNameFromPath(name) {
        let x = name.split("/")
        let m = name;
        if (x.length > 0) {
            m = x[x.length - 1]
        }
        let z = m.split(".")

        if (z.length > 0) {
            return z[0]
        }
        return m
    }

    componentDidMount() {

        let myHeaders = new Headers();
        myHeaders.append("Authorization", getToken());

        let requestOptions = {
            method: 'GET', headers: myHeaders, redirect: 'follow'
        };

        fetch(getPath("/product?orderBy=order&orderByDir=desc&pageSize=10000&pageNum=1"), requestOptions)
            .then(response => {
                response.json().then((r) => {
                    if (response.status >= 401) {
                        this.setState({has401: true})
                        return
                    }
                    if (response.status >= 400) {
                        this.setState({err: r.msg})
                        return
                    }

                    this.setState({
                        items: r.data.rows, isLoading: false
                    })
                })
            })
            .catch(error => this.setState({err: error?.toString}));
    }

    renderLoading = () => {
        return (<div className="text-center py-5 box">
            <progress/>
        </div>)
    }

    renderEmpty = () => {
        return (<div className="text-center py-5 box">
            <br/>
            <br/>
            <p>Your don’t have image in the list</p>
            <br/>
            <Link to="/upload" className='btn btn-primary' style={{
                color: "white !important"
            }}>
                Add New
            </Link>
            {/*<button className='btn btn-primary' style={{ width: '192px' }}>Add New</button>*/}
            <br/>
            <br/>
        </div>)
    }

    renderList = () => {
        return (

            <div className="text-center py-5 box" style={{background: "white"}}>

                <div className="py-5 mb-5">
                    <button className="btn btn-primary px-5 py-3">Download CSV</button>
                </div>

                <table className="table" >
                    <thead className='tablehead'>
                    <tr>
                        <th></th>
                        <th width={200}>Product Name</th>
                        <th>Calories</th>
                        <th>Created at</th>
                    </tr>
                    </thead>

                    <tbody>


                    {this.state.items.map((i, index) => {
                        return (
                            <tr>
                                <td className='number'>{index + 1}</td>
                                <td>{this.getFileNameFromPath(i.name)}</td>
                                <td>{i.nutriInfo.calories}</td>
                                <td>{(new Date(i.createdAt)).toLocaleDateString()}</td>
                            </tr>
                        )
                    })}

                    </tbody>
                </table>
            </div>)
    }

    render() {


        if (this.state.has401) {
            return <Navigate to="/login"/>
        }

        if (this.state.isLoading) {
            return (<DashboardLayout>{this.renderLoading()}</DashboardLayout>);
        } else if (this.state.items.length === 0) {
            return (<DashboardLayout>{this.renderEmpty()}</DashboardLayout>);
        }
        return (<DashboardLayout>{this.renderList()}</DashboardLayout>);
    }
}

export default ProductList;