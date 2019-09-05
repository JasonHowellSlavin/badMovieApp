import React, { Component } from 'react';
import './Movie.scss';

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieOpen: false,
            detailsOpen: false,
            commentsOpen: false,
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div key={this.props.id} className={'movie'} onClick={() => {console.log('click'); this.setState({movieOpen: !this.state.movieOpen})}}>
                <div className={'movie-container'}>
                    <h3>{this.props.title}</h3>
                    <div className={'movie-actions'}>
                        <h4
                            className={'details-btn'}
                            onClick={() => {console.log('click'); this.setState({detailsOpen: !this.state.detailsOpen, commentsOpen: false})}}
                        >Details</h4>
                        <h4
                            className={'details-btn'}
                            onClick={() => {console.log('click'); this.setState({commentsOpen: !this.state.commentsOpen, detailsOpen: false})}}
                        >Comments</h4>
                        <div className={'vote-container'}>
                            <h4>Vote</h4>
                            <i class="material-icons">keyboard_arrow_up</i>
                            <i class="material-icons">keyboard_arrow_down</i>
                            <div className={'count'}>
                                <p>{this.props.voteCount}</p>
                            </div>
                        </div>
                    </div>
                    <section>
                        <div>
                            <section className={`movie-details ${this.state.detailsOpen ? 'shown' : 'hidden'}`}>
                                <div>
                                    <h5> Have a Copy: {this.props.haveCopy ? 'Yes' : 'No'}</h5>
                                    {this.props.haveCopy && <h5>Copy Format: {this.props.copyFormat}</h5>}
                                </div>
                                <p>{this.props.description}</p>
                                <h5>Submitted By: {this.props.submittedBy}</h5>
                            </section>
                        </div>
                        <div>
                            <section className={`movie-comments ${this.state.commentsOpen ? 'shown' : 'hidden'}`}>
                                {this.props.comments.map((comment) => {
                                    return (
                                        <div>
                                            <div className={'comment-title'}>
                                                <h4>{comment.subject}</h4>
                                                <h5>Comment by: {comment.user}</h5>
                                            </div>
                                            <p>{comment.comment}</p>
                                        </div>
                                    )
                                })}
                            </section>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Movie;
