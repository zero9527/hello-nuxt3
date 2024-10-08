import { PlanModel } from '~/server/models/plan.model';

export default defineEventHandler(async (event) => {
  const appKey = event.context.params?.appKey;
  const name = event.context.params?.name;
  const body = await readBody(event);
  console.log('appKey: %s, name: %s, body: %o', appKey, name, body);
  try {
    const res = await PlanModel.findOneAndUpdate(
      { appKey, name },
      { $set: { description: body.description } }
    );
    if (!res) {
      setResponseStatus(event, 404);
      return { code: 4004, msg: 'Not Found' };
    }
    return { msg: 'ok' };
  } catch (err) {
    console.warn(err);
    return err;
  }
});
