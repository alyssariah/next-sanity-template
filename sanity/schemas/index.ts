import { type SchemaTypeDefinition } from 'sanity';
import blogPosts from './blog-posts';
import page from './page';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, blogPosts],
};
