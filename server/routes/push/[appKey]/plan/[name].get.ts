import { PlanModel } from '~/server/models/plan.model';

export default defineEventHandler(async (event) => {
  const appKey = event.context.params?.appKey;
  const name = event.context.params?.name;
  try {
    const res = await PlanModel.findOne({ appKey, name }, { id: 1, name: 1, description: 1 });
    if (!res) {
      setResponseStatus(event, 404);
      return { code: 4004, msg: 'Not Found' };
    }
    console.log('getOne', res);
    return res;
  } catch (err) {
    console.warn(err);
    return err;
  }
});
