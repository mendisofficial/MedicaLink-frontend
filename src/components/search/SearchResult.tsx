import avatar from '../../assets/img/profie/profile-image.jpg';
import './SearchResult.css';
import { NavLink } from 'react-router-dom';

export enum SearchType {
    VIEW = 0,
    EDIT = 1
}

interface SearchResultProps{
    searchType : SearchType,
    referenceNo : string,
    name : string,
    registeredHospital : string,
    registeredDate : string, // Should be date but went with string for testing
    lastUpdated : string, // Should be date but went with string for testing
    firstUpdated : string // Should be date but went with string for testing
}

function SearchResult({ searchType, referenceNo, name, registeredHospital, registeredDate, lastUpdated, firstUpdated} : SearchResultProps) {
    return (
        <div className="patient">

            <img src={avatar} alt="profile-image" />

            <div className="info">
                <span className="highlight">Reference No: {referenceNo}</span>
                <span>Name: {name}</span>
            </div>

            <div className="info temp">
                <span>Registered Hospital: {registeredHospital}</span>
                <span>Registered Date: {registeredDate}</span>
            </div>

            <div className="info temp">
                <span>Last Updated Date: {lastUpdated}</span>
                <span>First Updated Date: {firstUpdated}</span>
            </div>

            {
                (searchType == SearchType.VIEW) ? (
                    <NavLink to={'/patient/1/overview'} className="view-btn d-none d-md-flex">
                        <span className="me-2">View Profile</span>
                        <span className="material-symbols-outlined">
                            visibility
                        </span>
                    </NavLink>
                ) : (
                    <div className="controls">
                        <button className="edit mb-2 mb-md-0 me-md-2">
                            <span className="material-symbols-outlined">
                                edit_square
                            </span>
                        </button>
                        <button className="delete">
                            <span className="material-symbols-outlined">
                                delete
                            </span>
                        </button>
                    </div>
                )
            }
        </div>
    );
}

export default SearchResult;