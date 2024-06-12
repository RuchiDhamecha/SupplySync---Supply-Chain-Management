import { useEffect, useState } from "react";
import SideBar from "../../../components/SideBar/SideBar.tsx";
import NavBar from "../../../layout/NavBar/NavBar.tsx";
import styles from "./Rewards.module.scss";
import { RewardsDataType, RewardsProps } from "./Rewards.types.ts";
import { createreward, deletereward, rewardsScreen, updatereward } from "../../../auth/manuReward.ts";
import RewardsCard from "../../../components/RewardsCard/RewardsCard.tsx";
import ModalDisAddReward from "../../../components/ModalDisAddReward/ModalDisAddReward.tsx";

const Rewards = ({}: RewardsProps) => {
    const [rewards, setRewards] = useState<RewardsDataType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getdata = async () => {
    try {
      const rewardsScreenResponse = await rewardsScreen();
      setRewards(rewardsScreenResponse.data);
    } catch (error: any) {
      console.log("error", error.message);
    }
  };

  const handleUpdateReward = async (updatedReward: RewardsDataType) => {
    try {
      await updatereward(updatedReward);
      setRewards(
        rewards.map((reward) =>
          reward._id === updatedReward._id ? updatedReward : reward
        )
      );
    } catch (error: any) {
      console.log("Update error", error.message);
    }
  };

  const handleDeleteReward = async (rewardId: string) => {
    try {
      await deletereward(rewardId);
      setRewards(rewards.filter((reward) => reward._id !== rewardId));
    } catch (error: any) {
      console.log("Delete error", error.message);
    }
  };

  const handleAddreward = async (newreward: RewardsDataType) => {
    try {
      const response = await createreward(newreward);
      setRewards([...rewards, response.data]);
    } catch (error: any) {
      console.log("Add error", error.message);
    }
  };


  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <div>
        <NavBar />
        
      </div>

      <div className={styles.HeadBtns}>
        <div>
            <h2> My Rewards</h2>
        </div>
        <div>

        <button onClick={() => setIsModalOpen(true)}>+ Add New Reward</button>
        <button>View Request</button>
        </div>
      </div>

      <div className={styles.RewardsScreen}>
        {rewards.map((rewardItem) => (
          <RewardsCard
            key={rewardItem._id}
            reward={rewardItem}
            onUpdate={handleUpdateReward}
            onDelete={handleDeleteReward}
          />
        ))}
      </div>

      <ModalDisAddReward
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddReward={handleAddreward}
      />
    </div>
  );
};

export default Rewards;


