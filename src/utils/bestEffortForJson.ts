import { parse } from 'best-effort-json-parser';

export default function bestEffortForQuickChartJson(jsonStr: string) {

  let result: string = jsonStr;
  let invalidJson = false;
  try {
    JSON.parse(jsonStr);
  } catch (e) {
    console.error(e);
    invalidJson = true;
  }

  if (invalidJson) {
    try {
      const json = parse(jsonStr);
      result = JSON.stringify(json);
    } catch (e) {
      console.error(e);
    }
  }

  // check options
  try {
    const temp = JSON.parse(result);
    if (temp?.options) {
      // 检查 options 里是否有空值，有的话就去掉
      Object.keys(temp.options).forEach((key) => {
        if (temp.options[key] === null || temp.options[key] === undefined) {
          delete temp.options[key];
        }
      });
    } else {
      delete temp.options;
    }
    result = JSON.stringify(temp);
  } catch (e) {
    console.error(e);
  }

  return result;

}