import { account } from './appwrite'; 

export const checkSession = async () => {
  try {
    const session = await account.get(); 
    return session;
  } catch (error) {
    console.log("No active session found");
    return null;
  }
};
