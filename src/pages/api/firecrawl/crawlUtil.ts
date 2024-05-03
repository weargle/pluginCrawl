const BASE_URL = process.env.BASE_URL || 'http://cksp.asia:45127/v0/scrape';
const VERCEL_ACCESS_TOKEN = process.env.VERCEL_ACCESS_TOKEN || 'BpP9zOerpJuHRLAfQKONJ5p1'

const crawlResult = async (param: string) => {

    const result = await fetch(BASE_URL, {
        body: param,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + VERCEL_ACCESS_TOKEN
        },
        method: 'POST'
    });

    return result;

}

export default crawlResult;