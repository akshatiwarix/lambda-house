# Registration form specifications

Two surfaces, split by job:

- **Join** — ongoing community interest and WhatsApp invitations. Google Form.
  Contact details stay optional.
- **RSVP** — a specific dated event. Luma. Luma requires an email address and
  that cannot be disabled, which is disclosed on the privacy page.

Build both before sharing any link. Luma applies registration questions only to
people who register *after* the question is added, and it will not go back and
collect answers from earlier registrants.

---

## Join Lambda House (Google Form)

**Title**

    Join Lambda House

**Description**

    Lambda House is a home for people curious about technology. The first
    chapter meets in Kanpur, and the online community is open more broadly.
    You do not need to code, work in tech, or prove your experience.
    Curiosity is enough.

**Fields**

| # | Question | Type | Required | Options |
| --- | --- | --- | --- | --- |
| 1 | Display name | Short answer | yes | — |
| 2 | City | Short answer | yes | — |
| 3 | Age range | Multiple choice | yes | under 13; 13–15; 16–17; 18–24; 25–34; 35+ |
| 4 | What parts of technology are you curious about? | Paragraph | yes | — |
| 5 | How would you like to take part? | Checkboxes | no | WhatsApp conversation; Kanpur meetups; build sessions; public updates |
| 6 | If you want a WhatsApp invite or direct reminder, what contact should the organizer use? | Short answer | no | — |
| 7 | I have read and agree to the community rules and privacy notice | Checkbox | yes | Links to `/conduct` and `/privacy` |

**Confirmation message**

    Thanks for joining Lambda House. If you requested a WhatsApp invitation
    or reminder, the organizer will contact you using the detail you shared.
    The first Kanpur tech hangout is Sunday, September 6, 4:00–6:00 PM.

**Settings**

- Do not automatically collect email addresses.
- Do not require Google sign-in.
- No file uploads.
- Do not show responses to respondents.
- Restrict the response sheet to Akshat and one designated operator.
- Turn off marketing integrations and add-ons.

---

## RSVP — Lambda House Kanpur #01 (Luma)

### Event settings

| Setting | Value | Reason |
| --- | --- | --- |
| Name | `Lambda House Kanpur #01` | — |
| Date | Sunday 6 September 2026, 16:00–18:00, Asia/Kolkata | — |
| Location | `Kanpur · venue confirmation in progress`, replaced with the real public address once confirmed | Never publish an address that is not booked |
| Price | Free | — |
| Visibility | Public | Discoverable and shareable for outreach |
| Guest list | Hidden | Attendees should not be able to see who else registered |
| Require approval | Off | Curiosity is the only entry condition |
| Capacity | Unlimited until seating is confirmed, then set to the real seat count | A safety ceiling, not a growth lever. If registrations exceed the room, move to a larger venue rather than crowd it |
| Waitlist | On, once a capacity is set | — |
| Location hiding | Off | This is an open public event |

### Custom registration questions

Add under Manage Event → Registration → Custom Questions, before sharing the
link.

| # | Question | Luma type | Required | Options |
| --- | --- | --- | --- | --- |
| 1 | Age range | Options, choose one | yes | under 13; 13–15; 16–17; 18–24; 25–34; 35+ |
| 2 | Are you planning to attend? | Options, choose one | yes | yes; probably; no, but send me the next date |
| 3 | What technology are you currently curious about? | Text, short | yes | — |
| 4 | Is there anything that would make the venue easier for you to use? | Text, long | no | — |
| 5 | If you want a reminder by phone, share a number | Text, short | no | — |
| 6 | Photography preference | Options, choose one | yes | okay to appear in event photographs; ask me each time; do not photograph me |
| 7 | Conduct and privacy agreement | Terms | yes | Content type Text, with links to `/conduct` and `/privacy`. "Show text before accept" on. Signature off |

Name and email are collected by Luma natively and cannot be turned off. Question
5 exists so people who prefer a phone reminder can have one; it is optional.

### Confirmation and reminders

Luma sends its own confirmation. Use an event Blast for the 48-hour reminder in
`04-launch-copy.md`. Blasts to event guests are unlimited on the free plan and
can go by email, SMS, or WhatsApp.

---

## Acceptance checks

- [ ] Both links open in a signed-out browser.
- [ ] A test submission on each succeeds, then is deleted.
- [ ] `/conduct` and `/privacy` links resolve from inside both forms.
- [ ] Google Form does not collect email automatically.
- [ ] Luma guest list is hidden and approval is off.
- [ ] Response access limited to Akshat and one operator.
- [ ] Real URLs recorded in `01-external-resources.md`.
