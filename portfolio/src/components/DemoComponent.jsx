import React from "react";
import ProfilePic from '../images/unnamed.jpg';



// function DemoComponent(props) {
//     console.log(props)
//     return(
//         <div>
//             <h1>I am {props.name} from {props.country}</h1>
//         </div>
//     );
// }
// export default DemoComponent;

function DemoComponent(props) {
    console.log(props)
    return(
        <div>
            <h1>I am {props.name} from {props.country}</h1>
            {props.children}
        </div>
    );
}
export default DemoComponent;

// function DemoComponent() {
//     return(
//         <div>
//             <h1>A</h1>
//         </div>
//     );
// }
// export default DemoComponent;