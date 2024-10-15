import React from 'react'
import './AppItem.css'
import './index.css'
const AppItem = ({appDetails}) => {
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="app-image" />{' '}
      {/* Test Case: Image with alt */}
      <p className="app-name">{appName}</p>{' '}
      {/* Test Case: Paragraph with app name */}
    </li>
  )
}

export default AppItem
