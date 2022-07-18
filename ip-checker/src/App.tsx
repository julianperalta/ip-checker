import React from "react";
// UTILS
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider } from "react-query";
import { queryClient } from "utils/queryClientConfig";
// COMPONENTS
import Grid from "styles/Providers/Grid";
import Theme from "styles/Providers/Theme";
import IPSearch from "components/IPSearch";

function App() {
    return (
        <Grid>
            <Theme>
                <QueryClientProvider client={queryClient}>
                    <IPSearch />
                    {/* <div style={{ backgroundColor: "gray", height: "100%"}} /> */}
                    <ReactQueryDevtools />
                </QueryClientProvider>
            </Theme>
        </Grid>
    );
};

export default App;
