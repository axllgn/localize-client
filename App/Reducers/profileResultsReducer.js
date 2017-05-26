export default function reducer(state = {
 profileResults: []
  // error: null,
}, action) {
  if (action.type === 'FETCH_PROFILE_RESULTS') {
    return {...state, fetching: true}
  } else if (action.type === 'FETCH_TWEETS_REJECTED') {
    return {...state, fetching: false, error: action.payload}
  } 
  return state;
}