import Form from "../Form/Form";
import { StyledInput } from "../Form/Form.styled";

export default function CollectionForm({ card = {}, onSubmit }) {
  const [collectionName, setCollectionName] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));

    onSubmit(data);

    event.target.reset();
    setShowNewCollection(false);
  }

  return (
    <Form>
      <label>Deckname</label>
      <StyledInput
        name="collection"
        required
        placeholder="Wie soll dein neues Deck heißen?"
        type="text"
        defaultValue={card.collection}
        textLength={collectionName}
      />
    </Form>
  );
}
