export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => {
    window.addEventListener("beforeunload", listener);
    console.log("Protect");
  };
  const disablePrevent = () => {
    window.removeEventListener("beforeunload", listener);
    console.log("disableProtect");
  };
  return { enablePrevent, disablePrevent };
};
