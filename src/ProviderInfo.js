import './ProviderListingIndividual.css';
import Provider_Individual from '../src/sprint4/img/provider_individual.png';

export default function ProviderInfo({provider}) {
    const generateNameForProvider = () => {
        if (provider["Middle_Initial"] !== null) {
            return `${provider["First_Name"]} ${provider["Middle_Initial"]} ${provider["Last_Name"]}, ${provider["Title"]}`;
        } else if (provider["First_Name"] !== null && provider["Last_Name"] !== null) {
            return `${provider["First_Name"]} ${provider["Last_Name"]}, ${provider["Title"]}`;
        } else {
            return provider["Practice_Name"];
        }
    }

    let name = generateNameForProvider();

    return (
    <div className="individualListingProviderInfo">
        <div id="thumbnailLicenseAndPrimary">
            <div id="thumbnailLicense">
                <img src={Provider_Individual} alt="an Individual Provider"/>
                <div id="license">
                    {
                        provider["Florida_Medical_License_Number"].includes("none") ? <br/> : <p className="individualListingText">{name}</p>
                    }
                    <p className="individualListingText">{provider["Florida_Medical_License_Number"]}</p>
                </div>
            </div>
            <div id="primary">
                <div id="primaryLabels">
                    <p className="individualListingText">Primary Field:</p>
                    <p className="individualListingText">Secondary Field:</p>
                    <p className="individualListingText">Specialty Area(s):</p>
                </div>
                <div id="primaryFields">
                    <p className="individualListingText">{provider["Primary_Field"]}</p>
                    <p className="individualListingText">{provider["Secondary_Field"]}</p>
                    <p className="individualListingText">{provider["Specialty_Areas"]}</p>
                </div>
            </div>
        </div>
        <div id="providerCV">

        </div>
    </div>
);
}
