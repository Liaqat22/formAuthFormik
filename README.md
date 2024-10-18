<<<<<<< HEAD
## Admin Dashboard
=======
### QueryClient and QueryClientProvider

 import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime : 10000
    }
  }
})

root.render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
);

### useQuery
for fetching api data

### useMutation 
for crud operations
>>>>>>> 61c3f86302fb764f8c897bf883975207dfe05100
