import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface TestimonialFormValues {
  name: string;
  review: string;
}

const WriteTestimonial: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TestimonialFormValues>();

  const onSubmit: SubmitHandler<TestimonialFormValues> = async (data) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Testimonial submitted:', data);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      {error && <p role="alert" aria-live="assertive" className="text-red-500 mb-4">{error}</p>}
      
      <div className="mb-4">
        <label htmlFor="name" className={twMerge("block text-sm font-medium leading-6 text-gray-900", errors.name ? "text-red-500" : "")}>Name</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'This field is required.', minLength: 2 })}
          className={twMerge("block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm", errors.name ? "border-red-500" : "")}
        />
        {errors.name && <p role="alert" className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="review" className={twMerge("block text-sm font-medium leading-6 text-gray-900", errors.review ? "text-red-500" : "")}>Review</label>
        <textarea
          id="review"
          rows={3}
          {...register('review', { required: 'This field is required.', minLength: 10 })}
          className={twMerge("block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm", errors.review ? "border-red-500" : "")}
        />
        {errors.review && <p role="alert" className="mt-2 text-sm text-red-600">{errors.review.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className={twMerge("inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", loading ? "cursor-not-allowed opacity-50" : "")}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default WriteTestimonial;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface TestimonialFormValues {
  name: string;
  review: string;
}

const WriteTestimonial: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TestimonialFormValues>();

  const onSubmit: SubmitHandler<TestimonialFormValues> = async (data) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Testimonial submitted:', data);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      {error && <p role="alert" aria-live="assertive" className="text-red-500 mb-4">{error}</p>}
      
      <div className="mb-4">
        <label htmlFor="name" className={twMerge("block text-sm font-medium leading-6 text-gray-900", errors.name ? "text-red-500" : "")}>Name</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'This field is required.', minLength: 2 })}
          className={twMerge("block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm", errors.name ? "border-red-500" : "")}
        />
        {errors.name && <p role="alert" className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="review" className={twMerge("block text-sm font-medium leading-6 text-gray-900", errors.review ? "text-red-500" : "")}>Review</label>
        <textarea
          id="review"
          rows={3}
          {...register('review', { required: 'This field is required.', minLength: 10 })}
          className={twMerge("block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm", errors.review ? "border-red-500" : "")}
        />
        {errors.review && <p role="alert" className="mt-2 text-sm text-red-600">{errors.review.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className={twMerge("inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", loading ? "cursor-not-allowed opacity-50" : "")}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default WriteTestimonial;