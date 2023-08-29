import React, { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const handleClick = event => {
    const { value } = event.target.attributes.option;

    switch (value) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}

export default App;

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onClick = option => {
//     this.setState(prevState => ({ [option]: prevState[option] + 1 }));
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce(
//       (accumulator, currentValue) => accumulator + currentValue
//     );
//   };

//   countPositiveFeedbackPercentage = () => {
//     if (this.countTotalFeedback() === 0) {
//       return 0;
//     }
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     return (
//       <div
//         style={{
//           height: '100vh',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 40,
//           color: '#010101',
//         }}
//       >
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onClick}
//           />
//         </Section>
//         <Section title="Statistics">
//           {this.countTotalFeedback() === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
