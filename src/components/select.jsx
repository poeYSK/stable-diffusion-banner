import styled from "styled-components";

export const SelectStyle = styled.select`
  &:focus {
    border-color: red;
  }
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const IconSVG = styled.svg`
  margin-left: -28px;
  align-self: center;
  width: 24px;
  height: 24px;
`;

export const Select = () => {
  return (
    <SelectStyle id="form-select">
      <option key="test1" value="test1">
        test1
      </option>
      <option key="test2" value="test2">
        test2
      </option>
      <IconSVG
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 14L16 6H4L10 14Z"
          fill="#1A1A1A"
        />
      </IconSVG>
    </SelectStyle>
  );
};
