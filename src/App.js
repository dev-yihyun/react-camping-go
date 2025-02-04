import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./router";

function App() {
    const reactquery = new QueryClient();
    return (
        <>
            <QueryClientProvider client={reactquery}>
                <Router />
            </QueryClientProvider>
        </>
    );
}

export default App;
