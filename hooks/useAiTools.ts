// hooks/useAiTools.ts
import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("فشل في جلب البيانات");
  }
  const data = await res.json();
  return data?.data || [];
};

export const useAiTools = () => {
  const {
    data: aiTools,
    error,
    isLoading,
  } = useSWR(
    "https://sitev2.arabcodeacademy.com/wp-json/aca/v1/aitools",
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      refreshInterval: 300000,
    }
  );

  return {
    aiTools,
    error,
    isLoading,
  };
};