import { defineMongooseModel } from '#nuxt/mongoose';

export const PlanModel = defineMongooseModel({
  name: 'plans',
  schema: {
    appKey: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      required: true
    },
    push_counts: {
      type: Number
    },
    create_time: {
      type: Number,
      required: true
    },
    lastused_time: {
      type: String
    }
  },
  options: {},
  hooks(schema) {}
});
