import './style.css';
import nutriepic from '../NutrieFact/nutriepic.png'

function formatFact(f) {
    if (!f) {
        return ""
    }
    return f + "%";
}

function NutrieFact(props) {

    let facts = props.facts

    return (<div className="text-center p-5 box mb-4" style={{background:"white"}}>
        <div className='row align-items-center'>
            <div className='col-4'>
                <img src={props.image} className="w-100"/>
            </div>
            <div className='col'>
                <table className='w-100 nutri-tab'>
                    <tbody>
                    <tr>
                        <th>
                            Calories:
                            <span>{facts.calories}</span>
                        </th>
                        <td>% Daily Value</td>
                    </tr>

                    {/*Fat*/}
                    <tr>
                        <th>
                            Total Fat:
                            <span>{facts.fat?.totalFat?.type}</span>
                        </th>
                        <td>{formatFact(facts.fat?.totalFat?.quantity)}</td>
                    </tr>
                    <tr>
                        <td>
                            Saturated Fat:
                            <span>{facts.fat?.saturatedFat?.type}</span>
                        </td>
                        <td>{formatFact(facts.fat?.saturatedFat?.quantity)}</td>
                    </tr>
                    <tr>
                        <td>
                            Trans Fat:
                            <span>{facts.fat?.transFat?.type}</span>
                        </td>
                        <td>{formatFact(facts.fat?.transFat?.quantity)}</td>
                    </tr>

                    {/*Sodium*/}
                    <tr>
                        <th>
                            Sodium:
                            <span>{facts.sodium?.type}</span>
                        </th>
                        <td>{formatFact(facts.sodium?.quantity)}</td>
                    </tr>
                    <tr>
                        <th>
                            Cholesterol:
                            <span>{facts.cholesterol?.type}</span>
                        </th>
                        <td>{formatFact(facts.cholesterol?.quantity)}</td>
                    </tr>
                    {/*Carbohydrate*/}
                    <tr>
                        <th>
                            Total Carbohydrate:
                            <span>{facts.carbohydrate?.totalCarbohydrate?.type}</span>
                        </th>
                        <td>{formatFact(facts.carbohydrate?.totalCarbohydrate?.quantity)}</td>
                    </tr>
                    <tr>
                        <td>
                            Dietary Fiber:
                            <span>{facts.carbohydrate?.dietaryFiber?.type}</span>
                        </td>
                        <td>{formatFact(facts.carbohydrate?.dietaryFiber?.quantity)}</td>
                    </tr>
                    <tr>
                        <td>
                            Total Sugars:
                            <span>{facts.carbohydrate?.totalSugars?.type}</span>
                        </td>
                        <td>{formatFact(facts.carbohydrate?.totalSugars?.quantity)}</td>
                    </tr>
                    <tr>
                        <th>
                            Protein:
                            <span>{facts.protein?.type}</span>
                        </th>
                        <td>{formatFact(facts.protein?.quantity)}</td>
                    </tr>

                    </tbody>

                </table>
            </div>


        </div>
        <br/>
        <div className='row align-items-center'>
            <div className='col'>
                <div className='row align-items-center'>
                    <div className='col-auto pe-0'>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M8.52911 9.52911V21.7229L10.0549 20.2988C10.2319 20.1336 10.4649 20.0418 10.707 20.0418H22.2911V9.52911H8.52911ZM7 8.9557C7 8.42788 7.42788 8 7.9557 8H22.8645C23.3924 8 23.8202 8.42788 23.8202 8.9557V20.6152C23.8202 21.143 23.3924 21.5709 22.8645 21.5709H10.933L8.60778 23.7411C7.99688 24.3113 7 23.878 7 23.0424V8.9557ZM14.579 11.3684H16.2632V15.5789H14.579V11.3684ZM16.2632 16.4211H14.579V18.1054H16.2632V16.4211Z"
                                  fill="#6DB5DD"/>
                        </svg>


                    </div>
                    <div className='col-auto ps-0'>
                        Report
                    </div>
                </div>

            </div>

            <div className='col-auto'>
                <div className='row align-items-center'>
                    <div className='col-auto'>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M10.6966 5.48315H18.3595V4H10.6966V5.48315ZM22.809 7.46075H6V5.9776H22.809V7.46075ZM8.47183 8.94383C7.78923 8.94383 7.23587 9.49719 7.23587 10.1798V24.7641C7.23587 25.4467 7.78923 26 8.47183 26H20.5842C21.2668 26 21.8201 25.4467 21.8201 24.7641V10.1798C21.8201 9.49719 21.2668 8.94383 20.5842 8.94383H8.47183ZM8.71902 24.5169V10.427H20.337V24.5169H8.71902ZM17.588 13.3634L14.6517 16.2997L11.7154 13.3634L10.6666 14.4121L13.6029 17.3484L10.6666 20.2847L11.7154 21.3335L14.6517 18.3972L17.588 21.3335L18.6367 20.2847L15.7004 17.3484L18.6367 14.4121L17.588 13.3634Z"
                                  fill="#F36767"/>
                        </svg>


                    </div>
                    <div className='col-auto ps-0'>
                        Delete
                    </div>
                </div>

            </div>

            <div className='col-auto'>
                <div className='row align-items-center'>
                    <div className='col-auto'>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M25.5766 9.34941C25.9987 8.92735 25.9987 8.24306 25.5766 7.821L22.5198 4.7642C22.0978 4.34214 21.4135 4.34214 20.9914 4.7642L19.463 6.2926C19.041 6.71466 19.041 7.39895 19.463 7.821L22.5198 10.8778C22.9419 11.2999 23.6262 11.2999 24.0482 10.8778L25.5766 9.34941ZM24.5067 8.58521L23.284 9.80793L20.5329 7.0568L21.7556 5.83408L24.5067 8.58521ZM21.9085 13.0176C22.3305 12.5955 22.3305 11.9112 21.9085 11.4892L18.8516 8.43237C18.4296 8.01031 17.7453 8.01031 17.3232 8.43237L6.29252 19.4631C6.08985 19.6658 5.97598 19.9407 5.97598 20.2273L5.97598 23.2841C5.97598 23.881 6.45985 24.3648 7.05672 24.3648L10.1135 24.3648C10.4002 24.3648 10.6751 24.251 10.8777 24.0483L21.9085 13.0176ZM20.8386 12.2534L10.024 23.0679L7.27287 23.0679L7.27287 20.3168L18.0874 9.50225L20.8386 12.2534Z"
                                  fill="#92C64E"/>
                        </svg>

                    </div>
                    <div className='col-auto ps-0'>
                        Edit
                    </div>
                </div>

            </div>

        </div>
    </div>);
}

export default NutrieFact;