import React, { useState } from 'react';
import classes from './paginator.module.css';
import cn from 'classnames';

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionSize = 30;
    let [portionNumber, setPortionNumber] = useState(1);
    let portionCount = Math.ceil(pagesCount / portionSize);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div className={classes.paginator}>
            {portionNumber > 1 &&
                <svg className={`${classes.prevBtn} ${classes.paginButtons}`} onClick={() => { setPortionNumber(portionNumber - 1) }}
                    viewBox="0 0 512 512">
                    <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,480
                       C132.288,480,32,379.712,32,256S132.288,32,256,32s224,100.288,224,224S379.712,480,256,480z" />
                    <path d="M292.64,116.8l-128,128c-6.204,6.241-6.204,16.319,0,22.56l128,128l22.56-22.72L198.56,256L315.2,139.36L292.64,116.8z"
                    />
                </svg>}
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
            {portionCount > portionNumber &&
                <svg className={`${classes.nextBtn} ${classes.paginButtons}`}
                    onClick={() => { setPortionNumber(portionNumber + 1) }}
                    viewBox="0 0 384.97 384.97">
                    <path d="M192.485,0C86.173,0,0,86.173,0,192.485c0,106.3,86.173,192.485,192.485,192.485c106.3,0,192.485-86.185,192.485-192.485
                   C384.97,86.173,298.785,0,192.485,0z M192.485,360.909c-92.874,0-168.424-75.55-168.424-168.424S99.611,23.688,192.485,23.688
                   s168.424,75.923,168.424,168.797S285.359,360.909,192.485,360.909z" />
                    <path d="M166.114,99.503c-4.704-4.74-12.319-4.74-17.011,0c-4.704,4.752-4.704,12.439,0,17.191l74.528,75.61l-74.54,75.61
                   c-4.704,4.74-4.704,12.439,0,17.191c4.704,4.74,12.319,4.74,17.011,0l83.009-84.2c4.572-4.632,4.584-12.56,0-17.191
                   L166.114,99.503z" />
                </svg>}
        </div >
    )
}


export default Paginator;