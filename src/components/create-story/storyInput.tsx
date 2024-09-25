"use client";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";
import { Radio, RadioGroup } from "@nextui-org/radio";

function StroyInput({ userSelection, aiGenerateStory }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-10 h-screen">
      <div className="pl-20">
        <label className="text-3xl font-bold">Subject of story</label>
        <Textarea
          placeholder="Enter your description"
          classNames={{ input: "resize-y min-h-[230px] text-2xl p-5" }}
          className="mt-3 max-w-lg"
          onChange={(e) =>
            userSelection({
              fieldName: "storySubject",
              fieldValue: e.target.value,
            })
          }
        />
      </div>
      <div className="">
        <label className="text-3xl font-bold">Select option</label>
        <div className="grid grid-cols-2 ">
          <RadioGroup
            label="Select story type"
            className="pt-5 "
            size="md"
            onChange={(event) => {
              //   console.log(event.target.value);
              userSelection({
                fieldName: "storyType",
                fieldValue: event.target.value,
              });
            }}
          >
            <Radio value="fairy story">Fairy Story</Radio>
            <Radio value="bed story">Bed Story</Radio>
            <Radio value="educational story">Educational Story</Radio>
          </RadioGroup>

          <RadioGroup
            label="Select age group"
            className="pt-5"
            onChange={(event) => {
              //   console.log(event.target.value);
              userSelection({
                fieldName: "ageGroup",
                fieldValue: event.target.value,
              });
            }}
          >
            <Radio value="0-2 years">0-2 years</Radio>
            <Radio value="3-5 years">3-5 years</Radio>
            <Radio value="6-8 years">6-8 years</Radio>
          </RadioGroup>
        </div>
        <div className="mt-10 flex justify-end mr-10">
          <Button color="primary" onClick={() => aiGenerateStory()}>
            Generate Story
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StroyInput;
