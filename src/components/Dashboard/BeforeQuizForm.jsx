import Button from '../UI/Button';
import Input from '../UI/Input';

const BeforeQuizForm = () => {
  return (
    <form>
      <Input type="text" mb="3rem" width="40rem" placeholder="Choose Subject" />
      <Input
        type="text"
        mb="3rem"
        width="40rem"
        placeholder="No. of questions"
      />
      <Input type="text" mb="3rem" width="40rem" placeholder="Time required" />

      <Button type="button">Start</Button>
    </form>
  );
};

export default BeforeQuizForm;
