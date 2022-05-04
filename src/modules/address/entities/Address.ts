import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity("properties")
class Address {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  address: string;
}

export { Address };
