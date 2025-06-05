/*
* NEED TO REFACTOR HOW PROVIDER FILTERS ARE APPLIED. WE ARE TRACKING WHETHER OR NOT A FILTER IS APPLIED, AND ADDING FILTERS.
* NEED TO APPLY THOSE FILTERS IN REVIEW LISTING, FILTER THE NEW DATASET, AND DISPLAY. RE-FETCH IN REVIEWLISTING EVERY TIME A FILTER IS DE-SELECTED.
*/


import { useState } from 'react';
import ApplyFilterToProviders from './ApplyFilterToProviders.js';
import FilterMenu from './FilterMenu.js';
import MenuFigure from './MenuFigure.js';
import './FilterHealthCareSelection.css';

function FilterHealthCareSelection( { insuranceType, insuranceName, healthCareCategory, addFilters, collectedFilters, removeFilters, onProvidersArrayRetrieved } ) {
    const [ isFiltered, setIsFiltered ] = useState(false);
    const [ filterType, setFilterType ] = useState(undefined);
    const [ isFilterClicked, setIsFilterClicked ] = useState(false);
    const [ showFilterMenu, setShowFilterMenu ] = useState(true);
    const [ filterSelection, setFilterSelection ] = useState("");
    const [ specialtyAreas, setSpecialtyAreas ] = useState([]);
    const [ keywords, setKeywords ] = useState([]);

    const handleFilterSubmit = (selection) => {
        if (!isFiltered && isFilterClicked) {
            setIsFiltered(true);
            setShowFilterMenu(false);
        }

        setFilterSelection(selection);
        addFilters({
            id: null,
            filterName: selection
        });
        
    }

    const handleFigureClicked = (selection) => {
        switch (selection) {
            case "Appointment":
                setFilterType("Appointment");
                setIsFilterClicked(true);
            break;

            case "Area":
                setFilterType("Area");
                setIsFilterClicked(true);
            break;

            case "Keyword":
                setFilterType("Keyword");
                setIsFilterClicked(true);
            break;

            case "Specialty":
                setFilterType("Specialty");
                setIsFilterClicked(true);
            break;

            case "Time":
                setFilterType("Time");
                setIsFilterClicked(true);
            break;

            default:
                setFilterType("Default");
                setIsFilterClicked(true);
            break;
        }
    }

    const handleUndoClicked = (selection) => {
        setIsFiltered(false);
        setIsFilterClicked(true);
        setShowFilterMenu(true);
        setFilterSelection("");
        removeFilters(selection);
    }

    return(
        <>
            <div id="filterHealthCareSection">
                <ApplyFilterToProviders isFiltered={isFiltered} insuranceName={insuranceName} insuranceType={insuranceType} healthCareCategory={healthCareCategory} collectedFilters={collectedFilters} onProvidersArrayRetrieved={onProvidersArrayRetrieved} setSpecialtyAreas={setSpecialtyAreas} setKeywords={setKeywords}/>
                <MenuFigure handleOnClick={handleFigureClicked} filterSelection={filterSelection} handleOnUndo={handleUndoClicked}/>
                <div id="menuSelect">
                    {isFilterClicked ? showFilterMenu && <FilterMenu filterType={filterType} onFilterSubmit={handleFilterSubmit} specialtyAreas={specialtyAreas} keywords={keywords}/> : <></>}
                </div>
                <div>
                    {isFiltered ? <FilterHealthCareSelection insuranceType={insuranceType} insuranceName={insuranceName} healthCareCategory={healthCareCategory} addFilters={addFilters} collectedFilters={collectedFilters} removeFilters={removeFilters} onProvidersArrayRetrieved={onProvidersArrayRetrieved}/> : <></>}
                </div>
            </div>
        </>
        
    );
}

export default FilterHealthCareSelection;