import db from '../../startup/db_init';
import { ADD_EPISODE_SUCCESS, ADD_EPISODE_FAIL } from './types';

const addNewEpisode = (title, date, url) => {
  return async dispatch => {
    let UTCDateObj = new Date(date);
    try {
      const addEpisodeSuccess = await db.collection('podcastEpisodes').add({
        title,
        date,
        url,
        UTCDate: UTCDateObj.getTime(),
      });

      dispatch({ type: ADD_EPISODE_SUCCESS, payload: addEpisodeSuccess });
    } catch (error) {
      dispatch({ type: ADD_EPISODE_FAIL, payload: error });
      console.error(error);
    }
  };
};

export { addNewEpisode };
