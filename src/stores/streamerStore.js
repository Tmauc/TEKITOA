import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  id: null,
  OAuth: null,
  streamer: null,
  stream: false,
  popularClip: null,
  lastRediff: null,
  emotes: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'cleanStreamer':
      return {
        ...state,
        id: null,
        streamer: null,
        stream: false,
        popularClip: null,
        lastRediff: null,
        emotes: null
      };
    case 'changeId':
      return {
        ...state,
        id: action.newId,
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
    case 'changeLastRediff':
      return {
        ...state,
        lastRediff: action.newLastRediff,
      };
    case 'changeEmotes':
      return {
        ...state,
        emotes: action.newEmotes
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