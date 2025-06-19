import './ProviderListingIndividual.css';
import Provider_Individual from '../src/sprint4/img/Provider.png';

export default function ProviderInfo({physician, healthCareCategory}) {
    const generateNameForProvider = () => {
        // start with first name
        let name = physician["physician"]["firstName"];
        
        // check for middle name
        if (physician["physician"]["middleName"] !== "") {
            // provide middle name and last name
            name += ` ${physician["physician"]["middleName"]} ${physician["physician"]["lastName"]}`;
        } else {
            name += ` ${physician["physician"]["lastName"]}`
        }

        // check for suffix
        if (physician["physician"]["suffix"] !== "") {
            // provide suffix
            name += `, ${physician["physician"]["suffix"]}`;
        }

        return name; 
    }

    const isTargetHealthcareCategory = () => {
        // check primary field
        if (physician["physician"]["primaryFieldOfMedicine"] !== null) {
            if (physician["physician"]["primaryFieldOfMedicine"]["name"] === healthCareCategory) {
                return true;
            }
        }

        // check secondary field
        if (physician["physician"]["secondaryFieldOfMedicine"] !== null) {
            if (physician["physician"]["secondaryFieldOfMedicine"]["name"] === healthCareCategory) {
                return true;
            }
        }

        // if (primary and secondary are both null) OR (neither primary or secondary matched healthcare category) then this code is reached
        return false;
    }

    const physician_name = generateNameForProvider();
    
    if (isTargetHealthcareCategory() === false) {
        return (<></>);
    }  
    else {
    return (
    <div className="individualListingProviderInfo">
        <div id="thumbnailLicenseAndPrimary">
            <div id="thumbnailLicense">
                <img className="providerGroupIMG" src={Provider_Individual} alt="an Individual Provider"/>
                <div id="license">
                    <p className="individualListingText">{physician_name}</p>
                    <p className="individualListingText">{physician["physician"]["licenseNumber"]}</p>
                </div>
            </div>
            <div id="primary">
                <div id="primaryLabels">
                    <p className="individualListingText">Primary Field: {physician["physician"]["primaryFieldOfMedicine"] !== null ? physician["physician"]["primaryFieldOfMedicine"]["name"] : ""}</p>
                    <p className="individualListingText">Secondary Field: {physician["physician"]["secondaryFieldOfMedicine"] !== null ? physician["physician"]["secondaryFieldOfMedicine"]["name"] : ""}</p>
                    <p className="individualListingText">Specialties: {physician["specialtyAreas"]}</p>
                </div>
            </div>
        </div>
        <div id="providerCV">

        </div>
    </div>
);
}}
