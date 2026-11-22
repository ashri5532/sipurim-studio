# סיפורים של אחים — production playbook

The automated "producer" reads this file at the start of every run. Owner: Ashri (Hebrew speaker, wants blunt answers, approves every post).
Channel: TikTok **@sipurim.shel.achim** ("סיפורים של אחים 🔑"), YouTube **@sipurimshelachim** (same name).

## Hard rules
1. **Nothing is published without Ashri's explicit approval in the current run** ("מאשר", "תעלה", "יאלה" about THIS video). The request that started the run is not approval.
2. Fiction only, always tagged `#סיפור`; YouTube description says "סיפור בדיוני". No real people, no fake news, no fake scarcity.
3. No gambling / Polymarket / betting / bot promotion of any kind on this channel. The audience includes minors.
4. No real-money actions, no passwords, never delete anything on the channels.
5. Hebrew everywhere the viewer sees. Keep messages to Ashri short.

## What works (measured, update as data comes in — see `state/log.md`)
- Standalone stories with a **1/2 dilemma** at the end beat everything else. ~55–65s is the sweet spot.
- **Interactive series**: episode ends with a vote "1 = … / 2 = … — הרוב בתגובות קובע את פרק הבא". The next episode MUST open with "X% מכם בחרתם…" (count the votes from comments). Sequels without that opening did 3–5x worse.
- Hooks that win in this market: "בעולם הזה / בעיר הזו [חוק מוזר]…", choose-your-own-adventure, "52% מכם בחרו…".
- Explainers/news-style videos were weak. Shares are our weak point → always include a "תייגו את החבר ש…" beat.
- End sequence: vote card → "תייגו…" → "+ עקבו כדי לא לפספס את פרק X".
- **Weekly analyst 2026-11-22 (TikTok, 10 videos, 11-09→11-18):**
  - Top 4 are ALL standalone "מה אם / בעולם הזה" supernatural-rule premises at 60–70s: money-above-head 41K, shelter 34K, lies-above-head 26K, own-voice-calls 23K. Realistic drama (redlight 2.9K, mikolet 4.9K) and part 2s (8.3K, 1.6K) are the bottom. → Default to a magical-rule premise; realistic/family stories are the exception, not the rotation.
  - Sequels lose 60–90% of ep1's audience even with "X% מכם בחרתם". Series = max 2 episodes, and only after an ep1 that beat 20K.
  - The 1/2 vote at the end is what drives comments (140–235 per video vs 13–15 without). Keep it on every video.
  - Explainer "כל ישראל לבנק" (102s) did 16.5K with the most shares (42) — not weak after all; one per week is fine.
  - Views dropped after 11-17 (host האח + realistic topics) and nothing was posted 11-19→11-21. A gap of days hurts more than an average video — post daily.
  - YouTube: 3 shorts, 1.0–1.4K each, 7 subs. Too small to conclude anything.

## Variety — Ashri wants NEW things, not the same video every day
Rotate formats; never the same format two days in a row (check state/log.md). Keep the 1/2 vote ending in all of them.
1. **"בעולם הזה…"** — one weird rule changes society (everyone gets their lifetime money at 18, lies show on your forehead, you can see how many days someone has left…).
2. **Interactive series** — episode N, audience decides episode N+1 (only one open series at a time).
3. **Street / crime / police drama** — fictional, tense, twist ending (Ashri asked for these).
4. **Emotional family story** — parents, siblings, grandpa; quiet twist.
5. **"מה היית עושה?" rapid dilemma** — 3 fast dilemmas in one video, each 1/2, last one the hardest.
6. **POV / second person thriller** — "אתה מתעורר ב…", "קיבלת הודעה מ…".
7. **Experiment:** one new format per week that we have not tried (from outlier research). Label it in log.md as an experiment so the analyst can judge it.
Also vary: setting (army, school, work, abroad, wedding, hospital), characters, color palette of the cover, music (soft/noir). New visual props are welcome — add helpers to the episode's scenes.js.

## Pipeline (one video ≈ 25 vidIQ credits)
Work in a copy of this repo. Episode folder: `episodes/<slug>/`.
0. **What is happening in the world (every run, ~5 min):** WebSearch for today's Israel + world news and what people are talking about (economy, prices, tech/AI, army/reserves, sports, viral stories), plus `vidiq_tiktok_trending_sound_search`/outlier search for formats trending this week. Pick ONE current theme people already feel and turn it into a FICTIONAL story or "בעולם הזה" premise (e.g. prices up → "בעולם הזה המשכורת שלך יורדת כל חודש"). Never use real people's names, never mock tragedies, terror attacks, war casualties or hostages, never present fiction as news. Say in the message to Ashri which trend inspired the video.
1. **Research (cheap):** `vidiq_tiktok_profile_videos` on our account (last 10 videos: views, likes, comments, shares) + one `vidiq_instagram_tiktok_outlier_search` for a format idea. Check `state/series.json` for an open interactive series: if a vote is open and ≥18h old, read the comments (`vidiq_tiktok_comment_list`), count 1 vs 2 and make the next episode.
2. **Script:** ~600–750 Hebrew characters, second person ("אתה"), short sentences, numbers written as WORDS (TTS reads "₪4,000" badly). Ends with the 1/2 choice + "הרוב בתגובות קובע מה קורה בפרק הבא".
3. **Voice:** `vidiq_voiceover_generate` voice `onwK4e9ZLuTAKqWW03F9`, output url_and_audio. Save as `episodes/<slug>/vo.mp3` (download the returned URL with curl; if the shell can't reach it, decode the base64 audio from the tool result). Never regenerate for a tiny wording issue — credits are limited (~1,150, renew on the 2nd of the month).
4. **Timing:** `python3 tools/align.py episodes/<slug>/vo.mp3` → speech segments. Map segments to sentences → `CH` in `timeline.js` (sentence, start, end in VO time).
5. **Scenes:** write `episodes/<slug>/scenes.js` (object `SC` of scene functions `(t,d)` drawing on canvas `X`, 1080x1920) using `engine/lib2.js` helpers: `person(x,y,s,opts,t)` (opts: shirt, skin, hair, ex: shock|worried|angry|smile, long, bald, walk, sweat, armL/armR, itemL/itemR), `sky, stars, city, bank, atm, bill, moneyPile, house, car, shop, phoneBig, waBubble, clockBadge, bar, pill, bigText, tag, glow, rr, E/EIO/L, R/SEED`. Read `episodes/money-ep1/scenes.js` as the reference for style and pacing.
   - Scene 1 MUST be `cover`, 0 → ~3s: bold full-screen cover (rays background, huge Heebo 900 text with black stroke, shocked character, props). This first frame IS the TikTok cover when posting through the API — keep all text between y=240 and y=1680 (profile grid crops to 3:4).
   - New visual every 2–5s. Elements animate in with the VO (numbers appear when they are said).
6. **Timeline:** `episodes/<slug>/timeline.js` defines `OFF=0.3`, `TL=[[scene,start],…]` (VO time), `END`, `CH`, `CAP_END` (stop captions before the end cards).
7. **SFX:** `episodes/<slug>/sfx.json` (video time = VO time + 0.3), then `python3 tools/sfx.py episodes/<slug>/sfx.json`. Whoosh ~0.1s before every scene change; coin/ding/boom on money moments.
8. **Preview first:** `bash tools/preview.sh <slug> 1 8 20 35 45 55` and LOOK at `preview.jpg` (Hebrew order, text clipped, overlaps, empty frames). Fix, re-preview.
9. **Build:** `bash tools/build.sh <slug> <END+0.3> soft|noir` → `episodes/<slug>/final.mp4` (<10MB, 0 black segments expected).
10. **Send to Ashri** with `SendUserFile` + `SendUserMessage`: the video, the caption, recommended time (13:00 or 20:00 Israel). Ask "מאשר?". Then WAIT for his reply in this session. Apply requested fixes and resend.
11. **Publish on approval:**
    - Commit `final.mp4` to `media/<date>-<slug>.mp4` in this repo and push (public repo → raw URL `https://raw.githubusercontent.com/<owner>/sipurim-studio/main/media/<file>`).
    - `vidiq_video_upload` with that URL → uploadId.
    - `vidiq_social_account_list` → platformAccountIds. `vidiq_social_post_draft_create` with destinations TIKTOK (privacyLevel PUBLIC_TO_EVERYONE, allowComment true, musicUsageConfirmed true — Ashri's standing choices) and YOUTUBE (title ≤100 chars ending `#shorts`, description with "סיפור בדיוני", privacyStatus public, tags). Show the draft summary, then `vidiq_social_post_publish` with the revision, then `vidiq_social_post_status` until done. Send Ashri both links + the first comment to pin from his phone ("1 או 2? הרוב קובע את פרק 2 👀").
    - Update `state/series.json` and append to `state/log.md`, commit, push.

## Caption formula
TikTok: `<hook sentence> 💰 1 = …, 2 = …. הרוב בתגובות קובע את פרק X 👇 #סיפור #בעולםהזה #ישראל #פרקX #fyp #storytime`
YouTube title: `<hook> <emoji> מה אתה עושה? #shorts`

## Weekly analyst (Sundays)
Pull last 14 days from both platforms, table per video (views, likes, comments, shares, follows if available, length, format). Say in ≤10 Hebrew lines: what worked, what didn't, one change for next week. Append findings to "What works" above and to `state/log.md`, commit, push. Report only — never publish.
