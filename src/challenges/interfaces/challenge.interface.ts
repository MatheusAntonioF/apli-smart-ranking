import { Document } from 'mongoose';
import { Category } from 'src/categories/interfaces/category.interface';
import { Player } from 'src/players/interfaces/player.interface';
import { ChallengeStatusEnum } from '../enum/challenge-status.enum';

export interface Challenge extends Document {
  date: Date;
  challenger: Player;
  players: Array<Player>;
  dateTimeChallenge: Date;
  status: ChallengeStatusEnum;
  category: Category;
}