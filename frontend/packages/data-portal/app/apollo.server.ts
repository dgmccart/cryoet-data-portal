import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

import { ENVIRONMENT_CONTEXT_DEFAULT_VALUE } from './context/Environment.context'

export const apolloClientV2 = new ApolloClient({
  ssrMode: true,
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
    },
  },
  cache: new InMemoryCache(),
  link: createHttpLink({
    uri: process.env.API_URL_V2 ?? ENVIRONMENT_CONTEXT_DEFAULT_VALUE.API_URL_V2,
  }),
})
