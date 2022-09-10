import { Fragment } from "react";
import { XMarkIcon, Cog8ToothIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import { Switch } from "@headlessui/react";
import { RadioGroup } from "@headlessui/react";

const tabs = [
  { name: "General", href: "#", current: true },
  { name: "Software & scenarios", href: "#", current: false },
];

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

export default function Example() {
  const [enabled, setEnabled] = useState(false);
  const [selectedfrequencyLists, setSelectedfrequencyLists] = useState(
    frequencyLists[0]
  );

  return (
    <Fragment>
      <div className="h-screen bg-gray-100 select-none overflow-y-scroll scroll-smooth">
        <div className="flex px-2 sm:px-4 py-6 justify-center sm:items-center h-auto sm:h-screen">
          <div className="bg-white font-inter rounded-lg shadow-sm">
            {/* Heading  */}
            <div className="px-10 py-4 flex justify-between items-center  border-b border-gray-200">
              <div className="flex space-x-2 items-center">
                <Cog8ToothIcon className="w-6 h-6 text-gray-500" />
                <h3 className="block w-full text-base text-gray-500 font-medium">
                  Edit phisphing program
                </h3>
              </div>
              <div>
                <XMarkIcon className="w-5 h-5 text-gray-500 hover:cursor-pointer" />
              </div>
            </div>

            <div className="mt-6 sm:mt-3 px-10">
              {/* Tabs  */}
              <div>
                <div className="sm:hidden">
                  <label htmlFor="tabs" className="sr-only">
                    Select a tab
                  </label>
                  {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                  <select
                    id="tabs"
                    name="tabs"
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-gray-800 focus:border-gray-800 sm:text-sm rounded-md"
                    defaultValue={tabs.find((tab) => tab.current).name}
                  >
                    {tabs.map((tab) => (
                      <option key={tab.name}>{tab.name}</option>
                    ))}
                  </select>
                </div>
                <div className="hidden sm:block">
                  <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                      {tabs.map((tab) => (
                        <a
                          key={tab.name}
                          href={tab.href}
                          className={classNames(
                            tab.current
                              ? "border-gray-900 text-gray-900"
                              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                            "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                          )}
                          aria-current={tab.current ? "page" : undefined}
                        >
                          {tab.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
              {/* Option 1 */}
              <div className="py-6 flex justify-between items-center border-b border-gray-200">
                <div className="flex flex-col">
                  <h3 className="text-lg font-medium text-gray-900">
                    Active program
                  </h3>
                  <p className="text-base font-medium text-gray-500">
                    If you deactivate the program, the next phisphing campaign
                    won&apos;t be sent.
                  </p>
                </div>
                <div>
                  <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${enabled ? "bg-orange-500" : "bg-gray-200"}
          relative inline-flex h-[22px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={`${
                        enabled ? "translate-x-[18px]" : "translate-x-0"
                      }
            pointer-events-none inline-block h-[19px] w-[19px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                  </Switch>
                </div>
              </div>
              {/* Option 2 (Radio) */}
              <div className="pt-6 py-8 flex border-b border-gray-200">
                <RadioGroup
                  value={selectedfrequencyLists}
                  onChange={setSelectedfrequencyLists}
                >
                  <div className="flex flex-col">
                    <RadioGroup.Label className="text-lg font-medium text-gray-900">
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
                            checked
                              ? "border-transparent bg-gray-50"
                              : "border-gray-300",
                            active ? "ring-1 ring-orange-500" : "",
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
                                  className={classNames(
                                    checked ? "text-gray-900" : "text-gray-500",
                                    "block text-sm font-medium"
                                  )}
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
                                "h-5 w-5 text-orange-500"
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
                                checked
                                  ? "border-orange-500"
                                  : "border-transparent",
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
              </div>
            </div>

            {/* Buttons  */}
            <div className="px-10 py-4 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              <button className="px-4 py-2 text-base text-gray-800 bg-white font-medium border border-gray-300 rounded-md hover:sm:scale-105 transition ease-linear delay-30 w-full sm:w-auto">
                Cancel
              </button>

              <button className="px-4 py-2 text-base text-white bg-gray-800 font-medium border border-gray-300 rounded-md hover:bg-gray-700 hover:sm:scale-105 transition ease-linear delay-30 w-full sm:w-auto">
                Update program
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
