import ContactForm from "./ContactForm";
import ContactHead from "./ContactHead";

const ContactPage = () => {
  return (
    <>
      <section className="container py-[60px] text-center">
        <ContactHead />
        <ContactForm />
        {/* <Map /> */}
      </section>
      {/* <Map /> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7070.229338836803!2d32.29953331020856!3d31.266159280867246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f99c3e939e6b99%3A0x4cae04550f7d4cb3!2z2KjZiNixINiz2LnZitiv2Iwg2KjZiNixINmB2KTYp9iv2Iwg2YXYrdin2YHYuNipINio2YjYsdiz2LnZitiv!5e0!3m2!1sar!2seg!4v1734674105653!5m2!1sar!2seg"
        width="100%"
        height="450"
        style={{ border: 0, filter: "grayscale(100%) invert(100%)" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </>
  );
};

export default ContactPage;
