import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { getServerSession } from "next-auth";

export const singInEmailPassword = async (email: string, password: string) => {


  // email validation
  if (email === '' || password === '') return null

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    const dbUser = await createdUser(email, password);
    return dbUser;
  };

  if (bcrypt.compareSync(password, user.password ?? '')) throw new Error('user not found');

  return user;

};

const createdUser = async (email: string, password: string) => {

  const passwordCrypt = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({ data: { email, password: passwordCrypt, name: email.split('@')[0] } });

  return user;
}


export const getUserSession = async () => {
  const session = await getServerSession(authOptions);

  return session?.user;
}