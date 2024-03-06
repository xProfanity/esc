type Category = {
    _ref: string;
    _type: string;
    _key: string;
}

type Slug = {
    current: string;
    _type: string
}

type Author = {
    _ref: string;
    _type: string;
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
    children: BodyChildren[]
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
    title: string;
    _id: string;
    _rev: string;
    _type: string;
    _createdAt: string;
    _updatedAt: string;
}