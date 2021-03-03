import React, { useState } from 'react';
import classes from './paginator.module.css';
import cn from 'classnames';

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionSize = 25;
    let [portionNumber, setPortionNumber] = useState(1);
    let portionCount = Math.ceil(pagesCount / portionSize);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={classes.paginator}>
            {portionNumber > 1 && <button
                className={`${classes.prevBtn} ${classes.paginButtons}`} onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>}
            <div className={classes.pages}>
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                        return <button
                            className={cn({
                                [classes.selectedPage]: props.currentPage === p
                            }, classes.pageNumber)}
                            onClick={(e) => { props.onPageChanged(p) }}
                        >{p}</button>
                    })}
            </div>
            {portionCount > portionNumber && <button
                className={classes.paginButtons}
                onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>}
        </div>
    )
}


export default Paginator;