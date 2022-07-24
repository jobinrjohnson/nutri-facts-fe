import './style.css';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import NutrieFact from '../../components/NutrieFact/NutrieFact';
import {Component} from "react";
import {getPath, getToken, saveToken} from "../../api/main";
import {Navigate} from "react-router-dom";

class ProductListSelect extends Component {

    constructor(props) {
        super(props);
        let se = {}
        Object.keys(this.props.results).map(x => {
            se[x] = false
        })
        this.state = {
            selectedItems: se,
            isComplete: false,
            has401: false,
            err: ""
        }
    }


    renderSelectBar() {

        return (<div className="selectbar px-3 py-4">
            <div className='row align-items-center mb-4'>
                <div className='col-auto'>
                    <input type="checkbox" onChange={(e) => {
                        let se = {}
                        Object.keys(this.props.results).map(x => {
                            se[x] = e.target.checked
                        })
                        this.setState({selectedItems: se})
                    }}/>
                </div>
                <div className='col-auto'>
                    <svg width="24" height="24" viewBox="0 0 32 28" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.29167 8.24992C6.73938 8.24992 6.29167 8.69763 6.29167 9.24992C6.29167 9.8022 6.73938 10.2499 7.29167 10.2499V8.24992ZM13.6296 3.32385L12.7011 3.69524L12.7011 3.69524L13.6296 3.32385ZM14.2629 4.90718L15.1914 4.53579L14.2629 4.90718ZM29.25 15.5833V20.3333H31.25V15.5833H29.25ZM23.9167 25.6666H8.08333V27.6666H23.9167V25.6666ZM2.75 20.3333V4.49992H0.75V20.3333H2.75ZM4.91667 2.33325H10.6894V0.333252H4.91667V2.33325ZM12.7011 3.69524L13.3344 5.27857L15.1914 4.53579L14.558 2.95246L12.7011 3.69524ZM11.3227 8.24992H7.29167V10.2499H11.3227V8.24992ZM7.29167 10.2499H23.9167V8.24992H7.29167V10.2499ZM10.6894 2.33325C11.2306 2.33325 11.5559 2.33465 11.7986 2.3613C12.0168 2.38526 12.0704 2.42134 12.0884 2.43355L13.2097 0.777412C12.8256 0.517388 12.4185 0.417354 12.017 0.373257C11.64 0.331857 11.1866 0.333252 10.6894 0.333252V2.33325ZM14.558 2.95246C14.3734 2.49084 14.2063 2.06932 14.0279 1.73468C13.8378 1.37825 13.5937 1.03743 13.2097 0.777412L12.0884 2.43355C12.1064 2.44575 12.1598 2.48207 12.2631 2.67574C12.378 2.89121 12.5001 3.19276 12.7011 3.69524L14.558 2.95246ZM13.3344 5.27857C13.7402 6.29288 14 6.94943 14.1167 7.43941C14.2286 7.90938 14.1482 7.98799 14.1444 7.99362L15.8005 9.11488C16.2677 8.42483 16.2261 7.66371 16.0622 6.97597C15.9032 6.30822 15.5727 5.48908 15.1914 4.53579L13.3344 5.27857ZM11.3227 10.2499C12.3495 10.2499 13.2327 10.2525 13.9118 10.1522C14.6112 10.0489 15.3334 9.80492 15.8005 9.11488L14.1444 7.99362C14.1406 7.99924 14.0975 8.10309 13.6195 8.1737C13.1213 8.2473 12.4152 8.24992 11.3227 8.24992V10.2499ZM8.08333 25.6666C6.56228 25.6666 5.52209 25.6645 4.74189 25.5596C3.99045 25.4585 3.63158 25.279 3.3846 25.032L1.97039 26.4462C2.65091 27.1267 3.50218 27.4109 4.47539 27.5417C5.41984 27.6687 6.61882 27.6666 8.08333 27.6666V25.6666ZM0.75 20.3333C0.75 21.7978 0.747876 22.9967 0.874854 23.9412C1.0057 24.9144 1.28987 25.7657 1.97039 26.4462L3.3846 25.032C3.13762 24.785 2.95805 24.4261 2.85702 23.6747C2.75212 22.8945 2.75 21.8543 2.75 20.3333H0.75ZM29.25 20.3333C29.25 21.8543 29.2479 22.8945 29.143 23.6747C29.042 24.4261 28.8624 24.785 28.6154 25.032L30.0296 26.4462C30.7101 25.7657 30.9943 24.9144 31.1251 23.9412C31.2521 22.9967 31.25 21.7978 31.25 20.3333H29.25ZM23.9167 27.6666C25.3812 27.6666 26.5802 27.6687 27.5246 27.5417C28.4978 27.4109 29.3491 27.1267 30.0296 26.4462L28.6154 25.032C28.3684 25.279 28.0096 25.4585 27.2581 25.5596C26.4779 25.6645 25.4377 25.6666 23.9167 25.6666V27.6666ZM31.25 15.5833C31.25 14.1187 31.2521 12.9198 31.1251 11.9753C30.9943 11.0021 30.7101 10.1508 30.0296 9.47031L28.6154 10.8845C28.8624 11.1315 29.042 11.4904 29.143 12.2418C29.2479 13.022 29.25 14.0622 29.25 15.5833H31.25ZM23.9167 10.2499C25.4377 10.2499 26.4779 10.252 27.2581 10.3569C28.0096 10.458 28.3684 10.6375 28.6154 10.8845L30.0296 9.47031C29.3491 8.78979 28.4978 8.50562 27.5246 8.37477C26.5802 8.24779 25.3812 8.24992 23.9167 8.24992V10.2499ZM2.75 4.49992C2.75 3.72526 2.75212 3.24486 2.79905 2.89582C2.84211 2.57554 2.90575 2.51921 2.92085 2.50411L1.50664 1.08989C1.058 1.53854 0.889763 2.08727 0.816886 2.62932C0.747876 3.14261 0.75 3.7818 0.75 4.49992H2.75ZM4.91667 0.333252C4.19855 0.333252 3.55936 0.331128 3.04607 0.400138C2.50402 0.473015 1.95528 0.64125 1.50664 1.08989L2.92085 2.50411C2.93596 2.489 2.99229 2.42536 3.31257 2.3823C3.66161 2.33538 4.14201 2.33325 4.91667 2.33325V0.333252Z"
                            fill="#92C64E"/>
                    </svg>

                </div>

                <div className='col ps-0 text-spec'>Product list</div>
            </div>

            <div className="ps-3">
                {Object.keys(this.props.results).map(x => {
                    return (<div className="row align-items-center mb-4" key={x}>

                        <div className="col-auto">
                            <input type="checkbox"
                                   checked={this.state.selectedItems[x]}
                                   onChange={e => {
                                       this.setState({
                                           selectedItems: {
                                               ...this.state.selectedItems, [x]: e.target.checked
                                           }
                                       }, () => {
                                           console.log(this.state.selectedItems)
                                       })
                                   }}
                            />
                        </div>
                        <div className="col-auto">
                            <img width="38" src={"https://lgpoc1.s3.amazonaws.com/" + x}/>
                        </div>
                        <div className='col tabletext overflow-hidden'>
                            <span>{this.getFileNameFromPath(x)}</span>
                        </div>
                        <div className='col-auto'></div>
                    </div>)
                })}
            </div>

        </div>)
    }

    getFileNameFromPath(name) {
        let x = name.split("/")
        if (x.length === 0) {
            return name
        }
        return x[x.length - 1]
    }

    saveAllInfo = () => {
        let i = []
        for (let selectedItem in this.state.selectedItems) {
            let item = this.props.results[selectedItem]
            i.push({
                name: selectedItem, image: this.getFileNameFromPath(selectedItem), nutriInfo: item
            })
        }
        console.log(i)

        let myHeaders = new Headers();
        myHeaders.append("Authorization", getToken());
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify(i);

        let requestOptions = {
            method: 'POST', headers: myHeaders, body: raw, redirect: 'follow'
        };

        fetch(getPath("/product"), requestOptions)
            .then(response => {
                response.json().then((r) => {
                    if (response.status >= 401) {
                        this.setState({has401: true})
                        return
                    }
                    if (response.status >= 400) {
                        alert(r.msg)
                        this.setState({err: r.msg})
                        return
                    }
                    this.setState({isComplete: true})
                })
            })
            .catch(error => this.setState({err: error?.toString}));


    }

    render() {

        if (this.state.isComplete) {
            return <Navigate to="/"/>
        }


        if (this.state.has401) {
            return <Navigate to="/login"/>
        }

        return (<DashboardLayout>


            <div className='row align-items center pb-3'>
                <div className='col-auto'>
                    {/*<input type="checkbox"/>*/}
                </div>
                <div className='col-auto'>
                    {/*Select All*/}
                </div>
                <div className='col'>
                </div>
                <div className='col-auto'>
                    <button className="btn btn-primary"
                            onClick={this.saveAllInfo}
                    >Done
                    </button>
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    {this.renderSelectBar()}
                </div>
                <div className="col">

                    <div className="w-100">
                        {Object.keys(this.state.selectedItems).map(x => {
                            if (!this.state.selectedItems[x]) {
                                return <span key={x}></span>
                            }
                            return (<NutrieFact key={x} image={"https://lgpoc1.s3.amazonaws.com/" + x}
                                                facts={this.props.results[x]}/>)
                        })}
                    </div>

                </div>
            </div>

        </DashboardLayout>);
    }
}

export default ProductListSelect;