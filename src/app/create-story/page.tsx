"use client";
import StroyInput from "@/components/create-story/storyInput";
import { db } from "@/config/db";
import { chatSession, PROMPT_TEMPLATE } from "@/config/GeminiAi";
import { StoryData } from "@/config/schema";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface fieldDate {
  fieldName: string;
  fieldValue: string;
}
export interface formDataType {
  storySubject: string;
  storyType: string;
  ageGroup: string;
}

function CreateStory() {
  const [formData, setFormData] = useState<formDataType>({
    storySubject: "",
    storyType: "",
    ageGroup: "",
  });

  const onHandleUserSelection = (data: fieldDate) => {
    setFormData((prev: any) => ({
      ...prev,
      [data.fieldName]: data.fieldValue,
    }));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const aiGenerateStory = async () => {
    const finalPrompt = PROMPT_TEMPLATE.replace("{ageGroup}", formData.ageGroup)
      .replace("{story type}", formData.storyType)
      .replace("{story subject}", formData.storySubject);

    try {
      // console.log(finalPrompt);
      const result = await chatSession.sendMessage(finalPrompt);
      console.log(result.response.text());
      saveInDB(result.response.text());
    } catch (error) {
      console.log(error);
    }
  };

  const saveInDB = async (storyContent: string) => {
    const recordId = uuidv4();
    console.log("UUID:" + recordId);
    const result = await db.insert(StoryData).values({
      id: recordId,
      storySubject: formData.storySubject,
      storyType: formData.storyType,
      ageGroup: formData.ageGroup,
      storyContent: JSON.parse(storyContent),
    });
  };

  return (
    <div>
      <h1 className="text-4xl font-bold flex justify-center pt-5">
        Create your story
      </h1>
      <StroyInput
        userSelection={onHandleUserSelection}
        aiGenerateStory={aiGenerateStory}
      />
    </div>
  );
}

export default CreateStory;
