import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: {type: String, unique: true},
    username: String,
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

declare interface UserDocument extends mongoose.Document {
  username: string;
  email: string;
}

export const MongooseUser = mongoose.model<UserDocument>('User', userSchema);
