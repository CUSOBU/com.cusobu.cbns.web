import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const DetailsContext = createContext();

function DetailsContextProvider(props) {
  const [dialog, setDialog] = useState({ isOpen: false });

  const openDialog = useCallback((dialog, payload) => {
    setDialog({ isOpen: true, dialog, payload });
  }, []);

  const closeDialog = useCallback(() => {
    setDialog({ isOpen: false, dialog: null });
  }, []);

  return (
    <DetailsContext.Provider
      value={{ ...dialog, openDialog, closeDialog }}
      {...props}
    />
  );
}

function useDetailsContext(dialog) {
  const context = useContext(DetailsContext);
  if (context === undefined) {
    throw new Error(
      "useDialogContext must be used within a DetailsContextProvider"
    );
  }

  const { openDialog, closeDialog, setOpen } = useMemo(() => {
    const openDialog = (payload) => context.openDialog(dialog, payload);
    const closeDialog = () => context.closeDialog();
    const setOpen = (value) =>
      value ? context.openDialog(dialog) : context.closeDialog();
    return { openDialog, closeDialog, setOpen };
  }, [context.openDialog, context.closeDialog]);

  const isOpen = context.isOpen && context.dialog === dialog;
  try {
    return {
      openDialog,
      closeDialog,
      setOpen,
      isOpen,
      payload: isOpen ? context.payload : null,
    };
  } catch (e) {
    return {
      openDialog: () => {},
      closeDialog: () => {},
    };
  }
}

export { DetailsContextProvider, useDetailsContext };
