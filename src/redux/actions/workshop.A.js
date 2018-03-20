import db from '../../startup/db_init';
import { ADD_WORKSHOP_SUCCESS, ADD_WORKSHOP_FAIL } from './types';

const addNewWorkshop = ({
  address,
  descriptionHeader,
  descriptionMain,
  regularPrice,
  location,
  name,
  ticketLink,
  timeStartHour,
  timeStartMinutes,
  timeStartAMPM,
  timeEndHour,
  timeEndMinutes,
  timeEndAMPM,
  venue,
  venueLink,
  date,
}) => {
  return async dispatch => {
    let timeStartFormatted = formatTime(
        timeStartHour,
        timeStartMinutes,
        timeStartAMPM
      ),
      timeEndFormatted = formatTime(timeEndHour, timeEndMinutes, timeEndAMPM);

    let UTCSortDate = new Date(`${date}, ${timeEndFormatted}`),
      UTCStartDate = new Date(`${date}, ${timeStartFormatted}`),
      UTCEndDate = new Date(`${date}, ${timeEndFormatted}`);

    try {
      const addWorkshopSuccess = await db.collection('workshops').add({
        address,
        descriptionHeader,
        descriptionMain,
        regularPrice,
        earlyBirdPrice: regularPrice - 5,
        location,
        name,
        ticketLink,
        timeStart: `${timeStartHour}:${timeStartMinutes}${timeStartAMPM}`,
        timeEnd: `${timeEndHour}:${timeEndMinutes}${timeEndAMPM}`,
        venue,
        venueLink,
        date,
        UTCSort: UTCSortDate.getTime() + 43200000,
        UTCStart: UTCStartDate.getTime(),
        UTCEnd: UTCEndDate.getTime(),
        eventId: '',
        day: UTCStartDate.getDate(),
        month: getFullMonth(UTCStartDate),
        year: UTCStartDate.getFullYear(),
      });

      dispatch({ type: ADD_WORKSHOP_SUCCESS, payload: addWorkshopSuccess });
    } catch (error) {
      dispatch({ type: ADD_WORKSHOP_FAIL, payload: error });
      console.error(error);
    }
  };
};

const getFullMonth = date => {
  let monthNum = date.getMonth();

  switch (monthNum) {
    case 0:
      return 'January';
    case 1:
      return 'Febrary';
    case 2:
      return 'March';
    case 3:
      return 'April';
    case 4:
      return 'May';
    case 5:
      return 'June';
    case 6:
      return 'July';
    case 7:
      return 'August';
    case 8:
      return 'Sepetember';
    case 9:
      return 'October';
    case 10:
      return 'November';
    case 11:
      return 'December';
    default:
      return monthNum;
  }
};

const formatTime = (
  timeToFormatHour,
  timeToFormatMinutes,
  timeToFormatAMPM
) => {
  if (
    (timeToFormatAMPM === 'AM' && timeToFormatHour !== '12') ||
    (timeToFormatAMPM === 'PM' && timeToFormatHour === '12')
  ) {
    return `${timeToFormatHour}:${timeToFormatMinutes}:00`;
  }
  if (timeToFormatAMPM === 'PM') {
    return `${parseInt(timeToFormatHour, 10) + 12}:${timeToFormatMinutes}:00`;
  }
  // Edge case for 12AM
  return `00:${timeToFormatMinutes}:00`;
};

export { addNewWorkshop };
