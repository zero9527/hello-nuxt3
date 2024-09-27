import { PlanModel } from '~/server/models/plan.model';

export default defineEventHandler(async (event) => {
  const appKey = event.context.params?.appKey;
  const name = event.context.params?.name;
  const body = await readBody(event);
  console.log('appKey: %s, name: %s, body: %o', appKey, name, body);
  try {
    await PlanModel.updateOne({ appKey, name }, { $set: { description: body.description } });
    return { msg: 'ok' };
  } catch (err) {
    console.warn(err);
    return err;
  }
});
