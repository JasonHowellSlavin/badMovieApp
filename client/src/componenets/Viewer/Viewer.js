import React, { Component } from 'react';
import stubMovieData from '../../stub-movie-data';

class Viewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: stubMovieData,
        }
    }

    componentDidMount() {
        console.log(stubMovieData);
    }

    render() {
        return (
            <section className={'viewer'}>
                {this.state.movies.map((movie) => {
                    return (
                        <div key={movie.id} className={'movie'}>
                            <h3>{movie.title}</h3>
                            <h4> Have a Copy: {movie.haveCopy ? 'Yes' : 'No'}</h4>
                            {movie.haveCopy && <h4>Copy Format: {movie.copyFormat}</h4>}
                            <p>{movie.description}</p>
                            <h5>Submitted By: {movie.submitedBy}</h5>
                            <section className={'comments section'}>
                                {movie.comments.map(comment => <div><h4>{comment.subject}</h4><h5>Comment by: {comment.user}</h5><p>{comment.comment}</p></div>)}
                            </section>
                        </div>
                    )
                })}
            </section>

        )
    }
}

export default Viewer;
