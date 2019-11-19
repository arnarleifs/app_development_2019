import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers';
import Header from './src/components/Header';
import CounterWrapper from './src/components/CounterWrapper';
import Counter from './src/components/Counter';
import Name from './src/components/Name';
import { getCurrentDegree } from './src/actions/weatherActions';

class SubApp extends React.Component {
    componentDidMount() {
        this.props.getCurrentDegree();
    }
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <CounterWrapper>
                    <Counter />
                    <Name />
                </CounterWrapper>
            </View>
        )
    }
}

const ConnectedSubApp = connect(null, { getCurrentDegree })(SubApp);

export default function App() {
  return (
        <Provider store={ createStore(reducers, applyMiddleware(thunk)) }>
            <ConnectedSubApp />
        </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
