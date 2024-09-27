import { PlanModel } from '~/server/models/plan.model';

export default defineEventHandler(async (event) => {
  const appKey = event.context.params?.appKey;
  const name = event.context.params?.name;
  try {
    const res = await PlanModel.findOne({ appKey, name }, { id: 1, name: 1, description: 1 });
    console.log('getOne', res);
    return res;
  } catch (err) {
    console.warn(err);
    return err;
  }
});
