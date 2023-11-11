import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';

function PopupI(/*props*/) {
    const [ insurance, setInsurance ] = useState("");
    const [ name, setName ] = useState("");
    const [ phoneNumber, setPhoneNumber ] = useState("");
    const [ email, setEmail ] = useState("");
    const location = useLocation();
    const cbData = location.state;

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


    const handleSubmit = (e) => {
        e.preventDefault();
        if (cbData[0] === true) {
            const arrayLength = cbData.length;
            let count = 1;
            let insuranceContext = "This user has: ";

            for (count = 1; count < arrayLength; count++) {
                if (cbData[count] === true) {
                    switch(count) {
                        case 1: // Multiplan
                            user.insurance.isMultiplan = true;
                            insuranceContext += "Multiplan, ";
                        break;
                        case 2: // Neighborhood
                            user.insurance.isNeighborhood = true;
                            insuranceContext += "Neighborhood Health Plan, ";
                        break;
                        case 3: // Optum
                            user.insurance.isOptum = true;
                            insuranceContext += "Optum Healthcare, ";
                        break;
                        case 4: // Preferred
                            user.insurance.isPreferred = true;
                            insuranceContext += "Preferred Medical Plan (PMP), ";
                        break;
                        case 5: // PHS
                            user.insurance.isPHS = true;
                            insuranceContext += "Private Healthcare Systems (PHS), ";
                        break;
                        case 6: // United
                            user.insurance.isUnited = true;
                            insuranceContext += "UnitedHealthCare, ";
                        break;
                        case 7: // Wellcare
                            user.insurance.isWellcare = true;
                            insuranceContext += "Wellcare, ";
                        break;
                        case 8: // Not Listed 
                            user.insurance.isNotListed = true;
                            insuranceContext += "Insurance is not listed, ";
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

            // need to pull from the inner objects (contact info and insurance)
            emailjs.send("service_m1jpu3c","template_frqcrni",{
                userName: user.contactInfo.name,
                userInsuranceContext: insuranceContext,
                userInsurance: user.contactInfo.insurance,
                userEmail: user.contactInfo.email,
                userPhone: user.contactInfo.phoneNumber
                },  'En_CwK8mACVmRtAka');
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
        <form onSubmit={handleSubmit}>
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