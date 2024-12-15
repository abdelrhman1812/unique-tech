import ContactForm from "./ContactForm";
import ContactHead from "./ContactHead";

const ContactPage = () => {
  return (
    <section className="container py-[60px] text-center">
      <ContactHead />
      <ContactForm />
    </section>
  );
};

export default ContactPage;
