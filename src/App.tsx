import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Main from './pages/main';

const queryClient = new QueryClient()

const App = () => {
    return (
	<QueryClientProvider client={queryClient}>
	    <Main />
	</QueryClientProvider>
    );
}

export default App;
