import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducers----
import pollAndAuthReducer from './reducers/pollAndAuthReducer';
import dataForBarGraphReducer from './reducers/dataForBarGraphReducer';
import getIpReducer from './reducers/getIpReducer';

const reducer = combineReducers({
  pollAndAuth: pollAndAuthReducer,
  dataForBarGraph: dataForBarGraphReducer,
  ip: getIpReducer,
});

export default createStore(reducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
