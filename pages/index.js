import { Fragment } from "react";
import { XMarkIcon, Cog8ToothIcon } from "@heroicons/react/24/outline";

import Tabs from "../components/Tabs";
import SwitchButton from "../components/SwitchButton";
import RadioCards from "../components/RadioCards";

export default function Example() {
  return (
    <Fragment>
      <div className="h-screen bg-gray-100 select-none overflow-y-scroll">
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
              <Tabs />
              {/* Option 1 */}
              <div className="py-6 flex justify-between items-center border-b border-gray-200">
                <div className="flex flex-col">
                  <h3 className="text-lg font-medium text-gray-800">
                    Active program
                  </h3>
                  <p className="text-base font-medium text-gray-500">
                    If you deactivate the program, the next phisphing campaign
                    won&apos;t be sent.
                  </p>
                </div>
                <SwitchButton />
              </div>
              {/* Option 2 (Radio) */}
              <div className="pt-6 py-8 flex border-b border-gray-200">
                <RadioCards />
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
