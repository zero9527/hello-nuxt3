import { PlanModel } from '~/server/models/plan.model';

export default defineEventHandler(async (event) => {
  const appKey = event.context.params?.appKey;
  const name = event.context.params?.name;
  try {
    await PlanModel.deleteOne({ appKey, name });
  } catch (err) {
    console.warn(err);
    return err;
  }
});
