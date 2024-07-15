import { useState } from 'react';
import ApplyFilterToProviders from './ApplyFilterToProviders.js';
import FilterMenu from './FilterMenu.js';
import MenuFigure from './MenuFigure.js';
import './FilterHealthCareSelection.css';

function FilterHealthCareSelection( { insuranceType, insuranceName, healthCareCategory, addFilters, collectedFilters, removeFilters } ) {
    const [ isFiltered, setIsFiltered ] = useState(false);
    const [ filterType, setFilterType ] = useState(undefined);
    const [ isFilterClicked, setIsFilterClicked ] = useState(false);
    const [ showFilterMenu, setShowFilterMenu ] = useState(true);
    const [ filterSelection, setFilterSelection ] = useState("");
    const [ numActiveFilters, setNumActiveFilters ] = useState(0);

    const handleFilterSubmit = (selection) => {
        if (!isFiltered && isFilterClicked) {
            setIsFiltered(true);
            setShowFilterMenu(false);
        }

        console.log(`Filter number after submit, before adding to array: ${numActiveFilters}\n`);
        setFilterSelection(selection);
        addFilters({
            id: numActiveFilters,
            filterName: selection
        });

        setNumActiveFilters(numActiveFilters + 1);  
        console.log(`Filter number after incrementing number of filters: ${numActiveFilters}\n`);      
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

    const handleUndoClicked = () => {
        console.log(`Number of filters at start of undo: ${numActiveFilters}\n`);
        let idToRemove = numActiveFilters;
        setIsFiltered(false);
        setIsFilterClicked(true);
        setShowFilterMenu(true);
        setFilterSelection("");
        setNumActiveFilters(numActiveFilters - 1);
        removeFilters(idToRemove);
        
    }
    
    return(
        <>
            <div id="filterHealthCareSection">
                <ApplyFilterToProviders isFiltered={isFiltered} insuranceName={insuranceName} insuranceType={insuranceType} healthCareCategory={healthCareCategory} collectedFilters={collectedFilters}/>
                <MenuFigure handleOnClick={handleFigureClicked} filterSelection={filterSelection} handleOnUndo={handleUndoClicked}/> : <></>
                <div id="menuSelect">
                    {isFilterClicked ? showFilterMenu && <FilterMenu filterType={filterType} onFilterSubmit={handleFilterSubmit}/> : <></>}
                </div>
                <div>
                    {isFiltered ? <FilterHealthCareSelection insuranceType={insuranceType} insuranceName={insuranceName} healthCareCategory={healthCareCategory} addFilters={addFilters} collectedFilters={collectedFilters} removeFilters={removeFilters}/> : <></>}
                </div>
            </div>
        </>
        
    );
}

export default FilterHealthCareSelection;