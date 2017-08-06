import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText } from 'material-ui';

export default class CommitItem extends Component {
  static propTypes = {
    commit: PropTypes.object.isRequired,
  };

  render() {
    const { commit } = this.props;

    return (
      <ListItem
        button
        onClick={() => window.open(`https://github.com/${commit.repo}/commit/${commit.sha}`, '_blank')}
      >
        <ListItemText primary={commit.message} secondary={commit.repo} />
      </ListItem>
    );
  }
}
