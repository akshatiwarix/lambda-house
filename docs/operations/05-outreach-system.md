# Outreach system

Fifty first contacts, reached through public channels, tracked privately, and
followed up exactly once.

## Privacy rules for outreach

- Use public profiles, public posts, and official contact forms only.
- Never scrape or store private phone numbers or private email addresses.
- Never mass-message another community's member list or bypass its rules.
- Store only what relates to community participation.
- Real contact records live in the private spreadsheet, **never in this
  repository**. `templates/contact-tracker.csv` ships with headers only.

## Contact tracker

`templates/contact-tracker.csv`

    contact_id,name,source,category,public_profile_url,contacted_on,message_type,status,follow_up_on,tech_interests,notes,consent_to_future_contact

Allowed `status` values:

    identified, contacted, replied, interested, joined, rsvped, declined, no_response, do_not_contact

## The first fifty

| Category | Count | Where they come from |
| --- | --- | --- |
| Kanpur individuals | 15 | Public LinkedIn profiles across software, design, hardware, gaming, research, product, cybersecurity, and data |
| Reddit | 10 | People in public threads who have asked for local tech connections or meetups |
| Existing organizers | 10 | GDG Kanpur, AWS User Group Kanpur, KanpurAI, Flutter Kanpur, FOSS groups, other active public groups |
| College clubs | 10 | IIT Kanpur, HBTU, CSJMU, PSIT, and other Kanpur institutions |
| Venues and coworking | 5 | Possible hosts and partners |

## Order of contact

Day two, in this order:

1. Existing organizers — they set the tone for whether Lambda House is seen as
   a complement or a competitor.
2. People who publicly asked for local tech connections — highest intent.
3. College clubs.
4. Broad LinkedIn profiles.
5. Venue partners.

Personalise the first sentence of every message using something the person has
actually published. Do not invent familiarity.

## Follow-up

- Exactly **one** follow-up, 48–72 hours after the first message.
- No follow-up after a no, a do-not-contact, or a clear lack of fit.
- Move interested people to the joining or RSVP form rather than collecting
  details in DMs.
- Record the outcome immediately after each conversation.

## Attendance tracker

`templates/event-attendance.csv`

    event_id,event_date,display_name,age_range,rsvp_status,attended,tech_interest,photo_preference,first_event,follow_up_sent,returned_later,notes

Keep private. Delete event-specific personal data 30 days after the event unless
the person separately joined the community.

## Validation before sending

- [ ] All 50 entries have a public source URL.
- [ ] All 50 have a real, specific reason for being contacted.
- [ ] No private scraped contact details anywhere in the file.
- [ ] Ten entries spot-checked for truthful personalisation.
- [ ] Every subreddit and club channel checked against its own posting rules.

## Funnel report

Report these numbers, and do not treat registrations as attendance:

- Messages sent
- Replies
- Join-form responses
- WhatsApp members
- Yes and probably RSVPs
- Confirmed attendees
- Accessibility requests
- Spend committed

## Launch schedule

### August 23 — foundation

- [x] Blueprint and plans locked.
- [x] Handle, domain, and project names chosen.
- [ ] Venue comparison started.
- [ ] No incomplete links published.

### August 24 — external and digital setup

- [ ] Google Form, Luma calendar, Instagram, reporting contact created.
- [ ] WhatsApp group and announcement channel created.
- [ ] Website built to preview quality.
- [ ] Signed-out access to both registration links verified.
- [ ] 50-contact list prepared.

### August 25 — public launch

- [ ] Akshat approves and publishes the founding post.
- [ ] 20 personal messages sent.
- [ ] Existing organizers contacted.
- [ ] Same-day personal replies to everyone who responds.

### August 26 — second wave

- [ ] 20–30 further messages sent.
- [ ] College clubs contacted.
- [ ] Approved respondents invited into WhatsApp.
- [ ] Welcome message posted.
- [ ] One real conversation started: "What technology are you curious about
      right now?"

### August 27 — event completion

- [ ] Venue confirmed.
- [ ] Website and Luma event updated with the exact venue.
- [ ] Complete event listing published.
- [ ] RSVP invitation sent.
- [ ] Early members asked to invite one tech-curious person each.

### August 28–31 — relationship work

- [ ] Every interested person replied to personally.
- [ ] Shared only where moderators permit.
- [ ] Introductions made on shared interests.
- [ ] No daily promotional posts.
- [ ] Registrations tracked without repeated chasing.

### September 1–3 — confirmation

- [ ] Yes and probably counts reviewed.
- [ ] One personal confirmation sent.
- [ ] Venue and accessibility questions resolved.
- [ ] Tentative build-session date chosen.

### September 4–5 — freeze

- [ ] Final practical reminder sent.
- [ ] Venue and two adult organizers reconfirmed.
- [ ] Non-essential website and brand edits frozen.
- [ ] Event materials printed or downloaded.
- [ ] Photography preferences checked.
