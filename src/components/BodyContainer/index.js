import React, { useState } from 'react';
import './index.css';

const BodyContainer = (props) => {
    const { getThePopup } = props;
    const [content1Visible, setContent1Visible] = useState(true);
    const [content3Visible, setContent3Visible] = useState(true);

    const popThePage = () => {
        getThePopup();
    };

    const toggleContent1 = () => {
        setContent1Visible((prevState) => !prevState);
    };

    const toggleContent3 = () => {
        setContent3Visible((prevState) => !prevState);
    };

    return (
        <div className="body-container-main">
            <div className="sheets-input-search-container">
                <div>
                    <button type="button" className="sheets-text">
                        <i className="fa-solid fa-pen-ruler fa-flip-horizontal sheets-edit"></i>Sheets
                    </button>
                </div>
                <div className="search-container">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="search" className="search-input" placeholder="Search" />
                </div>
            </div>
            <div className="select-options-button-container-main">
                <div className='select-cont'>
                    <div className='body-container-select-assest' onClick={toggleContent1}>
                        <p>Select asset</p><i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className={content1Visible ? "dis-hide" : "dis-show"} id="displayHide1">
                        <option className='heavey-duty-cycle'>Heavy Duty Line</option>
                        <option className='heavey-duty-cycle1'>Light Duty Line</option>
                    </div>
                    <div className='body-container-select-assest' onClick={toggleContent3}>
                        <p>Select sub-asset</p><i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className={content3Visible ? "dis-hide" : "dis-show"} id="displayHide3">
                        <option className='heavey-duty-cycle'>Press Up Station</option>
                        <option className='heavey-duty-cycle1'>Knockdown Station</option>
                    </div>
                </div>
                <button className='author-new-sheet' onClick={popThePage}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-circle svg-plus" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg><p className='author-text'>Author New Sheet</p>
                </button>
            </div>
            <div className='bo-sheets-here-container'>
                <i className="fa-solid fa-expand slectand-drop"></i>
                <p>no Sheets here Start Authoring</p>
            </div>
        </div>
    );
}

export default BodyContainer;
