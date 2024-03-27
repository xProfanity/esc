import Mux from "@mux/mux-node"

const mux = new Mux({
    tokenId: process.env.NEXT_PUBLIC_MUX_TOKEN_ID,
    tokenSecret: process.env.NEXT_PUBLIC_MUX_SECRET_KEY
})

export { mux }
