import * as fs from 'fs';

export default defineEventHandler(async (event) => {
  try {
    const body = await readFormData(event);
    await saveFile(body.get('file') as File);
    return { msg: 'ok' };
  } catch (err) {
    console.warn(err);
    return err;
  }
});

async function saveFile(file: File) {
  console.log(file);
  const date = new Date().toISOString().split('T')[0];
  const fileNameArr = file.name.split('.');
  const fileExt = fileNameArr.pop();
  // 保存到当前项目根路径（本地）；根据实际需求处理即可，一般会上传到oss等
  const filePath = `./upload/${date}/${fileNameArr.join('.')}.${fileExt}`;
  try {
    if (!fs.existsSync(`./upload/${date}`)) fs.mkdirSync(`./upload/${date}`, { recursive: true });
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

    fs.writeFileSync(filePath, new Uint8Array(await file.arrayBuffer()), {
      encoding: 'utf8',
      flush: true
    });
    console.log('保存成功', filePath, '\n');
  } catch (err) {
    console.error(err);
  }
}
