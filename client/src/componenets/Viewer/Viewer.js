import React, { Component } from 'react';
import stubMovieData from '../../stub-movie-data';
import Movie from '../Movie/Movie.js';

class Viewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: stubMovieData,
            hidden: true,
        }
    }

    componentDidMount() {
        console.log(stubMovieData);
    }

    render() {
        return (
            <section className={'viewer'}>
                <button onClick={() => this.setState({hidden: !this.state.hidden})}>View / Vote / Comment</button>
                <div className={`${this.state.hidden ? 'hidden' : 'shown'}`}>
                    {this.state.movies.map((movie) => {
                        return (
                            <Movie
                                id={movie.id}
                                title={movie.title}
                                haveCopy={movie.haveCopy}
                                copyFormat={movie.copyFormat}
                                submittedBy={movie.submittedBy}
                                description={movie.description}
                                comments={movie.comments}
                                voteCount={movie.voteCount}
                                />
                        )
                    })}
                </div>
            </section>

        )
    }
}

export default Viewer;
