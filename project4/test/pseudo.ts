// import { zeroPad } from "@ethersproject/bytes";

// type User = {
//   id: string;
//   address: string;
// }

// type Role = 'moderator' | 'developer' | 'designer';

// type Achievement = {
//   id: string;
//   type: Role;
//   name: string;
//   point: number;
//   preRequisite: Achievement;
// }

// type UserAchievement = {
//   id: string;
//   user: User;
//   achievement: Achievement;
// }

// async function tryUnlock(userId: string, achievementId: string) {
//   const user = await findUser(userId);
//   if (!user) throw Error('Corresponding User does not exist');

//   const achievement = await findAchievement(achievementId);
//   if (!achievement) throw Error('Corresponding Achievement does not exist');

//   const { unlockable, reason } = await isUnlockable(user, achievement);
//   if (!unlockable) throw Error(`Failed to unlock the ${achievement.name}, reason: ${reason}`);

//   return unlock(user, achievement);
// }

// /**
//  * Assume that the user and the achievement exist. 
//  */
// function unlock(user: User, achievement: Achievement) {
  
// }

// async function isUnlockable(user: User, achievement: Achievement): Promise<{ unlockable: boolean, reason: string }> {
//   if (achievement.preRequisite) {
//     const userAchievement = await findUserAchievment(user.id, achievement.preRequisite.id);
//     if (!userAchievement) {
//       return { unlockable: false, reason: `You must achieve ${achievement.preRequisite.name} first` };
//     }

//     return isUnlockable(user, userAchievement.achievement.preRequisite);
//   }

//   isAchieved
// }

// function Achievement() {

// }

// async function findUser(userId: string): Promise<User | undefined> {
//   return undefined;
// }

// async function findAchievement(achievementId: string): Promise<Achievement | undefined> {
//   return undefined;
// }

// async function findUserAchievment(userId: string, achievementId: string): Promise<UserAchievement | undefined> {
//   return undefined;
// }