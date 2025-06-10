import './ProviderListingIndividual.css';
import Provider_Individual from '../src/sprint4/img/provider_individual.png';

export default function ProviderInfo({physician}) {
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

    const physician_name = generateNameForProvider();

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
                    <p className="individualListingText">Primary Field:</p>
                    <p className="individualListingText">Secondary Field:</p>
                    <p className="individualListingText">Specialty Area(s):</p>
                </div>
                <div id="primaryFields">
                    {physician["physician"]["primaryFieldOfMedicine"] !== null ? <p className="individualListingText">{physician["physician"]["primaryFieldOfMedicine"]["name"]}</p> : <></>}
                    {physician["physician"]["secondaryFieldOfMedicine"] !== null ? <p className="individualListingText">{physician["physician"]["secondaryFieldOfMedicine"]["name"]}</p> : <></>}
                    <p className="individualListingText">{physician["physician"]["specialtyAreas"]}</p>
                </div>
            </div>
        </div>
        <div id="providerCV">

        </div>
    </div>
);
}
