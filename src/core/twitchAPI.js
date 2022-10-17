import axios from 'axios';
import config from 'config.json';

export async function OAuthTwitch(dispatch, streamerPseudo) {
  const twitchAPI =
    'https://id.twitch.tv/oauth2/token?client_id=' +
    config.clientID +
    '&client_secret=' +
    config.clientSecret +
    '&grant_type=' +
    config.grantType;
  axios
    .post(twitchAPI)
    .then((response) => {
      dispatch({
        type: 'changeOAuth',
        newOAuth: response?.data?.access_token,
      });
      getUser(dispatch, response?.data?.access_token, streamerPseudo);
    })
    .catch((error) => {
      console.log('error', error);
    });
}

export async function getUser(dispatch, OAuth, streamerPseudo) {
  const twitchApi = 'https://api.twitch.tv/helix/users?login=' + streamerPseudo;
  axios
    .get(twitchApi, {
      headers: {
        'client-id': config.clientID,
        Authorization: 'Bearer ' + OAuth,
      },
    })
    .then((response) => {
      dispatch({
        type: 'changeUser',
        newUser: response?.data?.data[0],
      });
      getStream(dispatch, OAuth, response?.data?.data[0]?.id);
      getEmote(dispatch, OAuth, response?.data?.data[0]?.id);
      getClips(dispatch, OAuth, response?.data?.data[0]?.id);
      getRediffs(dispatch, OAuth, response?.data?.data[0]?.id);
    })
    .catch((error) => {
      console.log('error', error);
    });
}

export async function getStream(dispatch, OAuth, streamerId) {
  const twitchApi = 'https://api.twitch.tv/helix/streams?user_id=' + streamerId;
  axios
    .get(twitchApi, {
      headers: {
        'client-id': config.clientID,
        Authorization: 'Bearer ' + OAuth,
      },
    })
    .then((response) => {
      dispatch({
        type: 'changeStream',
        newStream: response?.data?.data[0],
      });
    })
    .catch((error) => {
      console.log('error', error);
    });
}

export async function getEmote(dispatch, OAuth, streamerId) {
  const twitchApi =
    'https://api.twitch.tv/helix/chat/emotes?broadcaster_id=' + streamerId;
  axios
    .get(twitchApi, {
      headers: {
        'client-id': config.clientID,
        Authorization: 'Bearer ' + OAuth,
      },
    })
    .then((response) => {
      dispatch({
        type: 'changeEmotes',
        newEmotes: response?.data?.data,
      });
    })
    .catch((error) => {
      console.log('error', error);
    });
}

export async function getClips(dispatch, OAuth, streamerId) {
  const twitchApi =
    'https://api.twitch.tv/helix/clips?broadcaster_id=' +
    streamerId +
    '&first=1';
  axios
    .get(twitchApi, {
      headers: {
        'client-id': config.clientID,
        Authorization: 'Bearer ' + OAuth,
      },
    })
    .then((response) => {
      dispatch({
        type: 'changePopularClip',
        newPopularClip: response?.data?.data[0],
      });
    })
    .catch((error) => {
      console.log('error', error);
    });
}

export async function getRediffs(dispatch, OAuth, streamerId) {
  const twitchApi = 'https://api.twitch.tv/helix/videos?user_id=' + streamerId;
  axios
    .get(twitchApi, {
      headers: {
        'client-id': config.clientID,
        Authorization: 'Bearer ' + OAuth,
      },
    })
    .then((response) => {
      dispatch({
        type: 'changeRediffs',
        newRediffs: response?.data?.data,
      });
    })
    .catch((error) => {
      console.log('error', error);
    });
}
