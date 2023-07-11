import { User } from "@prisma/client";
import { CreateAxiosDefaults } from "axios";

export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "emailVerified"
> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null
}