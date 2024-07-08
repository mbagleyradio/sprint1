import './ApplyFilterToProviders.css';
import { useState, useEffect } from 'react';

function ApplyFilterToProviders( {isFiltered, insuranceName, insuranceType, healthCareCategory, collectedFilters } ) {
    const [ storedProviders, setStoredProviders ] = useState([]);
    
    const generateQueryFromFilters = () => {
        //let queryString = `SELECT * FROM Providers WHERE insuranceName = '${insuranceName}' AND insuranceType = '${insuranceType}' AND healthCareCategory = '${healthCareCategory}' `;
        let queryString = `SELECT * FROM providers`;
        for (let filterElement = 0; filterElement < collectedFilters.length; filterElement++) {
            if (collectedFilters[filterElement].filterName.startsWith("Appointment")) {
                // add query for Appointment

            } else if (collectedFilters[filterElement].filterName.startsWith("Area")) {
                // add query for Area

            } else if (collectedFilters[filterElement].filterName.startsWith("Keyword")) {
                // add query for Keyword

            } else if (collectedFilters[filterElement].filterName.startsWith("Specialty")) {
                // add query for Specialty

            } else if (collectedFilters[filterElement].filterName.startsWith("Time")) {
                // add query for Time
            } else {
                // add query for default?
            }
        }

        queryString += ';';
        
        return queryString;
    }
    
    const fetchFilterResults = () => {
        const queryString = generateQueryFromFilters();
        fetch("https://uvcsandbox.com/php/FilterHealthCareSelection.php", {
            method: "POST",
            mode: "cors",
            headers: {},
            body: JSON.stringify({
                insuranceName,
                insuranceType,
                healthCareCategory,
                queryString
            })
        }).then(response => {
            return response.json()
        }).then(data => {
            setStoredProviders([...storedProviders, ...data])
        }).catch(error => {
            console.log(error)
        });
    }

    useEffect( () => {
        fetchFilterResults();
    }, []);

    return (
        <div id="numberOfProviders">
            <p id="numberOfProvidersText">There are <span id="filteredProvidersNumber">{storedProviders.length}</span> possible health providers</p>
            <p id="wouldYouLikeToReviewText">Would you like to review this listing or would you like to narrow the list by selecting one of the filters below.</p>
        </div>
    );
}

export default ApplyFilterToProviders;

