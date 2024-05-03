import { PluginErrorType, createErrorResponse } from "@lobehub/chat-plugin-sdk";


export const config = {
    runtime: 'edge',
  };

export default async (req:Request) => {
    if (req.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

    const body = await req.json();

    const param = body.arguments;

    const result = await fetch("http://47.236.83.54:45127/v0/scrape", {
        body: param,
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST'
    });

    console.log(result);


    const resBody = await result.body;
    return new Response(resBody, {
        status: 200,
    });

}