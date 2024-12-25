
import { useState, useEffect } from "react";
import { AiToolsCardProps } from "../sections/AiTools/types";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isShowingFavorites, setIsShowingFavorites] = useState(false);

  const loadUserFavorites = async () => {
    try {
      const storedFavorites = localStorage.getItem("favorites");

      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      } else {
        const response = await fetch(
          "/api/getUserFavorites?email=marahsaadeh@gmail.com"
        );
        const data = await response.json();

        if (data.success) {
          const validIds = data.favorites
            .map((id: string) => Number(id))
            .filter(Number.isFinite);
          setFavorites(validIds);
          localStorage.setItem("favorites", JSON.stringify(validIds));
        }
      }
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };

  const toggleFavorite = (toolId: number) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(toolId)
        ? prev.filter(id => id !== toolId)
        : [...prev, toolId];
      
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const getFavoriteTools = (aiTools: AiToolsCardProps[]) => {
    return aiTools.filter((tool) => favorites.includes(tool.tool_id ?? 0));
  };

  useEffect(() => {
    loadUserFavorites();
  }, []);

  return {
    favorites,
    setFavorites,
    getFavoriteTools,
    toggleFavorite,
    isShowingFavorites,
    setIsShowingFavorites
  };
};