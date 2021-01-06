//REACT
import React from 'react'
//REACT_NUMBER-FORMAT
import NumberFormat from 'react-number-format';

interface NumberFormatCustomProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { value: string } }) => void;
  prefix: string;
}

function NumberFormatCustom(props: NumberFormatCustomProps) {
  const { inputRef, onChange, prefix, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator='.'
      decimalSeparator=','
      decimalScale={2}
      fixedDecimalScale={true}
      isNumericString
      prefix={prefix}
    />
  );
}

export default NumberFormatCustom