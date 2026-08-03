
export const getCategories = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/categories`,
    {
      method: "GET",
      cache: "no-store",
      next: {
        revalidate: 60 * 60 * 24,
        tags: ["categories"],
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  const result = await response.json();
  return result;
};
