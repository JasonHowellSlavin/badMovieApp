import React, { Component } from 'react';
import './App.scss';
import Viewer from '../Viewer/Viewer.js'
import axios from 'axios';

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
        this.hypoSearchURL = this.hypoSearchURL.bind(this);
    }

    hypoSearchURL () {
        axios.request({
            url: `api/`,
            method: 'get',
            params: {
              queriedURL: this.state.url
            }
        }).then((response) => {
            console.log('Response:', response);
        }).catch((error) => {
            console.log('error', error);
        });
    }

    // Lifecycle Hooks
    componentDidMount() {
      this.hypoSearchURL();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">B</h1>
                </header>
                <section className={'main'}>
                    <section className={'add-movie'}>
                    </section>
                    <section className={'view-vote-comment'}>
                        <Viewer />
                    </section>
                </section>
          </div>
        );
    }
}

export default App;
