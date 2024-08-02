import { Search } from "lucide-react";
import { Button } from "./ui/button";

const SearchInput = () => {
  return (
    <div className="border border-slate-300 py-2 px-3 rounded-full flex items-center justify-between">
      <div className="w-[70%] flex gap-4 items-center">
        <Search size={25} className="text-orange-500" />
        <input
          type="text"
          className="border-none outline-none bg-transparent w-full"
          placeholder="Search by City or Town"
        />
      </div>
      <div className="flex gap-4 justify-between items-center">
        <Button variant="outline" className="rounded-full">
          Reset
        </Button>
        <Button
          variant="secondary"
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-full"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchInput;
