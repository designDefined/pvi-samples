import { z } from "zod";
import { Typed } from "@core/base/util/typed";

/* Primitives */
const INTEGER_ID = z.number().int().nonnegative();
// const STRING_ID = z.string().min(1);

/* User */
export const USER_ID = INTEGER_ID;
export type USER_ID = Typed<typeof USER_ID>;

/* Message */
export const MESSAGE_ID = INTEGER_ID;
export type MESSAGE_ID = Typed<typeof MESSAGE_ID>;
