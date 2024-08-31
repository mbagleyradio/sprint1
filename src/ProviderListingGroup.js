import './ProviderListingGroup.css';
import { useEffect, useState } from 'react';
import Provider_Group from '../src/sprint4/img/provider_group.png';
import Provider_Individual from '../src/sprint4/img/provider_individual.png';
// provider[] elements like "Florida_Medical_License_Number" correspond to SQL columns

function ProviderListingGroup({provider}) {
    const [ headerString, setHeaderString ] = useState(null);
    let group = {
        header: null,
        address: null,
        city: null,
        state: null,
        zip: null,
        phone_number: null,
        foreign_languages: null,
        monday: null,
        tuesday: null,
        wednesday: null,
        thursday: null,
        friday: null,
        saturday: null,
        sunday: null,
        license: null,
        primary: null,
        secondary: null,
        specialty: null,
        keywords: null
    }
    
    function generateHeaderStringForGroup() {
        if (provider["Practice_Name"] !== null) {
            setHeaderString(provider["Practice_Name"]);
        }
    }
    useEffect(() => {
        generateHeaderStringForGroup();
    }, []);

    return (
    <div className="providerListingGroup">
        <div className="groupListingHeader">
            <p>{headerString}</p>
        </div>
        <div className="groupListingLocationTime">

        </div>
    </div>
    );
}

export default ProviderListingGroup;