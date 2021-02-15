function NewsLetter() {
  return (
    <>
      <div className="col-md-12">
        <h2>Newsletter</h2>
      </div>
      <div className="col-md-10 offset-md-1">
        <form className="news">
          <input
            className="newslatter"
            placeholder="Enter Your Email"
            type="text"
            name="Enter Your Email"
          />
          <button className="submit">Subscribe</button>
        </form>
      </div>
    </>
  );
}

export default NewsLetter;