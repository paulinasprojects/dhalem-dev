import { FieldError, UseFormRegister, FieldValues, Path } from 'react-hook-form';

interface TextAreaProps<T extends FieldValues> {
  placeholder?: string;
  register: UseFormRegister<T>;
  name: Path<T>;
  defaultValue?: string;
  error?: FieldError;
  textareaProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  className?: string;
}

const TextArea = <T extends FieldValues> ({ placeholder, register, name, defaultValue, error, textareaProps, className  }: TextAreaProps<T>) => {
  return (
    <>
      <textarea
        className={className}
        placeholder={placeholder}
        {...register(name)}
        {...textareaProps}
        defaultValue={defaultValue}
      />
      {error?.message && (
        <p className='error-message'>{error?.message.toString()}</p>
      )}
    </>
  )
}

export default TextArea