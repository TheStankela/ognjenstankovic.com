type Meta = {
    id: string;
    title: string;
    date: string;
    tags: string[];
    description: string;
    coverImage: string;
    coverImageUrl: string;
    readingTime: string;
}

type BlogPost = {
    meta: Meta,
    content: ReactElement<any, string | JSXElementConstructor<any>>,
}