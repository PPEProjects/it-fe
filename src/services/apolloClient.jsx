import Cookies from 'universal-cookie';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import {ApolloClient, InMemoryCache} from "@apollo/client";
const cookies = new Cookies();
const token = cookies.get('ppe-it');
const httpLink = new HttpLink({
  uri: `${process.env.REACT_APP_BE_URL}`,
  headers: {
    authorization: token ? `Bearer ${token}` : '',
  },
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    (graphQLErrors ?? []).forEach(({ message, locations, path }) => {
      // console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
      if (path === `login`) {
        return alert(`Email or password are wrongs!`);
      }
      if (message === 'please login') {
        return window.location.assign('/LoginPage');
      }
      alert(message);
    });
  }
});

// test datvnt
const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};
export const apolloClient = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions,
});
