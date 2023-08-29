import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from './Statistics.stiled';

class Statistics extends Component {
  render() {
    const { bad, good, neutral, total, positivePercentage } = this.props;
    return (
      <List>
        <li>
          Good: <span>{good}</span>
        </li>
        <li>
          Neutral: <span>{neutral}</span>
        </li>
        <li>
          Bad: <span>{bad}</span>
        </li>
        <li>
          Total: <span>{total}</span>
        </li>
        <li>
          Positive feedback: <span>{positivePercentage}%</span>
        </li>
      </List>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
