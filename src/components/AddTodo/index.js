import Svg from "../Svg";
import Button from "../Button";
import { ModalBackground, Modal, Form, Input, ButtonGroup } from "./AddTodo.styled.js";
import { useState } from "react";

export default function AddTodo({ addTodo }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    addTodo(data);

    setTimeout(() => setIsOpen((isOpen) => !isOpen), 500);
  }

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
            <Form onSubmit={handleSubmit} onReset={() => setIsOpen((isOpen) => !isOpen)}>
              <label htmlFor="input-todo">Your new ToDo</label>
              <Input type="text" id="input-todo" name="title" maxLength={20} required></Input>
              <input type="radio" id="radio-always" value="always" name="weather" defaultChecked />
              <label htmlFor="radio-always">always</label>
              <input type="radio" id="radio-good" value="good" name="weather" />
              <label htmlFor="radio-good">good</label>
              <input type="radio" id="radio-bad" value="bad" name="weather" />
              <label htmlFor="radio-bad">bad</label>
              <ButtonGroup>
                <Button type="submit">submit</Button>
                <Button type="reset">cancel</Button>
              </ButtonGroup>
            </Form>
          </Modal>
        </ModalBackground>
      )}
    </>
  );
}
