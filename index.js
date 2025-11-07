import * as core from "@actions/core";
import * as github from "@actions/github";

async function run() {
    try {
        const token = process.env.GITHUB_TOKEN;
        if (!token) throw new Error("GITHUB_TOKEN not found.");

        const type = core.getInput("type");

        const { context } = github;
        const octokit = github.getOctokit(token);
        const pr = context.payload.pull_request;

        if (!pr) {
            core.warning("No pull request detected. Ignoring...");
            return;
        }

        const gifs = {
            Approved: "![Approved](https://c.tenor.com/lztbLMEBDs4AAAAd/tenor.gif)",
            No: "![No](https://c.tenor.com/SBuw9Y2RqZgAAAAd/tenor.gif)",
            IDK: "![IDK](https://c.tenor.com/biVuqHS9zigAAAAd/tenor.gif)"
        };

        if (!(type in gifs)) {
            throw new Error("Invalid type, type must be `Approved`, `IDK` or `No`");
        }

        await octokit.rest.issues.createComment({
            owner: context.repo.owner,
            repo: context.repo.repo,
            issue_number: pr.number,
            body: gifs[type],
        });
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();