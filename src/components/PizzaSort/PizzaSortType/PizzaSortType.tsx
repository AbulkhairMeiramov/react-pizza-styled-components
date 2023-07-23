import { styled } from "styled-components";
import { useState } from "react";
import SortPopup from "../SortPopup/SortPopup";
import { useAppSelector } from "../../../hooks/reduxHooks";

type PizzaSortTypeProps = {
  sortTypes: {
    name: string;
    id: number;
  }[];
};

const StyledPizzaSortType = styled.span`
  color: #fe5f1e;
  border-bottom: 1px dashed #fe5f1e;
  cursor: pointer;
`;

const StyledTitleForSort = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

const PizzaSortType: React.FC<PizzaSortTypeProps> = ({ sortTypes }) => {
  const [openSortPopup, setOpenSortPopup] = useState(false);
  const activeSortType = useAppSelector(
    (state) => state.pizzaSlice.activeSortType
  );

  return (
    <>
      <StyledTitleForSort>Сортировка по: </StyledTitleForSort>
      <StyledPizzaSortType onClick={() => setOpenSortPopup((prev) => !prev)}>
        {activeSortType.name}
      </StyledPizzaSortType>
      {openSortPopup && (
        <SortPopup sortTypes={sortTypes} setOpenSortPopup={setOpenSortPopup} />
      )}
    </>
  );
};

export default PizzaSortType;
