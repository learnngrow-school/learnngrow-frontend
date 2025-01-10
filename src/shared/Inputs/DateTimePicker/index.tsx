
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

interface IProps {
    register: any
}

const LngDateTimePicker = ({register}:IProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker label="Basic date time picker" 
        value={register.value}
        onChange={(value) => register({value})}
        {...register}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default LngDateTimePicker;
