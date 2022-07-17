import React from "react";
import { QueryClientProvider } from "react-query";
// UTILS
import { queryClient } from "utils/queryClientConfig";
// COMPONENTS
import Grid from "components/Grid";
import Theme from "components/Theme";
import Head from "components/Head";

function App() {
    return (
        <Grid>
            <Theme>
                <QueryClientProvider client={queryClient}>
                    <Head />
                </QueryClientProvider>
            </Theme>
        </Grid>
    );
};

export default App;
