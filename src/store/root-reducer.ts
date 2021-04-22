import {combineReducers} from 'redux';
import { langReducer } from './reducers/lang-reducer';
import { gameBoardDimensionReducer } from './reducers/game-board-dimension-reducer';
import { gameBoardReducer } from './reducers/game-board-reducer';

export default () => combineReducers({
   gameBoard: gameBoardReducer,
   gameBoardDimension: gameBoardDimensionReducer,
   lang: langReducer,
});