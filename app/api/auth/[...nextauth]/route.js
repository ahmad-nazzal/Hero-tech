import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import fs from "fs";
// import path from "path";
import bcrypt from "bcryptjs";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;

        // const filePath = path.join(process.cwd(), "fakeDB", "db.json");
        // const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/db.json`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch the database.");
        }

        const data = await response.json();
        const user = data.users.find((user) => user.email === email);

        if (!user) {
          console.log("المستخدم غير موجود.");
          return null;
        }

        const passwordMatches = await bcrypt.compare(password, user.password);

        if (!passwordMatches) {
          return null;
        }

        return {
          id: user.email,
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
        };
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
