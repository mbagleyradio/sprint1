import { useState } from 'react';
import { useLocation } from 'react-router-dom';
function PopupI(/*props*/) {
    const [ insurance, setInsurance ] = useState("");
    const [ name, setName ] = useState("");
    const [ phoneNumber, setPhoneNumber ] = useState("");
    const [ email, setEmail ] = useState("");
    const { state } = useLocation();
    const cbData = state && state.cbData;

    const user = {
        insurance: {
            isMultiplan: false,
            isOptum: false,
            isNeighborhood: false,
            isPreferred: false,
            isPHS: false,
            isUnited: false,
            isWellcare: false,
            isNotListed: false
        }, 
        noInsurance: {
            isNoCost: false,
            isSliding: false,
            isDiscount: false,
            isPayment: false,
            isFAP: false,
            isCatastrophic: false,
            isCareCredit: false,
            isSelfPay: false
        },
        contactInfo: {
            name: "",
            insurance: "",
            phoneNumber: "",
            email: ""
        }
    }


    const handleSubmit = () => {
        if (cbData[0] === true) {
            const arrayLength = cbData.length;
            let count = 1;
            for (count = 1; count < arrayLength; count++) {
                if (cbData[count] === true) {
                    switch(count) {
                        case 1: // Multiplan
                            user.insurance.isMultiplan = true;
                        break;
                        case 2: // Optum
                            user.insurance.isOptum = true;
                        break;
                        case 3: // Neighborhood
                            user.insurance.isNeighborhood = true;
                        break;
                        case 4: // Preferred
                            user.insurance.isPreferred = true;
                        break;
                        case 5: // PHS
                            user.insurance.isPHS = true;
                        break;
                        case 6: // United
                            user.insurance.isUnited = true;
                        break;
                        case 7: // Wellcare
                            user.insurance.isWellcare = true;
                        break;
                        case 8: // Not Listed 
                            user.insurance.isNotListed = true;
                        break;
                        default:
                        break;
                    }
                }
            }

            user.contactInfo.name = name;
            user.contactInfo.insurance = insurance;
            user.contactInfo.phoneNumber = phoneNumber;
            user.contactInfo.email = email;
        }
    }
        
        /*
        const userData = [insurance, name, phoneNumber, email];
        const response = await fetch("http://localhost:3000/storeContact", {
            method: "PUT",
            body: JSON.stringify(userData);
        });

        */
    
    return (
        <form onSubmit={() => handleSubmit()}>
            <label>
                Name of Your Insurance:
                <input type="text" name="insurance" onChange={(e) => setInsurance(e.target.value)}/>
            </label>
            <label>
                Your Name: 
                <input type="text" name="name" onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
                Your Phone Number: 
                <input type="text" name="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} />
            </label>
            <label>
                Your Email: 
                <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <p>As soon as we can, someone will get back to you and see if we can't sort this all out. Your health and providing access to care is important to us.</p>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default PopupI;