import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ComInsurance() {
    
    const navigate = useNavigate();

	const handleCheck = (checkboxNum) => {

		switch (checkboxNum) {
			
		}
	}

    // prepare data for processing, and route to entry form for contact info
	const handleClick = () => {
		const cbData = [true, true, true, true, true];
		/*const response = await fetch("http://localhost:3000/storeCheckbox", {
            method: "PUT",
            body: JSON.stringify(cbData);
        });
        
        
        */
		navigate("../contact-ins", {state: cbData});
	}

    return (
        <div id="hasInsurance">
            <form id="scrollBarForm">
                <input type="radio" id="aarp" name="aarp" value="aarp"/>
                <label for="aarp">AARP</label><br/>
                <input type="radio" id="aetna" name="aetna" value="aetna"/>
                <label for="aetna">Aetna</label><br/>
                <input type="radio" id="ambetter" name="ambetter" value="ambetter"/>
                <label for="ambetter">Ambetter</label><br/>
                <input type="radio" id="assurant" name="assurant" value="assurant"/>
                <label for="assurant">Assurant</label><br/>
                <input type="radio" id="avmedhealth" name="avmedhealth" value="avmedhealth"/>
                <label for="avmedhealth">AvMed Health Plans</label><br/>
                <input type="radio" id="beech" name="beech" value="beech"/>
                <label for="aarp">Beech Street</label><br/>
                <input type="radio" id="bluecross" name="bluecross" value="bluecross"/>
                <label for="aarp">AARP</label><br/>
                <input type="radio" id="aarp" name="aarp" value="aarp"/>
                <label for="aarp">AARP</label><br/>
                <input type="radio" id="aarp" name="aarp" value="aarp"/>
                <label for="aarp">AARP</label><br/>
                <input type="radio" id="aarp" name="aarp" value="aarp"/>
                <label for="aarp">AARP</label><br/>
                <input type="radio" id="aarp" name="aarp" value="aarp"/>
                <label for="aarp">AARP</label><br/>
                <input type="radio" id="aarp" name="aarp" value="aarp"/>
                <label for="aarp">AARP</label><br/>
                <input type="radio" id="aarp" name="aarp" value="aarp"/>
                <label for="aarp">AARP</label><br/>

            </form>
        </div>
    );
}

export default ComInsurance;