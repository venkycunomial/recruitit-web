import http from './http';

export async function getResponse(url) {
  let status = '';
  let data = '';
  let headers = '';
  let messages = [];
  let errors = [];
  let warnings = [];
  await http
    .get(url)
    .then(function (response) {
      status = 'SUCCESS';
      data = response.data.data;
      headers = response.headers;
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        status = 'ERROR';
        headers = error.response.headers;
        errors = [
          {
            message: 'An error has occurred while processing your request.  Please contact support.',
            timestamp: Date.now(),
          },
        ];
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        status = 'ERROR';
        headers = error.request._options.headers;
        errors = [
          {
            message: 'Please check your network connection and try again.',
            timestamp: Date.now(),
          },
        ];
      } else {
        // Something happened in setting up the request that triggered an Error
        status = 'ERROR';
        errors = [
          {
            message: 'An incorrect request was made.  Please contact support.',
            timestamp: Date.now(),
          },
        ];
      }
    });
  return {
    status,
    data,
    headers,
    messages,
    errors,
    warnings,
  };
}
