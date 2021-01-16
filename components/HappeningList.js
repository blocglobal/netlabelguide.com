import './HappeningList.scss';

const HappeningList = () => {
  return (
    <div className="HappeningList">
      <div className="happening">
        <img
          src="/happenings/blocsonic-bscomp0054.jpg"
          alt="Cover of blocSonic release netBloc Vol. 54: Goodbye 2020"
        />
        <div className="information">
          <h3>blocSonic netBloc Series</h3>
          <p>
            The 54th volume of the #ccmusic compilation series is available now!
          </p>
          <p>
            <a href="https://blocsonic.com/releases/various-artists/netbloc-vol-54-goodbye-2020">
              Visit blocSonic.com to download it!
            </a>
          </p>
        </div>
      </div>
      <div className="happening">
        <img
          src="/happenings/netlabel-archive-happening.svg"
          alt="Netlabel Archive logo"
        />
        <div class="information">
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
