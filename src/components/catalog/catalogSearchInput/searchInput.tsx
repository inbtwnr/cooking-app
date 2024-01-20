import { Button, Input, Label } from "@/components/shared/ui";
import { SearchInputProps } from "./searchInput.types";

export const SearchInput = (props: SearchInputProps) => {
  const { search, setSearch, handleSubmitSearch } = props;

  return (
    <>
      <div className="flex w-full gap-2 items-end">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="search">Search by Name</Label>
          <Input
            type="text"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Name of recipe"
          />
        </div>
        <Button onClick={handleSubmitSearch}>Search</Button>
      </div>
      {/* TODO: Add filter by ingredient */}
    </>
  );
};
