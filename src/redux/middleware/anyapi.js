import request from 'superagent'

const anyapi = store => next => action => {
  /*
  Pass all actions through by default
  */
  next(action)
  switch (action.type) {
  case 'ANYAPI_GET':
    /*
    In case we receive an action to send an API request, send the appropriate request
    */
    request
      .get(action.payload.url)
      .end((err, res) => {
        if (err) {
          /*
          in case there is any error, dispatch an action containing the error
          */
          return next({
            type: 'ANYAPI_GET_ERROR',
            payload: action.payload,
            err
          });
        }
        const data = JSON.parse(res.text);
        /*
        Once data is received, dispatch an action telling the application
        that data was received successfully, along with the parsed data
        */
        next({
          type: 'ANYAPI_GET',
          payload: action.payload,
          data
        });
      })
    break
  /*
  Do nothing if the action does not interest us
  */
  default:
    break
  }

};

export default anyapi