import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifCode: string;
  verifyCodeExperiy: Date;
  isVerifed: boolean;
  isAcceptingMessage: boolean;
  messages: Message[];
}

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  verifCode: {
    type: String,
    required: [true, "Verif code is required"],
  },
  verifyCodeExperiy: {
    type: Date,
    required: [true, "Verif code is required"],
  },
  isVerifed: {
    type: Boolean,
    default: false,
  },

  isAcceptingMessage: {
    type: Boolean,
    default: true,
  },
  messages: [MessageSchema],
});

const UserModal =
  (mongoose.models.User as mongoose.Modals<User>) ||
  mongoose.model<User>("User", UserSchema);


export default UserModal