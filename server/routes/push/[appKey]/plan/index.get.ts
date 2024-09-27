import { PlanModel } from '~/server/models/plan.model';

export default defineEventHandler(async (event) => {
  const appKey = event.context.params?.appKey;
  const query = getQuery(event);
  try {
    const { pageIndex, pageSize } = query;
    const _query = { $regex: new RegExp(query.query as string, 'i') };
    // 在多个字段间查询
    const _or = query.query ? { $or: [{ name: _query }, { description: _query }] } : undefined;
    const res = await PlanModel.find(
      { appKey, ..._or },
      { id: 1, name: 1, description: 1, push_counts: 1, create_time: 1, lastused_time: 1 }
    )
      .sort({ create_time: 'desc' }) // 降序
      .skip(((pageIndex as number) - 1) * (pageSize as number)) // 分页开始index
      .limit(pageSize as number);
    const total = await PlanModel.countDocuments({ appKey, ..._or });
    return { total, list: res };
  } catch (err) {
    console.warn(err);
    return err;
  }
});
