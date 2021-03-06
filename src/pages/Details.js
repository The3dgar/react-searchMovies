import React from "react";
import PropTypes from "prop-types";
import {ButtonToHome} from "../components"
const API_KEY = "ccdd084c";


export default class Details extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    }),
  };

  state = { movie: {} };

  _fetchMovie({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          movie: res,
        });
      });
  }

  componentDidMount() {
    console.log(this.props);
    const { id } = this.props.match.params;
    this._fetchMovie({ id });
  }

  render() {
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;
    return (
      <div>
        <ButtonToHome></ButtonToHome>
        <h1>{Title}</h1>
        <img src={Poster} alt="movie img"></img>
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
        <p>{Plot}</p>
      </div>
    );
  }
}
