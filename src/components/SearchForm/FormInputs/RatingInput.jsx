const RatingInput = ({ onChange, name }) => {
  return (
    <div>
      <select className="rounded border" name={name} onChange={onChange} id="">
        <option value="">All</option>
        <option value="">0 - 49</option>
        <option value="">50 - 69</option>
        <option value="">70 - 100</option>
      </select>
    </div>
  );
};

export default RatingInput;
