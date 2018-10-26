import * as actionTypes from "./actionTypes";
import * as api from "@api";

export const initSystem = () => {
  return async dispatch => {
    dispatch({
      type: actionTypes.FETCH_CRISIS_TYPE_REQUESTED
    });
    api
      .getCrisisType()
      .then(response =>
        dispatch({
          type: actionTypes.FETCH_CRISIS_TYPE_SUCCESS,
          payload: response.data
        })
      )
      .catch(() =>
        dispatch({
          type: actionTypes.FETCH_CRISIS_TYPE_FAILURE
        })
      );
    dispatch({
      type: actionTypes.FETCH_ASSISTANCE_TYPE_REQUESTED
    });
    api
      .getAssistanceType()
      .then(response =>
        dispatch({
          type: actionTypes.FETCH_ASSISTANCE_TYPE_SUCCESS,
          payload: response.data
        })
      )
      .catch(() =>
        dispatch({
          type: actionTypes.FETCH_ASSISTANCE_TYPE_FAILURE
        })
      );
  };
};

export const getCrises = () => {
  return async dispatch => {
    dispatch({
      type: actionTypes.FETCH_CRISIS_REQUESTED
    });
    api
      .getCrises()
      .then(response =>
        dispatch({
          type: actionTypes.FETCH_CRISIS_SUCCESS,
          payload: response.data
        })
      )
      .catch(() =>
        dispatch({
          type: actionTypes.FETCH_CRISIS_FAILURE
        })
      );
  };
};

export const showModal = (modalType, modalProps) => {
  return {
    type: actionTypes.MODAL_SHOW,
    payload: {
      modalType,
      modalProps
    }
  };
};

export const hideModal = () => {
  return {
    type: actionTypes.MODAL_HIDE
  };
};
