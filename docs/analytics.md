# Analytics events

Google Analytics 4. Page views come from `src/PageTracker.js` (`page_view`, once per route). Everything else comes from `src/EventTracker.js`, which listens for clicks on elements that carry a `data-track` attribute and for scrolling. Only the Twilight layout is tracked for clicks and scrolling.

## Add tracking to an element
```jsx
<a href="/projects" data-track="cta_click" data-track-cta="see_all_projects" data-track-location="home_more_work">…</a>
```
`data-track` is the event name. Every `data-track-*` attribute becomes a parameter (`data-track-project-name` is sent as `project_name`). `link_url`, `link_text` (when the text is under 40 characters) and `page_path` are added automatically. `mailto:`, `tel:` and `skype:` links never send their address or number, only `contact_method`.

## Events

| event | when | parameters |
| --- | --- | --- |
| `page_view` | every route | `page_path`, `page_title` |
| `logo_click` | the name and initials mark in the header | `location` |
| `nav_click` | Home, Work, Experience, Certifications, Contact | `item`, `location` (`header`, `tabbar`, `footer`) |
| `resume_download` | Download résumé / Download cv | `location` (`header`, `about`) |
| `cta_click` | See what I've built, Say hello, See all projects, All certifications, Send me a message | `cta`, `location` |
| `project_click` | any project card or row | `project_name`, `project_id`, `project_category`, `location` (`home_featured`, `home_more_work`, `projects_page`) |
| `filter_click` | a Projects tab | `filter` |
| `service_click` | a service under "Where I'm useful" | `service`, `location` |
| `badge_click` | a credential badge | `badge`, `location` (`home_credentials`, `certifications_page`) |
| `social_click` | LinkedIn, GitHub, Kaggle, Credly, Email | `network`, `location` |
| `contact_click` | email, phone, Skype on the Contact page | `contact_label`, `contact_method`, `location` |
| `form_submit` / `form_error` | the contact form sent, or stopped by validation | `form_name` (no field values) |
| `back_to_top_click` | Back to top in the footer | none |
| `scroll_depth` | once per page view at 25, 50, 75, 90, 100 percent of the page | `percent_scrolled`, `page_path` |

All custom events are sent with `transport_type: beacon`, so they are delivered even when the click leaves the page.

## One-time setup in GA4 (needed to report on the parameters)
Events appear in Reports, Realtime and DebugView by themselves. To break them down by a parameter, register it: Admin, Custom definitions, Create custom dimension, scope Event, using the parameter name exactly. Useful ones: `location`, `item`, `cta`, `project_name`, `project_category`, `filter`, `badge`, `network`, `percent_scrolled`, `contact_method`. Data only starts filling in after you create the dimension, and it can take a day to appear in standard reports.
Mark as key events (Admin, Events): `resume_download`, `form_submit`, `project_click`, `contact_click`.

## Testing without polluting real data
In the browser console, replace `window.gtag` with a recorder, then click around:
```js
window.__ev = []; window.gtag = (...a) => window.__ev.push(a);
```
Or open GA4 DebugView with the GA Debugger extension. The parity script (`npm run parity`) blocks analytics hosts.

## Not tracked
Clicks and scrolling in the classic layout (`?theme=ivory` or `?theme=dark`), form field values (never sent).
