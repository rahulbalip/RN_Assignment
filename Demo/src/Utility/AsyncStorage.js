import AsyncStorage from '@react-native-community/async-storage';

export const _storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      // Error saving data
    }
  };

  export const _retrieveData = async (key) => {
          
    try {
        const retrievedItem =  await AsyncStorage.getItem(key);
        return retrievedItem;
      } catch (error) {
        //console.log(error.message);
      }
      return
  };

  export const _removeData = async (key) => {
    try {
      const value = await AsyncStorage.removeItem(key);
      if (value !== null) {
        // We have data!!
       // console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  export const removeItemValue = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    }
    catch(exception) {
      return false;
    }
  }

  export const clearAsyncStorage = async() => {
    AsyncStorage.clear();
}

  