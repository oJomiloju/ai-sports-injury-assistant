"use client";
import { Dialog } from "@headlessui/react";

export default function RecoveryPlanModal({ isOpen, onClose, plan, onSave }) {
  if (!plan) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
    {/* Backdrop */}
    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
  
    {/* Modal Content */}
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <Dialog.Panel className="bg-white rounded-lg p-6 max-w-2xl w-full shadow-lg overflow-y-auto max-h-[90vh]">
        <Dialog.Title className="text-xl font-bold mb-4">Recovery Plan Preview</Dialog.Title>
  
        {/* Content sections */}
        <section className="mb-4">
          <h3 className="font-semibold text-lg">Exercises</h3>
          <ul className="list-disc pl-6 text-sm text-gray-700 mt-1">
            {plan.exercises.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </section>
  
        <section className="mb-4">
          <h3 className="font-semibold text-lg">Tips</h3>
          <ul className="list-disc pl-6 text-sm text-gray-700 mt-1">
            {plan.tips.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </section>
  
        <section className="mb-4">
          <h3 className="font-semibold text-lg">Diet</h3>
          <ul className="list-disc pl-6 text-sm text-gray-700 mt-1">
            {plan.diet.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </section>
  
        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-sm">Cancel</button>
          <button onClick={onSave} className="px-4 py-2 rounded bg-black text-white hover:bg-gray-800 text-sm">Save Plan</button>
        </div>
      </Dialog.Panel>
    </div>
  </Dialog>
  
  );
}
