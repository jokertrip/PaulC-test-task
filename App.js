import Navigator from "./Components/Navigator";
import {applyMiddleware, createStore} from "redux";
import reducer from "./redux/reducers";
import {Provider} from "react-redux";
import createSagaMiddleware from 'redux-saga';
import {sagaWatcher} from "./redux/sagas";


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(sagaWatcher);

export default function App() {

  return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
  );
}

