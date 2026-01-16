import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormState {
  data: FormData;
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: FormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function useContactForm() {
  const [formState, setFormState] = useState<FormState>({
    data: initialState,
    loading: false,
    success: false,
    error: null,
  });

  const updateField = (field: keyof FormData, value: string) => {
    setFormState((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [field]: value,
      },
      error: null,
    }));
  };

  const validateForm = (): boolean => {
    const { name, email, subject, message } = formState.data;

    if (!name.trim()) {
      setFormState((prev) => ({ ...prev, error: 'Name is required' }));
      return false;
    }

    if (!email.trim()) {
      setFormState((prev) => ({ ...prev, error: 'Email is required' }));
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormState((prev) => ({ ...prev, error: 'Please enter a valid email address' }));
      return false;
    }

    if (!subject.trim()) {
      setFormState((prev) => ({ ...prev, error: 'Subject is required' }));
      return false;
    }

    if (!message.trim()) {
      setFormState((prev) => ({ ...prev, error: 'Message is required' }));
      return false;
    }

    if (message.trim().length < 10) {
      setFormState((prev) => ({ ...prev, error: 'Message must be at least 10 characters' }));
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      // TODO: Replace with actual form submission service
      // Options: EmailJS, Formspree, Netlify Forms, or custom backend API
      
      // For now, simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate success
      // In production, you would:
      // 1. Send data to your backend API or service
      // 2. Handle the response
      // 3. Show success/error messages accordingly

      console.log('Form data:', formState.data);
      
      // Example with EmailJS (uncomment and configure):
      // import emailjs from '@emailjs/browser';
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   formState.data,
      //   'YOUR_PUBLIC_KEY'
      // );

      setFormState({
        data: initialState,
        loading: false,
        success: true,
        error: null,
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormState((prev) => ({ ...prev, success: false }));
      }, 5000);
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        loading: false,
        success: false,
        error: 'Failed to send message. Please try again or contact me directly via email.',
      }));
    }
  };

  const resetForm = () => {
    setFormState({
      data: initialState,
      loading: false,
      success: false,
      error: null,
    });
  };

  return {
    formData: formState.data,
    loading: formState.loading,
    success: formState.success,
    error: formState.error,
    updateField,
    handleSubmit,
    resetForm,
  };
}
