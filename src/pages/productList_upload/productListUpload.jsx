import './style.css';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import {FileUploader} from "react-drag-drop-files";
import {Component} from "react";
import ProductListSelect from "../productListSelect/productListSelect";

const fileTypes = ["JPG", "JPEG", "PNG", "GIF"];

class ProductListUpload extends Component {

    results = {}
    //
    // results = {
    //     "644b7d0544cf4b0285fcd0772ac16741/1eec551754fe45b0b57c19a725de447f-584d7207d702470197185ba9ff06352c-a778fd3e25fd418ea68276cff932858b-nutrition-facts-label-for-kelloggs-froot-loops-cereal-KFHENP.jpg": {
    //         "biotin": {},
    //         "calcium": {},
    //         "calories": "100",
    //         "carbohydrate": {
    //             "dietaryFiber": {
    //                 "quantity": "3",
    //                 "type": "3g"
    //             },
    //             "totalCarbohydrate": {
    //                 "quantity": "2",
    //                 "type": "24g"
    //             },
    //             "totalSugars": {}
    //         },
    //         "cholesterol": {},
    //         "fat": {
    //             "saturatedFat": {
    //                 "type": "0g"
    //             },
    //             "totalFat": {},
    //             "transFat": {
    //                 "type": "0g"
    //             }
    //         },
    //         "folicAcid": {},
    //         "iron": {},
    //         "niacin": {},
    //         "pantothenicAcid": {},
    //         "potassium": {},
    //         "protein": {
    //             "type": "1g"
    //         },
    //         "riboflavin": {},
    //         "serving": {
    //             "serving": "1 Box (279)"
    //         },
    //         "sodium": {
    //             "quantity": "1",
    //             "type": "140mg"
    //         },
    //         "thiamin": {},
    //         "vitaminA": {},
    //         "vitaminB12": {},
    //         "vitaminB6": {},
    //         "vitaminC": {},
    //         "vitaminD": {},
    //         "zinc": {}
    //     },
    //     "5f9a2cb4cacd4e42b44247e3ffc2abd4/8d4e20f382b945c0a0716a11eedbc9bd-2eb1ca8049404bf79b8582c003dea83d-a778fd3e25fd418ea68276cff932858b-nutrition-facts-label-for-kelloggs-froot-loops-cereal-KFHENP.jpg": {
    //         "biotin": {},
    //         "calcium": {},
    //         "calories": "100",
    //         "carbohydrate": {
    //             "dietaryFiber": {
    //                 "quantity": "3",
    //                 "type": "3g"
    //             },
    //             "totalCarbohydrate": {
    //                 "quantity": "2",
    //                 "type": "24g"
    //             },
    //             "totalSugars": {}
    //         },
    //         "cholesterol": {},
    //         "fat": {
    //             "saturatedFat": {
    //                 "type": "0g"
    //             },
    //             "totalFat": {},
    //             "transFat": {
    //                 "type": "0g"
    //             }
    //         },
    //         "folicAcid": {},
    //         "iron": {},
    //         "niacin": {},
    //         "pantothenicAcid": {},
    //         "potassium": {},
    //         "protein": {
    //             "type": "1g"
    //         },
    //         "riboflavin": {},
    //         "serving": {
    //             "serving": "1 Box (279)"
    //         },
    //         "sodium": {
    //             "quantity": "1",
    //             "type": "140mg"
    //         },
    //         "thiamin": {},
    //         "vitaminA": {},
    //         "vitaminB12": {},
    //         "vitaminB6": {},
    //         "vitaminC": {},
    //         "vitaminD": {},
    //         "zinc": {}
    //     }
    // }


    constructor(props) {
        super(props);

        this.state = {
            file: null, step: 1, total: 0, uploaded: 0
        }
    }

    uploadFile(file) {
        let myHeaders = new Headers();
        let formdata = new FormData();
        formdata.append("image", file, file.name);

        let requestOptions = {
            method: 'POST', headers: myHeaders, body: formdata, redirect: 'follow'
        };

        return fetch("https://lgpocdemobackenddemo.jobinrjohnson.in/infer", requestOptions)
            .then(response => {
                return response.json()
            })
            .then(result => {
                this.results[result.filePath] = result.result
                console.log(result)
            })
            .catch(error => console.log('error', error));
    }


    handleChange = (file) => {
        this.setState({
            file: file, step: 2
        }, async () => {

            this.setState({
                total: this.state.file.length
            })

            let x = 1;
            for (let fe of this.state.file) {
                await this.uploadFile(fe)
                this.setState({
                    uploaded: ++x
                })
            }

            this.setState({
                step: 3
            })

            console.log(this.results)

        })
    };

    renderUploadContent = () => {

        return (<DashboardLayout noSidebar={true}>
            <div style={{
                textAlign:"center"
            }}>
                <FileUploader
                    multiple={true}
                    handleChange={this.handleChange}
                    name="file"
                    types={fileTypes}
                >

                    <div className="text-center py-5" style={{width: "90vw", margin: "auto"}}>

                        <svg width="50" height="50" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M20.317 19.7658C20.0157 20.0528 19.3991 20.5 18.5 20.5H12.5C9.16559 20.5 5 24.0775 5 30C5 32.7021 6.2572 35.1073 7.98145 36.8838C8.8384 37.7667 9.76804 38.4472 10.6227 38.8957C11.5104 39.3616 12.1663 39.5 12.5 39.5H28.9289L23.9289 44.5H12.5C11.0837 44.5 9.61461 44.0134 8.29916 43.323C6.95071 42.6153 5.5991 41.6083 4.39355 40.3662C1.9928 37.8927 0 34.2979 0 30C0 21.9225 5.83441 15.5 12.5 15.5H16.8318C16.889 15.3088 16.9553 15.0903 17.0352 14.8339C17.5129 13.302 18.2733 11.1384 19.6185 8.94359C22.3984 4.40793 27.5394 0 37 0C46.4238 0 51.996 4.36416 55.2577 8.76038C56.8558 10.9143 57.8809 13.0447 58.5532 14.5696C58.7198 14.9476 58.8477 15.2473 58.9554 15.5H69.5C70.8871 15.5 72.1245 15.9107 73.1149 16.7282C74.0662 17.5134 74.6064 18.5221 74.9221 19.4241C75.5025 21.0824 75.5009 22.9423 75.5001 23.8987L75.5 24V39C75.5 40.9937 74.436 42.4941 72.9977 43.3791C71.6617 44.2013 70.0324 44.5 68.5 44.5H51.071L46.071 39.5H68.5C69.4676 39.5 70.0883 39.2987 70.3773 39.1209C70.4454 39.079 70.4819 39.0468 70.4991 39.0293C70.4993 39.0261 70.4995 39.0224 70.4997 39.0182C70.4999 39.0129 70.5 39.0069 70.5 39V24C70.5 22.9214 70.4762 21.857 70.2029 21.0759C70.0811 20.7279 69.9651 20.6116 69.932 20.5843C69.9183 20.573 69.8986 20.559 69.8544 20.544C69.8065 20.5278 69.6976 20.5 69.5 20.5H57.5C56.6389 20.5 56.0486 20.0862 55.7843 19.8621C55.5067 19.6266 55.324 19.3778 55.2261 19.2341C55.0265 18.9413 54.869 18.6172 54.7628 18.3889C54.6424 18.1302 54.4832 17.7587 54.3176 17.3721L54.3176 17.3721C54.204 17.1068 54.0873 16.8345 53.9781 16.5866C53.3691 15.2053 52.5192 13.4607 51.2423 11.7396C48.754 8.38584 44.5762 5 37 5C29.4606 5 25.8516 8.34207 23.8815 11.5564C22.8517 13.2366 22.2371 14.948 21.8085 16.3224C21.7341 16.5611 21.6537 16.8296 21.5745 17.0939L21.5745 17.094L21.5744 17.0942C21.457 17.4865 21.3423 17.8694 21.2543 18.1311C21.1774 18.3597 21.0535 18.7101 20.8738 19.0352C20.786 19.1942 20.6107 19.4861 20.317 19.7658ZM23.6011 55.4343L20.0656 51.8988L37.5 34.4644L54.9344 51.8988L51.3989 55.4343L40 44.0354V73.2499C40 74.6306 38.8807 75.7499 37.5 75.7499C36.1193 75.7499 35 74.6306 35 73.2499V44.0354L23.6011 55.4343Z"
                                  fill="#BDDD6D"/>
                        </svg>

                        <br/>
                        <br/>

                        <p className='dragdrop'>Drag and Drop here</p>
                        <p>or</p>
                        <button className='btn btn-primary' style={{width: '192px'}}>Browse Files</button>
                        <br/>
                        <br/>
                        <p className='requirements'>Image requirements: PNG or JEPG only. No watermarks</p>
                        <br/>
                        <br/>

                    </div>

                </FileUploader>
            </div>
        </DashboardLayout>);
    }

    renderUploading = () => {
        return (<DashboardLayout noSidebar={true}>
            <div className="w-100 text-center py-5 my-5">
                <progress></progress>
                <p>{this.state.uploaded} out of {this.state.total}</p>
            </div>
        </DashboardLayout>)
    }


    render() {

        if (this.state.step === 1) {
            return this.renderUploadContent()
        } else if (this.state.step === 2) {
            return this.renderUploading()
        }
        return <ProductListSelect results={this.results}></ProductListSelect>
    }
}

export default ProductListUpload;
