import React, { Component } from 'react';
import './Dashboard.scss';
import axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
    }

    // hypoSearchURL () {
    //     axios.request({
    //         url: `api/search/url`,
    //         method: 'get',
    //         params: {
    //           queriedURL: this.state.url
    //         }
    //     }).then((response) => {
    //         console.log('Response:', response);
    //         let stateData = this.state.data.slice();
    //         let currentActiveUrls = this.state.activeUrls.slice();
    //
    //         currentActiveUrls.push(this.state.url);
    //
    //         response.data.forEach(item => stateData.push(item));
    //
    //         let cleanedStateData = this.removeDuplicates(stateData);
    //
    //         this.setState({
    //             data: cleanedStateData,
    //             url: '',
    //             activeUrls: currentActiveUrls,
    //             activeData: cleanedStateData
    //         });
    //         console.log(stateData, 'stateData');
    //     }).catch((error) => {
    //         console.log('error', error);
    //     });
    // }

    // Lifecycle Hooks
    componentDidMount() {
      return true;
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Bad Movie App</h1>
                </header>
          </div>
        );
    }
}

export default Dashboard;
