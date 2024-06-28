import styles from "./RewardsCardD.module.scss"; 
import { RewardsCardDProps } from "./RewardsCardD.types.ts" 
 
const RewardsCardD = ({ reward }: RewardsCardDProps) => { 
    return(
        <div className={styles.RewardsCard}>
        <img src={reward.reward_image} alt={reward.reward_name} />
        <div className={styles.Flex}>
          <h3>{reward.reward_name}</h3>
          <span>Pts: {reward.points_required}</span>
        </div>
        <div>
          <p>{reward.reward_description}</p>
        </div>
        <div className={styles.Flex}>
          <button
            // onClick={() => onClaim(reward._id)}
          >
            Claim Reward
          </button>
        </div>
      </div>
   
    )
} 
 
export default RewardsCardD 
