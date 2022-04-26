const PhonebookForm = ({
  name,
  phone,
  handleName,
  handlePhone,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name
        <br />
        <input onChange={handleName} value={name} />
      </div>
      <div>
        Phone
        <br />
        <input onChange={handlePhone} value={phone} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default PhonebookForm;
