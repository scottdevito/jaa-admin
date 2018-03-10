import db from '../../startup/db_init';
import {
  GET_WORKSHOPS_SUCCESS,
  GET_WORKSHOPS_FAIL,
  GET_EPISODES_SUCCESS,
  GET_EPISODES_FAIL,
} from './types';

const getWorkshopsData = () => {
  return async dispatch => {
    let dateNow = new Date(Date.now()).getTime();

    try {
      const data = await db
        .collection('workshops')
        .where('UTCSort', '>', dateNow)
        .orderBy('UTCSort')
        .get()
        .then(function(querySnapshot) {
          let workshopsArray = [];

          querySnapshot.forEach(function(doc) {
            workshopsArray = [...workshopsArray, doc.data()];
          });
          return workshopsArray;
        });

      dispatch({ type: GET_WORKSHOPS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_WORKSHOPS_FAIL, payload: error });
    }
  };
};

const getPodcastData = () => {
  return async dispatch => {
    try {
      const data = await db
        .collection('podcastEpisodes')
        .get()
        .then(function(querySnapshot) {
          let podcastEpisodesArray = [];

          querySnapshot.forEach(function(doc) {
            podcastEpisodesArray = [...podcastEpisodesArray, doc.data()];
          });
          return podcastEpisodesArray;
        });

      dispatch({ type: GET_EPISODES_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_EPISODES_FAIL, payload: error });
      console.error(error);
    }
  };
};

// const getMailingListData = () => {
//   return;
// };

export { getWorkshopsData, getPodcastData };
