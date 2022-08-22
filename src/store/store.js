import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import { todosReducer } from './slices/todos';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
  // dodaje do tablicy middlewarow sagamiddleware, ktory jest odpowiedzialny za mozliwosc umieszczania sideeffektow
});

sagaMiddleware.run(rootSaga);
//lacze z rootsaga
//export default store
