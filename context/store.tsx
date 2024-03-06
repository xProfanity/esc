import { proxy } from "valtio";

import { initialBaseState } from "./state";

export const base = proxy(initialBaseState)

export const posts = proxy({
    postOpened: false,
    openedPost: null
})