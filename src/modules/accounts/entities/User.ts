import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
} from "typeorm";

@Entity("users")
class User {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  gender: string;

  @Column()
  scholarity: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;
}

export { User };
