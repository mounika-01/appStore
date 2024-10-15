import React from 'react';
import './TabItem.css';

const TabItem = ({ tabDetails, onClickTab, isActive }) => {
  const { tabId, displayText } = tabDetails;

  const handleClick = () => {
    onClickTab(tabId);
  };

  return (
    <li className={`tab-item ${isActive ? 'active-tab-btn' : ''}`}>
      <button type="button" onClick={handleClick} className="tab-button">
        {displayText}
      </button>
    </li>
  );
};

export default TabItem;
