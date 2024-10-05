import { defineMongooseModel } from '#nuxt/mongoose';

// 多个表名的方式
export const TemplateModel = (appKey: string) =>
  defineMongooseModel({
    name: 'template-' + appKey,
    schema: {
      template_id: {
        type: 'string',
        required: true
      },
      description: {
        type: 'string',
        required: true
      }
    },
    options: {},
    hooks(schema) {}
  });
