import { PluginErrorType, createErrorResponse } from "@lobehub/chat-plugin-sdk";


export const config = {
    runtime: 'edge',
  };


export default async (req:Request) => {
    if (req.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

    const body = await req.json();

    const param = body.arguments;

    const result = await fetchData("http://47.236.83.54:45127/v0/scrape", {
        body: param,
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST'
    });

    if (result.status === 200) {
        const body = result.body;
        return new Response(body, {
        status: 200,
        });
    } else {
        return new Response('请求参数不对或者服务暂时不可用', {
        status: 500,
        });
    }

    async function fetchData(url: string, options: RequestInit) {
        const result = await fetch(url, options);
        return result.json();
    }
}