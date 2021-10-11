// React
import React from "react";
import PropTypes from "prop-types";

import "../styles/layout/ChangePage.scss";

const ChangePage = (props) => {
    const { page, handleLess, handleMore } = props;

    return (
        <nav className="pageNav">
            <ul className="pageNav__list animation_page">
                <li className="pageNav__list--item" onClick={handleLess}>
                    <i className="fas fa-angle-double-left "></i> Previous page
                </li>
                <span>| Page {page} |</span>
                <li className="pageNav__list--item" onClick={handleMore}>
                    <i className="fas fa-angle-double-right ">  </i>Next page
                </li>
            </ul>
        </nav>
    );
};

ChangePage.propTypes = {
    page: PropTypes.number,
    handleMore: PropTypes.func,
    handleLess: PropTypes.func,
};

export default ChangePage;
