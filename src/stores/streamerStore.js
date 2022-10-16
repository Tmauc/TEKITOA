import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  user: null,
  OAuth: null,
  streamer: null,
  stream: false,
  popularClip: null,
  rediffs: null,
  emotes: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'cleanStreamer':
      return {
        ...state,
        user: null,
        streamer: null,
        stream: false,
        popularClip: null,
        rediffs: null,
        emotes: null,
      };
    case 'changeUser':
      return {
        ...state,
        user: action.newUser,
      };
    case 'changeOAuth':
      return {
        ...state,
        OAuth: action.newOAuth,
      };
    case 'changeStreamer':
      return {
        ...state,
        streamer: action.newStreamer,
      };
    case 'changeStream':
      return {
        ...state,
        stream: action.newStream,
      };
    case 'changePopularClip':
      return {
        ...state,
        popularClip: action.newPopularClip,
      };
    case 'changeRediffs':
      return {
        ...state,
        rediffs: action.newRediffs,
      };
    case 'changeEmotes':
      return {
        ...state,
        emotes: action.newEmotes,
      };
    default:
      return state;
  }
};

const StreamerContext = createContext();

export const StreamerConsumer = StreamerContext.Consumer;
export const StreamerConsumerHook = () => useContext(StreamerContext);

export const StreamerProvider = ({ children }) => (
  <StreamerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StreamerContext.Provider>
);
