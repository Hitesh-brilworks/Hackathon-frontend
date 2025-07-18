import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { LuX } from "react-icons/lu";
export const Modal = ({
  title,
  children,
  open,
  close,
  staticModal,
  hideCloseButton,
  className,
  panelClassName,
  hideOverlay,
  position = "",
  widthClassName,
}) => {
  const { top, left, bottom, right } = position || {};
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        onClose={() => {
          !staticModal && close();
        }}
        className={["relative z-20", className].join(" ")}
      >
        {!hideOverlay && (
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
        )}
        <div
          className={[
            "fixed inset-0 overflow-y-auto w-full",
            widthClassName,
          ].join(" ")}
          style={{ top, bottom, left, right }}
        >
          <div
            className={[
              "min-h-full p-4",
              !position ? "flex items-center justify-center" : "",
            ].join(" ")}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={[
                  "w-full max-w-md transform rounded-lg bg-white shadow-xl transition-all flex flex-col",
                  panelClassName,
                ].join(" ")}
              >
                {!(!title && hideCloseButton) && (
                  <Dialog.Title>
                    <div
                      className={`w-full font-semibold p-5 flex items-center border-b ${
                        title ? "justify-between" : "justify-end"
                      }`}
                    >
                      {title &&
                        (typeof title === "string" ? (
                          <h3 className="text-xl">{title} </h3>
                        ) : (
                          title
                        ))}
                      {!hideCloseButton && (
                        <button
                          onClick={close}
                          className="hover:bg-gray-100 p-0.5 rounded-md"
                        >
                          <LuX size={24} />
                        </button>
                      )}
                    </div>
                  </Dialog.Title>
                )}
                <div className="p-5">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
