import * as Message from "./../constants/Message";
import * as types from "./../constants/ActionTypes";

var data = JSON.parse(localStorage.getItem("CART"));
var initialState = Message.WELCOME;

const message = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_MESSAGE:
      return action.message;
    default:
      return [...state];
  }
};

export default message;
