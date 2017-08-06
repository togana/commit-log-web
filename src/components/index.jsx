import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { Input, FormControl, InputLabel } from 'material-ui';

@inject('commit')
@observer
export default class BookSearch extends Component {
  static propTypes = {
    commit: PropTypes.object.isRequired,
  };

  render() {
    const { commit } = this.props;

    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            commit.fetchData(document.getElementById('search-field').value);
          }}
        >
          <FormControl>
            <InputLabel htmlFor="search-field">検索</InputLabel>
            <Input
              id="search-field"
              autoFocus
            />
          </FormControl>
        </form>
        {JSON.stringify(commit.list)}
      </div>
    );
  }
}
