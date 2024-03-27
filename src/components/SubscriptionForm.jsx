"use client";

const SubscriptionForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="mb-5" onSubmit={handleSubmit}>
      <input
        type="text"
        className="p-3 mt-10 border border-black focus:outline-none w-full"
        placeholder="Enter your email"
      />
      <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-2 mt-2 text-white">
        See what we're doing
      </button>
    </form>
  );
};

export default SubscriptionForm;
