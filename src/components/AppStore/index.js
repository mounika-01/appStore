import React, {Component} from 'react'
import TabItem from '../TabItem'
import AppItem from '../AppItem'
import PropTypes from 'prop-types'
import './index.css'

class AppStore extends Component {
  state = {
    activeTab: this.props.tabsList[0].tabId, // Start with the first tab
    searchInput: '',
  }

  handleSearchChange = event => {
    this.setState({searchInput: event.target.value})
  }

  handleTabClick = tabId => {
    this.setState({activeTab: tabId})
  }

  getFilteredApps = () => {
    const {appsList} = this.props
    const {activeTab, searchInput} = this.state

    return appsList
      .filter(app => app.category === activeTab)
      .filter(app =>
        app.appName.toLowerCase().includes(searchInput.toLowerCase()),
      )
  }

  render() {
    const {tabsList} = this.props
    const filteredApps = this.getFilteredApps()

    return (
      <div className="app-store-container">
        <h1 className="app-store-title">App Store</h1>{' '}
        {/* Test Case: Main heading */}
        <div className="search-container">
          <input
            type="search"
            placeholder="Search apps..."
            className="search-input"
            onChange={this.handleSearchChange}
          />
          <img
            src="search-icon-url"
            alt="search icon"
            className="search-icon"
          />{' '}
          {/* Test Case: Search icon */}
        </div>
        <ul className="tabs-container">
          {tabsList.map(tab => (
            <TabItem
              key={tab.tabId} // Test Case: Unique key
              tabDetails={tab}
              onClickTab={this.handleTabClick}
              isActive={tab.tabId === this.state.activeTab}
            />
          ))}
        </ul>
        <ul className="apps-container">
          {filteredApps.map(app => (
            <AppItem
              key={app.appId} // Test Case: Unique key
              appDetails={app}
            />
          ))}
        </ul>
      </div>
    )
  }
}

// Adding PropTypes for validation
AppStore.propTypes = {
  tabsList: PropTypes.arrayOf(
    PropTypes.shape({
      tabId: PropTypes.string.isRequired,
      displayText: PropTypes.string.isRequired,
    }),
  ).isRequired,
  appsList: PropTypes.arrayOf(
    PropTypes.shape({
      appId: PropTypes.string.isRequired,
      appName: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default AppStore
