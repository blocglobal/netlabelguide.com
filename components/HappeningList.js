const HappeningList = () => {
  return (
    <div className="HappeningList">
      <div className="happening">
        <img
          src="/happenings/blocsonic-bscomp0056.jpg"
          alt="Cover of blocSonic release netBloc Vol. 56: Keep Unknown"
        />
        <div className="information">
          <h3>blocSonic netBloc Series</h3>
          <p>
            Volume 56 of the long-running #ccmusic compilation series is out
            now!
          </p>
          <p>
            <a href="https://blocsonic.com/releases/various-artists/netbloc-vol-56-keep-unknown">
              Grab the free download
            </a>
          </p>
        </div>
      </div>
      <div className="happening">
        <img
          src="/happenings/netlabel-archive-happening.svg"
          alt="Netlabel Archive logo"
        />
        <div className="information">
          <h3>Netlabel Archive</h3>
          <p>Currently working on adding artist profiles…</p>
          <p>
            <a href="https://netlabelarchive.org/">
              Visit Netlabel Archive to discover
            </a>
          </p>
        </div>
      </div>
      <div className="happening about">
        <div className="information">
          <div>
            <h3>Have something we should include in this space?</h3>
            <p>
              If you run one of the resources included on our resource list and
              you have something going on, give us details and we can add it!
            </p>
            <p>
              <a href="https://blocsonic.com/contact" className="btn">
                Let us know about your happening!
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappeningList;
