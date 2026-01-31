import { useRef, useState } from "react";
import firebaseLogic from "../services/firebaseLogic";

const useMessages = () => {

  const { get, reference } = firebaseLogic();
  const identity = useRef(0);

  const [messageState, setMessageState] = useState({
    newMessage: false,
    chatUser: null,
    there: false,
    filled: false,
    many: '',
    chatId: '',
    listOfUserMessages: []
  });

  const handleNewMessage = async (e) => {
    e.preventDefault();

    try {
      const snapshot = await get(reference);

      if (!snapshot.exists()) {
        setMessageState(p => ({ ...p, there: true }));
        return;
      }

      const usersArray = Object.values(snapshot.val());

      const found = usersArray.find(
        user => user.email === e.target.elements.email.value
      );

      if (!found) {
        setMessageState(p => ({ ...p, there: true }));
        return;
      }

      setMessageState(p => ({
        ...p,
        chatUser: found,
        listOfUserMessages: p.listOfUserMessages.some(
          msg => msg.email === found.email
        )
          ? p.listOfUserMessages
          : [...p.listOfUserMessages, { id: ++identity.current, ...found }],
        newMessage: false
      }));

    } catch (err) {
      console.error(err);
    }
  };

  return { messageState, setMessageState, handleNewMessage };
};

export default useMessages;
