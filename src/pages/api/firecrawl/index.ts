import { PluginErrorType, createErrorResponse } from "@lobehub/chat-plugin-sdk";
import crawlResult from "./crawlUtil";


export const config = {
    runtime: 'edge',
  };

  export default async (req:Request) => {
    if (req.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

    const body = await req.json();

    const param = body.arguments;

    const result = await crawlResult(param);

    if (result.status === 200) {
        const body = result.body;
        return new Response(body, {
            status: 200,
        });
    } else {
        return new Response(result.body, {
            status: result.status,
        });
    }
  }