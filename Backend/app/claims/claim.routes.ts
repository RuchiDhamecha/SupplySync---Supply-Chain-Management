// import express, { Request, Response, NextFunction } from 'express';
// import claimServices from './claim.services';
// import merchandiseServices from '../merchandise/merchandise.services';
// import { ResponseHandler } from '../utility/response-handler';
// import { Route } from '../routes/routes.types';
// import { CustomRequest, permit } from '../utility/auth-permissions';
// import { UserModel } from '../users/user.schema';
// import { RewardModel } from '../merchandise/merchandise.schema';

// const router = express.Router();

// // Distributor claims a reward
// router.post(
//   '/claim',
//   permit(['distributor']),
//   async (req: CustomRequest, res: Response, next: NextFunction) => {
//     try {
//       const { reward_name, points_used } = req.body;
//       const user_id = req.payload.user_id; // Extract user_id from token

//       // Check if distributor has enough points
//       const distributor = await UserModel.findById(user_id);
//       if (!distributor || distributor.points < points_used) {
//         return res.status(400).send({ message: 'Not enough points' });
//       }

//       // Find reward by name
//       const reward = await RewardModel.findOne({ reward_name });
//       if (!reward) {
//         return res.status(404).send({ message: 'Reward not found' });
//       }

//       const newClaim = await claimServices.createClaim({
//         reward_id: reward._id,
//         user_id,
//         status: 'pending',
//         points_used
//       });

//       res.send(new ResponseHandler(newClaim));
//     } catch (e) {
//       next(e);
//     }
//   }
// );

// // Manufacturer updates the status of a claim
// router.put(
//   '/claim/:claimId',
//   permit(['manufacturer']),
//   async (req: CustomRequest, res: Response, next: NextFunction) => {
//     try {
//       const { claimId } = req.params;
//       const { status } = req.body;

//       const updatedClaim = await claimServices.updateClaimStatus(claimId, status);

//       if (status === 'accepted') {
//         // Deduct points from distributor if claim is accepted
//         const claim = await claimServices.getClaimById(claimId);
//         const distributor = await UserModel.findById(claim.user_id);
//         distributor.points -= claim.points_used;
//         await distributor.save();
//       }

//       res.send(new ResponseHandler(updatedClaim));
//     } catch (e) {
//       next(e);
//     }
//   }
// );

// // Distributor views accepted claims
// router.get(
//   '/claims/accepted',
//   permit(['distributor']),
//   async (req: CustomRequest, res: Response, next: NextFunction) => {
//     try {
//       const user_id = req.payload.user_id;
//       const acceptedClaims = await claimServices.getAcceptedClaimsByUserId(user_id);
//       res.send(new ResponseHandler(acceptedClaims));
//     } catch (e) {
//       next(e);
//     }
//   }
// );

// // Distributor finds a claim by reward name
// router.get(
//   '/claim/:rewardName',
//   permit(['distributor']),
//   async (req: CustomRequest, res: Response, next: NextFunction) => {
//     try {
//       const { rewardName } = req.params;
//       const user_id = req.payload.user_id;

//       const claim = await claimServices.getClaimByRewardName(rewardName, user_id);
//       res.send(new ResponseHandler(claim));
//     } catch (e) {
//       next(e);
//     }
//   }
// );

// export default new Route('/claimReward', router);
