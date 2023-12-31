import AsyncStorage from '@react-native-async-storage/async-storage';

import { AUTH_STORAGE } from '@storage/storageConfig';

type StorageAuthTokenProps = {
  token: string;
  refresh_token: string;
}

//Saving the User Token
export async function storageAuthTokenSave({token, refresh_token}: StorageAuthTokenProps) {
  await AsyncStorage.setItem(AUTH_STORAGE, JSON.stringify({ token, refresh_token }));
}

//Search for the user's Token on the device
export async function storageAuthTokenGet() {
  const response = await AsyncStorage.getItem(AUTH_STORAGE);

  const { token, refresh_token }: StorageAuthTokenProps = response ? JSON.parse(response) : {}

  return { token, refresh_token };
}

//Removing the Token from the device
export async function storageAuthTokenRemove() {
  await AsyncStorage.removeItem(AUTH_STORAGE);
}