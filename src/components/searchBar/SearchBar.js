import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { searchFilm } from '../../state/actions/index';

class SearchBar extends PureComponent {
  state = {
    inputValue: ''
  };

  onChange = event => {
    this.setState({ inputValue: event.target.value }, () => {
      const { filmsList } = this.props;
      const { inputValue } = this.state;

      this.props.searchFilm(filmsList, inputValue.toLocaleLowerCase());
    });
  };

  render = () => {
    return (
      <section className="section">
        <div className="columns is-marginless">
          <div className="column is-half is-offset-3 is-multiline">
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-large is-rounded is-primary"
                type="email"
                placeholder="Search Films"
                value={this.state.inputValue}
                onChange={this.onChange}
              />
              <span className="icon is-medium is-left">
                <i className="fas fa-search" />
              </span>
              <span className="icon is-medium is-right">
                <i className="fas fa-film" />
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  };
}

const mapDispatchToProps = dispatch => {
  return {
    searchFilm: (filmsList, inputValue) =>
      dispatch(searchFilm(filmsList, inputValue))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
