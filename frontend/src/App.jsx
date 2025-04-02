const App = () => {
  const whatsappNumber = "+917218389132";
  const message = encodeURIComponent("Hello World!!!");

  return (
    <a href={`https://wa.me/${whatsappNumber}?text=${message}`} target="_blank" rel="noopener noreferrer">
      Send WhatsApp Message
    </a>
  );
};
export default App;
