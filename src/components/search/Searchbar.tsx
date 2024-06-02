import React, { MouseEventHandler, MouseEvent, useState, ReactElement } from 'react';
import { Collapse } from 'react-bootstrap';
import { Search, UiChecksGrid } from 'react-bootstrap-icons';
import './Searchbar.css';

interface FilterCategoryProps {
    children?: React.ReactNode,
    activeCategoryKey? : string | number | null,
    onClick?: MouseEventHandler<HTMLElement>,
    className?: string,
    value? : string
}

export function FilterCategory({ children, className, value = '', onClick }: FilterCategoryProps) {
    console.log(value);
    return <li key={value} className={`category ${className}`} onClick={onClick}>{children}</li>;
}

type ValidChild = ReactElement<React.ComponentProps<typeof FilterCategory>>;

export function FilterList({ children, activeCategoryKey = null }: FilterCategoryProps) {
    const [activeKey, setActiveKey] = useState<string | number | null>((activeCategoryKey !== null)? activeCategoryKey.toString() : activeCategoryKey);

    //click event handler for a category
    const handleClick = (key: number | string | null) => {
        setActiveKey(key);
    };

    const updatedChildren = React.Children.map(children, (child) => {

        if (React.isValidElement(child) && child.type == FilterCategory) {
            const isActive = child.key === activeKey;
            
            return React.cloneElement(child as ValidChild, {

                onClick: (e: MouseEvent<HTMLElement>) => handleClick(child.key),
                className: isActive ? 'active' : '',
            });
        }
        return child;
    });

    return (
        <ul>
            {updatedChildren}
        </ul>
    );
}

export function FilterTitle({ children }: FilterCategoryProps) {
    return <h6>{children}</h6>;
}

export function FilterGroup({ children }: FilterCategoryProps) {

    return (
        <div className="col">
            {children}
        </div>
    );
}

export function SearchFilter({ children }: FilterCategoryProps) {

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