# Onboarding Flow

This file is a structured handoff for Codex to implement the XQ activation kiosk onboarding flow from the attached screenshots and notes.

Use the screenshots as visual references, but do not treat all current on-screen copy, placeholder graphics, or placeholder layouts as final. Any item marked `TBD` or `Open questions` needs confirmation before implementation.

## Confirmed Decisions

- Frame 04 should use an on-screen kiosk keyboard for name entry.
- Frame 08 should require the user to tap `Next step`; it should not auto-advance.
- Persona options, topic options, and avatar customization rules are placeholders for now. Use the content already shown in the screenshots as the working placeholder set.
- Avatar customization should be limited so users do not spend too much time in onboarding.
- The default avatar flow should exist, but the primary/default path should be `Generate custom`.
- Use short, plain-language AI/photo consent copy for now. The user's photo should not be stored or used beyond this single experience.
- The XQ explanation should live in physical signage for now, not inside the kiosk flow.
- NFC/QR wording and prize/incentive logic should be generic and brief until the team finalizes them.

## Asset Naming

Current screenshot folder:
`/Users/nathanposner/Desktop/activation-experiences-xq/activation-onboarding-xq/public/assets/screens/export1/`

Recommended screenshot names for handoff:

- `01-welcome.png` from `Kiosk-Onboarding-1.png`
- `02-persona-selection.png` from `Kiosk-Onboarding-2.png`
- `03-persona-confirmation.png` from `Kiosk-Onboarding-3.png`
- `04-name-entry.png` from `Kiosk-Onboarding-4.png`
- `05-name-confirmation.png` from `Kiosk-Onboarding-5.png`
- `06-avatar-choice.png` from `Kiosk-Onboarding-6.png`
- `07-camera-pose.png` from `Kiosk-Onboarding-7.png`
- `08-location.png` from `Kiosk-Onboarding-8.png`
- `09-interest-selection-empty.png` from `Kiosk-Onboarding-9.png`
- `10-interest-selection-complete.png` from `Kiosk-Onboarding-10.png`
- `11-experience-map.png` from `Kiosk-Onboarding-11.png`
- `12-summary.png` from `Kiosk-Onboarding-12.png`
- `13-final-handoff.png` from `Kiosk-Onboarding-13.png`

Reference assets:

- `figure 1.png` - interchangeable physical sign reference
- `figure 2.png` - interchangeable physical sign reference
- `figure 3.png` - avatar/profile/stat-card visual reference
- `figure 4.png` - avatar/profile/gamified mobile UI reference
- `figure 5.png` - avatar/profile/game-style profile visual reference

## Open Questions Before Implementation

- Should Frame 01 explicitly say that users must begin at this kiosk before the rest of the activation experience, or should that be handled through physical signage near the kiosk?
- What exact product/event language should be used throughout: "XQ Bus Tour", "activation experience", something location-specific, or another title?
- What are the final persona descriptions and final persona icon/avatar designs?
- For "I'm not sure who I am", should the extra message appear on Frame 02, Frame 03, or both?
- Should Frame 04 advance with the keyboard's submit/done action, a visible CTA, or another interaction after the user types their name?
- What exact name field label should be used, and should there be validation, privacy copy, or a skip option?
- What are the default avatar options, and what limited customization controls should be available?
- Should Frame 07 include a countdown, retake/review step, or explicit "photo will be taken automatically" copy?
- What is the final topic list for interests, and does `Not sure yet` count as one of the three selections?
- Should users be able to skip interest selection, and if so where do they go next?
- What is the booth count and final prize logic for Frame 12?
- What exact NFC/QR destination and final CTA should appear on Frame 13?

## 01 Welcome

Figma frame name:
Kiosk-Onboarding-1

Purpose:
Introduce the XQ Bus Tour onboarding experience and provide the clear first action for users.

User actions:
Tap `Start`.

Next screen:
02 Persona Selection.

Assets:
- Current screenshot: `/Users/nathanposner/Desktop/activation-experiences-xq/activation-onboarding-xq/public/assets/screens/export1/Kiosk-Onboarding-1.png`
- Recommended export name: `01-welcome.png`
- Center graphics are placeholders.

Notes:
- The screen should make it clear that users start here before moving into the rest of the activation experience.
- Current concern: it may not be clear enough that this kiosk is the first step.
- Consider clearer copy, stronger visual hierarchy, or supporting physical signage, but confirm approach before implementation.

Open questions:
- What exact language should tell users that this is the required first step?
- Should this screen explain the rest of the activation, or should it stay very minimal?

## 02 Persona Selection

Figma frame name:
Kiosk-Onboarding-2

Purpose:
Let users choose which persona best describes their relationship to the high school education landscape.

User actions:
- Select a persona icon/title.
- Select `I'm not sure who I am` if the user does not know which persona fits.

Next screen:
03 Persona Confirmation.

Assets:
- Current screenshot: `/Users/nathanposner/Desktop/activation-experiences-xq/activation-onboarding-xq/public/assets/screens/export1/Kiosk-Onboarding-2.png`
- Recommended export name: `02-persona-selection.png`
- Persona icons are placeholders until avatar designs are finalized.

Notes:
- Working placeholder persona options: `Student`, `Parent`, `Community Member`, `Business Leader`, `Educator`, `Policy Maker`, `Community Partner`, and `I'm not sure who I am`.
- Individual persona icons and titles should rotate in an approximate circle slowly.
- Persona icons should feel alive and interactive by gently bubbling around the screen and changing size slightly.
- Persona icons can bump into one another but should not overlap.
- `I'm not sure who I am` should direct users to the Community Member option.
- When using the not-sure path, add the message: "That's okay! Finding who you are can be complicated."

Open questions:
- Confirm final persona labels and descriptions if they change from the placeholder set.
- Confirm whether users advance immediately after tapping a persona or must select a persona and then tap a continue button.
- Confirm where the not-sure reassurance message should appear.

## 03 Persona Confirmation

Figma frame name:
Kiosk-Onboarding-3

Purpose:
Confirm the persona selected on Frame 02 and briefly explain what that persona means in the context of the experience.

User actions:
- Tap `That's me!` to confirm.
- Tap back to return to persona selection.

Next screen:
04 Name Entry.

Assets:
- Current screenshot: `/Users/nathanposner/Desktop/activation-experiences-xq/activation-onboarding-xq/public/assets/screens/export1/Kiosk-Onboarding-3.png`
- Recommended export name: `03-persona-confirmation.png`
- Selected persona icon from Frame 02.

Notes:
- When the user selects an icon on Frame 02, that icon should zoom in to occupy the top-center portion of the screen.
- The selected icon's background color should fill the screen background.
- Show a short description of what that persona means in relation to the experience.
- If the user taps back, the animation should play in reverse: background fades, central icon shrinks, and the other icons repopulate the screen.
- Reduce the amount of text in the persona description.

Open questions:
- Confirm final description copy for each persona.
- Confirm whether this screen should display a different message for the `I'm not sure who I am` path.

## 04 Name Entry

Figma frame name:
Kiosk-Onboarding-4

Purpose:
Ask the user what name they want to use during the experience.

User actions:
Enter first name or preferred display name.

Next screen:
05 Name Confirmation.

Assets:
- Current screenshot: `/Users/nathanposner/Desktop/activation-experiences-xq/activation-onboarding-xq/public/assets/screens/export1/Kiosk-Onboarding-4.png`
- Recommended export name: `04-name-entry.png`
- Selected persona icon/title from Frame 03.

Notes:
- A keyboard-typing style animation should show the two messages above the text box sequentially from top to bottom.
- After the messages appear, the text box should appear at the bottom.
- When the user taps the text box, an on-screen kiosk keyboard should appear for typing.
- Restyle the text box. Current note: "It is ugly."

Open questions:
- Should the user submit with the keyboard's submit/done action, a visible CTA, or another interaction?
- Should the field ask for first name only, preferred name, nickname, or another label?
- Should there be validation, character limits, a default value, or a skip option?

## 05 Name Confirmation

Figma frame name:
Kiosk-Onboarding-5

Purpose:
Confirm the user's entered name and selected persona before avatar setup.

User actions:
Tap `That's me!`.

Next screen:
06 Avatar Choice.

Assets:
- Current screenshot: `/Users/nathanposner/Desktop/activation-experiences-xq/activation-onboarding-xq/public/assets/screens/export1/Kiosk-Onboarding-5.png`
- Recommended export name: `05-name-confirmation.png`
- Selected persona icon/avatar.

Notes:
- The previous persona title area should be populated with the user's first name.
- The user's persona title should appear below the name.

Open questions:
- Should users be able to edit their name from this screen?
- Should tapping back return to name entry or persona confirmation?

## 06 Avatar Choice

Figma frame name:
Kiosk-Onboarding-6

Purpose:
Let users decide whether to use a default avatar or generate a custom avatar.

User actions:
- Tap `Use default`.
- Tap `Generate custom`.
- Possibly tap edit icon, if that interaction is intended.

Next screen:
- `Generate custom` goes to 07 Camera Pose.
- `Use default` goes to an additional default avatar selection flow that is not represented in these 13 frames.

Assets:
- Current screenshot: `/Users/nathanposner/Desktop/activation-experiences-xq/activation-onboarding-xq/public/assets/screens/export1/Kiosk-Onboarding-6.png`
- Recommended export name: `06-avatar-choice.png`
- Persona icon/avatar placeholder.

Notes:
- Make `Generate custom` the primary/default path.
- Keep `Use default` available as a secondary path for users who do not want to use AI or have their photo taken.
- Offering a default avatar lets users proceed without using AI or having their photo taken.
- This preserves user choice and supports people who object to AI participation.
- After the user selects `Generate custom`, indicate that their photo will be taken.
- Use short, plain-language consent copy for now, such as: "We'll use your photo only to create your avatar for this experience. It will not be stored or used afterward."
- The default-avatar path needs an additional flow where the user can select an avatar from a set of defaults.
- Avatar customization should be intentionally limited so users do not spend too long in onboarding.
- Confirm with the team which small set of avatar attributes are customizable vs preset.

Open questions:
- Does the generic photo-use copy above need legal/team review before final implementation?
- What does the edit icon do on this screen?
- What are the default avatar choices and limited customization rules?

## 07 Camera Pose

Figma frame name:
Kiosk-Onboarding-7

Purpose:
Capture a photo that can be used to generate the user's custom avatar.

User actions:
- Stand within the camera frame or silhouette guide.
- Review short photo-use copy before capture.
- Tap back if they do not want to proceed.

Next screen:
08 Location, unless a review/retake or processing screen is required first.

Assets:
- Current screenshot: `/Users/nathanposner/Desktop/activation-experiences-xq/activation-onboarding-xq/public/assets/screens/export1/Kiosk-Onboarding-7.png`
- Recommended export name: `07-camera-pose.png`
- Camera feed area.
- Possible silhouette/frame overlay.

Notes:
- The screen should show the user standing.
- Include a frame or outline that indicates where their silhouette should be positioned for the best picture.
- The camera should automatically take a picture after a few seconds.
- The delay should give the user time to tap back if desired.
- Keep the photo-use message short and plain-language. Working placeholder: "We'll use this photo only to create your avatar for today."

Open questions:
- How many seconds should the countdown be?
- Should users see an explicit countdown?
- Should there be a retake/review screen?
- Does the photo-use message need final legal/team approval?

## 08 Location

Figma frame name:
Kiosk-Onboarding-8

Purpose:
Show the user's current activation location and personalize the experience to the city/state.

User actions:
Tap `Next step`.

Next screen:
09 Interest Selection Empty.

Assets:
- Current screenshot: `/Users/nathanposner/Desktop/activation-experiences-xq/activation-onboarding-xq/public/assets/screens/export1/Kiosk-Onboarding-8.png`
- Recommended export name: `08-location.png`
- Map of the United States or regional map.

Notes:
- A map of the US should slowly fade into view.
- The specific state/city should be highlighted in the accent color for that user flow.
- A fun catchphrase or statement about the location should appear below the location text, such as "Go Bears!" or "Home of the big cheese".
- The location is auto-populated by the bus stop or activation location.
- This screen should not auto-advance. Users should select `Next step`.

Open questions:
- What location data source determines the state/city?
- What are the final location catchphrases?
- Is the highlighted area state-level, city-level, or venue-level?

## 09 Interest Selection Empty

Figma frame name:
Kiosk-Onboarding-9

Purpose:
Invite users to choose topics they are interested in before seeing the experience map.

User actions:
- Select up to three topics.
- Possibly tap `Skip step`.

Next screen:
- 10 Interest Selection Complete when topics are selected.
- TBD if the user skips.

Assets:
- Current screenshot: `/Users/nathanposner/Desktop/activation-experiences-xq/activation-onboarding-xq/public/assets/screens/export1/Kiosk-Onboarding-9.png`
- Recommended export name: `09-interest-selection-empty.png`

Notes:
- Working placeholder topics: `Literacy`, `Policy change`, `Data`, `Student perspectives`, `The future of education`, `Current news`, `Diversity`, `Social change`, and `Not sure yet`.
- This screen needs to be redesigned to feel more fun and engaging.
- Potential redesign direction: card-style icons with vector illustrations.
- Alternative redesign direction: bubbles similar to the initial persona selection screen.

Open questions:
- What is the final topic list?
- Does `Not sure yet` count as one of the three selections?
- Should users be allowed to skip?
- If users skip, what screen comes next?
- Which redesign direction should be used?

## 10 Interest Selection Complete

Figma frame name:
Kiosk-Onboarding-10

Purpose:
Show the selected-interest state when the user has chosen three topics.

User actions:
- Continue after selecting topics.
- Possibly add/remove selected topics before continuing.

Next screen:
11 Experience Map.

Assets:
- Current screenshot: `/Users/nathanposner/Desktop/activation-experiences-xq/activation-onboarding-xq/public/assets/screens/export1/Kiosk-Onboarding-10.png`
- Recommended export name: `10-interest-selection-complete.png`

Notes:
- This screen shows what it looks like for three topics to be selected.
- The topics themselves are still TBD. Use the screenshot topics as placeholders until the team confirms the final list.

Open questions:
- What selected-topic visual style should be final?
- Can users deselect a topic after choosing it?
- Should the continue button appear only after one topic, exactly three topics, or up to three topics?

## 11 Experience Map

Figma frame name:
Kiosk-Onboarding-11

Purpose:
Show a bird's-eye-view map of the activation experience for the user's specific location.

User actions:
TBD.

Next screen:
12 Summary.

Assets:
- Current screenshot: `/Users/nathanposner/Desktop/activation-experiences-xq/activation-onboarding-xq/public/assets/screens/export1/Kiosk-Onboarding-11.png`
- Recommended export name: `11-experience-map.png`
- Location-specific activation map, to be created.

Notes:
- The map should show areas where users can explore topics of interest.
- Topic areas should be highlighted and labeled.
- The user flow from start to finish should be clearly indicated.
- Need to create an example map to make the intended concept clear.

Open questions:
- What location should be used for the example map?
- What booths/zones should appear on the map?
- What are the section names and topic labels?
- How should the start-to-finish route be represented?
- What action advances users from this screen?

## 12 Summary

Figma frame name:
Kiosk-Onboarding-12

Purpose:
Summarize the user's profile and explain what to do during the rest of the activation experience.

User actions:
TBD.

Next screen:
13 Final Handoff.

Assets:
- Current screenshot: `/Users/nathanposner/Desktop/activation-experiences-xq/activation-onboarding-xq/public/assets/screens/export1/Kiosk-Onboarding-12.png`
- Recommended export name: `12-summary.png`
- User name.
- User demographic/persona segment.
- User interests.
- Final user avatar, which has been processing in the background.
- Reference asset: `figure 1.png`
- Reference asset: `figure 2.png`
- Reference asset: `figure 3.png`
- Reference asset: `figure 4.png`
- Reference asset: `figure 5.png`

Notes:
- Minimize total text on this screen.
- The profile information can be conveyed in a fun avatar/game format like the profile references in Figures 3, 4, and 5.
- The description of what XQ is should live on physical signage near the onboarding booth, not in the kiosk flow for now.
- The physical sign could include the what/why/how of the experience plus a physical map.
- The physical map will change by location, so consider an interchangeable portion of the sign similar to Figures 1 and 2.
- Keep prize and incentive language generic and brief until the team finalizes the logic.

Content to rephrase and minimize if kept in the digital flow:
- What: Go through the experience and visit booths that interest you.
- Why: Explain the incentive generically. Working placeholder: "Visit booths to unlock rewards along the way."
- How: Tap your phone to each booth's icon or scan its QR code to log it as visited. Once you complete the experience at each booth, it automatically updates.
- How to continue: Once done, visit the end booth to collect your visit summary and any available prize.

Open questions:
- What is the exact prize/incentive logic?
- How many booth sections are there?
- How many total booths are there?
- What exact data should be shown in the user profile summary?
- What action advances users from this screen?

## 13 Final Handoff

Figma frame name:
Kiosk-Onboarding-13

Purpose:
Provide the final instruction before the user moves from onboarding into the rest of the activation experience.

User actions:
- Tap phone to NFC chip.
- Or scan QR code.
- Possibly tap back.

Next screen:
Rest of the activation experience outside the kiosk onboarding flow.

Assets:
- Current screenshot: `/Users/nathanposner/Desktop/activation-experiences-xq/activation-onboarding-xq/public/assets/screens/export1/Kiosk-Onboarding-13.png`
- Recommended export name: `13-final-handoff.png`
- Fun graphic similar to the initial start screen.
- NFC chip.
- QR code.

Notes:
- This screen is the final thing users see before entering the rest of the experience.
- Minimize the total amount of text.
- Include a fun graphic similar to the initial start screen.
- Prompt the user to tap their phone to the NFC chip or scan the QR code to start the experience.
- Use generic, brief NFC/QR wording until the team finalizes it. Working placeholder: "Tap your phone or scan the QR code to start exploring."
- Include a short CTA such as "Have fun exploring!"

Open questions:
- What final NFC/QR instruction should be used once the team confirms the destination?
- What final CTA should be used?
- Should the QR code be visible on screen, printed physically, or both?
- What happens if the user cannot use NFC or scan the QR code?
