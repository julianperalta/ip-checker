import { persistQueryClient } from "react-query/persistQueryClient-experimental";
import { createWebStoragePersistor } from "react-query/createWebStoragePersistor-experimental";
import { QueryClient } from "react-query";
import { CACHE_DURATION_1DAY } from "./time";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: CACHE_DURATION_1DAY,
        },
    }
});

const localStoragePersistor = createWebStoragePersistor({ storage: window.localStorage });

persistQueryClient({
    queryClient,
    persistor: localStoragePersistor,
});
 