import { PlanModel } from '~/server/models/plan.model';

export default defineEventHandler(async (event) => {
  const appKey = event.context.params?.appKey;
  console.log('appKey:', appKey);
  const body = await readBody(event);
  console.log('body:', body);
  try {
    const res = await PlanModel.updateOne(
      { appKey, name: body.name },
      { appKey, ...body, create_time: Math.floor(Date.now() / 1000) },
      { upsert: true }
    );
    if (res.matchedCount) {
      setResponseStatus(event, 400);
      return { code: 4001, msg: `name:${body.name}已存在` };
    }
    return { msg: 'ok' };
    // const res = await PlanModel.findOne({ appKey, name: body.name });
    // if (res) {
    //   setResponseStatus(event, 400);
    //   return { code: 4001, msg: `name:${body.name}已存在` };
    // }
    // await new PlanModel({ appKey, ...body, create_time: Math.floor(Date.now() / 1000) }).save();
    // return { msg: 'ok' };
  } catch (err: any) {
    return { code: 400, msg: err.message };
  }
});
