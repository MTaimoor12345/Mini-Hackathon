

import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { getByEmail,VerifyPassword } from "../../../../services/user";

export const authOptions = {
  // Configure one or more authentication providers
  session:{jwt:true},
  providers: [
    CredentialsProvider({

        async authorize({email,password}) {
            const find1 = getByEmail(email);
            if (!find1) {
                throw new error("User not Found");
            }
            const isValid= await VerifyPassword(find1.password,password);
            if (!isValid) {
                throw new error("Incorrect Password");
            }
            return{email}
        }
    })
  ],
}

export default NextAuth(authOptions)