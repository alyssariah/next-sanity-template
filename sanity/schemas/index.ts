import { type SchemaTypeDefinition } from 'sanity';
import blogPosts from './blog-posts';
import home from './home';
import about from './about';
import contact from './contact';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, about, contact, blogPosts],
};
