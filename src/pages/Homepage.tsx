import PizzaGrid from "../components/PizzaGrid/PizzaGrid";
import PizzaTypeMenu from "../components/PizzaTypeMenu/PizzaTypeMenu";

const Homepage: React.FC = () => {
  return (
    <>
      <PizzaTypeMenu />
      <PizzaGrid />
    </>
  );
};

export default Homepage;
