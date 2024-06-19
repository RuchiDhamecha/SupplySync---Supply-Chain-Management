import { RewardsDataType } from "../../screens/manufacturerScreen/Rewards/Rewards.types";

 export interface RewardsCardProps {
    reward: RewardsDataType
    onUpdate: (reward: RewardsDataType) => void;
    onDelete: (rewardId: string) => void;
 } 

 export interface rewardFormInputs {
   reward_name: string;
   reward_points: number;
   reward_description: string;
   reward_image: string;
}
