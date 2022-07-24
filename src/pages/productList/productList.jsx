import './style.css';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import {Component} from "react";
import {Link, Navigate} from "react-router-dom";
import {getPath, getToken, saveToken} from "../../api/main";
import {ExportToCsv} from 'export-to-csv';
import Lottie from "react-lottie-player";
import lottieJson from "../productList_upload/my-lottie.json";


class ProductList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true, items: [], has401: false, err: ""
        }
    }

    getFlattened(k, i) {
        if ((!i?.type) || (!i?.quantity)) {
            return {
                [k + "-type"]: "",
                [k + "-quantity"]: ""
            }
        }
        return {
            [k + "-type"]: i.type,
            [k + "-quantity"]: i.quantity
        }
    }

    getFlattened2(k, i) {
        if ((!i?.type) || (!i?.quantity)) {
            return {
                [k]: ""
            }
        }
        return {
            [k]: i.quantity
        }
    }


    exportToCsv = () => {
        console.log(this.state.items)
        let it = this.state.items.map((i, n) => {
            let f = i.nutriInfo
            return {
                "#": n,
                "name": i.name,
                ...this.getFlattened("Biotin", f.biotin),
                ...this.getFlattened("Calcium", f.calcium),
                ...this.getFlattened("Total Carbohydrate", f.carbohydrate.totalCarbohydrate),
                ...this.getFlattened("Dietary Fiber", f.carbohydrate.dietaryFiber),
                ...this.getFlattened("Total Sugars", f.carbohydrate.totalSugars),
                ...this.getFlattened("Cholesterol", f.cholesterol),
                ...this.getFlattened("Total Fat", f.fat.totalFat),
                ...this.getFlattened("Saturated Fat", f.fat.saturatedFat),
                ...this.getFlattened("Trans Fat", f.fat.transFat),
                ...this.getFlattened("Potassium", f.potassium),
                ...this.getFlattened("Protein", f.protein),
                ...this.getFlattened("Sodium", f.sodium),
                // Vitamin
                ...this.getFlattened2("Riboflavin", f.riboflavin),
                ...this.getFlattened2("Thiamin", f.thiamin),
                ...this.getFlattened2("Pantothenic Acid", f.pantothenicAcid),
                ...this.getFlattened2("Vitamin A", f.vitaminA),
                ...this.getFlattened2("Vitamin B12", f.vitaminB12),
                ...this.getFlattened2("Zinc", f.zinc),
                ...this.getFlattened2("Vitamin B6", f.vitaminB6),
                ...this.getFlattened2("Vitamin C", f.vitaminC),
                ...this.getFlattened2("Vitamin D", f.vitaminD),
                ...this.getFlattened2("Folic Acid", f.folicAcid),
                ...this.getFlattened2("Iron", f.iron),
                ...this.getFlattened2("Niacin", f.niacin),
            }
        })
        // console.log(it)


        const options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalSeparator: '.',
            showLabels: true,
            showTitle: true,
            title: 'Product List',
            useTextFile: false,
            useBom: true,
            useKeysAsHeaders: true,
        };

        const csvExporter = new ExportToCsv(options);

        csvExporter.generateCsv(it);

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
            <Lottie
                loop
                animationData={lottieJson}
                play
                style={{width: 250, height: 250, margin: "auto"}}
            />
        </div>)
    }

    renderEmpty = () => {
        return (<div className="text-center py-5 box" style={{
            borderRadius:"10px"
        }}>
            <br/>
            <br/>
            <p>Your don’t have image in the list</p>
            <br/>
            <Link to="/upload" className='btn btn-primary'>
                <span style={{
                    color: "white"
                }}>Add New</span>
            </Link>
            {/*<button className='btn btn-primary' style={{ width: '192px' }}>Add New</button>*/}
            <br/>
            <br/>
        </div>)
    }

    renderList = () => {
        return (

            <div className="text-center box pt-5 pb-3" style={{background: "white",
                borderRadius:"10px"}}>

                <div className="py-5 mb-5">
                    <button
                        onClick={this.exportToCsv}
                        className="btn btn-primary px-5 py-3">Download CSV
                    </button>
                </div>

                <table className="table">
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