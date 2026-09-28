# Portfolio analytics

Provider: Plausible. The site-specific script is public installation code, not an API credential. No private dashboard credentials are stored in this repository.

## Dashboard setup

Sign in to Plausible and open `bobo1529707515.github.io`. Keep the dashboard private; do not create a public share link. Under Settings → Goals, add these **custom event** names exactly (or use the option to add received events when available):

| Event | Meaning / 中文 |
| --- | --- |
| Section view | A section entered the central viewport for about a second / 板块进入视野 |
| Project open | Project or hardware detail opened / 打开详情 |
| Project engaged | Detail reached 15, 30, 60 or 120 active seconds / 详情停留阈值 |
| Project duration | Approximate active duration when detail closes / 详情停留时长 |
| Link click | CV, email, code, study, paper or other link click / 链接点击 |
| Image enlarge | Figure zoom control / 图片放大 |
| Language change | Switch between English and Chinese / 语言切换 |

Properties: `target` identifies the section/project/link category; `seconds` and `bucket` describe timing; `language` is en/zh. Property breakdown availability depends on the Plausible subscription. Goals must be configured before relying on their dashboard counts; received events alone do not guarantee that goals appear automatically.

Timing milestones are cumulative: someone reaching 60 seconds also reaches 15 and 30 seconds. Do not add milestone counts together as separate visitors. Duration events can be lost if a browser is force-closed or offline. Time is estimated from foreground visibility/focus, capped after 60 seconds without scrolling, tapping or keyboard activity. It is not evidence of attentive reading. Section views are counted once per page load, not every scroll past a section. CV clicks do not prove download completion; email clicks do not prove that an email was sent.

## Privacy and owner exclusion

The tracker runs only on the production hostname. No tracking cookies, persistent visitor IDs, form contents, email addresses or full outgoing URLs are sent by the custom layer. The provider processes network metadata but states that it does not store raw IP addresses. The local-storage key `plausible_ignore` stores only this browser's opt-out preference. Do Not Track and Global Privacy Control disable initialization. Blocking local storage also disables analytics.

Bookmark `https://bobo1529707515.github.io/?analytics=off` in each browser/device used for your own reviews, or use the footer privacy control. This cannot automatically exclude your other browsers or devices. To enable again, use the footer control. No adblock bypass or fingerprinting is implemented.

URLs are normalized to the homepage. Only generic `utm_source` values `email`, `linkedin`, `github`, `wechat`, `rednote`, and `application` are retained. Do not put recipient names or email addresses into tracking parameters. Referrers are reduced to their origin, without path or query. There is no per-professor or cross-day identity tracking.

## Verification

The initial HTML head contains the provider script and privacy-aware initialization; basic pageviews do not wait for React hydration or window focus. The public provider JavaScript may be downloaded even when tracking is disabled, but it is not initialized and no analytics events are sent in that case. React attaches custom interactions only and does not emit another pageview.

Run `node --test scripts/test-analytics.mjs` and `npm run build:github`. Tests use a simulated clock and mocked event receiver, not fabricated production visits. Then check installation and actual events in the authenticated Plausible dashboard. An HTTP success response from a collector is not proof that events appear in the private dashboard.
