import React from 'react';
import './index.css';
import App from './App';
import awsmobile from './aws-exports';
import ReactDOM from "react-dom/client";
import Client from 'aws-appsync';
import { ApolloProvider } from 'react-apollo';
import { Rehydrated } from 'aws-appsync-react';

const client = new Client({
  url: awsmobile.aws_appsync_graphqlEndpoint,
  region: awsmobile.aws_appsync_region,
  auth: {
    type: 'API_KEY',
    apiKey: awsmobile.aws_appsync_apiKey
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <Rehydrated>
      <App />
    </Rehydrated>
  </ApolloProvider>
);