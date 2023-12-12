// TabItem/index.jsx

import React from 'react';

const TabItem = ({ tabDetails, clickTabItem, isActive }) => {
  const { tabId, displayText } = tabDetails;

  const onClickTabItem = () => {
    clickTabItem(tabId);
  };

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : '';

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  );
};

export default TabItem;
