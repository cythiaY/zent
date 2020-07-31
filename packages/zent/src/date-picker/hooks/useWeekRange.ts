import * as React from 'react';
import { IGenerateDateConfig, IWeekOption, DateArray } from '../types';
/**
 * 获取某天对应的一周的日期范围
 * @param date
 */
export default function useWeekRange(
  dateConfig?: IGenerateDateConfig,
  date?: Date | null,
  options?: IWeekOption
) {
  const [rangeDate, setRangeDate] = React.useState<DateArray | null>();

  React.useEffect(() => {
    const { startDate, endDate } = dateConfig || {};
    const range = date
      ? ([startDate?.(date, options), endDate?.(date, options)] as DateArray)
      : null;
    setRangeDate(range);
  }, [date, dateConfig, options]);

  return rangeDate as DateArray;
}
