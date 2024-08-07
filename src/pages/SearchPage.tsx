import { useSearchRestaurants } from "@/api/restaurantFeaturesAPI";
import CuisineFilter from "@/components/CuisineFilter";
import PaginationSelector from "@/components/PaginationSelector";
import SearchInput, { SearchForm } from "@/components/SearchInput";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfo from "@/components/SearchResultInfo";
import SortOptionDropdown from "@/components/SortOptionDropdown";
import Layout from "@/layouts/Layout";
import { CircleSlash2 } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type SearchState = {
  searchQuery: string;
  page: number;
  selectedCuisines: string[];
  sortOption: string;
};

const SearchPage = () => {
  const { city } = useParams();
  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
    page: 1,
    selectedCuisines: [],
    sortOption: "bestMatch",
  });

  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { results, isLoading } = useSearchRestaurants(searchState, city);

  const setPage = (page: number) => {
    setSearchState((prevState) => ({ ...prevState, page: page }));
  };

  const setSelectedCuisines = (selectedCuisines: string[]) => {
    setSearchState((prevState) => ({
      ...prevState,
      selectedCuisines,
      page: 1,
    }));
  };

  const setSortOption = (sortOption: string) => {
    setSearchState((prevState) => ({
      ...prevState,
      sortOption,
      page: 1,
    }));
  };
  const setSearchQuery = (searchFormData: SearchForm) => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,
      page: 1,
    }));
  };

  const resetSearch = () => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: "",
      page: 1,
    }));
  };

  if (isLoading) {
    <span>Loading ...</span>;
  }

  if (!results || !city) {
    return (
      <Layout>
        <div className="container mx-auto pt-8">
          <span>No restaurants found</span>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <div className="bg-slate-50">
        <div className="container mx-auto pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
            <div id="cuisines-list">
              <CuisineFilter
                selectedCuisines={searchState.selectedCuisines}
                onChange={setSelectedCuisines}
                isExpanded={isExpanded}
                onExpandedClick={() =>
                  setIsExpanded((prevIsExpanded) => !prevIsExpanded)
                }
              />
            </div>
            <div id="main-content" className="flex flex-col gap-5">
              <SearchInput
                searchQuery={searchState.searchQuery}
                onSubmit={setSearchQuery}
                placeHolder="Search by Restaurant Name or Cuisine"
                onReset={resetSearch}
              />
              <div className="flex justify-between flex-col gap-3 lg:flex-row">
                <SearchResultInfo
                  total={results.pagination.total}
                  city={city}
                />
                <SortOptionDropdown
                  sortOption={searchState.sortOption}
                  onChange={(value) => setSortOption(value)}
                />
              </div>
              {results.data.map((restaurant, index) => (
                <SearchResultCard key={index} restaurant={restaurant} />
              ))}
              <PaginationSelector
                page={results.pagination.page}
                pages={results.pagination.pages}
                onPageChange={setPage}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
