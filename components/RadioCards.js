import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const frequencyLists = [
  {
    id: 1,
    title: "Relaxed",
    description: "New campaign sent two months",
  },
  {
    id: 2,
    title: "Normal",
    description: "New campaign sent every month",
  },
  {
    id: 3,
    title: "Accelerated",
    description: "New campaign sent every two weeks",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const RadioCards = () => {
  const [selectedfrequencyLists, setSelectedfrequencyLists] = useState(
    frequencyLists[0]
  );

  return (
    <RadioGroup
      value={selectedfrequencyLists}
      onChange={setSelectedfrequencyLists}
    >
      <div className="flex flex-col">
        <RadioGroup.Label className="text-lg font-medium text-gray-800">
          Sending frequency
        </RadioGroup.Label>
        <RadioGroup.Label className="text-base font-medium text-gray-500">
          Choose the frequency at which the campaigns will be sent.
        </RadioGroup.Label>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
        {frequencyLists.map((frequencyList) => (
          <RadioGroup.Option
            key={frequencyList.id}
            value={frequencyList}
            className={({ checked, active }) =>
              classNames(
                checked ? "border-transparent bg-blue-50" : "border-gray-300",
                active ? "ring-1 ring-gray-800" : "",
                "relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none"
              )
            }
          >
            {({ checked, active }) => (
              <>
                <div className="flex-1 flex">
                  <div className="flex flex-col">
                    <RadioGroup.Label
                      as="span"
                      className="block text-sm font-medium text-gray-900"
                    >
                      {frequencyList.title}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="span"
                      className="mt-1 flex items-center text-sm text-gray-500"
                    >
                      {frequencyList.description}
                    </RadioGroup.Description>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={classNames(
                    !checked ? "invisible" : "",
                    "h-5 w-5 text-gray-800"
                  )}
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                <div
                  className={classNames(
                    active ? "border" : "border-2",
                    checked ? "border-gray-800" : "border-transparent",
                    "absolute -inset-px rounded-lg pointer-events-none"
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default RadioCards;
