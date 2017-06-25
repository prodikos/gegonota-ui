export const ADD_DATASET = Symbol('ADD_DATASET');
export const REMOVE_DATASET = Symbol('REMOVE_DATASET');
export const CLEAR_DATASETS = Symbol('CLEAR_DATASETS');
export const LOADING_START = Symbol('LOADING_START');
export const LOADING_SUCCESS = Symbol('LOADING_SUCCESS');
export const LOADING_ERROR = Symbol('LOADING_ERROR');

const colors = [
  '#D32F2F', '#FFA000', '#7B1FA2', '#689F38',
  '#0288D1', '#5D4037', '#00796B', '#0097A7'
];

const DEFAULT_STATE = {
  list: [],
  loading: {
    active: false,
    error: ''
  }
};

/**
 * Actions
 */
export const actions = {

  addDataset: dataset => (dispatch, getState) =>
    dispatch({
      type: ADD_DATASET,
      dataset
    }),

  removeDataset: (index) => (dispatch, getState) =>
    dispatch({
      type: REMOVE_DATASET,
      index
    }),

  loadingStart: () => (dispatch, getState) =>
    dispatch({
      type: LOADING_START
    }),

  loadingSuccess: () => (dispatch, getState) =>
    dispatch({
      type: LOADING_SUCCESS
    }),

  loadingError: (error) => (dispatch, getState) =>
    dispatch({
      type: LOADING_ERROR,
      error
    })

};

/**
 * Reducer
 */
export default (state=DEFAULT_STATE, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {

    // Add a dataset to the dataset view
    case ADD_DATASET:
      newState.list = newState.list.concat([{
        dataset: action.dataset,
        color: colors[newState.list.length]
      }]);
      break;

    // Remove all datasets
    case CLEAR_DATASETS:
      newState.list = [];
      break;

    // Remove a specific dataset
    case REMOVE_DATASET:
      newState.list =
        newState.list.slice(0, action.index)
        .concat(
          newState.list.slice(action.index+1)
        )
      break;

  }

  return newState;
};
