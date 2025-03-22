import styles from './HappeningList.module.scss';

const HappeningList = () => {
  return (
    <div className={styles.HappeningList}>
      <div className={styles.Happening}>
        <img
          src="/happenings/remix-lorenzos-music.jpg"
          alt="Remix Lorenzo’s Music!"
        />
        <div className={`${styles.Information}`}>
          <div>
            <h3>Remix Lorenzo’s Music!</h3>
            <p>
              Submit your remix by June 11th for a chance to be featured on a
              special blocSonic Netlabel Day release.
            </p>
            <p>
              <a href="https://lorenzosmusic.blocsonic.com/">
                Learn more about the remix event
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.Happening}>
        <img
          src="/happenings/blocsonic-bscomp0056.jpg"
          alt="Cover of blocSonic release netBloc Vol. 56: Keep Unknown"
        />
        <div className={styles.Information}>
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
      <div className={styles.Happening}>
        <img
          src="/happenings/netlabel-archive-happening.svg"
          alt="Netlabel Archive logo"
        />
        <div className={styles.Information}>
          <h3>Netlabel Archive</h3>
          <p>
            Recently archived: Kellerloch, Adapter, 4four, and TuneIn Records
          </p>
          <p>
            <a href="https://netlabelarchive.org/">
              Visit Netlabel Archive to discover
            </a>
          </p>
        </div>
      </div>

      {/* <div className={styles.Happening}>
        <div className={`${styles.Information} ${styles.AboutInformation}`}>
          <div>
            <h3>Have something we should include in this space?</h3>
            <p>
              If you run one of the resources included on our resource list and
              you have something going on, give us details and we can add it!
            </p>
            <p>
              <a
                href="https://blocsonic.com/contact"
                className={styles.AboutBtn}
              >
                Let us know about your happening!
              </a>
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HappeningList;
