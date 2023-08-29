import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Button } from './FeedbackOptions.stiled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => {
        return (
          <Item key={option}>
            <Button option={option} onClick={onLeaveFeedback}>
              {option}
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
