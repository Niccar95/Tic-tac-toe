import { get } from "./serviceBase";

export const getActivities = async (): Promise<string> => {
  const url = "http://www.boredapi.com/api/activity/";

  const data = await get<{ activity: string }>(url);
  return data.activity;
};
