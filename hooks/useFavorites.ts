import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { AiToolsCardProps } from "../sections/AiTools/types";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isShowingFavorites, setIsShowingFavorites] = useState(false);
  // Ref to prevent multiple initializations during development and hydration
  const initialized = useRef(false);
  // Ref for managing toast debouncing
  const toastDebounceRef = useRef<NodeJS.Timeout>();

  /**
   * Loads user favorites from localStorage or API
   * Prioritizes localStorage for faster loading and offline support
   */
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
      setFavorites([]);
    }
  };

  /**
   * Initialize favorites on component mount
   * Checks for window to prevent SSR issues
   */
  useEffect(() => {
    if (typeof window !== 'undefined' && !initialized.current) {
      initialized.current = true;
      loadUserFavorites();
    }
  }, []);

  const showToast = (message: string, type: 'success' | 'warning') => {
    // Clear any existing pending toast
    if (toastDebounceRef.current) {
      clearTimeout(toastDebounceRef.current);
    }

    // Debounce new toast to prevent multiple renders
    toastDebounceRef.current = setTimeout(() => {
      const toastFn = type === 'success' ? toast.success : toast.warn;
      toastFn(message, {
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        style: {
          color: "#462576",
          fontWeight: "bold",
          direction: "rtl"
        }
      });
    }, 100);
  };


  //Toggles a tool's favorite status

  const toggleFavorite = (toolId: number) => {
    setFavorites((prev) => {
      // Check if adding or removing from favorites
      const isAdding = !prev.includes(toolId);
      const newFavorites = isAdding
        ? [...prev, toolId]
        : prev.filter((id) => id !== toolId);

      // Only update localStorage and show toast on client side
      if (typeof window !== 'undefined') {
        localStorage.setItem("favorites", JSON.stringify(newFavorites));

        // Show appropriate toast message
        if (isAdding) {
          showToast(" !تمت الإضافة إلى المفضلة", 'success');
        } else {
          showToast("!تمت الإزالة من المفضلة", 'warning');
        }
      }

      return newFavorites;
    });
  };


  // Filters AI tools to return only favorited ones

  const getFavoriteTools = (aiTools: AiToolsCardProps[]) => {
    return aiTools.filter((tool) => favorites.includes(tool.tool_id ?? 0));
  };

  return {
    favorites,
    setFavorites,
    getFavoriteTools,
    toggleFavorite,
    isShowingFavorites,
    setIsShowingFavorites,
  };
};