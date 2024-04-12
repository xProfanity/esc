import emailjs, { EmailJSResponseStatus } from "@emailjs/nodejs";

import { mongoClient } from "@/lib/mongodb";
import { fetchPostById } from "@/services/sanity";

import { Post } from "@/common";

export async function POST(req: Request) {

    const {documentId} = await req.json()

    const post = await fetchPostById(documentId) as Post

    try {
        await mongoClient.connect()

        const subscribers = await mongoClient.db('ESC_Newsletter').collection('subscribers').find({}).toArray()

        for(let subscriber of subscribers) {
            try {
                await emailjs.send(
                  'service_rbswx6k',
                  'template_k4ohric',
                  {
                    from_email: 'pecpalmplay@gmail.com',
                    to_email: subscriber.email,
                    reply_to: 'pecpalmplay@gmail.com',
                    post_title: post.title,
                    post_synopsis: post.synopsis,
                    post_link: post.slug.current
                  },
                  {
                    publicKey: process.env.NEXT_PUBLIC_EMAILJS_KEY as string,
                    privateKey: process.env.NEXT_PUBLIC_EMAILJS_PRIVATE_KEY
                  },
                );
              } catch (err) {
                if (err instanceof EmailJSResponseStatus) {
                  console.log('EMAILJS FAILED...', err);
                }
              
                console.log('ERROR', err);
              }
        }

        return Response.json({message: 'emails sent'})
    } catch (error) {
        return Response.json({message: 'failure', error})
    } finally {
        await mongoClient.close()
    }
}