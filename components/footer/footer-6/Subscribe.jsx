const Subscribe = () => {
  return (
    <form className="single-field relative d-flex justify-end items-center mb-30">
      <input name="" id="" 
        className="bg-white rounded-8"
        type="email"
        placeholder="Your Email"
        required
      />
      <button  aria-label="Close"
        type="submit"
        className="absolute px-20 h-full text-15 fw-500 underline  button bg-blue-1 text-white"
      >
        Subscribe
      </button>
    </form>
  );
};

export default Subscribe;
