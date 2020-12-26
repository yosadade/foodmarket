import React from 'react';
import {Text} from 'react-native';
import NumberFormat from 'react-number-format';

const Numbers = ({number, type, style}) => {
  if (type === 'decimal') {
    return (
      <NumberFormat
        value={number}
        displayType="text"
        renderText={(value) => <Text style={style}>{value}</Text>}
        decimalSeparator="."
        decimalScale={1}
        fixedDecimalScale
        // style={styles.subTitle}
      />
    );
  }
  return (
    <NumberFormat
      value={number}
      thousandSeparator="."
      decimalSeparator=","
      displayType="text"
      prefix="IDR "
      renderText={(value) => <Text style={style}>{value}</Text>}
      // style={styles.subTitle}
    />
  );
};

export default Numbers;
