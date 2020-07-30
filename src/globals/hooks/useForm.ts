import { useState } from 'react';

const useForm = <T>(initialState: T, onSubmit: () => void) => {
  const [values, setValues] = useState<T>(initialState);

  const handleSubmit = (event: React.FormEvent) => {
    if (event) {
      event.preventDefault();
    }

    onSubmit();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues(state => ({ ...state, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
