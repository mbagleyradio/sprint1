import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function PopupNoI(/*props*/) {
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
            insurance: "NONE",
            phoneNumber: "",
            email: ""
        }
    }


    const handleSubmit = () => {
        if (cbData[0] === false) {
            const arrayLength = cbData.length;
            let count = 1;
            for (count = 1; count < arrayLength; count++) {
                if (cbData[count] === true) {
                    switch(count) {
                        case 1: // NoCost
                            user.insurance.isNoCost = true;
                        break;
                        case 2: // Sliding
                            user.insurance.isSliding = true;
                        break;
                        case 3: // Discount
                            user.insurance.isDiscount = true;
                        break;
                        case 4: // Payment
                            user.insurance.isPayment = true;
                        break;
                        case 5: // FAP
                            user.insurance.isFAP = true;
                        break;
                        case 6: // Catastrophic
                            user.insurance.isCatastrophic = true;
                        break;
                        case 7: // Care Credit
                            user.insurance.isCareCredit = true;
                        break;
                        case 8: // Self Pay
                            user.insurance.isSelfPay = true;
                        break;
                        default:
                        break;
                    }
                }
            }
                
            user.contactInfo.name = name;
            user.contactInfo.phoneNumber = phoneNumber;
            user.contactInfo.email = email;
        }
    }
    return (
        <form onSubmit={() => handleSubmit()}>
            <label>
                Your Name: 
                <input type="text" name="name" onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
                Your Phone Number: 
                <input type="text" name="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)}/>
            </label>
            <label>
                Your Email: 
                <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <p>As soon as we can, someone will get back to you and see if we can't sort this all out. Your health and providing access to care is important to us.</p>
            <input type="button" value="Submit"/>
        </form>
    );
}

export default PopupNoI;