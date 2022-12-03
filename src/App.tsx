import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Main from './pages/main';

const queryClient = new QueryClient({
    defaultOptions: {
	queries: {
	    refetchOnWindowFocus: false
	}
    }
})

const App = () => {
    return (
	<QueryClientProvider client={queryClient}>
	    <Main />
	</QueryClientProvider>
    );
}

export default App;
