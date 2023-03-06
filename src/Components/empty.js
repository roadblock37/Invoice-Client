import { ReactComponent as EmptyImg } from "../assets/illustration-empty.svg";
const Empty = () => {
  return (
    <section className="empty-container">
      <EmptyImg />
      <h1>There is nothing here</h1>
      <p>Create an invoice by clicking the </p>
      <p>New button and get started</p>
    </section>
  );
};

export default Empty;
