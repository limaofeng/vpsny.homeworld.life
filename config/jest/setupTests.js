/* eslint-env jest */
Date.now = jest.fn(() => 0);

// Mocking the global.fetch included in React Native
global.fetch = jest.fn();

fetch.mockResponseSuccess = body => {
  fetch.mockImplementationOnce(() => Promise.resolve({ json: () => Promise.resolve(JSON.parse(body)) }));
};
 
fetch.mockResponseFailure = error => {
  fetch.mockImplementationOnce(() => Promise.reject(error));
};
