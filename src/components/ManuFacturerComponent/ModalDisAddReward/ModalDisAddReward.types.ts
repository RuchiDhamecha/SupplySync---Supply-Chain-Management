import { RewardsDataType } from "../../../screens/manufacturerScreen/Rewards/Rewards.types";

 export interface ModalDisAddRewardProps {
    isOpen: boolean;
    onClose: () => void;
    onAddReward: (product: RewardsDataType) => void;
 } 
