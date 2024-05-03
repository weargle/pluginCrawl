const BASE_URL = 'http://cksp.asia:45127/v0/scrape';

const crawlResult = async (param: string) => {

    const result = await fetch(BASE_URL, {
        body: param,
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST'
    });

    return result;

}

export default crawlResult;