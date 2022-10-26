import Svg from "../Svg";
import Button from "../Button";
import { ModalBackground, Modal } from "./AddTodo.styled.js";
import { useState } from "react";

export default function AddTodo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        variant="floating"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        <Svg variant="add" color="#fff" />
      </Button>
      {isOpen && (
        <ModalBackground>
          <Modal>
            <Button
              type="button"
              variant="close"
              onClick={() => {
                setIsOpen((isOpen) => !isOpen);
              }}
            >
              <Svg variant="close" color="#3d3d3d" />
            </Button>

            {/* Here goes the form to add ToDos.  */}
            <form>
              <label htmlFor="input-todo">Your new ToDo</label>
              <input type="text" id="input-todo" maxLength={20} required></input>
              <input type="radio" id="radio-always" value="always" name="weather" defaultChecked />
              <label htmlFor="radio-always">always</label>
              <input type="radio" id="radio-good" value="good" name="weather" />
              <label htmlFor="radio-good">good</label>
              <input type="radio" id="radio-bad" value="bad" name="weather" />
              <label htmlFor="radio-bad">bad</label>

              <button type="submit">submit</button>
              <button type="reset">cancel</button>
            </form>
          </Modal>
        </ModalBackground>
      )}
    </>
  );
}
