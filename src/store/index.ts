import { createStore } from 'redux';

import rootReducer from './reducers';

const store = createStore(rootReducer);

export type AppState = ReturnType<typeof rootReducer>;
export default store;