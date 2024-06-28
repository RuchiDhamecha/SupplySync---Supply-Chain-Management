import { useEffect, useState } from "react";
import SideBarDistributor from "../../../layout/SideBarDistributor/SideBarDistributor.tsx";
import styles from "./Rewards.module.scss";
import { RewardsDDataType, RewardsProps } from "./Rewards.types.ts";
import RewardsCardD from "../../../components/DistributorCompoents/RewardsCardD/RewardsCardD.tsx";
import { rewardsDScreen } from "../../../auth/distRewards.ts";

const RewardsD = ({}: RewardsProps) => {
  const [rewards, setRewards] = useState<RewardsDDataType[]>([]);

  const getdata = async () => {
    try {
      const rewardsScreenResponse = await rewardsDScreen();
      setRewards(rewardsScreenResponse.data);
    } catch (error: any) {
      console.log("error", error.message);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <div>
        <SideBarDistributor />
      </div>
      <div>
        <div>
          <h2> My Rewards</h2>
        </div>

        <div className={styles.RewardsScreen}>
          {rewards.map((rewardItem) => (
            <RewardsCardD key={rewardItem._id} reward={rewardItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RewardsD;
