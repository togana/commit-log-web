import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { Input, FormControl, InputLabel, List } from 'material-ui';

import CommitItem from './CommitItem';

@inject('commit')
@observer
export default class CommitSearch extends Component {
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
        <List>
          {commit.list.map(row => <CommitItem key={row.sha} commit={row} />)}
        </List>
      </div>
    );
  }
}
