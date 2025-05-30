import { userProfileRepository } from "../../domain/userProfile/userProfile.repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class LoginUser {
  constructor(private userProfileRepository: userProfileRepository) {}

  async login(email: string, password: string): Promise<string | null> {
    console.log(process.env.SECRET_KEY)
    const userProfile = await this.userProfileRepository.findByEmail(email);
    if (!userProfile) return null;

    const match = await bcrypt.compare(password, userProfile.password);
    if (!match) return null;

    const token = jwt.sign({ id: userProfile.id, email: userProfile.email }, process.env.SECRET_KEY as string, { expiresIn: "1h" });

    return token;
  }
}
