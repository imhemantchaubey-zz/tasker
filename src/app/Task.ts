import { ObjectId } from 'mongodb';

export interface Task {
  _id: ObjectId;
  text: string;
  day: string;
  reminder: boolean;
}
