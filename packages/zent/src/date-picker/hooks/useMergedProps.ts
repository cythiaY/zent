import * as React from 'react';
import { parseDate } from '../utils/index';
import { SingleDate } from '../types';
const current = new Date();
/**
 * merge from props
 * used by SinglePicker
 * @param value {SingleDate}
 * @param format {string}
 */
export default function useMergedProps({
  value,
  format,
  defaultDate,
}: {
  value: SingleDate;
  format: string;
  defaultDate: SingleDate;
}) {
  // defaultPanelDate
  const [defaultPanelDate, setDefaultPanelDate] = React.useState<Date>(current);

  // 转换成Date类型value日期，用于重置select
  const parseValue = React.useMemo(
    () => (value ? parseDate(value, format) : null),
    [value, format]
  );
  // selected
  const [selected, setSelected] = React.useState<Date>(parseValue);
  React.useEffect(() => {
    setSelected(parseValue);
  }, [parseValue]);

  // defaultPanelDate
  React.useEffect(() => {
    setDefaultPanelDate(
      selected
        ? parseDate(selected, format)
        : defaultDate
        ? parseDate(defaultDate, format)
        : current
    );
  }, [defaultDate, selected, value, format]);

  return {
    selected,
    parseValue,
    setSelected,
    defaultPanelDate,
  };
}
