import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './Popup.css';

function PopupNoI(/*props*/) {
    const navigateArg = {
        state: null,
        replace: true
    }
    const navigate = useNavigate();
    const messageStr = "As soon as we can, someone will get back to you and see if we can't sort this all out. Your health and providing access to care is important to us.";
    const [ name, setName ] = useState("");
    const [ phoneNumber, setPhoneNumber ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ insurance, setInsurance ] = useState("");
    const location = useLocation();
    const cbData = location.state;
    console.log(cbData);
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
        console.log("Submission begun");
        e.preventDefault();

        if (cbData[0] === false) {
            const arrayLength = cbData.length;
            let count = 1;
            let insuranceContext = "This user has: ";
            for (count = 1; count < arrayLength; count++) {
                if (cbData[count] === true) {
                    switch(count) {
                        case 1: // NoCost
                            user.noInsurance.isNoCost = true;
                            insuranceContext += "No cost for eligible uninsured, ";
                        break;
                        case 2: // Sliding
                            user.noInsurance.isSliding = true;
                            insuranceContext += "Uninsured sliding fee, ";
                        break;
                        case 3: // Discount
                            user.noInsurance.isDiscount = true;
                            insuranceContext += "Uninsured discount, ";
                        break;
                        case 4: // Payment
                            user.noInsurance.isPayment = true;
                            insuranceContext += "Payment plans, ";
                        break;
                        case 5: // FAP
                            user.noInsurance.isFAP = true;
                            insuranceContext += "F.A.P. discount (financial assistance program), ";
                        break;
                        case 6: // Catastrophic
                            user.noInsurance.isCatastrophic = true;
                            insuranceContext += "Catastrophic care discount, ";
                        break;
                        case 7: // Care Credit
                            user.noInsurance.isCareCredit = true;
                            insuranceContext += "Care credit card, ";
                        break;
                        case 8: // Self Pay
                            user.noInsurance.isSelfPay = true;
                            insuranceContext += "Self-pay, ";
                        break;
                        default:
                        break;
                    }
                }
            }
                
            user.contactInfo.name = name;
            user.contactInfo.phoneNumber = phoneNumber;
            user.contactInfo.email = email;
            user.contactInfo.insurance = insurance;

            sendEmail(insuranceContext);
        }
        navigate("../submitted", navigateArg);
    }

    const sendEmail = (insuranceContext) => {
        fetch("http://uvcsandbox.com/php/EmailJS.php", {
            method: "GET",
            mode: "cors",
            headers: {}
        }).then(response => { 
            return response.json()
        }).then(data => {
            // need to pull from the inner objects (contact info and insurance)
            emailjs.send("service_unhpfsm","template_frqcrni",{
                userName: user.contactInfo.name,
                userInsuranceContext: insuranceContext,
                userInsurance: user.contactInfo.insurance,
                userEmail: user.contactInfo.email,
                userPhone: user.contactInfo.phoneNumber
                },  data[0].VALUE);
        }).catch(error => {
            console.log(error)
        });
    }
    return (
        <div>
            <form id="formDisplay" onSubmit={handleSubmit}>
                <label>
                    Your Name: 
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)}/>
                </label>
                <label>
                    Your Insurance: 
                    <input type="text" name="insurance" onChange={(e) => setInsurance(e.target.value)}/>
                </label>
                <label>
                    Your Phone Number: 
                    <input type="text" name="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} />
                </label>
                <label>
                    Your Email: 
                    <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <p>{messageStr}</p>
                <input id="submitButtonDisplay" type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default PopupNoI;