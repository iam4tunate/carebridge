/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { FormFieldType } from '@/lib/utils';
import { Control } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Calendar } from 'lucide-react';
import { Select, SelectContent, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

interface CustomProps {
  optional?: boolean;
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  subLabel?: string;
  placeholder?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode; //Loading state
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  const {
    disabled,
    fieldType,
    placeholder,
    showTimeSelect,
    dateFormat,
    renderSkeleton,
  } = props;
  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <FormControl>
          <Input
            placeholder={placeholder}
            {...field}
            className='focus:border-primary py-5'
          />
        </FormControl>
      );
    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={placeholder}
            {...field}
            disabled={disabled}
            className='border-[1.5px]'
          />
        </FormControl>
      );
    case FormFieldType.DATE_PICKER:
      return (
        <div className='flex items-center rounded-md border bg-white'>
          <Calendar size={20} className='ml-2' />
          <FormControl>
            <DatePicker
              selected={field.value}
              onChange={(date: Date | null) => field.onChange(date)}
              dateFormat={dateFormat ?? 'dd/MM/yyyy'}
              showTimeSelect={showTimeSelect ?? false}
              timeInputLabel='Time:'
              wrapperClassName='date-picker'
              className='outline-none px-2 rounded-sm w-full text-sm font-medium'
            />
          </FormControl>
        </div>
      );
    case FormFieldType.SELECT:
      return (
        <FormControl>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            value={field.value}>
            <FormControl>
              <SelectTrigger className='shad-select-trigger'>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className='shad-select-content'>
              {props.children}
            </SelectContent>
          </Select>
        </FormControl>
      );
    case FormFieldType.SKELETON:
      return renderSkeleton ? renderSkeleton(field) : null;
    case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div className='flex items-center gap-4'>
            <Checkbox
              id={props.name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            <Label htmlFor={props.name} className='checkbox-label'>
              {props.label}
            </Label>
          </div>
        </FormControl>
      );
    default:
      break;
  }
};

export default function CustomFormField(props: CustomProps) {
  const { control, fieldType, name, label, subLabel } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex-1 flex flex-col justify-start items-start'>
          {/* if it's no a checkbox and a label prop exist  */}
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel className='flex items-center gap-x-1.5'>
              {label}
              <span className='opacity-90 text-xs'>{subLabel && subLabel}</span>
            </FormLabel>
          )}

          <RenderField field={field} props={props} />

          <FormMessage className='shad-error' />
        </FormItem>
      )}
    />
  );
}
