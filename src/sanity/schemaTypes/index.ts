import { type SchemaTypeDefinition } from 'sanity'
import { eventType } from '../schema/eventType'
import { blogType } from '../schema/blogType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, blogType],
}
