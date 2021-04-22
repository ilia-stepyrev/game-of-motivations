import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import rootReducer from './root-reducer';
import { applyMiddleware, createStore } from 'redux';
import { asFunctionMiddleware } from './middleware/as-function-middleware';

class StoreProvider {
    store: any;

    create(devEnv: boolean){
        const middlewares = devEnv 
            ? applyMiddleware(asFunctionMiddleware, promiseMiddleware, logger)
            : applyMiddleware(asFunctionMiddleware, promiseMiddleware);

        this.store = createStore(rootReducer(), middlewares);

        return this.store;
    }

    getStore(){
        return this.store;
    }
}

const storeProvider = new StoreProvider();
export default storeProvider;