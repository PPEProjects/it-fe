import Cookies from "universal-cookie"
import { ApolloClient } from "apollo-client"
import { ApolloLink } from "apollo-link"
import { HttpLink } from "apollo-link-http"
import { onError } from "apollo-link-error"
import { InMemoryCache } from "apollo-cache-inmemory"

const cookies = new Cookies()
const token = cookies.get('ppe-token')
const httpLink = new HttpLink({
    uri: `${process.env.REACT_APP_URL}`,
    headers: {
        authorization: token ? `Bearer ${token}` : '',
    },
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        console.log("graphQLErrors", graphQLErrors);
        (graphQLErrors ?? []).forEach(({ message, locations, path }) => {
            // graphQLErrors.map(({message, locations, path}) => {
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            )
            if (path === `login`) {
                return alert(`Email or password are wrongs!`)
            }
            alert(message)
        }
        )
    }
    if (networkError) {
        console.log(`[Network error]: ${networkError}`)
    }
})
const defaultOptions = {
    watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
    },
}
export const apolloClient = new ApolloClient({
    link: ApolloLink.from([errorLink, httpLink]),
    cache: new InMemoryCache(),
    defaultOptions
})
