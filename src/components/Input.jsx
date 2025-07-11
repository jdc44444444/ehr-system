import React from 'react';

export function Input({ label, error, ...props }) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-4 py-2 border rounded-lg
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
          ${error ? 'border-red-500' : 'border-gray-300'}
        `}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}

export function Select({ label, error, children, ...props }) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <select
        className={`
          w-full px-4 py-2 border rounded-lg bg-white
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
          ${error ? 'border-red-500' : 'border-gray-300'}
        `}
        {...props}
      >
        {children}
      </select>
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}

export function Textarea({ label, error, ...props }) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <textarea
        className={`
          w-full px-4 py-2 border rounded-lg
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
          ${error ? 'border-red-500' : 'border-gray-300'}
        `}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
