import fs from 'graceful-fs';
import fetch from 'node-fetch';
// import { HttpsProxyAgent }from 'https-proxy-agent';

// const proxyURL = 'username:password@some-socks-proxy.com:9050'
// const agent = new HttpsProxyAgent(proxyURL);

(async () => {
    const gameID = "401628520"

    const sport = "football"

    const sport_type = "college-football"

    const res = await fetch (
    `https://site.web.api.espn.com/apis/site/v2/sports/${sport}/${sport_type}/summary?region=us&lang=en&contentorigin=espn&event=${gameID}`,
  {
    // agent: agent,
    headers: {
        "User-Agent":
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
      accept: "*/*",
      "accept-language": "en-US,en;q=0.9",
      priority: "u=1, i",
      "sec-ch-ua": "\"Chromium\";v=\"130\", \"Google Chrome\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      Referer: "https://www.espn.com/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: null,
    method: "GET",
  }
);

const json = await res.json()
console.log("json", json)
    fs.writeFileSync("test.json", JSON.stringify(json, null, 2))
})();
