import * as React from 'react';
import { I18nReceiver as Receiver, II18nLocaleTimePicker } from '../i18n';
import TimePickerBase from './components/TimePickerBase';
import TimePickerPanel from './panels/time-panel';
import { DisabledContext } from '../disabled';
import PickerContext from './context/PickerContext';
import { ITimePickerProps } from './types';

const PickerContextProvider = PickerContext.Provider;
const DefaultTimePickerProps = {
  format: 'HH:mm:ss',
  selectedDate: null,
  hourStep: 1,
  minuteStep: 1,
  secondStep: 1,
  width: 240,
};

export { ITimePickerProps };
export const TimePicker: React.FC<ITimePickerProps> = props => {
  const { placeholder } = props;
  const disabledContext = React.useContext(DisabledContext);

  return (
    <Receiver componentName="TimePicker">
      {(i18n: II18nLocaleTimePicker) => (
        <PickerContextProvider
          value={{
            i18n,
          }}
        >
          <TimePickerBase
            {...props}
            placeholder={placeholder || i18n.time}
            disabled={disabledContext.value}
            ContentComponent={TimePickerPanel}
          />
        </PickerContextProvider>
      )}
    </Receiver>
  );
};
TimePicker.defaultProps = DefaultTimePickerProps;
export default TimePicker;
