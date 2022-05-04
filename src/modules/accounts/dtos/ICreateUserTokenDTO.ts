import { ObjectID } from "typeorm";

interface ICreateUserTokenDTO {
  user_id: ObjectID;
  expires_date: Date;
  refresh_token: string;
}

export { ICreateUserTokenDTO };
