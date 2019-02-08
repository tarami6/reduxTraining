import React from "react";
import {connect} from 'react-redux'
import {setName} from "../actions/userActions";
import {initialMovies, deleteMovie} from "../actions/mathActions";
import {fetchMovies} from "../functions";


class App extends React.Component {
    componentWillMount() {
        fetchMovies(this.props.initialMovies)
    }


    movieList = (props) => {
        if (props.math.movies) {
            console.log("props",props)

            return (
                <div>
                    {props.math.movies.map((movie , index) => (
                        <div key={index}>
                            <p >{movie.show.id}</p>
                            <img src={movie.show.image.medium}  alt=""/>
                            <p >{movie.show.name}</p>
                            <p >{movie.show.premiered}</p>
                            <p >{movie.show.runtime}</p>
                            <p >{movie.show.genres}</p>
                            <button onClick={props.deleteMovie.bind(this, index)}>Delete</button>
                        </div>
                    ))}

                </div>

            )
        }
    }


    render() {
        console.log("test", this.props.math.movies ? this.props.math.movies : this.props.math.movies)

        return (

            <div className="container">
                {this.movieList(this.props)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name))
        },
        initialMovies: (movies) => {
            dispatch(initialMovies(movies))
        },
        deleteMovie: (index) => {
            dispatch(deleteMovie(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)