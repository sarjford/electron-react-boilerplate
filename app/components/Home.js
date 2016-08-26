import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
// import Visualization from './Visualization';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Awesome Git App!</h2>
          {/* <Visualization/> */}
          {/* <Link to="/counter">Click Here to Enter</Link> */}
        </div>
      </div>
    );
  }
}
