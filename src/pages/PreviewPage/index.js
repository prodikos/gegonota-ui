import classNames from 'classnames';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './style.scss';

export default class PreviewPage extends React.Component {
  render() {
    return (
      <div className={styles.preview_page}>
        <h1>Preview Page</h1>
      </div>
    );
  }
}
