/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-eudo.us', // the auth0 domain prefix
    audience: 'coffe_shop', // the audience set for the auth0 app
    clientId: 'hkW7fXok1qXWRceJHXtzwMJAy1D3dvKJ', // the client id generated for the auth0 app
    callbackURL: 'http://127.0.0.1:8100', // the base url of the running ionic application. 
  }
};
