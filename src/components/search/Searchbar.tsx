import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { Search, UiChecksGrid } from 'react-bootstrap-icons';
import './Searchbar.css';

interface BaseProps {
    children?: React.ReactNode,
    className?: string,
    value? : string,
    name? : string
}

interface FilterCategoryProps extends BaseProps{
    checked? : boolean
}

export function FilterCategory({className, children, name,  value = '', checked}: FilterCategoryProps) {

    return (
        <li className="category">
            <input type="radio" 
            id={`radio-${name}-${value}`} 
            name={name} value={value} 
            className={`radio ${className}`} 
            defaultChecked={checked}/>

            <label htmlFor={`radio-${name}-${value}`}>{children}</label>
        </li>
    );
}

export function FilterList({ children }: BaseProps) {
    
    return (
        <ul>
            {children}
        </ul>
    );
}

export function FilterTitle({ children }: BaseProps) {
    return <h6>{children}</h6>;
}

export function FilterGroup({ children }: BaseProps) {

    return (
        <div className="col">
            {children}
        </div>
    );
}

export function SearchFilter({ children }: BaseProps) {

    return (
        <div className="container-fluid search-filter" id="search-filter">
            <div className="row py-3 pb-md-0">

                {children}

            </div>
        </div>
    );
}

interface SearchbarProps {
    className?: string,
    children?: React.ReactElement
}

function Searchbar({ className, children }: SearchbarProps) {

    const [open, setOpen] = useState(false);

    return (
        <div id="search-controls-section" className={`py-2 px-3 section-blur ${className}`}>

            <div className="search-controls d-flex align-items-center">
                <button className="fs-5">
                    <Search color='black' size={18} />
                </button>

                <input type="text" className="search-bar" placeholder="Search for patients..." />
                <div className="vr mx-2"></div>
                <button className="fs-5" data-bs-toggle="collapse" aria-expanded="false" aria-controls="search-filter"
                    onClick={() => setOpen(!open)}>

                    <UiChecksGrid color='black' size={18} />
                </button>
            </div>

            <Collapse in={open}>
                <div>
                    {children}
                </div>
            </Collapse>
        </div>
    );
}

export default Searchbar;