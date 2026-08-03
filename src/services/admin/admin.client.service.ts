const API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

export const updateUserStatus = async (
  id: string,
  status: "ACTIVE" | "INACTIVE",
) => {
    console.log("Updating user:", id, status);
  const response = await fetch(`${API_URL}/api/admin/users/${id}`, {
    method: "PATCH",

    headers: {
      "Content-Type": "application/json",
    },

    credentials: "include",

    body: JSON.stringify({
      status,
    }),
  });
  const data = await response.json();
 console.log("Update response:", data);
  return data;
};
