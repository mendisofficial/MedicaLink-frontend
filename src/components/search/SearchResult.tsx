import './SearchResult.css';
import { NavLink } from 'react-router-dom';
import { Skeleton } from '@mui/material';

export enum SearchType {
    VIEW = 0,
    EDIT = 1
}

interface BaseSearchResultsProps{
    searchType: SearchType,
}

interface SearchResultProps extends BaseSearchResultsProps{
    id: number;
    referenceNo: string,
    name: string,
    registeredHospital: string,
    registeredDate: string, // Should be date but went with string for testing
    lastUpdated: string, // Should be date but went with string for testing
    firstUpdated: string // Should be date but went with string for testing
    imagePath?: string
}

function SearchResult({ id, searchType, referenceNo, name, registeredHospital, registeredDate, lastUpdated, firstUpdated, imagePath }: SearchResultProps) {
    return (
        <div className="patient">

            <img src={imagePath} alt="profile-image" />

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
                    <NavLink to={`/patient/${id}/overview`} className="view-btn d-none d-md-flex">
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

export function SearchResultSkeleton({searchType} : BaseSearchResultsProps) {

    return (
        <div className="patient">

            <Skeleton variant='circular' width={'60px'} height={'60px'} />

            <div className="info">
                <Skeleton variant='text' sx={{ fontSize: '1rem' }} width={'200px'} />
                <Skeleton variant='text' sx={{ fontSize: '0.95rem' }} width={'180px'} />
            </div>

            <div className="info d-none d-md-flex">
                <Skeleton variant='text' sx={{ fontSize: '0.9rem' }} width={'160px'} />
                <Skeleton variant='text' sx={{ fontSize: '0.9rem' }} width={'160px'} />
            </div>

            <div className="info d-none d-lg-flex">
                <Skeleton variant='text' sx={{ fontSize: '0.9rem' }} width={'180px'} />
                <Skeleton variant='text' sx={{ fontSize: '0.9rem' }} width={'180px'} />
            </div>

            <div className="controls">
                {
                    searchType === SearchType.VIEW? (
                        <Skeleton variant='rounded' sx={{borderRadius:'8px'}} width={'80px'} height={'40px'}/>
                    ) : (
                        <>
                            <Skeleton variant='rounded' className='me-2' sx={{borderRadius:'8px'}} width={'45px'} height={'40px'}/>
                            <Skeleton variant='rounded' sx={{borderRadius:'8px'}} width={'45px'} height={'40px'}/>
                        </>
                    )
                }
            </div>
        </div>
    );
}

export default SearchResult;