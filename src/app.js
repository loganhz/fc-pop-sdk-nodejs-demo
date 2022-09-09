const {
  default: Client,
  ListFunctionsHeaders,
  ListFunctionsRequest,
} = require("@alicloud/fc-open20210406");
const { Config } = require("@alicloud/openapi-client");
const { RuntimeOptions } = require("@alicloud/tea-util");
const runtime = new RuntimeOptions({});

const ACCOUNT_ID = "YOUR_ID";
const REGION_ID = "cn-hangzhou";
const AK = "YOUR_AK";
const SK = "YOUR_SK";

async function listFunctionsApi() {
  const config = new Config({
    accessKeyId: AK,
    accessKeySecret: SK,
    endpoint: `${ACCOUNT_ID}.${REGION_ID}.fc.aliyuncs.com`,
    readTimeout: 10000000,
    connectTimeout: 10000000,
  });
  client = new Client(config);

  let listFunctionsHeaders = new ListFunctionsHeaders({});

  let listFunctionsRequest = new ListFunctionsRequest({});

  try {
    const result = await client.listFunctionsWithOptions(
      "weapp",
      listFunctionsRequest,
      listFunctionsHeaders,
      runtime
    );
    console.log(JSON.stringify(result.body.functions));
  } catch (e) {
    console.error(e);
  }
}

listFunctionsApi();
