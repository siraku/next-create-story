"use client";
import { Textarea } from "@nextui-org/input";
import React from "react";

function StroyInput({ userSelection }: any) {
  return (
    <div>
      <label className="text-3xl font-bold">Subject of story</label>
      <Textarea
        placeholder="Enter your description"
        classNames={{ input: "resize-y min-h-[230px] text-2xl p-5" }}
        className="mt-3 max-w-lg"
        onChange={(e) =>
          userSelection({
            fieldValue: e.target.value,
            fieldName: "storySubject",
          })
        }
      />
    </div>
  );
}

export default StroyInput;
