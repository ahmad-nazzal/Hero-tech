
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export const useUrlSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const query = searchParams?.get("q") || "";
    setSearchQuery(query);
  }, [searchParams]);

  const updateSearchQuery = (query: string) => {
    setSearchQuery(query);
    
    // Update URL
    const newParams = new URLSearchParams(searchParams?.toString());
    if (query) {
      newParams.set("q", query);
    } else {
      newParams.delete("q");
    }
    
    router.push(`?${newParams.toString()}`);
  };

  return {
    searchQuery,
    updateSearchQuery
  };
};