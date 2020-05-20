import {
  serviceSave,
  serviceDelete,
  serviceList,
  serviceById,
  serviceUpdate,
} from './chartService';
import { NAMESPACE } from './chartConsts';

export default {
  namespace: NAMESPACE,

  state: {
    reducerSave: [],
    reducerDelete: [],
    reducerList: [],
    reducerById: [],
  },
  effects: {
    *actionSave({ payload }, { call, put }) {
      try {
        const response = yield call(serviceSave, payload);
        yield put({
          type: 'reducerSave',
          payload: response || [],
        });
        const response2 = yield call(serviceList, payload);
        yield put({
          type: 'reducerList',
          payload: response2.data || [],
        });
        return response.data;
      } catch (error) {
        return error.response;
      }
    },

    *actionDelete({ payload }, { call, put }) {
      try {
        const response = yield call(serviceDelete, payload);
        yield put({
          type: 'reducerDelete',
          payload: response.data || [],
        });
        const respo = yield call(serviceList, {});
        yield put({
          type: 'reducerList',
          payload: respo.data || [],
        });
        return response.data;
      } catch (error) {
        return error.response;
      }
    },

    *actionList({ payload }, { call, put }) {
      const response = yield call(serviceList, payload);

      yield put({
        type: 'reducerList',
        payload: response.data || [],
      });
      return response.data;
    },

    *actionById({ payload }, { call, put }) {
      const response = yield call(serviceById, payload);
      yield put({
        type: 'reducerById',
        payload: response.data,
      });
      return response.data;
    },

    *actionUpdate({ payload }, { call, put }) {
      yield call(serviceUpdate, payload);
      const response2 = yield call(serviceList, payload);
      yield put({
        type: 'reducerList',
        payload: response2.data || [],
      });
    },
  },

  reducers: {
    reducerSave(state, action) {
      return {
        ...state,
        reducerSave: action.payload,
      };
    },
    reducerDelete(state, action) {
      return {
        ...state,
        reducerDelete: action.payload,
      };
    },
    reducerList(state, action) {
      return {
        ...state,
        reducerList: action.payload,
      };
    },
    reducerById(state, action) {
      return {
        ...state,
        reducerById: action.payload,
      };
    },
  },
};
