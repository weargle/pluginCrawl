const BASE_URL = process.env.BASE_URL || 'http://cksp.asia/v0/scrape';
//const VERCEL_ACCESS_TOKEN = process.env.VERCEL_ACCESS_TOKEN || 'BpP9zOerpJuHRLAfQKONJ5p1'

const crawlResult = async (param: string) => {

    const result = await fetch(BASE_URL, {
        body: param,
        headers: {
            'Authorization': 'Bearer ${process.env.VERCEL_ACCESS_TOKEN}',
            'Content-Type': 'application/json'
        },
        method: 'POST'
    });

    return result;

}

export default crawlResult;