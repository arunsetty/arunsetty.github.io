# TODO

Things to revisit once Ephemeral Thoughts has ~20 essays.

## Pick one or both: feedback layer

The site has no signal back from readers right now. Pick a layer once writing has enough volume to make the data meaningful.

- **Analytics** (recommended first) — Plausible (self-hosted or paid) or Cloudflare Web Analytics. Tells me which essays land, where readers come from, whether RSS has subscribers. Single script tag, no cookies. Lower emotional load than comments.
- **Comments** via [Giscus](https://giscus.app) — backed by GitHub Discussions. Turns each essay into a conversation. Higher engagement but I'll feel obliged to respond, so weigh against writing time.

## Lean into `/log`

The log section (movies, shows, anime, books, games with episode-level notes) is a unique surface — almost no personal site has it. Worth filling out and polishing the UX once writing cadence is established. Possible directions:

- Filter UI by type / status / rating
- Year-in-review aggregations
- Pulling cover art automatically from TMDB / Open Library / IGDB
- Linking related entries (rewatches, sequels)

## Other small ideas

- Tag/category index pages for thoughts (`/thoughts/tag/<name>`) — useful around 20+ essays
- Table of contents on long essays
- Backlinks between essays (wiki-feel)
- Custom domain instead of `arunsetty.github.io`

## Housekeeping (do anytime)

- Rotate the GitHub PAT that leaked into the `origin` URL during a `git remote -v` in May 2026. Switch to SSH or `gh auth login`.
