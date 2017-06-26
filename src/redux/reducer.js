import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducers----
import pollAndAuthReducer from './reducers/pollAndAuthReducer';
import dataForBarGraphReducer from './reducers/dataForBarGraphReducer';

const reducer = combineReducers({
  pollAndAuth: pollAndAuthReducer,
  dataForBarGraph: dataForBarGraphReducer,
});

export default createStore(reducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
