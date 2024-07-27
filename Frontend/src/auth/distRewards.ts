import authAxiosInstance from "./api.intercept";

export const rewardsDScreen = async () => {
    try {
      const rewardsScreenResponse = await authAxiosInstance.get('merchandise/');
      console.log(rewardsScreenResponse.data);
      return rewardsScreenResponse.data.data.merchandises;
    } catch (error) {
      console.log(error);
    }
  }