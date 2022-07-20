import React from 'react';
import {getPagesArray} from "../../../utils/pages";
import './pagination.css'

const Pagination = ({page, changePage, totalPages}) => {
    let pagesArray = getPagesArray(totalPages);

    return (
        <div className='pages__wrapper'>
            {pagesArray.map(p =>
                <button
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'pages__button active__button' : 'pages__button' }>
                    {p}
                </button>
            )}
        </div>
    );
};

export default Pagination;