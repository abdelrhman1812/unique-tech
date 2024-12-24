import ContactForm from "./ContactForm";
import ContactHead from "./ContactHead";

const ContactPage = () => {
  return (
    <>
      <section className="container pt-[60px] text-center">
        <ContactHead />
        <ContactForm />
      </section>
      {/* <Map /> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3418.752604239317!2d31.363923684861255!3d31.03314168153338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDAxJzU5LjMiTiAzMcKwMjEnNDIuMyJF!5e0!3m2!1sar!2seg!4v1735074542215!5m2!1sar!2seg"
        width="100%"
        height="450"
        style={{ border: 0, filter: "grayscale(100%) invert(100%)" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
      ;
    </>
  );
};

export default ContactPage;
