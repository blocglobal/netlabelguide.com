import './HappeningList.scss';

const HappeningList = () => {
  return (
    <div className="HappeningList">
      <div className="happening">
        <img
          src="/happenings/blocsonic-bscomp0053.jpg"
          alt="Cover of forthcoming blocSonic release netBloc Vol. 53: Bang, Plunk, Squelch &amp; Thump"
        />
        <div class="information">
          <h3>blocSonic netBloc Series</h3>
          <p>
            The 53rd volume of the #ccmusic compilation series is set to drop on
            September 26th!
          </p>
          <p>
            <a href="https://blocsonic.com/releases/type/netblocs">
              Visit blocSonic.com for netBlocs
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
          <p>
            Currently working on archiving the following inactive netlabels:
            Wasamix, Laminim &amp; more…
          </p>
          <p>
            <a href="https://netlabelarchive.org/">
              Visit Netlabel Archive to discover
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HappeningList;
