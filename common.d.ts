type Category = {
    title: string;
    description: string;
    _id: string;
}

type Slug = {
    current: string;
    _type: string
}

type Author = {
    name: string;
    image: SanityImage;
}

type BodyChildren = {
    text: string;
    _key: string;
    _type: string;
}

type Body = {
    _type: string;
    style: string;
    _key: string;
    children: BodyChildren[];
    asset: SanityImage;
    listItem: string | null;
}

export interface SanityImage {
    _type: string;
    asset: {
        _ref: string;
        _type: string;
    }
}


export interface Post {
    publishedAt: string;
    mainImage: SanityImage;
    categories: Category[];
    featured: boolean;
    author: Author;
    slug: Slug;
    video: SanityImage | null;
    body: Body[];
    synopsis: string;
    title: string;
    _id: string;
    _rev: string;
    _type: string;
    _createdAt: string;
    _updatedAt: string;
}

export interface DepositSlip {
    depositId: string,
    status: "COMPLETED" | "ACCEPTED" | "SUBMITED" | "FAILED",
    requestedAmount: string,
    depositedAmount: string,
    currency: string,
    country: string,
    payer: {
      type: string,
      address: {
        value: string
      }
    },
    correspondent: string,
    statementDescription: string,
    customerTimestamp: string,
    created: string,
    respondedByPayer: string,
    correspondentIds: {
      SOME_CORRESPONDENT_ID: string
    }
}