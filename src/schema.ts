import { type SchemaTypeDefinition } from 'sanity'

import blockContent from '@/src/schemas/blockContent'
import category from '@/src/schemas/category'
import post from '@/src/schemas/post'
import author from '@/src/schemas/author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent],
}
