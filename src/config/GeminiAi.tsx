/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: "create kids story on description for 5-7 years kids, educational story. story of boys and magic school . give me five chapter.  all in json format.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "story": {\n    "title": "The Magic School of Whimsy",\n    "chapters": [\n      {\n        "chapter_number": 1,\n        "title": "The Curious Invitation",\n        "text": "Oliver and Lily were the best of friends. They loved exploring their backyard, building forts, and dreaming of adventures. One sunny afternoon, while searching for hidden treasures in their treehouse, Oliver found a small, shimmering envelope tucked under a loose board. It was addressed to \\"Oliver and Lily, Future Wizards.\\" Curious, they opened it, revealing a handwritten note: \\"Welcome to the Magic School of Whimsy! Your lessons begin at sunset. Follow the rainbow.\\""\n      },\n      {\n        "chapter_number": 2,\n        "title": "Following the Rainbow",\n        "text": "Oliver and Lily gasped. A magic school?! They looked at each other, excitement bubbling in their bellies. As the sun began to set, a rainbow arced across the sky. With bated breath, they followed its colors, their hearts pounding with anticipation. The rainbow led them to a clearing in the woods, where a magnificent castle shimmered with rainbow light. It was unlike anything they had ever seen!"\n      },\n      {\n        "chapter_number": 3,\n        "title": "Welcome to Whimsy",\n        "text": "As they stepped inside the castle, they were greeted by a friendly, pink-haired wizard named Professor Twinkle. He welcomed them to the Magic School of Whimsy, explaining that they were chosen for their adventurous spirits and kind hearts. Oliver and Lily felt a sense of wonder and belonging. They met other students, like a mischievous gnome named Pip who loved to play pranks, and a shy dragon named Sparkle who could breathe out glitter!"\n      },\n      {\n        "chapter_number": 4,\n        "title": "Magic Lessons",\n        "text": "Their first lesson was in Spellcraft. Professor Twinkle taught them how to cast simple spells, like turning water into lemonade and making flowers bloom. Oliver learned to make objects levitate, while Lily discovered she had a knack for conjuring rainbows. The magic filled their hearts with joy, and they couldn\'t wait to learn more!"\n      },\n      {\n        "chapter_number": 5,\n        "title": "The Magic of Friendship",\n        "text": "As days turned into weeks, Oliver and Lily learned about different types of magic, from potion brewing to cloud painting. But they also learned something even more important: the magic of friendship. They helped each other with their spells, supported each other during difficult times, and celebrated each other\'s successes. Together, they realized that true magic comes from kindness, courage, and the power of believing in yourself and your friends."\n      }\n    ]\n  }\n}\n``` \n',
        },
      ],
    },
  ],
});

export const PROMPT_TEMPLATE =
  "create kids story on description for {ageGroup} kids, {story type}. story of {story subject} . give me five chapter.  all in json format.";
