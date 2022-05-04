import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  ObjectID,
  ObjectIdColumn,
} from "typeorm";
import { User } from "./User";

@Entity("users_tokens")
class UserTokens {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  refresh_token: string;

  @Column()
  user_id: ObjectID;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  expires_date: Date;

  @CreateDateColumn()
  created_at: Date;
}

export { UserTokens };
