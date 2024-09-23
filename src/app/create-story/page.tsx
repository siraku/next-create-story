"use client";
import StroyInput from "@/components/create-story/storyInput";
import React from "react";

export interface fieldDate {
  fieldName: string;
  fieldValue: string;
}

function CreateStory() {
  const onHandleUserSelection = (data: fieldDate) => {
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-4xl font-bold flex justify-center pt-5">
        Create your story
      </h1>
      <StroyInput userSelection={onHandleUserSelection} />
    </div>
  );
}

export default CreateStory;
