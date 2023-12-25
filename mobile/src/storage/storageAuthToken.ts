import AsyncStorage from '@react-native-async-storage/async-storage';

import { AUTH_STORAGE } from '@storage/storageConfig';

//Saving the User Token
export async function storageAuthTokenSave(token: string) {
  await AsyncStorage.setItem(AUTH_STORAGE, token);
}

//Search for the user's Token on the device
export async function storageAuthTokenGet() {
  const token = await AsyncStorage.getItem(AUTH_STORAGE);

  return token;
}

//Removing the Token from the device
export async function storageAuthTokenRemove() {
  await AsyncStorage.removeItem(AUTH_STORAGE);
}