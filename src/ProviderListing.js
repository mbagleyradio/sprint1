// provider[] elements like "Florida_Medical_License_Number" correspond to SQL columns

function ProviderListing({provider}) {
    const providerString = provider["First_Name"] + " " + provider["Middle_Initial"] + " " + provider["Last_Name"];
    return (<p>{providerString}</p>);
}

export default ProviderListing;