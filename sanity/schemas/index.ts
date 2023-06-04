import { type SchemaTypeDefinition } from 'sanity';
import blogPosts from './blog-posts';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPosts],
};
