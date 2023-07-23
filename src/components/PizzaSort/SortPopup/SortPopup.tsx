import { styled } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { setActiveSortType } from "../../../redux/slices/pizzaSlice";

type SortPopupProps = {
  sortTypes: {
    name: string;
    id: number;
  }[];
  setOpenSortPopup: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface StyledSortListItemProps {
  active: boolean;
}

const StyledSortPopup = styled.div`
  position: absolute;
  right: 0;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
  background-color: #fff;
  width: 160px;
`;

const StyledSortList = styled.div`
  overflow: hidden;
  width: 100%;
`;

const StyledSortListItem = styled.div<StyledSortListItemProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  &:hover {
    background: rgba(254, 95, 30, 0.05);
    color: #fe731e;
    cursor: pointer;
  }

  ${(props) =>
    props.active &&
    `
        background: rgba(254,95,30,0.05);
        font-weight: 700;
        color: #fe5f1e;
    `}
`;

const SortPopup: React.FC<SortPopupProps> = ({
  sortTypes,
  setOpenSortPopup,
}) => {
  const dispatch = useAppDispatch();
  const activeSortType = useAppSelector(
    (state) => state.pizzaSlice.activeSortType
  );

  return (
    <StyledSortPopup>
      <StyledSortList>
        {sortTypes.map((sortType, index) => (
          <StyledSortListItem
            onClick={() => {
              dispatch(setActiveSortType(sortType));
              setOpenSortPopup(false);
            }}
            active={index === activeSortType.id}
            key={sortType.id}
          >
            {sortType.name}
          </StyledSortListItem>
        ))}
      </StyledSortList>
    </StyledSortPopup>
  );
};

export default SortPopup;
