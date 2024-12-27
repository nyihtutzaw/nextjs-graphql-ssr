
import { getClient } from "./config/client";
import Home from "./containers/home";
import { GET_COUNTRIES_QUERY } from "./graphql/query";
import { GetCountriesResponse } from "./types";



export default async function Partner({ searchParams }: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {

  const { search = "" } = searchParams;

  const { data } = await getClient().query<GetCountriesResponse>({
    query: GET_COUNTRIES_QUERY,
    variables: {
      searchText: search
    }
  });

  return (
    <main className="">
      <Home data={data} />
    </main>
  );
}