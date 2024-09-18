import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
// import ElevatePesaApp from "../assets/elevate-pesa/elevate-pesa-app-photo.jpg";
import PesaFront from "../assets/elevate-pesa/pesa-front.jpg";
import PesaOrders from "../assets/elevate-pesa/pesa-order.jpg";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      {/* <img
        src={ElevatePesaApp}
        alt="elevate-pesa"
        className="w-[100%] h-[100%] relative z-[5]"
      /> */}

      <div
        style={{
          height: "400px",
          width: "100%",
          overflow: "hidden",
          position: "relative"
        }}
      >
        <img
          src={PesaFront}
          alt="elevate-pesa"
          style={{
            // width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0
          }}
        />
      </div>

      <div
        style={{
          height: "400px",
          width: "100%",
          overflow: "hidden",
          position: "relative"
        }}
      >
        <img
          src={PesaOrders}
          alt="elevate-pesa"
          style={{
            // width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0
          }}
        />
      </div>

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Download Our App for Seamless Service</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Manage your gas, water, and package deliveries effortlessly with our
        app. Available on both Apple and Google Play, it lets you order, track,
        and manage your deliveries with ease. Download now and experience
        hassle-free service!
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <a
          // href="https://apps.apple.com"
          href="/pesa_app/elevate_pesa_prod.apk"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <img
            src={apple}
            alt="apple_store"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
        </a>
        <a
          // href="https://play.google.com"
          href="/pesa_app/elevate_pesa_prod.apk"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <img
            src={google}
            alt="play_store"
            className="w-[128px] h-[42px] object-contain cursor-pointer"
          />
        </a>
      </div>
    </div>
  </section>
);

export default Billing;
