//REACT
import React from 'react'
//REACT_NUMBER-FORMAT
import NumberFormat from 'react-number-format';

interface NumberFormatCustomProps {
  inputRef: (instance: NumberFormat | null) => void,
  onChange: (event: { target: { value: string } }) => void,
  prefix: string,
  decimalScale: number,
  thousandSeparator: string,
  fixedDecimalScale: boolean,
}

export interface NumberFormatProps {
  prefix: string,
  thousandSeparator: string,
  decimalScale: number,
  fixedDecimalScale: boolean,
}

function NumberFormatCustom(props: NumberFormatCustomProps) {
  const { inputRef, onChange, prefix, decimalScale, thousandSeparator, fixedDecimalScale, ...other } = props;

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
      thousandSeparator={thousandSeparator}
      decimalSeparator=','
      decimalScale={decimalScale}
      fixedDecimalScale={true}
      isNumericString={true}
      prefix={prefix}
    />
  );
}

export default NumberFormatCustom