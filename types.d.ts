type Meta = {
    id: string;
    title: string;
    date: string;
    tags: string[];
    // dateISO: string;
    // excerpt: string;
    // readingTime: string;
    // coverImage: string;
    // coverImageUrl: string;
}

type BlogPost = {
    meta: Meta,
    content: ReactElement<any, string | JSXElementConstructor<any>>,
}