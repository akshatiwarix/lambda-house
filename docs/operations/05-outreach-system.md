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

## Which channel does what

Broadcast does not fill a first event. With no followers, no track record, and
no social proof, a post reaches nobody and a new account posting its own event
reads as spam. What fills a first room is direct personal invitation.

The risk is that posting *feels* like progress while sending twenty individual
messages feels like work. It is the other way round.

| Channel | Worth for the first meetup | What it is actually for |
| --- | --- | --- |
| Personal messages and DMs | Highest | This is what fills the room |
| Existing Kanpur organizers | High | Borrowed trust; one yes reaches hundreds |
| College clubs | High | Volume, but needs a gatekeeper's yes first |
| Reddit | Medium | Only after genuine participation in the subreddit |
| Personal LinkedIn | Medium | Working professionals, not students |
| Instagram | Near zero | Documentation, so the *second* meetup is easier |
| The website | Converts, does not acquire | Where every message points |
| Luma discovery | Small | A passive trickle, free |

Instagram is not an acquisition channel at zero followers. Post there to build
proof after the event, not to fill it.

### One ask per message

There are three destinations and they are not interchangeable. Two asks in one
message roughly halves the response to both.

| Ask for | When |
| --- | --- |
| Luma RSVP | The person is deciding about 6 September. This is the headcount. |
| WhatsApp Community | Interested, but the date does not work |
| Google Form | They do not want to hand a phone number to a group chat |

Link the website in every message regardless. It is what makes this look real.

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

### What to expect

Free events no-show heavily, and a first event from an unknown organizer
attracts the softest commitments of all. Plan for half the yes list not to
arrive.

| Stage | Realistic for meetup #1 |
| --- | --- |
| Personal messages sent | 50–80 |
| Replies | 15–25 |
| Luma RSVPs | 20–30 |
| **People in the room** | **8–15** |

**Eight to fifteen is a success.** A packed conversation of ten beats a
scattered thirty, and the kind of venue this needs cannot seat thirty anyway.
Set the Luma capacity to what the room actually holds, and treat the number as
a ceiling rather than a target.

## Do not

- Announce a venue that is not booked.
- Buy advertising. Trust for a first meetup is not purchasable.
- Mass-message, scrape, or post into a community without its organizer's
  permission.
- Post daily. Nothing reads as more desperate than a new community posting
  every day to an audience that is not there yet.
- Report attendance as anything other than the exact number who came.

## Launch schedule

Rewritten 2026-08-23 against what is actually built. The event is **Sunday 6
September**, which is fourteen days out.

Where the original plan assumed a week of setup before launch, most of the
setup finished in a day. The website is not at preview quality, it is in
production on its own domain. What is behind is the venue, and outreach has not
started.

### Done, 2026-08-23

- [x] Blueprint and plans locked.
- [x] Handle, domain, and project names chosen.
- [x] GitHub repository, CI, and Vercel deployment from `main`.
- [x] Website live in production at https://www.thelambdahouse.com, with the
      apex redirecting to it and a valid certificate.
- [x] WhatsApp Community created; its invite link published on the site by
      explicit decision.
- [x] Luma event created, public, and linked from the meetup badge.
- [x] Google Form created and linked from the homepage as the quieter second
      way in.
- [x] Conduct and privacy pages published.
- [x] No incomplete or placeholder links published.

### Outstanding and blocking: the venue

Everything public depends on it. The Luma page currently reads
`Kanpur · venue confirmation in progress`, and that line suppresses RSVPs on its
own: people do not commit a Sunday afternoon to an unnamed location, least of
all to a first event from a group they have not heard of.

Publicising before the venue is booked spends the one launch moment on a page
that cannot convert. The exception is organizer outreach, which is relationship
work rather than an RSVP ask and can start immediately.

### August 24, Monday — unblock

- [ ] Venue shortlist called or visited. A café with a back section that can
      hold 15 is enough. Ask for the 4:00–6:00 PM Sunday window, offer to
      pre-order, get the name in writing.
- [ ] Consent checkbox added to the join form, linking `/conduct` and
      `/privacy`. The privacy page already states members agree to both, and
      the homepage now sends people to that form, so this gap is live.
- [ ] "How would you like to take part?" switched to checkboxes.
- [ ] Instagram confirmed public and reachable. The footer links it already.
- [ ] WhatsApp group and announcement channel created inside the Community.
- [ ] 50-contact list prepared, every row with a public source URL.

### August 25, Tuesday — venue, then organizers

- [ ] Venue confirmed and paid for or reserved.
- [ ] Luma location and `src/content/community.ts` updated with the exact
      address. Redeploy.
- [ ] Existing Kanpur organizers contacted: GDG Kanpur, AWS User Group Kanpur,
      KanpurAI, Flutter Kanpur, active FOSS groups. Frame Lambda House as
      complementary rather than competing, and **ask permission before posting
      in any group they run**. One yes reaches more people than a week of cold
      messages; one perceived land-grab closes several doors at once.

### August 26, Wednesday — public launch

- [ ] Founding post published.
- [ ] 20 personal messages sent, first sentence of each personalised from
      something the person actually published.
- [ ] Same-day personal replies to everyone who responds.

### August 27, Thursday — colleges

- [ ] 20–30 further messages.
- [ ] Club coordinators at HBTU, CSJMU, PSIT, and IIT Kanpur contacted.
      Weight the city colleges over IIT Kanpur: it is larger but physically
      distant and fairly self-contained, and its students are less likely to
      travel in on a Sunday.

### August 28, Friday — Reddit and LinkedIn

- [ ] Posted only where the subreddit's own self-promotion rules allow it, and
      only after commenting usefully in a few existing threads. A new account
      whose first post is its own event reads as spam and is removed as spam.
- [ ] Personal LinkedIn post.

### August 29–31 — conversion, not acquisition

- [ ] Every interested person replied to personally.
- [ ] Approved respondents invited into WhatsApp and welcomed.
- [ ] One real conversation started: "What technology are you curious about
      right now?"
- [ ] **Every confirmed person asked to bring one tech-curious friend.** This
      is the highest-leverage action in the whole schedule. People arrive at
      unfamiliar rooms in pairs.
- [ ] No daily promotional posts.

### September 1–3 — confirmation

- [ ] Yes and probably counts reviewed against the room's real capacity.
- [ ] One personal confirmation sent to each.
- [ ] Accessibility questions resolved.
- [ ] Tentative build-session date chosen, to offer on the day.

### September 4–5 — freeze

- [ ] Final practical reminder: exact address, a landmark, what to expect, and
      a phone number to reach on the day.
- [ ] Venue and two adult organizers reconfirmed.
- [ ] Non-essential website and brand edits frozen.
- [ ] Event materials printed or downloaded.
- [ ] Photography preferences checked against the Luma responses.
- [ ] No new outreach.

### September 6 — the event

### September 7–8 — the part that compounds

The first meetup's real product is the second one.

- [ ] Photographs posted within 48 hours, honouring every recorded preference.
- [ ] Every attendee messaged individually.
- [ ] Exact turnout recorded in `09-follow-up-and-metrics.md`.

Ten people who had a genuinely good time and got a personal follow-up will each
bring someone. That loop compounds; posting does not.
