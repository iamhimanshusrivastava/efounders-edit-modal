import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import { XMarkIcon, Cog8ToothIcon } from "@heroicons/react/24/outline";

import Tabs from "../components/Tabs";
import SwitchButton from "../components/SwitchButton";
import RadioCards from "../components/RadioCards";

const Modal = () => {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <Fragment>
      <div className="fixed inset-0 flex items-center justify-center h-screen bg-gradient-to-r from-amber-300 to-orange-500">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open modal
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-00"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="h-screen select-none overflow-y-scroll scroll-smooth">
            <div className="flex px-4 py-8 justify-center sm:items-center h-auto sm:h-screen">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
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
                      <XMarkIcon
                        onClick={closeModal}
                        className="w-5 h-5 text-gray-500 hover:cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-3 px-10">
                    {/* Tabs  */}
                    <Tabs />

                    {/* Option 1 (Switch) */}
                    <div className="py-6 flex justify-between items-center border-b border-gray-200">
                      <div className="flex flex-col">
                        <h3 className="text-lg font-medium text-gray-800">
                          Active program
                        </h3>
                        <p className="text-base font-medium text-gray-500">
                          If you deactivate the program, the next phisphing
                          campaign won&apos;t be sent.
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
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-4 py-2 text-base text-gray-800 bg-white font-medium border border-gray-300 rounded-md hover:sm:scale-105 transition ease-linear delay-30 w-full sm:w-auto"
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-4 py-2 text-base text-white bg-gray-800 font-medium border border-gray-300 rounded-md hover:bg-gray-700 hover:sm:scale-105 transition ease-linear delay-30 w-full sm:w-auto"
                    >
                      Update program
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Fragment>
  );
};

export default Modal;
