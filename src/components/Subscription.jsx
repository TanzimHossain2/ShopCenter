import SubscriptionForm from "./SubscriptionForm";

const Subscription = () => {
  return (
    <>
      <section className="bg-[#ced3ca] py-5 lg:py-16">
        <div className="w-10/12 lg:w-4/12 mx-auto">
          <h1 className="italic text-xl lg:text-3xl font-serif my-5 text-center">
            Get the inside scoop
          </h1>
          <p className="text-center text-sm lg:text-base">
            Sign up for new product drops, behind-the-scenes content, and
            monthly "5 Things I'm Digging" emails
          </p>
          <SubscriptionForm />
        </div>
      </section>
    </>
  );
};

export default Subscription;
