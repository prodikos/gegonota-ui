import classNames from 'classnames';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PreviewPage from '../../pages/PreviewPage';
import styles from './style.scss';

const App = () => (
  <main className={styles.app}>

    <div className="content-wrapper mui-container">
      <div className="mui--appbar-height"></div>
      <Switch>
        <Route exact path="/" component={PreviewPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  </main>
);

export default App;
