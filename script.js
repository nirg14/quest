{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Game data and logic\
const gameData = \{\
    trust: 50,\
    consent: 50,\
    currentScene: 'start',\
    scenes: \{\
        // Chapter 1 Scenes\
        start: \{\
            text: "Chapter 1: The Social Event\\n\\nYou arrive at the party and notice Alex standing alone near the snack table.",\
            choices: [\
                \{ \
                    text: "Approach Alex and introduce yourself.",\
                    nextScene: 'approach',\
                    effects: \{ trust: +10, consent: +10 \}\
                \},\
                \{ \
                    text: "Comment on Alex's appearance without introducing yourself.",\
                    nextScene: 'commentAppearance',\
                    effects: \{ trust: -10, consent: -10 \}\
                \},\
                \{ \
                    text: "Wait for Alex to notice you before engaging.",\
                    nextScene: 'wait',\
                    effects: \{ trust: 0, consent: 0 \}\
                \},\
            ]\
        \},\
        approach: \{\
            text: "\\"Hi, I'm [Your Name]. The music here is great, isn't it?\\" you say with a friendly smile.\\n\\nAlex turns to you and smiles back. \\"Yeah, it's one of my favorite playlists.\\"",\
            choices: [\
                \{ \
                    text: "Do you come to these parties often?",\
                    nextScene: 'chat',\
                    effects: \{ trust: +5, consent: +5 \}\
                \},\
                \{ \
                    text: "Great taste! Want to dance?",\
                    nextScene: 'danceRequest',\
                    effects: \{ trust: 0, consent: 0 \}\
                \},\
            ]\
        \},\
        commentAppearance: \{\
            text: "You comment on Alex's appearance without introducing yourself. Alex looks uncomfortable.",\
            choices: [\
                \{ \
                    text: "Realize your mistake and introduce yourself politely.",\
                    nextScene: 'approach',\
                    effects: \{ trust: +5, consent: +5 \}\
                \},\
                \{ \
                    text: "Continue talking about Alex's looks.",\
                    nextScene: 'negativeOutcome',\
                    effects: \{ trust: -20, consent: -20 \}\
                \},\
            ]\
        \},\
        wait: \{\
            text: "You decide to wait. Alex notices you and smiles.",\
            choices: [\
                \{ \
                    text: "Smile back and wave.",\
                    nextScene: 'approach',\
                    effects: \{ trust: +5, consent: +5 \}\
                \},\
                \{ \
                    text: "Look away nervously.",\
                    nextScene: 'missedOpportunity',\
                    effects: \{ trust: -5, consent: -5 \}\
                \},\
            ]\
        \},\
        chat: \{\
            text: "You and Alex chat about music and mutual interests. The conversation flows smoothly.",\
            choices: [\
                \{ \
                    text: "Offer to get Alex a drink.",\
                    nextScene: 'offerDrink',\
                    effects: \{ trust: +5, consent: +5 \}\
                \},\
                \{ \
                    text: "Ask Alex about hobbies.",\
                    nextScene: 'hobbies',\
                    effects: \{ trust: +5, consent: +5 \}\
                \},\
            ]\
        \},\
        danceRequest: \{\
            text: "Alex hesitates for a moment.",\
            choices: [\
                \{ \
                    text: "Notice the hesitation and suggest chatting instead.",\
                    nextScene: 'chat',\
                    effects: \{ trust: +5, consent: +5 \}\
                \},\
                \{ \
                    text: "Insist on dancing.",\
                    nextScene: 'negativeOutcome',\
                    effects: \{ trust: -15, consent: -15 \}\
                \},\
            ]\
        \},\
        offerDrink: \{\
            text: "Alex appreciates the offer and accepts.",\
            choices: [\
                \{ \
                    text: "Get a drink and return promptly.",\
                    nextScene: 'continueConversation',\
                    effects: \{ trust: +5, consent: +5 \}\
                \},\
                \{ \
                    text: "Make a joke about the drink.",\
                    nextScene: 'negativeOutcome',\
                    effects: \{ trust: -25, consent: -25 \}\
                \},\
            ]\
        \},\
        hobbies: \{\
            text: "Alex talks enthusiastically about hobbies. You listen attentively.",\
            choices: [\
                \{ \
                    text: "Share your own hobbies.",\
                    nextScene: 'continueConversation',\
                    effects: \{ trust: +5, consent: +5 \}\
                \},\
                \{ \
                    text: "Interrupt with a personal story.",\
                    nextScene: 'negativeOutcome',\
                    effects: \{ trust: -10, consent: -10 \}\
                \},\
            ]\
        \},\
        continueConversation: \{\
            text: "The evening goes well. You both enjoy the conversation.",\
            choices: [\
                \{ \
                    text: "Ask for Alex's contact information to meet again.",\
                    nextScene: 'getContact',\
                    effects: \{ trust: +10, consent: +10 \}\
                \},\
                \{ \
                    text: "Suggest going somewhere private immediately.",\
                    nextScene: 'negativeOutcome',\
                    effects: \{ trust: -15, consent: -15 \}\
                \},\
            ]\
        \},\
        getContact: \{\
            text: "Alex smiles and gives you a phone number.",\
            choices: [\
                \{ \
                    text: "Thank Alex and say goodnight.",\
                    nextScene: 'positiveEnding',\
                    effects: \{ trust: +10, consent: +10 \}\
                \}\
            ]\
        \},\
        negativeOutcome: \{\
            text: "Alex feels uncomfortable with your actions and decides to leave.",\
            choices: [\
                \{ \
                    text: "Reflect on what went wrong.",\
                    nextScene: 'end',\
                    effects: \{ trust: 0, consent: 0 \}\
                \}\
            ]\
        \},\
        missedOpportunity: \{\
            text: "You look away, and the moment passes.",\
            choices: [\
                \{ \
                    text: "Decide to approach Alex after all.",\
                    nextScene: 'approach',\
                    effects: \{ trust: +5, consent: +5 \}\
                \},\
                \{ \
                    text: "Leave the party.",\
                    nextScene: 'end',\
                    effects: \{ trust: 0, consent: 0 \}\
                \},\
            ]\
        \},\
        positiveEnding: \{\
            text: "You leave the party feeling positive about the new connection.\\n\\nEnd of Chapter 1.",\
            choices: [\
                \{ \
                    text: "Continue to Chapter 2.",\
                    nextScene: 'chapter2Start',\
                    effects: \{ trust: 0, consent: 0 \}\
                \}\
            ]\
        \},\
        // Chapter 2 Scenes\
        chapter2Start: \{\
            text: "Chapter 2: The First Date\\n\\nA week later, you and Alex meet at a cozy caf\'e9 for your first date.",\
            choices: [\
                \{ \
                    text: "Greet Alex warmly and ask about their day.",\
                    nextScene: 'cafeGreeting',\
                    effects: \{ trust: +5, consent: +5 \}\
                \},\
                \{ \
                    text: "Make a light-hearted joke to break the ice.",\
                    nextScene: 'cafeJoke',\
                    effects: \{ trust: +5, consent: +5 \}\
                \},\
            ]\
        \},\
        cafeGreeting: \{\
            text: "Alex smiles and seems happy that you asked.",\
            choices: [\
                \{ \
                    text: "Listen attentively as Alex talks about their day.",\
                    nextScene: 'listenAttentively',\
                    effects: \{ trust: +10, consent: +10 \}\
                \},\
                \{ \
                    text: "Check your phone while Alex is talking.",\
                    nextScene: 'phoneCheck',\
                    effects: \{ trust: -10, consent: -10 \}\
                \},\
            ]\
        \},\
        cafeJoke: \{\
            text: "Alex laughs, appreciating your sense of humor.",\
            choices: [\
                \{ \
                    text: "Continue with playful banter.",\
                    nextScene: 'playfulBanter',\
                    effects: \{ trust: +5, consent: +5 \}\
                \},\
                \{ \
                    text: "Switch to a serious topic abruptly.",\
                    nextScene: 'abruptTopicChange',\
                    effects: \{ trust: -5, consent: -5 \}\
                \},\
            ]\
        \},\
        listenAttentively: \{\
            text: "Your attentiveness makes Alex feel valued.",\
            choices: [\
                \{ \
                    text: "Share something about your own day.",\
                    nextScene: 'shareOwnDay',\
                    effects: \{ trust: +5, consent: +5 \}\
                \},\
                \{ \
                    text: "Keep the focus solely on Alex.",\
                    nextScene: 'focusOnAlex',\
                    effects: \{ trust: +2, consent: +2 \}\
                \},\
            ]\
        \},\
        phoneCheck: \{\
            text: "Alex notices and seems a bit disheartened.",\
            choices: [\
                \{ \
                    text: "Apologize and put your phone away.",\
                    nextScene: 'apologizePhone',\
                    effects: \{ trust: +5, consent: +5 \}\
                \},\
                \{ \
                    text: "Continue checking your phone.",\
                    nextScene: 'negativeOutcomeDate',\
                    effects: \{ trust: -15, consent: -15 \}\
                \},\
            ]\
        \},\
        playfulBanter: \{\
            text: "The light-hearted conversation continues smoothly.",\
            choices: [\
                \{ \
                    text: "Suggest ordering drinks.",\
                    nextScene: 'orderDrinks',\
                    effects: \{ trust: +5, consent: +5 \}\
                \},\
                \{ \
                    text: "Ask Alex about hobbies.",\
                    nextScene: 'dateHobbies',\
                    effects: \{ trust: +5, consent: +5 \}\
                \},\
            ]\
        \},\
        abruptTopicChange: \{\
            text: "Alex seems caught off guard by the sudden shift.",\
            choices: [\
                \{ \
                    text: "Notice and steer back to a comfortable topic.",\
                    nextScene: 'steerConversation',\
                    effects: \{ trust: +5, consent: +5 \}\
                \},\
                \{ \
                    text: "Ignore Alex's discomfort.",\
                    nextScene: 'negativeOutcomeDate',\
                    effects: \{ trust: -10, consent: -10 \}\
                \},\
            ]\
        \},\
        shareOwnDay: \{\
            text: "Alex listens and engages with your story.",\
            choices: [\
                \{ \
                    text: "Find common interests to discuss.",\
                    nextScene: 'findCommonInterests',\
                    effects: \{ trust: +10, consent: +10 \}\
                \}\
            ]\
        \},\
        focusOnAlex: \{\
            text: "Alex appreciates your interest but wants to know more about you.",\
            choices: [\
                \{ \
                    text: "Share something personal when prompted.",\
                    nextScene: 'sharePersonal',\
                    effects: \{ trust: +5, consent: +5 \}\
                \}\
            ]\
        \},\
        apologizePhone: \{\
            text: "Alex smiles, accepting your apology.",\
            choices: [\
                \{ \
                    text: "Refocus on the conversation.",\
                    nextScene: 'findCommonInterests',\
                    effects: \{ trust: +5, consent: +5 \}\
                \}\
            ]\
        \},\
        orderDrinks: \{\
            text: "You both order your favorite beverages.",\
            choices: [\
                \{ \
                    text: "Propose a toast to new connections.",\
                    nextScene: 'toast',\
                    effects: \{ trust: +5, consent: +5 \}\
                \}\
            ]\
        \},\
        dateHobbies: \{\
            text: "Alex enthusiastically shares hobbies.",\
            choices: [\
                \{ \
                    text: "Express genuine interest.",\
                    nextScene: 'findCommonInterests',\
                    effects: \{ trust: +10, consent: +10 \}\
                \}\
            ]\
        \},\
        steerConversation: \{\
            text: "Alex seems relieved and the conversation improves.",\
            choices: [\
                \{ \
                    text: "Continue with engaging topics.",\
                    nextScene: 'findCommonInterests',\
                    effects: \{ trust: +5, consent: +5 \}\
                \}\
            ]\
        \},\
        sharePersonal: \{\
            text: "You share a personal story, deepening the connection.",\
            choices: [\
                \{ \
                    text: "Suggest meeting again soon.",\
                    nextScene: 'suggestSecondDate',\
                    effects: \{ trust: +10, consent: +10 \}\
                \}\
            ]\
        \},\
        findCommonInterests: \{\
            text: "You discover shared interests, and the conversation flows effortlessly.",\
            choices: [\
                \{ \
                    text: "Mention an event you both might enjoy.",\
                    nextScene: 'mentionEvent',\
                    effects: \{ trust: +5, consent: +5 \}\
                \}\
            ]\
        \},\
        toast: \{\
            text: "Alex clinks glasses with you, smiling warmly.",\
            choices: [\
                \{ \
                    text: "Discuss future plans.",\
                    nextScene: 'suggestSecondDate',\
                    effects: \{ trust: +5, consent: +5 \}\
                \}\
            ]\
        \},\
        mentionEvent: \{\
            text: "Alex seems interested in attending together.",\
            choices: [\
                \{ \
                    text: "Invite Alex to the event.",\
                    nextScene: 'suggestSecondDate',\
                    effects: \{ trust: +10, consent: +10 \}\
                \}\
            ]\
        \},\
        suggestSecondDate: \{\
            text: "Alex happily agrees to meet again.",\
            choices: [\
                \{ \
                    text: "End the date on a positive note.",\
                    nextScene: 'chapter2End',\
                    effects: \{ trust: +10, consent: +10 \}\
                \}\
            ]\
        \},\
        negativeOutcomeDate: \{\
            text: "Alex feels disconnected and decides to end the date early.",\
            choices: [\
                \{ \
                    text: "Reflect on what went wrong.",\
                    nextScene: 'end',\
                    effects: \{ trust: 0, consent: 0 \}\
                \}\
            ]\
        \},\
        chapter2End: \{\
            text: "You've successfully built a stronger connection with Alex.\\n\\nFeedback:\\n- Your active listening and genuine interest increased trust.\\n- Respecting Alex's boundaries reinforced valid consent.\\n\\nEnd of Chapter 2.",\
            choices: [\
                \{ \
                    text: "Continue to Chapter 3.",\
                    nextScene: 'chapter3Start',\
                    effects: \{ trust: 0, consent: 0 \}\
                \}\
            ]\
        \},\
\
        // Chapter 3 Scenes\
        chapter3Start: \{\
            text: "Chapter 3: A Moment of Intimacy\\n\\nAfter several enjoyable dates, you and Alex are at Alex's place watching a movie.",\
            choices: [\
                \{ \
                    text: "Sit close and wait for a sign from Alex.",\
                    nextScene: 'waitForSign',\
                    effects: \{ trust: +5, consent: +5 \}\
                \},\
                \{ \
                    text: "Put your arm around Alex casually.",\
                    nextScene: 'armAround',\
                    effects: \{ trust: +5, consent: +5 \}\
                \},\
            ]\
        \},\
        waitForSign: \{\
            text: "Alex notices your patience and leans closer.",\
            choices: [\
                \{ \
                    text: "Gently hold Alex's hand.",\
                    nextScene: 'holdHand',\
                    effects: \{ trust: +5, consent: +5 \}\
                \},\
                \{ \
                    text: "Ask if it's okay to put your arm around them.",\
                    nextScene: 'askArmAround',\
                    effects: \{ trust: +10, consent: +10 \}\
                \},\
            ]\
        \},\
        armAround: \{\
            text: "Alex seems comfortable and smiles at you.",\
            choices: [\
                \{ \
                    text: "Enjoy the moment quietly.",\
                    nextScene: 'enjoyMoment',\
                    effects: \{ trust: +5, consent: +5 \}\
                \},\
                \{ \
                    text: "Turn to face Alex directly.",\
                    nextScene: 'faceAlex',\
                    effects: \{ trust: +5, consent: +5 \}\
                \},\
            ]\
        \},\
        holdHand: \{\
            text: "Alex squeezes your hand gently.",\
            choices: [\
                \{ \
                    text: "Look into Alex's eyes.",\
                    nextScene: 'eyeContact',\
                    effects: \{ trust: +5, consent: +5 \}\
                \}\
            ]\
        \},\
        askArmAround: \{\
            text: "Alex appreciates you asking and agrees.",\
            choices: [\
                \{ \
                    text: "Place your arm around Alex.",\
                    nextScene: 'enjoyMoment',\
                    effects: \{ trust: +5, consent: +5 \}\
                \}\
            ]\
        \},\
        enjoyMoment: \{\
            text: "You both enjoy the closeness while watching the movie.",\
            choices: [\
                \{ \
                    text: "Consider initiating a kiss.",\
                    nextScene: 'considerKiss',\
                    effects: \{ trust: +5, consent: +5 \}\
                \}\
            ]\
        \},\
        faceAlex: \{\
            text: "Alex meets your gaze, a hint of anticipation in their eyes.",\
            choices: [\
                \{ \
                    text: "Ask if you can kiss Alex.",\
                    nextScene: 'askKiss',\
                    effects: \{ trust: +10, consent: +10 \}\
                \},\
                \{ \
                    text: "Lean in slowly for a kiss.",\
                    nextScene: 'leanInKiss',\
                    effects: \{ trust: +5, consent: +5 \}\
                \},\
            ]\
        \},\
        eyeContact: \{\
            text: "The moment feels right.",\
            choices: [\
                \{ \
                    text: "Gently ask if you can kiss Alex.",\
                    nextScene: 'askKiss',\
                    effects: \{ trust: +10, consent: +10 \}\
                \}\
            ]\
        \},\
        considerKiss: \{\
            text: "You sense that Alex might be open to a kiss.",\
            choices: [\
                \{ \
                    text: "Proceed with caution.",\
                    nextScene: 'leanInKiss',\
                    effects: \{ trust: +5, consent: +5 \}\
                \},\
                \{ \
                    text: "Decide to wait for another time.",\
                    nextScene: 'waitAnotherTime',\
                    effects: \{ trust: +5, consent: +5 \}\
                \},\
            ]\
        \},\
        askKiss: \{\
            text: "Alex smiles and says yes.",\
            choices: [\
                \{ \
                    text: "Share a gentle kiss.",\
                    nextScene: 'firstKiss',\
                    effects: \{ trust: +10, consent: +10 \}\
                \}\
            ]\
        \},\
        leanInKiss: \{\
            text: "As you lean in, Alex meets you halfway, and you share a kiss.",\
            choices: [\
                \{ \
                    text: "Continue if it feels right.",\
                    nextScene: 'continueIntimacy',\
                    effects: \{ trust: +5, consent: +5 \}\
                \},\
                \{ \
                    text: "Pause to gauge Alex's comfort.",\
                    nextScene: 'gaugeComfort',\
                    effects: \{ trust: +10, consent: +10 \}\
                \},\
            ]\
        \},\
        waitAnotherTime: \{\
            text: "You decide not to rush things. Alex seems content with your company.",\
            choices: [\
                \{ \
                    text: "Enjoy the rest of the evening.",\
                    nextScene: 'chapter3End',\
                    effects: \{ trust: +5, consent: +5 \}\
                \}\
            ]\
        \},\
        firstKiss: \{\
            text: "The kiss feels natural and mutual.",\
            choices: [\
                \{ \
                    text: "Ask Alex how they feel.",\
                    nextScene: 'checkIn',\
                    effects: \{ trust: +10, consent: +10 \}\
                \}\
            ]\
        \},\
        continueIntimacy: \{\
            text: "You continue sharing affectionate moments.",\
            choices: [\
                \{ \
                    text: "Be attentive to Alex's reactions.",\
                    nextScene: 'attentiveReactions',\
                    effects: \{ trust: +10, consent: +10 \}\
                \},\
                \{ \
                    text: "Assume everything is okay without checking.",\
                    nextScene: 'assumeComfort',\
                    effects: \{ trust: -10, consent: -10 \}\
                \},\
            ]\
        \},\
        gaugeComfort: \{\
            text: "Alex appreciates your consideration.",\
            choices: [\
                \{ \
                    text: "Continue with Alex's enthusiastic consent.",\
                    nextScene: 'attentiveReactions',\
                    effects: \{ trust: +10, consent: +10 \}\
                \}\
            ]\
        \},\
        checkIn: \{\
            text: "Alex expresses happiness and comfort.",\
            choices: [\
                \{ \
                    text: "Enjoy the rest of the evening together.",\
                    nextScene: 'chapter3End',\
                    effects: \{ trust: +10, consent: +10 \}\
                \}\
            ]\
        \},\
        attentiveReactions: \{\
            text: "Your attentiveness strengthens your connection.",\
            choices: [\
                \{ \
                    text: "End the night on a positive note.",\
                    nextScene: 'chapter3End',\
                    effects: \{ trust: +10, consent: +10 \}\
                \}\
            ]\
        \},\
        assumeComfort: \{\
            text: "Alex starts to seem uneasy.",\
            choices: [\
                \{ \
                    text: "Notice and ask if everything is okay.",\
                    nextScene: 'checkIn',\
                    effects: \{ trust: +5, consent: +5 \}\
                \},\
                \{ \
                    text: "Ignore the signs and continue.",\
                    nextScene: 'negativeOutcomeIntimacy',\
                    effects: \{ trust: -20, consent: -20 \}\
                \},\
            ]\
        \},\
        negativeOutcomeIntimacy: \{\
            text: "Alex feels uncomfortable and asks you to leave.",\
            choices: [\
                \{ \
                    text: "Apologize and leave respectfully.",\
                    nextScene: 'end',\
                    effects: \{ trust: -10, consent: -10 \}\
                \}\
            ]\
        \},\
        chapter3End: \{\
            text: "You have navigated the moment with care and respect.\\n\\nFeedback:\\n- Your sensitivity to Alex's comfort enhanced trust.\\n- Seeking ongoing consent reinforced mutual respect.\\n\\nEnd of Chapter 3.",\
            choices: [\
                \{ \
                    text: "Continue to Chapter 4.",\
                    nextScene: 'chapter4Start',\
                    effects: \{ trust: 0, consent: 0 \}\
                \}\
            ]\
        \},\
\
        // Chapter 4 Scenes\
        chapter4Start: \{\
            text: "Chapter 4: Misunderstandings and Conflicts\\n\\nYou notice Alex has been somewhat distant lately.",\
            choices: [\
                \{ \
                    text: "Reach out to ask if everything is okay.",\
                    nextScene: 'reachOut',\
                    effects: \{ trust: +5, consent: +5 \}\
                \},\
                \{ \
                    text: "Assume Alex needs space and wait.",\
                    nextScene: 'giveSpace',\
                    effects: \{ trust: 0, consent: 0 \}\
                \},\
            ]\
        \},\
        reachOut: \{\
            text: "Alex appreciates you checking in and shares that they felt hurt by a comment you made.",\
            choices: [\
                \{ \
                    text: "Listen actively and apologize sincerely.",\
                    nextScene: 'apologizeConflict',\
                    effects: \{ trust: +10, consent: +10 \}\
                \},\
                \{ \
                    text: "Defend your comment without listening.",\
                    nextScene: 'defensiveResponse',\
                    effects: \{ trust: -10, consent: -10 \}\
                \},\
            ]\
        \},\
        giveSpace: \{\
            text: "After some time, Alex feels that you're not interested in resolving issues.",\
            choices: [\
                \{ \
                    text: "Decide to reach out after all.",\
                    nextScene: 'reachOut',\
                    effects: \{ trust: 0, consent: 0 \}\
                \},\
                \{ \
                    text: "Continue to wait.",\
                    nextScene: 'negativeOutcomeConflict',\
                    effects: \{ trust: -10, consent: -10 \}\
                \},\
            ]\
        \},\
        apologizeConflict: \{\
            text: "Your apology opens up a constructive dialogue.",\
            choices: [\
                \{ \
                    text: "Discuss ways to communicate better.",\
                    nextScene: 'discussCommunication',\
                    effects: \{ trust: +10, consent: +10 \}\
                \}\
            ]\
        \},\
        defensiveResponse: \{\
            text: "Alex feels unheard and grows more distant.",\
            choices: [\
                \{ \
                    text: "Realize your mistake and apologize.",\
                    nextScene: 'apologizeConflict',\
                    effects: \{ trust: +5, consent: +5 \}\
                \},\
                \{ \
                    text: "Stand firm without considering Alex's feelings.",\
                    nextScene: 'negativeOutcomeConflict',\
                    effects: \{ trust: -15, consent: -15 \}\
                \},\
            ]\
        \},\
        negativeOutcomeConflict: \{\
            text: "The lack of communication leads to a rift in the relationship.",\
            choices: [\
                \{ \
                    text: "Reflect on what went wrong.",\
                    nextScene: 'end',\
                    effects: \{ trust: 0, consent: 0 \}\
                \}\
            ]\
        \},\
        discussCommunication: \{\
            text: "Together, you establish ways to prevent future misunderstandings.",\
            choices: [\
                \{ \
                    text: "Reaffirm your commitment to mutual respect.",\
                    nextScene: 'reaffirmCommitment',\
                    effects: \{ trust: +10, consent: +10 \}\
                \}\
            ]\
        \},\
        reaffirmCommitment: \{\
            text: "Your relationship grows stronger through this conflict resolution.",\
            choices: [\
                \{ \
                    text: "Plan a fun activity to reconnect.",\
                    nextScene: 'planActivity',\
                    effects: \{ trust: +5, consent: +5 \}\
                \}\
            ]\
        \},\
        planActivity: \{\
            text: "You both look forward to spending quality time together.\\n\\nFeedback:\\n- Addressing issues openly reinforced trust.\\n- Mutual respect and care strengthened your relationship.\\n\\nEnd of Chapter 4.",\
            choices: [\
                \{ \
                    text: "Thank you for playing! More chapters coming soon.",\
                    nextScene: 'end',\
                    effects: \{ trust: 0, consent: 0 \}\
                \}\
            ]\
        \},\
\
        // End scene\
        end: \{\
            text: "The interaction has ended.\\n\\nWould you like to play again?",\
            choices: [\
                \{ \
                    text: "Restart the Game.",\
                    nextScene: 'start',\
                    effects: \{ trust: 0, consent: 0 \}\
                \}\
            ]\
        \}\
    \}\
\};\
\
// Initialize game\
function startGame() \{\
    gameData.trust = 50;\
    gameData.consent = 50;\
    gameData.currentScene = 'start';\
    updateScene();\
\}\
\
// Update the scene\
function updateScene() \{\
    const scene = gameData.scenes[gameData.currentScene];\
    document.getElementById('story').innerText = scene.text;\
    const choicesDiv = document.getElementById('choices');\
    choicesDiv.innerHTML = '';\
    scene.choices.forEach((choice, index) => \{\
        const button = document.createElement('button');\
        button.className = 'choice-button';\
        button.innerText = choice.text;\
        button.addEventListener('click', () => \{\
            makeChoice(index);\
        \});\
        choicesDiv.appendChild(button);\
    \});\
    updateMeters();\
\}\
\
// Handle choices\
function makeChoice(choiceIndex) \{\
    const scene = gameData.scenes[gameData.currentScene];\
    const choice = scene.choices[choiceIndex];\
    gameData.trust += choice.effects.trust;\
    gameData.consent += choice.effects.consent;\
    if (gameData.trust > 100) gameData.trust = 100;\
    if (gameData.trust < 0) gameData.trust = 0;\
    if (gameData.consent > 100) gameData.consent = 100;\
    if (gameData.consent < 0) gameData.consent = 0;\
    gameData.currentScene = choice.nextScene;\
    updateScene();\
\}\
\
// Update meters\
function updateMeters() \{\
    document.getElementById('trustMeter').value = gameData.trust;\
    document.getElementById('consentMeter').value = gameData.consent;\
\}\
\
// Start the game on page load\
window.onload = startGame;}