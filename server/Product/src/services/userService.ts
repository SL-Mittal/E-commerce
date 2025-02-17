import axios from "axios";

export interface UserResponse {
  id: string;
  isAdmin: boolean;
}

export const verifyUser = async (
  token: string
): Promise<UserResponse | null> => {
  try {
    const response = await axios.get("http://localhost:5001/users/me", {
      headers: { Authorization: `${token}` },
    });
    return response.data;
  } catch (error: any) {
    console.error("User verification failed:", error.message);
    return null;
  }
};
