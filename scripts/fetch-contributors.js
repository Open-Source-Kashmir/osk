// Node 18+ recommended (uses global fetch). Writes src/data/contributors.json
import fs from "fs";
import path from "path";
import contributors from "../data/contributors.json";

const OWNER = "Open-Source-Kashmir";
const REPO = "osk";
const OUT = path.resolve(process.cwd(), "src", "data", "contributors.json");
const TOKEN = process.env.GITHUB_TOKEN;
if (!TOKEN) {
  console.error("Error: set GITHUB_TOKEN environment variable before running.");
  process.exit(1);
}

async function fetchPage(page = 1) {
  const url = `https://api.github.com/repos/${OWNER}/${REPO}/pulls?state=closed&per_page=100&page=${page}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `token ${TOKEN}`,
      "User-Agent": "osk-fetch-script",
      Accept: "application/vnd.github+json",
    },
  });
  if (!res.ok) throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
  return res.json();
}

async function fetchAllClosedPRs() {
  let page = 1;
  const all = [];
  while (true) {
    const data = await fetchPage(page);
    if (!data || data.length === 0) break;
    all.push(...data);
    if (data.length < 100) break;
    page += 1;
  }
  return all;
}

function aggregateAuthors(prs) {
  const map = new Map();
  for (const pr of prs) {
    const user = pr.user;
    if (!user) continue;
    const login = user.login;
    const item = map.get(login) || { login, avatar: user.avatar_url, url: user.html_url, contributions: 0 };
    item.contributions += 1;
    map.set(login, item);
  }
  return Array.from(map.values()).sort((a, b) => b.contributions - a.contributions);
}

(async () => {
  try {
    console.log("Fetching closed PRs...");
    const prs = await fetchAllClosedPRs();
    console.log(`Fetched ${prs.length} PRs`);
    const authors = aggregateAuthors(prs);
    fs.mkdirSync(path.dirname(OUT), { recursive: true });
    fs.writeFileSync(OUT, JSON.stringify(authors, null, 2), "utf8");
    console.log("Wrote", OUT);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
