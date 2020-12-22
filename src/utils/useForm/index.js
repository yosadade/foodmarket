import {useState} from 'react';

const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue);
  // value dan function untuk merubah value
  return [
    form,
    // type from, value form
    (formType, formValue) => {
      if (formType === 'reset') {
        return setForm(initialValue);
      }
      return setForm({...form, [formType]: formValue});
    },
  ];
};

export default useForm;
