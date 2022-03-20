import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const BaseUrl = 'https://beta.api.solanalysis.com/graphql';

let orderBy = {
    field_name : "market_cap", 
    sort_order : "DESC"
};

let variables = {
    paginationInfo : {
        page_number : 1,
    page_size : 50
    }
};
let operationName = 'GetProjectStats';

let query = "query GetProjectStats($orderBy: [OrderConfig!], $paginationInfo: PaginationConfig, $conditions: GetProjectStatsCondition) {\n  getProjectStats(\n    order_by: $orderBy\n    pagination_info: $paginationInfo\n    conditions: $conditions\n  ) {\n    project_stats {\n      project_id\n      market_cap\n      volume_7day\n      volume_1day_change\n      floor_price\n      average_price\n      average_price_1day_change\n      max_price\n      twitter_followers\n      num_of_token_listed\n      num_of_token_holders\n      percentage_of_token_listed\n      volume_1day\n      project {\n        supply\n        website\n        img_url\n        is_verified\n        display_name\n        tags {\n          tag\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    pagination_info {\n      current_page_number\n      current_page_size\n      has_next_page\n      __typename\n    }\n    __typename\n  }\n}"

let data = {
    operationName, variables, orderBy, query
};
data = JSON.stringify(data);
export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({ BaseUrl }),
    endpoints: ( builder ) => ({
        getCryptos: builder.query({
            query: (data) => {
                return {
                    method : 'POST',
                    body : data
                }
              
            }
          })
    })
});


export const {
    useGetCryptosQuery
} = cryptoApi;


