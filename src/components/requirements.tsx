import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface EcommerceRequirements {
  businessName: string;
  contactEmail: string;
  productCount: number;
  targetAudience: string;
  paymentMethods: string[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<EcommerceRequirements>();
  const router = useRouter();

  const onSubmit = (data: EcommerceRequirements) => {
    setLoading(true);
    setTimeout(() => {
      // Simulate API call
      console.log(data);
      setLoading(false);
      router.push('/confirmation');
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Gather Requirements Form">
      <div className="mb-4">
        <label htmlFor="businessName" className="block text-gray-700">Business Name</label>
        <input
          type="text"
          id="businessName"
          {...register('businessName', { required: 'Business name is required' })}
          aria-invalid={errors.businessName ? true : false}
          aria-describedby={errors.businessName ? 'businessName-error' : undefined}
          className={`form-input ${errors.businessName ? 'border-red-500' : ''}`}
        />
        <p id="businessName-error" className="mt-2 text-sm text-red-600">{errors.businessName?.message}</p>
      </div>

      <div className="mb-4">
        <label htmlFor="contactEmail" className="block text-gray-700">Contact Email</label>
        <input
          type="email"
          id="contactEmail"
          {...register('contactEmail', { required: 'Email is required' })}
          aria-invalid={errors.contactEmail ? true : false}
          aria-describedby={errors.contactEmail ? 'contactEmail-error' : undefined}
          className={`form-input ${errors.contactEmail ? 'border-red-500' : ''}`}
        />
        <p id="contactEmail-error" className="mt-2 text-sm text-red-600">{errors.contactEmail?.message}</p>
      </div>

      <div className="mb-4">
        <label htmlFor="productCount" className="block text-gray-700">Product Count</label>
        <input
          type="number"
          id="productCount"
          {...register('productCount', { required: 'Product count is required' })}
          aria-invalid={errors.productCount ? true : false}
          aria-describedby={errors.productCount ? 'productCount-error' : undefined}
          className={`form-input ${errors.productCount ? 'border-red-500' : ''}`}
        />
        <p id="productCount-error" className="mt-2 text-sm text-red-600">{errors.productCount?.message}</p>
      </div>

      <div className="mb-4">
        <label htmlFor="targetAudience" className="block text-gray-700">Target Audience</label>
        <input
          type="text"
          id="targetAudience"
          {...register('targetAudience', { required: 'Target audience is required' })}
          aria-invalid={errors.targetAudience ? true : false}
          aria-describedby={errors.targetAudience ? 'targetAudience-error' : undefined}
          className={`form-input ${errors.targetAudience ? 'border-red-500' : ''}`}
        />
        <p id="targetAudience-error" className="mt-2 text-sm text-red-600">{errors.targetAudience?.message}</p>
      </div>

      <div className="mb-4">
        <label htmlFor="paymentMethods" className="block text-gray-700">Payment Methods</label>
        <input
          type="text"
          id="paymentMethods"
          placeholder="e.g. Credit Card, PayPal"
          {...register('paymentMethods', { required: 'At least one payment method is required' })}
          aria-invalid={errors.paymentMethods ? true : false}
          aria-describedby={errors.paymentMethods ? 'paymentMethods-error' : undefined}
          className={`form-input ${errors.paymentMethods ? 'border-red-500' : ''}`}
        />
        <p id="paymentMethods-error" className="mt-2 text-sm text-red-600">{errors.paymentMethods?.message}</p>
      </div>

      <button type="submit" disabled={loading} aria-label="Submit Requirements">
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface EcommerceRequirements {
  businessName: string;
  contactEmail: string;
  productCount: number;
  targetAudience: string;
  paymentMethods: string[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<EcommerceRequirements>();
  const router = useRouter();

  const onSubmit = (data: EcommerceRequirements) => {
    setLoading(true);
    setTimeout(() => {
      // Simulate API call
      console.log(data);
      setLoading(false);
      router.push('/confirmation');
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Gather Requirements Form">
      <div className="mb-4">
        <label htmlFor="businessName" className="block text-gray-700">Business Name</label>
        <input
          type="text"
          id="businessName"
          {...register('businessName', { required: 'Business name is required' })}
          aria-invalid={errors.businessName ? true : false}
          aria-describedby={errors.businessName ? 'businessName-error' : undefined}
          className={`form-input ${errors.businessName ? 'border-red-500' : ''}`}
        />
        <p id="businessName-error" className="mt-2 text-sm text-red-600">{errors.businessName?.message}</p>
      </div>

      <div className="mb-4">
        <label htmlFor="contactEmail" className="block text-gray-700">Contact Email</label>
        <input
          type="email"
          id="contactEmail"
          {...register('contactEmail', { required: 'Email is required' })}
          aria-invalid={errors.contactEmail ? true : false}
          aria-describedby={errors.contactEmail ? 'contactEmail-error' : undefined}
          className={`form-input ${errors.contactEmail ? 'border-red-500' : ''}`}
        />
        <p id="contactEmail-error" className="mt-2 text-sm text-red-600">{errors.contactEmail?.message}</p>
      </div>

      <div className="mb-4">
        <label htmlFor="productCount" className="block text-gray-700">Product Count</label>
        <input
          type="number"
          id="productCount"
          {...register('productCount', { required: 'Product count is required' })}
          aria-invalid={errors.productCount ? true : false}
          aria-describedby={errors.productCount ? 'productCount-error' : undefined}
          className={`form-input ${errors.productCount ? 'border-red-500' : ''}`}
        />
        <p id="productCount-error" className="mt-2 text-sm text-red-600">{errors.productCount?.message}</p>
      </div>

      <div className="mb-4">
        <label htmlFor="targetAudience" className="block text-gray-700">Target Audience</label>
        <input
          type="text"
          id="targetAudience"
          {...register('targetAudience', { required: 'Target audience is required' })}
          aria-invalid={errors.targetAudience ? true : false}
          aria-describedby={errors.targetAudience ? 'targetAudience-error' : undefined}
          className={`form-input ${errors.targetAudience ? 'border-red-500' : ''}`}
        />
        <p id="targetAudience-error" className="mt-2 text-sm text-red-600">{errors.targetAudience?.message}</p>
      </div>

      <div className="mb-4">
        <label htmlFor="paymentMethods" className="block text-gray-700">Payment Methods</label>
        <input
          type="text"
          id="paymentMethods"
          placeholder="e.g. Credit Card, PayPal"
          {...register('paymentMethods', { required: 'At least one payment method is required' })}
          aria-invalid={errors.paymentMethods ? true : false}
          aria-describedby={errors.paymentMethods ? 'paymentMethods-error' : undefined}
          className={`form-input ${errors.paymentMethods ? 'border-red-500' : ''}`}
        />
        <p id="paymentMethods-error" className="mt-2 text-sm text-red-600">{errors.paymentMethods?.message}</p>
      </div>

      <button type="submit" disabled={loading} aria-label="Submit Requirements">
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;