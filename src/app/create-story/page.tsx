"use client";
import StroyInput from "@/components/create-story/storyInput";
import React, { useEffect, useState } from "react";

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
