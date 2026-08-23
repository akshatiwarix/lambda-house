# Lambda House community launch operations plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Create the operating materials, external community surfaces, outreach system, venue readiness, and event-day process needed to launch Lambda House Kanpur #01 on September 6, 2026.

**Architecture:** Keep community operations deliberately small: one public website, one branded social page, one Google Form for joining, one Luma calendar for event RSVPs, one WhatsApp Community wrapping a conversation group and an announcement channel, and one private tracker. Claude Code creates the documents and templates; Akshat performs external account actions, approves public posts, chooses the venue, controls member data, and hosts the event.

**Tech Stack:** Markdown, CSV, Google Forms, WhatsApp, Instagram, personal LinkedIn, Reddit, Google Sheets or a local spreadsheet, Vercel receipts from the digital plan

**Spec:** docs/specs/lambda-house-community-blueprint.md

## Global constraints

- Public name: Lambda House; descriptor: “A home for people curious about technology.”
- Chapter: Kanpur; chapter mark: λ / KNP.
- First meetup: Sunday, September 6, 2026, 4:00–6:00 PM.
- Membership and independent attendance are open to every age and experience level.
- Keep conversation strictly related to technology.
- No direct WhatsApp invite on the public website.
- No paid advertising for the pilot.
- Initial monthly spend stays within ₹2,000–₹5,000.
- The exact venue is Akshat’s decision.
- At least two adult organizers must be present throughout every event.
- Collect the least personal information possible.
- Never share member information with sponsors, partners, venues, or other members.
- Do not publish identifiable photographs of under-18 attendees by default.
- All public posts, direct messages, external accounts, form publication, group creation, and venue commitments require Akshat’s approval.
- Claude Code must never pretend an external action succeeded. Record the actual URL, screenshot, or confirmation returned by the service.
- Commit each task’s repository materials separately.

## File map

    docs/operations/
    ├── 01-external-resources.md
    ├── 02-form-specifications.md
    ├── 03-whatsapp-setup.md
    ├── 04-launch-copy.md
    ├── 05-outreach-system.md
    ├── 06-conduct-safety-moderation.md
    ├── 07-venue-and-budget.md
    ├── 08-first-event-runbook.md
    ├── 09-follow-up-and-metrics.md
    └── 10-sponsorship-policy.md
    templates/
    ├── contact-tracker.csv
    ├── event-attendance.csv
    ├── incident-log.csv
    └── six-month-dashboard.csv

## External action boundary

Claude Code may draft, organize, validate, and update repository files. Akshat must personally approve or perform:

- Creating Google, Instagram, WhatsApp, GitHub, domain, and Vercel accounts.
- Sending messages or publishing posts.
- Buying a domain or committing money.
- Accepting venue terms.
- Adding or removing real people from WhatsApp.
- Viewing and handling personal form responses.
- Making final moderation, safeguarding, or legal-escalation decisions.

---

### Task 1: External community surfaces and receipt

**Files:**

- Create: docs/operations/01-external-resources.md
- Create: docs/operations/02-form-specifications.md
- Create: docs/operations/03-whatsapp-setup.md

**Interfaces:**

- Produces: exact joining-form URL, RSVP-form URL, social-page URL, Vercel project URL, organizer reporting contact, and WhatsApp administration record
- Consumed by: digital plan Tasks 5–8 and every public message

- [ ] **Step 1: Create the external-resource checklist**

The checklist must record service, exact display name, account owner, public URL, creation date, recovery owner, two-factor authentication status, and whether the URL may be published.

Select handles in this order, using the first available option:

1. joinlambdahouse
2. lambdahousetech
3. lambdahousecommunity

Use Instagram as the single branded social page. Use Akshat’s personal LinkedIn and approved Reddit communities for distribution; do not create duplicate official pages during the pilot.

- [ ] **Step 2: Ask Akshat to create or approve the dedicated contact route**

Use a dedicated email address or another contact Akshat controls for form ownership, conduct reports, privacy requests, and venue communication. Record the exact address only after Akshat supplies it. Do not place a personal phone number on the public website.

- [ ] **Step 3: Specify the joining form**

Title:

    Join Lambda House

Description:

    Lambda House is a home for people curious about technology. The first
    chapter meets in Kanpur, and the online community is open more broadly.
    You do not need to code, work in tech, or prove your experience.
    Curiosity is enough.

Fields:

1. Display name — short answer, required.
2. City — short answer, required.
3. Age range — multiple choice, required: under 13; 13–15; 16–17; 18–24; 25–34; 35+.
4. What parts of technology are you curious about? — paragraph, required.
5. How would you like to take part? — checkboxes: WhatsApp conversation; Kanpur meetups; build sessions; public updates.
6. If you want a WhatsApp invite or direct reminder, what contact should the organizer use? — short answer, optional.
7. I have read and agree to the community rules and privacy notice — checkbox, required, containing direct links to both website pages.

Confirmation message:

    Thanks for joining Lambda House. If you requested a WhatsApp invitation
    or reminder, the organizer will contact you using the detail you shared.
    The first Kanpur tech hangout is Sunday, September 6, 4:00–6:00 PM.

Settings:

- Do not automatically collect email addresses.
- Do not require Google sign-in.
- Do not collect file uploads.
- Do not expose responses to respondents.
- Restrict response-sheet access to Akshat and one designated operator.
- Turn off marketing integrations and add-ons.

- [ ] **Step 4: Specify the RSVP form**

Title:

    RSVP — Lambda House Kanpur #01

Description:

    A relaxed, open tech hangout for anyone curious about technology.
    Sunday, September 6, 2026 · 4:00–6:00 PM · Kanpur · free.

Fields:

1. Display name — short answer, required.
2. Age range — same six choices as the joining form, required.
3. Are you planning to attend? — multiple choice: yes; probably; no, but send me the next date.
4. What technology are you currently curious about? — short answer, required.
5. Is there anything that would make the venue easier for you to use? — paragraph, optional.
6. If you want a reminder, share a phone number or email — short answer, optional.
7. Photography preference — multiple choice: okay to appear in event photographs; ask me each time; do not photograph me.
8. I have read and agree to the event conduct and privacy notice — checkbox, required, with direct links.

Confirmation message:

    Your response is recorded. Venue details and a final practical reminder
    will be shared through the contact route you selected and on the Lambda
    House website. You can still attend without a reminder.

Use the same privacy settings as the joining form.

- [ ] **Step 5: Specify WhatsApp**

Main group name:

    Lambda House · Tech Chat

Main group description:

    A friend-like space for people curious about technology.
    Tech-related conversation only.
    No gatekeeping, spam, unsolicited selling, or uninvited DMs.
    Ask before privately messaging another member.
    Conduct and privacy: use the website links posted by the organizer.

Announcement channel name:

    Lambda House · Announcements

Announcement description:

    Confirmed Lambda House events, practical updates, and policy notices.
    Conversation happens in Lambda House · Tech Chat.

Admin settings:

- Only admins edit group information.
- Only admins post in Announcements.
- At least two trusted admins once a second organizer is confirmed.
- Approve joining requests individually.
- Never post a public invite link.
- Enable two-step verification on admin accounts.

- [ ] **Step 6: Create external surfaces with approval**

Ask Akshat before each account mutation. Akshat creates or authorizes the forms, Instagram page, WhatsApp group, announcement channel, and Vercel project. Record actual URLs and ownership receipts in 01-external-resources.md.

- [ ] **Step 7: Validate the receipt**

Acceptance checks:

- Both forms open in a signed-out browser and submit successfully.
- Conduct and privacy links are correct.
- Form responses arrive only in the private owner sheet.
- Instagram URL opens publicly.
- WhatsApp invite remains absent from public pages.
- Vercel project URL is recorded.
- Reporting contact is controlled by Akshat.
- No dummy URL appears in the receipt.

- [ ] **Step 8: Commit**

    git add docs/operations/01-external-resources.md docs/operations/02-form-specifications.md docs/operations/03-whatsapp-setup.md
    git commit -m "docs: define lambda house external surfaces"

---

### Task 2: Ready-to-send launch copy

**Files:**

- Create: docs/operations/04-launch-copy.md

**Interfaces:**

- Consumes: actual website, RSVP, join, social, conduct, and privacy URLs
- Produces: founder post, individual outreach, organizer outreach, college outreach, venue request, Reddit post, WhatsApp welcome, reminder, and follow-up copy

- [ ] **Step 1: Add the founding post**

Use this first-person draft, replacing only the final links with actual receipt values:

    I’ve spent a lot of time at home wishing I had people in Kanpur I could
    casually talk tech with.

    Not a formal networking room. Not a startup pitch event. Just people who
    can happily discuss tools, products, hardware, AI, games, open source,
    strange technical rabbit holes, or whatever they are currently exploring.

    So I’m starting Lambda House: a home for anyone curious about technology.

    The first Kanpur hangout is on Sunday, September 6, from 4:00–6:00 PM.
    Any age, background, and experience level is welcome. You do not need to
    code or bring a project. Curiosity is enough.

    Read about it and RSVP: use the approved website URL
    Join the community: use the approved joining-form URL

- [ ] **Step 2: Add individual outreach**

    I’m starting Lambda House, a casual tech community in Kanpur for anyone
    who enjoys talking about technology. The first meetup is September 6,
    4:00–6:00 PM. It is deliberately simple: introductions, open tech
    conversation, and a chance to meet people locally. I thought this might
    be relevant to you. Here is the page if you want to see what I’m building:
    use the approved website URL.

- [ ] **Step 3: Add existing-organizer outreach**

    I’m starting Lambda House, a cross-domain social tech community in Kanpur.
    I’m not trying to replace subject-focused groups like yours. The idea is
    to give people from different corners of tech a relaxed place to meet,
    then continue supporting focused communities and events around the city.
    Our first hangout is September 6. I’d value any advice on reaching people
    who want this kind of informal space, and I’m happy to point Lambda House
    members toward your relevant events too.

- [ ] **Step 4: Add college-club outreach**

    I’m starting Lambda House, an age-open tech community beginning in Kanpur.
    It is open to students and non-students, beginners and experienced people,
    across software, hardware, AI, design, gaming, robotics, open source, and
    other areas of technology. The first casual hangout is September 6 from
    4:00–6:00 PM. Would your club be comfortable sharing the event page with
    members who might enjoy meeting people beyond their campus?

- [ ] **Step 5: Add venue request**

    I’m organizing a small public technology-community meetup on Sunday,
    September 6, from 4:00–6:00 PM. We are planning for roughly 15–20 people
    and need a space where normal conversation is possible. Attendees would
    order individually unless we agree to a clear minimum spend. Could you
    share your seating capacity, booking terms, power availability, washroom
    access, photography policy, and whether all age groups may enter?

- [ ] **Step 6: Add Reddit post**

    Title: Starting a casual tech community in Kanpur — first meetup Sep 6

    Body:
    I’ve been wanting a local group where people can talk about technology
    without the meetup turning into a formal conference or startup pitch
    session. I’m starting Lambda House for exactly that.

    It is open to anyone curious about tech: students, developers, designers,
    hardware people, gamers, researchers, beginners, or people who simply
    enjoy learning how things work.

    The first hangout is Sunday, September 6, 4:00–6:00 PM in Kanpur. It is
    free. You can come alone and you do not need to bring a project.

    Event details and RSVP: use the approved website URL

- [ ] **Step 7: Add WhatsApp welcome**

    Welcome to Lambda House. This should feel like a group of tech friends,
    not a notice board.

    Talk about tools, products, code, hardware, games, science, projects,
    questions, and whatever technical rabbit hole has your attention. Keep it
    tech-related, avoid spam, and ask before privately messaging anyone.

    To start: what technology are you curious about right now?

- [ ] **Step 8: Add 48-hour reminder**

    Lambda House Kanpur #01 is this Sunday, September 6, from 4:00–6:00 PM.

    Venue: use the exact confirmed venue and map link.
    Format: a quick opening round, then open tech conversation.
    Cost: free; order from the venue individually if you want.
    Bring: yourself. A project is optional.

    If your plan has changed, reply once so I can estimate seating accurately.

- [ ] **Step 9: Review copy against voice and policy**

Reject any draft containing hype, “exclusive,” “premier,” “ecosystem,” “networking opportunity,” credential gates, startup-only framing, guaranteed turnout, or direct public WhatsApp links.

- [ ] **Step 10: Commit**

    git add docs/operations/04-launch-copy.md
    git commit -m "docs: add lambda house launch copy"

---

### Task 3: Outreach list and private tracking

**Files:**

- Create: docs/operations/05-outreach-system.md
- Create: templates/contact-tracker.csv
- Create: templates/event-attendance.csv

**Interfaces:**

- Consumes: public community pages and approved messages
- Produces: a privacy-conscious list of 50 prospects and a repeatable follow-up process

- [ ] **Step 1: Create contact tracker**

CSV header:

    contact_id,name,source,category,public_profile_url,contacted_on,message_type,status,follow_up_on,tech_interests,notes,consent_to_future_contact

Allowed statuses:

    identified,contacted,replied,interested,joined,rsvped,declined,no_response,do_not_contact

Do not store private scraped phone numbers, private emails, sensitive personal data, or information unrelated to community participation.

- [ ] **Step 2: Build the first 50-contact distribution**

- 15 Kanpur-based people found through public LinkedIn profiles across software, design, hardware, gaming, research, product, cybersecurity, and data.
- 10 people from relevant public Reddit discussions who have indicated interest in local technology or social meetups.
- 10 organizers across GDG Kanpur, AWS User Group Kanpur, KanpurAI, Flutter Kanpur, FOSS groups, and other active public groups.
- 10 college clubs across IIT Kanpur, HBTU, CSJMU, PSIT, and other Kanpur institutions.
- 5 possible venues or coworking partners.

Use public pages and contact forms. Do not bypass group rules or mass-message member lists.

- [ ] **Step 3: Prioritize outreach**

Day-two order:

1. Existing organizers.
2. People who publicly asked for local tech connections.
3. College clubs.
4. Broad LinkedIn profiles.
5. Venue partners.

Personalize the first sentence based on a real public interest. Do not invent familiarity.

- [ ] **Step 4: Define follow-up**

- One follow-up only, 48–72 hours after the first message.
- No follow-up after “no,” do-not-contact, or a clear lack of fit.
- Move interested people to the joining or RSVP form rather than collecting information in DMs.
- Record outcome immediately after each conversation.

- [ ] **Step 5: Create attendance tracker**

CSV header:

    event_id,event_date,display_name,age_range,rsvp_status,attended,tech_interest,photo_preference,first_event,follow_up_sent,returned_later,notes

Keep the file private and delete event-specific personal data according to the 30-day rule unless the person separately joins the community.

- [ ] **Step 6: Validate**

Check that all 50 entries have a public source, a relevant reason, and no private scraped contact. Randomly inspect ten entries for truthful personalization.

- [ ] **Step 7: Commit templates without real personal data**

    git add docs/operations/05-outreach-system.md templates/contact-tracker.csv templates/event-attendance.csv
    git commit -m "docs: add outreach and attendance system"

Real member and prospect records must remain outside the public repository.

---

### Task 4: Conduct, safety, and moderation operations

**Files:**

- Create: docs/operations/06-conduct-safety-moderation.md
- Create: templates/incident-log.csv

**Interfaces:**

- Consumes: approved blueprint and dedicated reporting contact
- Produces: moderator playbook, child-safety procedure, incident record

- [ ] **Step 1: Copy the ten public rules exactly from the blueprint**

Do not shorten away the age-open, private-message, privacy, promotion, photography, or organizer-removal clauses.

- [ ] **Step 2: Add enforcement procedure**

1. Minor first issue: private reminder quoting the specific rule.
2. Repeated or more serious issue: written warning and expected change.
3. Continued issue: removal from group and events.
4. Harassment, threats, predatory behaviour, doxxing, or serious safety breach: immediate removal and further reporting where required.
5. Serious decisions use two organizers once the second organizer exists.
6. Do not publicly debate identifiable incident details.

- [ ] **Step 3: Add event safeguards**

- Public staffed venue and reasonable hours.
- Two adult organizers present from setup through official close.
- No closed-room one-to-one sessions.
- No home or overnight community event.
- No community-arranged private transport involving minors.
- No adult-initiated private contact with minors.
- No identifiable under-18 photography by default.
- Walk-ins may attend subject to venue capacity.
- Private reporting route visible on conduct page and event reminder.

- [ ] **Step 4: Add response scripts**

Minor reminder:

    I’m messaging privately because this conflicts with the Lambda House rule:
    quote the exact rule. Please stop this behaviour so the group can remain
    comfortable for everyone.

Warning:

    This is a formal warning under the Lambda House conduct policy. The
    behaviour was: state the observable behaviour without speculation.
    Repeating it will result in removal.

Removal:

    Your access to Lambda House is being removed because of: state the rule
    and documented behaviour. Do not contact members through information
    obtained from the community.

- [ ] **Step 5: Create private incident log**

CSV header:

    incident_id,reported_on,event_or_channel,reporter_contact,person_reported,observable_facts,immediate_safety_action,evidence_location,policy_rule,decision,decision_makers,external_report_required,external_report_reference,follow_up_date,status

Store actual incidents outside the public repository with access limited to Akshat and one designated organizer.

- [ ] **Step 6: Scenario-check the playbook**

Verify it gives an unambiguous response for:

- Repeated course promotion.
- An unsolicited private message after being asked to stop.
- Adult-initiated private contact with a minor.
- Harassment during an event.
- A photograph posted against preference.
- A credible immediate threat.
- A disagreement about a technical opinion that does not violate conduct.

- [ ] **Step 7: Commit**

    git add docs/operations/06-conduct-safety-moderation.md templates/incident-log.csv
    git commit -m "docs: add conduct safety and moderation playbook"

---

### Task 5: Venue, budget, and event readiness

**Files:**

- Create: docs/operations/07-venue-and-budget.md
- Create: docs/operations/08-first-event-runbook.md

**Interfaces:**

- Consumes: Akshat’s venue decision and actual booking terms
- Produces: venue receipt, backup plan, itemized budget, final event runbook

- [ ] **Step 1: Create the venue scorecard**

Score each candidate from 0–2 on:

- Public and staffed.
- Easy to locate.
- Suitable for all age groups.
- 15–20 comfortable seats.
- Quiet enough for conversation.
- Flexible table arrangement.
- Water and washrooms.
- Food ordering.
- Clear minimum-spend or booking fee.
- Photography permission.
- Mobile signal.
- Basic physical accessibility.

Do not let Claude Code select the venue. Present factual comparison to Akshat.

- [ ] **Step 2: Obtain written venue answers**

Use the venue request from Task 2. Record exact name, address, map URL, contact person, capacity, booking/minimum spend, cancellation terms, access notes, photography terms, arrival time, and backup contact.

- [ ] **Step 3: Keep budget under ₹5,000**

Budget categories:

- Venue or minimum spend.
- Water or shared snacks.
- Simple printed sign or table marker.
- Local transport for organizer materials.
- ₹500 contingency.

Do not pay for advertising, merchandise, banners, a photographer, or a speaker.

- [ ] **Step 4: Confirm a backup venue**

The backup must meet the public/staffed and all-age requirements. Do not announce it unless activated.

- [ ] **Step 5: Confirm the second adult organizer**

Record name, phone, arrival time, responsibilities, and backup plan privately. If no second adult is confirmed by September 4, Akshat must recruit one before the event proceeds under the approved safety design.

- [ ] **Step 6: Create the event kit**

- Phone with charger or power bank.
- Printed or phone-accessible attendee-interest list.
- Small λ / KNP table sign.
- Pens and blank paper.
- Water plan.
- Conduct/reporting contact.
- Venue contact.
- Emergency numbers available on the organizer’s phone.
- No compulsory name tags, merchandise, or elaborate décor.

- [ ] **Step 7: Validate 48 hours before event**

Confirm venue, capacity, two adults, form links, map, reminder copy, accessibility answers, photography preferences, budget, and backup.

- [ ] **Step 8: Commit non-sensitive runbook**

    git add docs/operations/07-venue-and-budget.md docs/operations/08-first-event-runbook.md
    git commit -m "docs: add venue and first-event runbook"

Keep personal contacts and negotiated financial details outside a public repository.

---

### Task 6: Four-day launch and registration cycle

**Files:**

- Modify: docs/operations/05-outreach-system.md
- Modify: docs/operations/08-first-event-runbook.md

**Interfaces:**

- Consumes: live website, forms, social page, WhatsApp surfaces, copy, contact tracker
- Produces: public launch by August 26 and confirmed attendee funnel

- [ ] **Step 1: August 23 foundation**

- Finish plan and blueprint.
- Select available handle and Vercel project slug with Akshat.
- Start venue comparison.
- Do not publish incomplete links.

- [ ] **Step 2: August 24 external and digital setup**

- Create forms, WhatsApp surfaces, Instagram page, reporting contact, and external receipt.
- Build website to preview quality.
- Verify signed-out form access.
- Prepare 50-contact list.

- [ ] **Step 3: August 25 public launch**

- Akshat approves and publishes founding post.
- Send 20 personal messages.
- Contact existing organizers.
- Start receiving join and RSVP responses.
- Respond personally the same day.

- [ ] **Step 4: August 26 second outreach wave**

- Send 20–30 additional messages.
- Contact college clubs.
- Invite approved respondents into WhatsApp.
- Post the welcome message.
- Begin one natural tech conversation using: “What technology are you curious about right now?”

- [ ] **Step 5: August 27 event completion**

- Confirm venue.
- Update website and RSVP form with exact details.
- Publish complete event listing.
- Send RSVP invitation.
- Ask early members to invite one tech-curious person.

- [ ] **Step 6: August 28–31 relationship work**

- Reply to each interested person.
- Share only in spaces where moderators permit it.
- Make introductions based on shared interests.
- Avoid daily promotional posts or artificial questions.
- Track registrations and stop repeated chasing.

- [ ] **Step 7: September 1–3 confirmation**

- Review yes/probably counts.
- Send one personal confirmation.
- Resolve venue and accessibility questions.
- Select a tentative build-session date based on venue availability and early-member feedback.

- [ ] **Step 8: September 4–5 freeze**

- Send final reminder.
- Reconfirm two organizers and venue.
- Freeze non-essential website and brand edits.
- Print or download event materials.
- Check photography preferences.

- [ ] **Step 9: Verify funnel health**

Report:

- Messages sent.
- Replies.
- Join-form responses.
- WhatsApp members.
- Yes and probably RSVPs.
- Confirmed attendees.
- Accessibility requests.
- Spend committed.

Do not forecast attendance by treating registrations as attendees.

- [ ] **Step 10: Commit schedule updates**

    git add docs/operations/05-outreach-system.md docs/operations/08-first-event-runbook.md
    git commit -m "docs: finalize lambda house launch cycle"

---

### Task 7: Event day, follow-up, and feedback

**Files:**

- Modify: docs/operations/08-first-event-runbook.md
- Create: docs/operations/09-follow-up-and-metrics.md
- Create: templates/six-month-dashboard.csv

**Interfaces:**

- Consumes: attendee list, venue receipt, safety playbook
- Produces: completed event, feedback, follow-up, next-event decision, metrics baseline

- [ ] **Step 1: Use the approved run-of-show**

- 3:30 PM: organizers arrive and check space.
- 4:00 PM: informal arrivals.
- 4:10 PM: two-minute welcome.
- 4:15 PM: names and one current tech curiosity.
- 4:30 PM: open conversation.
- 5:15 PM: optional movement between tables.
- 5:50 PM: next build-session window and feedback.
- 6:00 PM: official close.

- [ ] **Step 2: Use this welcome script**

    Thanks for coming to the first Lambda House meetup.

    I started this because I wanted a place in Kanpur where people could talk
    about technology naturally and meet others who are just as curious.

    You do not need a particular job, degree, age, or level of experience to
    belong here. Today is deliberately simple. We’ll each share our name and
    one technology we are curious about, then let the conversations develop.

    Keep it tech-related, respect people, ask before privately messaging or
    photographing anyone, and help newcomers enter the conversation.

- [ ] **Step 3: Track attendance without interrupting arrival**

Record display name, attended status, tech interest, photo preference, and first-event status. Do not demand new personal information from walk-ins.

- [ ] **Step 4: Ask three feedback questions**

1. Did you meet someone you would like to speak with again?
2. What made the meetup comfortable or uncomfortable?
3. What should the first build session make room for?

Allow spoken feedback or a minimal form; do not require feedback to remain in the community.

- [ ] **Step 5: Send next-day follow-up**

    Thanks for being part of the first Lambda House hangout.

    The best part was seeing people from different corners of tech find things
    to talk about without needing a formal agenda. I’m planning the first
    build-together session next. It will remain beginner-friendly: bring a
    project, explore a tool, help someone, or simply observe.

    Share one thing you enjoyed or would change by replying directly. Event
    photographs will only be shared according to the preferences recorded.

- [ ] **Step 6: Publish recap**

Include turnout as an exact number, two or three conversation themes, the next-event window, and consented photographs only. Do not identify minors, quote private conversations, inflate attendance, or imply sponsorship.

- [ ] **Step 7: Create six-month dashboard**

CSV header:

    month,events_held,unique_attendees,repeat_attendees,repeat_rate,online_members,active_contributors,member_referrals,moderation_incidents,spend_inr,venue_partners,organizers_capable_of_hosting,organizer_enjoyment_1_to_5,notes

Calculate repeat rate as repeat attendees divided by attendees eligible to have returned. Record zero honestly.

- [ ] **Step 8: Choose next event**

Within 24 hours, choose the first build-session date using venue availability, organizer availability, and member feedback. Keep the twice-monthly rhythm.

- [ ] **Step 9: Commit non-personal outputs**

    git add docs/operations/08-first-event-runbook.md docs/operations/09-follow-up-and-metrics.md templates/six-month-dashboard.csv
    git commit -m "docs: add event follow-up and success tracking"

---

### Task 8: Six-month rhythm and sponsorship readiness

**Files:**

- Create: docs/operations/10-sponsorship-policy.md
- Modify: docs/operations/09-follow-up-and-metrics.md

**Interfaces:**

- Consumes: three completed events and dashboard evidence
- Produces: repeatable operating cycle and sponsor guardrails

- [ ] **Step 1: Establish recurring cycle**

For each month:

1. One tech hangout.
2. One build-together session.
3. One public recap per event.
4. One personal confirmation before each event.
5. One next-day follow-up.
6. Monthly dashboard update.
7. Thirty-minute organizer retrospective.

- [ ] **Step 2: Add helper roles through behaviour**

Invite a conversational host, build facilitator, photographer, or moderator only after the person attends consistently, follows conduct, and helps without chasing status. Do not form committees, elections, or membership tiers.

- [ ] **Step 3: Define sponsorship eligibility**

Do not accept cash sponsorship before three completed events. An earlier in-kind venue is allowed only without a promotional obligation.

Sponsor support may cover venue, refreshments, equipment, or a defined activity. Sponsor recognition is limited to a logo and brief thanks.

- [ ] **Step 4: Record sponsor rejection rules**

Reject any arrangement requiring member data, lead collection, compulsory pitch, content control, membership influence, misleading endorsement, or category exclusivity that harms the community. Decline political organizations, gambling, predatory courses, adult products, and questionable financial or crypto promotions.

- [ ] **Step 5: Add sponsor review checklist**

- Fit with age-open technology community.
- Exact benefit to members.
- Exact money or in-kind value.
- Public disclosure.
- No data access.
- No content or membership control.
- No more than a brief acknowledgement.
- Two-organizer approval.
- Written agreement and exit right.

- [ ] **Step 6: Check six-month targets**

- 8–15 core regulars.
- 100–250 online members.
- 15–30 typical event attendees.
- 12 completed events.
- Two other people able to run an event.
- One or two dependable partners.
- At least 40% repeat attendance.

Treat these as diagnostic targets, not incentives to compromise culture.

- [ ] **Step 7: Schedule legal and brand reviews**

- Review the under-18 digital-data flow with an Indian privacy professional before May 13, 2027.
- Run a proper Indian trademark review before incorporation, material brand spending, or opening another city chapter.
- Do not describe either review as complete without a written professional result.

- [ ] **Step 8: Commit**

    git add docs/operations/09-follow-up-and-metrics.md docs/operations/10-sponsorship-policy.md
    git commit -m "docs: add six-month and sponsorship system"

## Operations definition of done

- Actual external URLs and owners are recorded; no action is marked complete without a receipt.
- Joining and RSVP forms collect only approved fields and work signed out.
- WhatsApp is private, tech-only, and moderated under published rules.
- Fifty truthful outreach targets are prepared without scraped private data.
- Founding post and outreach copy are approved by Akshat before sending.
- Venue, backup, budget, two adult organizers, reminders, and event kit are confirmed.
- Event runs on September 6 from 4:00–6:00 PM.
- Follow-up, feedback, attendance, repeat-rate, and spending records are completed.
- Sponsor access remains closed until three events have been completed.
